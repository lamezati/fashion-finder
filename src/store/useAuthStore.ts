import { create } from 'zustand';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  debugUserState: () => void; // Debug function
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  signIn: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  },
  signUp: async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created in Firebase Auth:", user.uid);
      
      // Create user profile in Firestore
      const userData = {
        email: user.email,
        style_preferences: {},
        budget: {},
        is_new_user: true, // Flag to indicate this is a new user
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      await setDoc(doc(db, 'profiles', user.uid), userData);
      console.log("User profile created in Firestore with is_new_user=true");
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  },
  signOut: async () => {
    try {
      await firebaseSignOut(auth);
      set({ user: null });
    } catch (error) {
      throw error;
    }
  },
  debugUserState: () => {
    const state = get();
    console.log("Current auth state:", {
      user: state.user ? {
        ...state.user,
        is_new_user: state.user.is_new_user === true ? "true (boolean)" : 
                    state.user.is_new_user === false ? "false (boolean)" : 
                    state.user.is_new_user ? "truthy (not boolean true)" : "falsy (not boolean false)"
      } : null,
      loading: state.loading
    });
  }
}));

// Set up auth state listener
onAuthStateChanged(auth, async (firebaseUser) => {
  if (firebaseUser) {
    try {
      // Get user data from Firestore
      const userDocRef = doc(db, 'profiles', firebaseUser.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        // User exists in Firestore, use that data
        const userData = userDoc.data();
        console.log("User data from Firestore:", userData); // Debug log
        
        // IMPORTANT: Default is_new_user to false unless explicitly true in the database
        const is_new_user = userData.is_new_user === true;
        console.log("Is new user flag:", is_new_user); // Debug log
        
        const user: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          style_preferences: userData.style_preferences || {
            style_types: [],
            favorite_colors: [],
            size: '',
            occasions: []
          },
          budget: userData.budget || {
            min: 0,
            max: 1000,
            currency: 'USD'
          },
          physical_attributes: userData.physical_attributes,
          is_new_user: is_new_user // Use explicit boolean from above
        };
        useAuthStore.setState({ user, loading: false });
      } else {
        // No user doc found, create default user data
        const user: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          style_preferences: {
            style_types: [],
            favorite_colors: [],
            size: '',
            occasions: []
          },
          budget: {
            min: 0,
            max: 1000,
            currency: 'USD'
          },
          is_new_user: false // Default to false when document doesn't exist
        };
        useAuthStore.setState({ user, loading: false });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      useAuthStore.setState({ user: null, loading: false });
    }
  } else {
    useAuthStore.setState({ user: null, loading: false });
  }
});