import { create } from 'zustand';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import type { User, StylePreferences } from '../types';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUserPreferences: (preferences: StylePreferences) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
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
      
      // Create user profile in Firestore
      await setDoc(doc(db, 'profiles', user.uid), {
        email: user.email,
        style_preferences: {
          style_types: [],
          favorite_colors: [],
          size: '',
          occasions: [],
          unsure_categories: []
        },
        budget: {
          min: 0,
          max: 500,
          currency: 'USD'
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    } catch (error) {
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
  updateUserPreferences: (preferences) => {
    set((state) => {
      if (!state.user) return state;
      
      return {
        ...state,
        user: {
          ...state.user,
          style_preferences: preferences
        }
      };
    });
  }
}));

// Set up auth state listener
onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    const user: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      style_preferences: {
        style_types: [],
        favorite_colors: [],
        size: '',
        occasions: [],
        unsure_categories: []
      },
      budget: {
        min: 0,
        max: 500,
        currency: 'USD'
      }
    };
    useAuthStore.setState({ user, loading: false });
  } else {
    useAuthStore.setState({ user: null, loading: false });
  }
});