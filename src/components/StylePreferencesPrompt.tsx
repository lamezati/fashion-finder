import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuthStore } from '../store/useAuthStore';

export const StylePreferencesPrompt: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUserPreferences } = useAuthStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleYes = () => {
    navigate('/preferences', { replace: true });
  };

  const handleSkip = async () => {
    if (!user) {
      console.error("Cannot skip - no user found");
      setError("User not found. Please try logging in again.");
      return;
    }

    if (isProcessing) {
      console.log("Already processing request, please wait");
      return;
    }

    try {
      console.log("Skipping preferences from prompt...");
      setIsProcessing(true);
      
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
      
      console.log("Updating Firestore with data:", updatedPreferences);
      await updateDoc(userRef, updatedPreferences);
      console.log("Firestore update completed");
      
      // Update local state if the function exists
      if (typeof updateUserPreferences === 'function') {
        updateUserPreferences({
          style_types: ['Skip'],
          favorite_colors: [],
          size: '',
          occasions: [],
          unsure_categories: ['all']
        });
        console.log("Local state updated");
      } else {
        console.warn("updateUserPreferences is not a function");
      }
      
      // Add a delay to ensure updates are registered
      setTimeout(() => {
        // Navigate to home page
        console.log("Navigating to home...");
        navigate('/', { replace: true });
      }, 500);
    } catch (error) {
      console.error('Error skipping preferences:', error);
      setError('Failed to process. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Welcome to FashionFinder!</h2>
        
        <p className="mb-6 text-center text-gray-600">
          Would you like to set up your style preferences now? This helps us recommend fashion that matches your taste.
        </p>
        
        {error && (
          <div className="mb-4 p-2 text-sm bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleYes}
            className={`w-full py-3 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isProcessing}
          >
            Yes, Set Up My Preferences
          </button>
          
          <button
            onClick={handleSkip}
            className={`w-full py-3 text-sm font-medium text-purple-600 bg-white border border-purple-300 rounded-md hover:bg-purple-50 ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Skip for Now'}
          </button>
        </div>
        
        <p className="mt-4 text-xs text-center text-gray-500">
          You can always update your preferences later from your profile.
        </p>
      </div>
    </div>
  );
};