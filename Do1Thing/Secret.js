// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMyqWlFFXxK2JOmjtT1ef_00_6Wau0l3U",
  authDomain: "do1thing-3be9d.firebaseapp.com",
  projectId: "do1thing-3be9d",
  storageBucket: "do1thing-3be9d.appspot.com",
  messagingSenderId: "580201853625",
  appId: "1:580201853625:web:7b683367e6de0427cbe168",
  measurementId: "G-6T1BG2NV4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);