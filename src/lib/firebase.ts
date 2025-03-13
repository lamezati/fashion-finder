import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Using environment variables for Firebase config or fallback to hardcoded values for development
// IMPORTANT: This is a temporary fallback solution until proper environment variables are set up
// For production, these values should be set as environment variables in GitHub secrets
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAk8snhF2gMPr45nQGKa22oYfohl70BhuQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "fashion-96787.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "fashion-96787",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "fashion-96787.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "806045730430",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:806045730430:web:60eb864051595bef477a2f",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-HHZRWVQTFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);