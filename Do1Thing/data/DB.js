import { initializeApp } from "firebase/app";
import { firebaseConfig } from './Secret.js';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};