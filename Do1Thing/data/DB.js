import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from './Secret';
import { actionTypes, loadUser } from './Actions';
import { getAuth, signOut } from 'firebase/auth';
import { 
    getFirestore, 
    onSnapshot, 
    collection,
    doc,
    setDoc,
    addDoc, 
    getDoc,
    Timestamp
  } from 'firebase/firestore';

let firebaseApp = null;

let userCollection = 'users'

let unsub = null;

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
        let newUser = findActiveUser(qSnap);
        console.log('\n\nusers coll updated:\n\n', newUser);
        dispatch(loadUser(newUser));
    })
    unsub = unsubFunction;
  }

  // Process users collection snapshot to identify current active user

  const findActiveUser = (userQuerySnapshot) => {
    let newUser = {};
    const auth = getFBAuth();
    try{
        userQuerySnapshot.forEach(docSnap => {
            if (auth.currentUser.uid === docSnap.id){
                newUser = docSnap.data();
                newUser.uid = docSnap.id;
                // console.log(newUser);
                // console.log('According to processUserQuerySnapshot, current logged in user is ', newUser)
            }
        })
    }
    catch(error){
        return {};
    }
    return newUser;
  }

  // There are no ready-to-use solutions to combine Redux and Firebase, so this is a method from SI669. Basically, saveAndDispatch is a hub to complete the CRUD on both the app state management (synchrnous) and cloud Firestore (async) in an orderly fashion.

  const saveAndDispatch = (action, dispatch) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return createUser(action, dispatch);
    }
  }

  const createUser = async (action, dispatch) => {
    const { user } = action.payload;
    await setDoc(doc(collection(getDB(), userCollection), user.uid), {
        email: user.email
    })
  }

  export { 
    getFBAuth,
    signOutFB,
    saveAndDispatch,
    subscribeToUsersCollection,
  };