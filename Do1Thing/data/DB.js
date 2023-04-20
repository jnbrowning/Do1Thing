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
  try {
    await setDoc(doc(collection(getDB(), userCollection), user.uid), {
      email: user.email,
      badges: [0],
    })
  } catch (error) {
    console.log('Error creating user: ', error)
  }
  try {
    await setDoc(doc(collection(getDB(), checklistCollection), user.uid), { moduleCheckList: moduleCheckList });
  } catch (error) {
    console.log('Error creating checklist: ', error)
  }
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
  const moduleNumber = action.payload.module;
  let items = JSON.parse(JSON.stringify(action.payload.items));
  items[moduleNumber].forEach(item => {
    if (item.id === id) {
      item.checked = !item.checked;
    }
  })
  try {
    const user = getFBAuth().currentUser;
    await setDoc(doc(collection(getDB(), checklistCollection), user.uid), {
      moduleCheckList: items
    })
  } catch (error) {
    console.log('Error toggling checkbox: ', error);
  }
}

const _addBadge = async (action, dispatch) => {
  try {
    let userId = getFBAuth().currentUser.uid;
    let user = await getDoc(doc(collection(getDB(), userCollection), userId));
    let badges = user.data().badges;
    if (badges === undefined) {
      badges = []
    }
    //if (action.payload.badgeId in badges) {
      badges.push(action.payload.badgeId);
      await updateDoc(doc(collection(getDB(), userCollection), userId), { badges: badges });
    //}
  } catch (error) {
    console.log('Error adding badge: ', error);
  }
}

const moduleCheckList = {
  1: [
    { module: 1, id: 1, order: 1, text: 'Find out what kind of disasters can happen where you live and plan what to do in a disaster.', checked: false },
    { module: 1, id: 2, order: 2, text: 'Protect your house from damage in a disaster.', checked: false },
    { module: 1, id: 3, order: 3, text: 'Plan what to do if you have to leave your house in an emergency.', checked: false }
  ],

  2: [
    { module: 2, id: 4, order: 1, text: 'Buy 3 days of water at the store.', checked: false },
    { module: 2, id: 5, order: 2, text: 'Bottle a 3 day supply of water at home.', checked: false },
    { module: 2, id: 6, order: 3, text: 'Learn how to provide a safe supply of drinking water for your household in a disaster.', checked: false }
  ],

  3: [
    { module: 3, id: 7, order: 1, text: 'Find the best place in your home to stay safe from storms. Practice getting there with your family.', checked: false },
    { module: 3, id: 8, order: 2, text: 'Learn how to “shelter in place.”', checked: false },
    { module: 3, id: 9, order: 3, text: 'Learn what items you may need to bring to a shelter.', checked: false }
  ],

  4: [
    { module: 4, id: 10, order: 1, text: 'Store three days of food for your family in case of disaster.', checked: false },
    { module: 4, id: 11, order: 2, text: 'Make sure your food will be safe to eat if the power goes out.', checked: false },
    { module: 4, id: 12, order: 3, text: 'If someone in your family has a special diet, make sure they will have the right food in an emergency.', checked: false }
  ],

  5: [
    { module: 5, id: 13, order: 1, text: 'Learn about emergency plans at your work and school.', checked: false },
    { module: 5, id: 14, order: 2, text: 'Make emergency kits for people who count on you.', checked: false },
    { module: 5, id: 15, order: 3, text: 'Talk to your police or fire department about special help that you may need in an emergency.', checked: false }
  ],

  6: [
    { module: 6, id: 16, order: 1, text: 'Make a list of special things your family needs.', checked: false },
    { module: 6, id: 17, order: 2, text: 'Make a plan to take care of your pets in an emergency.', checked: false },
    { module: 6, id: 18, order: 3, text: 'Make an evacuation plan for anyone in your family who has a disability.', checked: false }
  ],

  7: [
    { module: 7, id: 19, order: 1, text: 'Have a car charger for your cell phone.', checked: false },
    { module: 7, id: 20, order: 2, text: 'Plan how your family will stay in touch during an emergency.', checked: false },
    { module: 7, id: 21, order: 3, text: 'Program an “In Case of Emergency” number into all your cell phones.', checked: false }
  ],

  8: [
    { module: 8, id: 22, order: 1, text: 'Visit someone in your neighborhood who doesn’t get out very much.', checked: false },
    { module: 8, id: 23, order: 2, text: 'Help others learn how to get ready for emergencies.', checked: false },
    { module: 8, id: 24, order: 3, text: 'Volunteer with the Red Cross, CERT, or other group in your community.', checked: false }
  ],

  9: [
    { module: 9, id: 25, order: 1, text: 'Know what to do when you get an emergency warning.', checked: false },
    { module: 9, id: 26, order: 2, text: 'Get a NOAA Emergency Alert Radio (also called a weather radio).', checked: false },
    { module: 9, id: 27, order: 3, text: 'Make sure everyone in your family can get emergency information.', checked: false }
  ],

  10: [
    { module: 10, id: 28, order: 1, text: 'Buy a portable generator and learn how to use it safely.', checked: false },
    { module: 10, id: 29, order: 2, text: 'Have flashlights and extra batteries in case the power goes out. Check the batteries in your flashlights and radios.', checked: false },
    { module: 10, id: 30, order: 3, text: 'Make a plan for power outages.', checked: false }
  ],

  11: [
    { module: 11, id: 31, order: 1, text: 'Get supplies all together and put in a “go bag.”', checked: false },
    { module: 11, id: 32, order: 2, text: 'Create an emergency supply kit for your pet, car, school or workplace.', checked: false },
    { module: 11, id: 33, order: 3, text: 'Put away some cash in case ATMs and credit card machines aren’t working in a disaster.', checked: false }
  ],

  12: [
    { module: 12, id: 34, order: 1, text: 'Learn how to help while waiting for an ambulance.', checked: false },
    { module: 12, id: 35, order: 2, text: 'Make or buy first aid kits for your home and car.', checked: false },
    { module: 12, id: 36, order: 3, text: 'Take training in first aid, CPR, AED or pet first aid.', checked: false }
  ]
}

export {
  getFBAuth,
  signOutFB,
  saveAndDispatch,
  subscribeToUsersCollection,
  subscribeToChecklistCollection,
  moduleCheckList,
};