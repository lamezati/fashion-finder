import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuthStore } from '../store/useAuthStore';

export const StylePreferencesPrompt: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUserPreferences } = useAuthStore();

  const handleYes = () => {
    navigate('/preferences', { replace: true });
  };

  const handleSkip = async () => {
    if (!user) return;
    
    try {
      console.log("Skipping preferences from prompt...");
      
      // Save minimal preferences to Firestore
      const userRef = doc(db, 'profiles', user.id);
      const updatedPreferences = {
        style_preferences: {
          style_types: ['Skip'],  // Add a "Skip" marker to indicate user skipped
          favorite_colors: [],
          size: '',
          occasions: [],
          unsure_categories: ['all']  // Mark all as unsure
        },
        updated_at: new Date().toISOString()
      };
      
      await updateDoc(userRef, updatedPreferences);
      
      // Update local state if the function exists
      if (typeof updateUserPreferences === 'function') {
        updateUserPreferences({
          style_types: ['Skip'],
          favorite_colors: [],
          size: '',
          occasions: [],
          unsure_categories: ['all']
        });
      }
      
      // Navigate to home page
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error skipping preferences:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Welcome to FashionFinder!</h2>
        
        <p className="mb-6 text-center text-gray-600">
          Would you like to set up your style preferences now? This helps us recommend fashion that matches your taste.
        </p>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleYes}
            className="w-full py-3 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Yes, Set Up My Preferences
          </button>
          
          <button
            onClick={handleSkip}
            className="w-full py-3 text-sm font-medium text-purple-600 bg-white border border-purple-300 rounded-md hover:bg-purple-50"
          >
            Skip for Now
          </button>
        </div>
        
        <p className="mt-4 text-xs text-center text-gray-500">
          You can always update your preferences later from your profile.
        </p>
      </div>
    </div>
  );
};