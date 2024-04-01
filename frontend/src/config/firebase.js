// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYl9H21hASJ1mYOuwy6oZW6nl4tLKBolw",
  authDomain: "uiuxproject-924cc.firebaseapp.com",
  projectId: "uiuxproject-924cc",
  storageBucket: "uiuxproject-924cc.appspot.com",
  messagingSenderId: "1040196005131",
  appId: "1:1040196005131:web:06127ed551a47f2716060e",
  measurementId: "G-0C7YG1FCS0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const AUTH = getAuth(app);
export const DB = getFirestore(app);
