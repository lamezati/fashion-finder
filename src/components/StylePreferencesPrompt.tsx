import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
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
    setIsProcessing(true);
    
    // Update local state first
    if (typeof updateUserPreferences === 'function' && user) {
      updateUserPreferences({
        style_types: ['Skip'],
        favorite_colors: [],
        size: '',
        occasions: [],
        unsure_categories: ['all']
      });
      console.log("Local state updated with Skip flag");
    }
    
    // Navigate immediately for better UX
    navigate('/', { replace: true });
    
    // Try to update Firestore in the background
    if (user) {
      try {
        // Create a new document or replace an existing one
        const userRef = doc(db, 'profiles', user.id);
        
        await setDoc(userRef, {
          email: user.email || '',
          style_preferences: {
            style_types: ['Skip'],
            favorite_colors: [],
            size: '',
            occasions: [],
            unsure_categories: ['all']
          },
          physical_attributes: {
            height: 170,
            weight: 70,
            age: 25
          },
          budget: {
            min: 0,
            max: 500,
            currency: 'USD'
          },
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, { merge: true });
        
        console.log("Firestore document created/updated successfully");
      } catch (error) {
        console.error("Background Firestore operation failed:", error);
        // We don't set error state here since we've already navigated away
      }
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