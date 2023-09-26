// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJchv7jZBO45VAl2BWDmc5wXA79eqkOkY",
  authDomain: "chatapp-f086d.firebaseapp.com",
  projectId: "chatapp-f086d",
  storageBucket: "chatapp-f086d.appspot.com",
  messagingSenderId: "462084527444",
  appId: "1:462084527444:web:205a50da5abdd965dc24c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);