// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA24Su9O0Qpu4bHGj4ZQZSuHgQAMpIgSJY",
  authDomain: "ai-trip-planner-cba1b.firebaseapp.com",
  projectId: "ai-trip-planner-cba1b",
  storageBucket: "ai-trip-planner-cba1b.firebasestorage.app",
  messagingSenderId: "848183264989",
  appId: "1:848183264989:web:5a83661f886c410d6abd34",
  measurementId: "G-TB0LR260C8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);