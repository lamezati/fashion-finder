import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { Sparkles } from 'lucide-react';
import { db } from '../lib/firebase';
import { useAuthStore } from '../store/useAuthStore';

export const PreferencesPrompt: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleSkip = async () => {
    if (!user) return;

    try {
      console.log("Handling skip preferences");
      
      // Define the updates
      const updatedData = {
        style_preferences: {
          style_types: ['Casual'], // Default value so it counts as completed
          favorite_colors: [],
          size: '',
          occasions: [],
          unsure_categories: ['style_types', 'favorite_colors', 'size', 'occasions']
        },
        is_new_user: false, // Remove the new user flag
        updated_at: new Date().toISOString()
      };

      // Update user profile in Firestore
      const userRef = doc(db, 'profiles', user.id);
      await updateDoc(userRef, updatedData);
      console.log("Firestore updated successfully");

      // Create a new user object with updated data
      const updatedUser = {
        ...user,
        style_preferences: updatedData.style_preferences,
        is_new_user: false
      };

      // Update the local state directly
      useAuthStore.setState({ 
        user: updatedUser, 
        loading: false 
      });
      
      // Clear the new registration flag
      sessionStorage.removeItem('newUserRegistration');
      
      console.log("Local state updated to:", updatedUser);

      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Error updating preferences:', error);
    }
  };

  const handleContinue = () => {
    // We keep the 'newUserRegistration' flag active here since we're just moving to the
    // preferences page, but will still want to be treated as a new user
    navigate('/preferences');
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-16 w-16 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Welcome to FashionFinder!</h2>
        <p className="text-gray-600 mb-8">
          Would you like to set up your style preferences now? This helps us recommend fashion items tailored to your taste.
        </p>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <button
            onClick={handleSkip}
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Skip for now
          </button>
          <button
            onClick={handleContinue}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Set up preferences
          </button>
        </div>
      </div>
    </div>
  );
};