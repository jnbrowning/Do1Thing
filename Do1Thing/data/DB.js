import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from './Secret';
import { actionTypes, loadUser, editUser } from './Actions';
import { getAuth, signOut, updatePassword } from 'firebase/auth';
import {
  getFirestore,
  onSnapshot,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  Timestamp,
  updateDoc
} from 'firebase/firestore';

let firebaseApp = null;

let userCollection = 'users'
const checklistCollection = 'checklists';

let unsub = null;
let unsubChecklist = null;


const getFBApp = () => {
  if (!firebaseApp) {
    if (getApps() == 0) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      firebaseApp = getApps()[0];
    }
  }
  return firebaseApp;
}

const getDB = () => {
  return getFirestore(getFBApp());
}

const getFBAuth = () => {
  return getAuth(getFBApp());
}

const signOutFB = () => {
  signOut(getAuth());
}

// Subscribe to users collection for auth purposes

const subscribeToUsersCollection = (dispatch) => {
  if (unsub) {
    unsub();
  }
  let unsubFunction = onSnapshot(collection(getDB(), userCollection), qSnap => {
    const auth = getFBAuth();

    let newUser = findActiveUser(qSnap, auth);
    console.log('\n\nusers coll updated:\n\n', newUser);
    if ((newUser.badges === undefined) && (auth.currentUser)) {
      console.log('This user has no badges field defined! Fixing... ')
      saveAndDispatch(editUser({ ...newUser, badges: [] }));
      console.log('Should be fixed now')
    } // For legacy account without badge array, initialize badge array
    dispatch(loadUser(newUser));
  })
  unsub = unsubFunction;
}

const subscribeToChecklistCollection = (dispatch) => {
  if (unsubChecklist) {
    unsubChecklist();
  }
  let unsubFunction = onSnapshot(collection(getDB(), checklistCollection), qSnap => {
    const auth = getFBAuth();

    const checklist = getUserCheckList(qSnap, auth);
    if (checklist.hasOwnProperty('moduleCheckList')) {
      dispatch({ type: actionTypes.TOGGLE_CHECKBOX, payload: { items: checklist.moduleCheckList } })
    }
  })
  unsubChecklist = unsubFunction;
}

// Process users collection snapshot to identify current active user

const findActiveUser = (userQuerySnapshot, authObj) => {
  let newUser = {};
  try {
    userQuerySnapshot.forEach(docSnap => {
      if (authObj.currentUser.uid === docSnap.id) {
        newUser = docSnap.data();
        newUser.uid = docSnap.id;
        // console.log(newUser);
        // console.log('According to processUserQuerySnapshot, current logged in user is ', newUser)
      }
    })
  }
  catch (error) {
    return {};
  }
  return newUser;
}

const getUserCheckList = (userQuerySnapshot, authObj) => {
  let checklist = [];
  try {
    userQuerySnapshot.forEach(docSnap => {
      if (authObj.currentUser.uid === docSnap.id) {
        checklist = docSnap.data();
        console.log("checklist", checklist);
      }
    })
  }
  catch (error) {
    return {};
  }
  return checklist;
}

// There are no ready-to-use solutions to combine Redux and Firebase, so this is a method from SI669. Basically, saveAndDispatch is a hub to complete the CRUD on both the app state management (synchrnous) and cloud Firestore (async) in an orderly fashion.

const saveAndDispatch = (action, dispatch) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return _createUser(action, dispatch);
    case actionTypes.EDIT_USER:
      return _editUser(action, dispatch);
    case actionTypes.TOGGLE_CHECKBOX:
      return _toggleCheckBox(action, dispatch);
      case actionTypes.ADD_BADGE:
      return _addBadge(action, dispatch);
  }
}

const _createUser = async (action, dispatch) => {
  const { user } = action.payload;
  await setDoc(doc(collection(getDB(), userCollection), user.uid), {
    email: user.email,
    badges: [],
    moduleCheckList: moduleCheckList,
  })
}

const moduleCheckList = {
  1: [{ module: 1, id: 1, order: 1, text: 'Find out what kind of disasters can happen where you live and plan what to do in a disaster.', checked: false },
  { module: 1, id: 2, order: 2, text: 'Protect your house from damage in a disaster.', checked: false },
  { module: 1, id: 3, order: 3, text: 'Plan what to do if you have to leave your house in an emergency.', checked: false }]
}

const _editUser = async (action, dispatch) => {
  const { user } = action.payload;
  await setDoc(doc(collection(getDB(), userCollection), user.uid), {
    email: user.email,
    badges: user.badges
  })
}

const _toggleCheckBox = async (action, dispatch) => {
  const id = action.payload.id;
  let items = JSON.parse(JSON.stringify(action.payload.items));
  items.forEach(item => {
    if (item.id === id) {
      item.checked = !item.checked;
    }
  })
  const user = getFBAuth().currentUser;
  const result = await setDoc(doc(collection(getDB(), checklistCollection), user.uid), {
    moduleCheckList: items
  })
}

const _addBadge = async (action, dispatch) => {
  try {
   let userId = getFBAuth().currentUser.uid;
   let user = await getDoc(doc(collection(getDB(), userCollection), userId));
   let badges = user.badges;
   if (badges == undefined) { 
      badges = [];
    }
    badges.push(action.payload.badgeId);
    await updateDoc(doc(collection(getDB(), userCollection), userId), { badges: badges });
  } catch (error) {
    console.log('Error adding badge: ', error);
  }
}

export {
  getFBAuth,
  signOutFB,
  saveAndDispatch,
  subscribeToUsersCollection,
  subscribeToChecklistCollection
};