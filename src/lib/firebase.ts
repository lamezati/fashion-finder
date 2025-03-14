import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Default Firebase configuration values from the provided config
const defaultConfig = {
  apiKey: "AIzaSyAk8snhF2gMPr45nQGKa22oYfohl70BhuQ",
  authDomain: "fashion-96787.firebaseapp.com",
  projectId: "fashion-96787",
  storageBucket: "fashion-96787.firebasestorage.app",
  messagingSenderId: "806045730430",
  appId: "1:806045730430:web:60eb864051595bef477a2f",
  measurementId: "G-HHZRWVQTFQ"
};

// Using environment variables with fallbacks to default config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || defaultConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || defaultConfig.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || defaultConfig.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || defaultConfig.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || defaultConfig.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || defaultConfig.appId,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || defaultConfig.measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Only initialize analytics in browser environment (to avoid SSR issues)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const auth = getAuth(app);
export const db = getFirestore(app);

// Log which config is being used (helpful for debugging)
console.log('Firebase initialized with', 
  import.meta.env.VITE_FIREBASE_API_KEY ? 'environment variables' : 'default config');