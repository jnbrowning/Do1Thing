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

  const saveAndDispatch = (action, dispatch) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return createUser(action, dispatch)
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
    saveAndDispatch
  };