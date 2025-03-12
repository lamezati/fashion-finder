import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk8snhF2gMPr45nQGKa22oYfohl70BhuQ",
  authDomain: "fashion-96787.firebaseapp.com",
  projectId: "fashion-96787",
  storageBucket: "fashion-96787.firebasestorage.app",
  messagingSenderId: "806045730430",
  appId: "1:806045730430:web:60eb864051595bef477a2f",
  measurementId: "G-HHZRWVQTFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);