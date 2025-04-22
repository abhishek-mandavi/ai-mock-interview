import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH9ezzJvzw8vQHblvr2taZDjAF8ehI7PA",
  authDomain: "interviewprep-3af35.firebaseapp.com",
  projectId: "interviewprep-3af35",
  storageBucket: "interviewprep-3af35.firebasestorage.app",
  messagingSenderId: "899342011065",
  appId: "1:899342011065:web:7166c8294e77c296912968",
  measurementId: "G-Q0DMDPLYDW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();



export const auth = getAuth(app);
export const db = getFirestore(app);