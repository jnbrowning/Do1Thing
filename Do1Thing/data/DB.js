// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../Secrets";
import { getFirestore, collection, getDocs,
    doc, getDoc, addDoc, updateDoc, deleteDoc, query } 
     from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);