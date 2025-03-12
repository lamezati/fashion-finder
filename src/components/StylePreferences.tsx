import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { HelpCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { useAuthStore } from '../store/useAuthStore';
import type { PhysicalAttributes } from '../types';

const styleTypes = [
  'Casual', 'Business Casual', 'Formal', 'Bohemian', 
  'Minimalist', 'Vintage', 'Streetwear', 'Athleisure'
];

const colors = [
  'Black', 'White', 'Navy', 'Beige', 'Gray',
  'Red', 'Pink', 'Purple', 'Blue', 'Green'
];

const occasions = [
  'Everyday', 'Work', 'Special Events', 'Date Night',
  'Workout', 'Travel', 'Beach', 'Party'
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const StylePreferences: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUserPreferences } = useAuthStore();
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [preferences, setPreferences] = useState({
    style_types: [] as string[],
    favorite_colors: [] as string[],
    size: '',
    occasions: [] as string[],
    unsure_categories: [] as string[],
    budget: {
      min: 0,
      max: 500,
      currency: 'USD'
    }
  });

  const [physicalAttributes, setPhysicalAttributes] = useState<PhysicalAttributes>({
    height: 170,
    weight: 70,
    age: 25
  });

  // Handle skip functionality
  const handleSkip = async () => {
    if (!user) {
      console.error("Cannot skip - no user found");
      return;
    }

    try {
      console.log("Skipping preferences setup...");
      setIsSubmitting(true); // Prevent multiple submissions
      
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
      
      console.log("Updating Firestore with skip data:", updatedPreferences);
      await updateDoc(userRef, updatedPreferences);
      console.log("Firestore update completed for skip");
      
      // Update local state
      if (typeof updateUserPreferences === 'function') {
        updateUserPreferences({
          style_types: ['Skip'],
          favorite_colors: [],
          size: '',
          occasions: [],
          unsure_categories: ['all']
        });
        console.log("Local state updated for skip");
      } else {
        console.warn("updateUserPreferences is not a function");
      }

      // Use replace navigation to avoid back button issues
      console.log("Navigating to home after skip");
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error skipping preferences:', error);
      setError('Failed to skip. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleMultiSelect = (category: 'style_types' | 'favorite_colors' | 'occasions', value: string) => {
    if (value === 'not_sure') {
      setPreferences(prev => ({
        ...prev,
        [category]: [],
        unsure_categories: prev.unsure_categories.includes(category)
          ? prev.unsure_categories.filter(cat => cat !== category)
          : [...prev.unsure_categories, category]
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        unsure_categories: prev.unsure_categories.filter(cat => cat !== category),
        [category]: prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
      }));
    }
    setError('');
  };

  const handleSizeSelect = (size: string) => {
    if (size === 'not_sure') {
      setPreferences(prev => ({
        ...prev,
        size: '',
        unsure_categories: prev.unsure_categories.includes('size')
          ? prev.unsure_categories.filter(cat => cat !== 'size')
          : [...prev.unsure_categories, 'size']
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        size,
        unsure_categories: prev.unsure_categories.filter(cat => cat !== 'size')
      }));
    }
    setError('');
  };

  const handlePhysicalAttributeChange = (
    attribute: keyof PhysicalAttributes,
    value: string
  ) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      setPhysicalAttributes(prev => ({
        ...prev,
        [attribute]: numValue
      }));
    }
  };

  const handleBudgetChange = (value: string, type: 'min' | 'max') => {
    const numValue = parseInt(value);
    if (isNaN(numValue)) return;

    setPreferences(prev => {
      let newMin = type === 'min' ? numValue : prev.budget.min;
      let newMax = type === 'max' ? numValue : prev.budget.max;

      // Ensure min doesn't exceed max and max doesn't go below min
      if (type === 'min') {
        newMin = Math.min(newMin, prev.budget.max);
      } else if (type === 'max') {
        newMax = Math.max(newMax, prev.budget.min);
      }

      return {
        ...prev,
        budget: {
          ...prev.budget,
          min: newMin,
          max: newMax
        }
      };
    });
    setError('');
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (preferences.style_types.length === 0 && !preferences.unsure_categories.includes('style_types')) {
          setError('Please select at least one style or choose "I\'m not sure"');
          return false;
        }
        break;
      case 2:
        if (preferences.favorite_colors.length === 0 && !preferences.unsure_categories.includes('favorite_colors')) {
          setError('Please select at least one color or choose "I\'m not sure"');
          return false;
        }
        break;
      case 3:
        if (!preferences.size && !preferences.unsure_categories.includes('size')) {
          setError('Please select a size or choose "I\'m not sure"');
          return false;
        }
        break;
      case 4:
        if (preferences.occasions.length === 0 && !preferences.unsure_categories.includes('occasions')) {
          setError('Please select at least one occasion or choose "I\'m not sure"');
          return false;
        }
        break;
      case 5:
        if (preferences.budget.max < preferences.budget.min) {
          setError('Maximum budget cannot be less than minimum budget');
          return false;
        }
        break;
      case 6:
        if (physicalAttributes.age < 13 || physicalAttributes.age > 120) {
          setError('Please enter a valid age between 13 and 120');
          return false;
        }
        if (physicalAttributes.height < 100 || physicalAttributes.height > 250) {
          setError('Please enter a valid height between 100cm and 250cm');
          return false;
        }
        if (physicalAttributes.weight < 30 || physicalAttributes.weight > 300) {
          setError('Please enter a valid weight between 30kg and 300kg');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async () => {
    console.log("Finish button clicked");
    
    if (!user) {
      console.error("Cannot submit - no user found");
      return;
    }

    if (isSubmitting) {
      console.log("Already submitting, please wait");
      return;
    }

    try {
      console.log("Starting submission of preferences...");
      setIsSubmitting(true); // Prevent multiple submissions
      setError('');
      
      const userRef = doc(db, 'profiles', user.id);
      const updatedData = {
        style_preferences: {
          style_types: preferences.style_types,
          favorite_colors: preferences.favorite_colors,
          size: preferences.size,
          occasions: preferences.occasions,
          unsure_categories: preferences.unsure_categories
        },
        physical_attributes: physicalAttributes,
        budget: preferences.budget,
        updated_at: new Date().toISOString()
      };
      
      console.log("Updating Firestore with preferences:", updatedData);
      await updateDoc(userRef, updatedData);
      console.log("Firestore update completed");
      
      // Update local state
      if (typeof updateUserPreferences === 'function') {
        updateUserPreferences({
          style_types: preferences.style_types,
          favorite_colors: preferences.favorite_colors,
          size: preferences.size,
          occasions: preferences.occasions,
          unsure_categories: preferences.unsure_categories
        });
        console.log("Local state updated");
      } else {
        console.warn("updateUserPreferences is not a function");
      }

      // Add a slight delay to ensure Firestore update completes
      setTimeout(() => {
        console.log("Navigating to home after preferences save");
        navigate('/', { replace: true });
      }, 500);
    } catch (error) {
      console.error('Error saving preferences:', error);
      setError('Failed to save preferences. Please try again.');
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold">What's your style?</h3>
            <div className="grid grid-cols-2 gap-2">
              {styleTypes.map(style => (
                <button
                  key={style}
                  onClick={() => handleMultiSelect('style_types', style)}
                  className={`py-2 px-3 text-sm rounded-lg border ${
                    preferences.style_types.includes(style)
                      ? 'bg-purple-100 border-purple-500 text-purple-700'
                      : 'border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {style}
                </button>
              ))}
              <button
                onClick={() => handleMultiSelect('style_types', 'not_sure')}
                className={`py-2 px-3 text-sm rounded-lg border col-span-2 ${
                  preferences.unsure_categories.includes('style_types')
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <HelpCircle size={16} />
                  <span>I'm not sure about my style</span>
                </div>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Select your favorite colors</h3>
            <div className="grid grid-cols-2 gap-2">
              {colors.map(color => (
                <button
                  key={color}
                  onClick={() => handleMultiSelect('favorite_colors', color)}
                  className={`py-2 px-3 text-sm rounded-lg border ${
                    preferences.favorite_colors.includes(color)
                      ? 'bg-purple-100 border-purple-500 text-purple-700'
                      : 'border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {color}
                </button>
              ))}
              <button
                onClick={() => handleMultiSelect('favorite_colors', 'not_sure')}
                className={`py-2 px-3 text-sm rounded-lg border col-span-2 ${
                  preferences.unsure_categories.includes('favorite_colors')
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <HelpCircle size={16} />
                  <span>I'm not sure about colors</span>
                </div>
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold">What's your size?</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`py-2 px-3 text-sm rounded-lg border ${
                    preferences.size === size
                      ? 'bg-purple-100 border-purple-500 text-purple-700'
                      : 'border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {size}
                </button>
              ))}
              <button
                onClick={() => handleSizeSelect('not_sure')}
                className={`py-2 px-3 text-sm rounded-lg border col-span-3 ${
                  preferences.unsure_categories.includes('size')
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <HelpCircle size={16} />
                  <span>I'm not sure about my size</span>
                </div>
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-2">
            <h3 className="text-base font-semibold">What occasions do you shop for?</h3>
            <div className="grid grid-cols-2 gap-2">
              {occasions.map(occasion => (
                <button
                  key={occasion}
                  onClick={() => handleMultiSelect('occasions', occasion)}
                  className={`py-2 px-3 text-sm rounded-lg border ${
                    preferences.occasions.includes(occasion)
                      ? 'bg-purple-100 border-purple-500 text-purple-700'
                      : 'border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {occasion}
                </button>
              ))}
              <button
                onClick={() => handleMultiSelect('occasions', 'not_sure')}
                className={`py-2 px-3 text-sm rounded-lg border col-span-2 ${
                  preferences.unsure_categories.includes('occasions')
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <HelpCircle size={16} />
                  <span>I'm not sure about occasions</span>
                </div>
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-base font-semibold">What's your budget range?</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${preferences.budget.min}</span>
                  <span>${preferences.budget.max}+</span>
                </div>
                <div className="range-slider">
                  <div className="slider-track">
                    <div 
                      className="slider-track-active"
                      style={{
                        left: `${(preferences.budget.min / 500) * 100}%`,
                        width: `${((preferences.budget.max - preferences.budget.min) / 500) * 100}%`
                      }}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="25"
                    value={preferences.budget.min}
                    onChange={(e) => handleBudgetChange(e.target.value, 'min')}
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="25"
                    value={preferences.budget.max}
                    onChange={(e) => handleBudgetChange(e.target.value, 'max')}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Tell us about yourself</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  value={physicalAttributes.age}
                  onChange={(e) => handlePhysicalAttributeChange('age', e.target.value)}
                  min="13"
                  max="120"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  value={physicalAttributes.height}
                  onChange={(e) => handlePhysicalAttributeChange('height', e.target.value)}
                  min="100"
                  max="250"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  value={physicalAttributes.weight}
                  onChange={(e) => handlePhysicalAttributeChange('weight', e.target.value)}
                  min="30"
                  max="300"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      <div className="px-4 py-3 border-b">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Style Preferences</h2>
          <span className="text-xs text-gray-500">Step {step} of 6</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="px-4 pt-3">
          <div className="p-2 text-sm bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        </div>
      )}

      <div className="flex-1 px-4 flex items-center justify-center">
        <div className="w-full max-w-sm">
          {renderStep()}
        </div>
      </div>

      <div className="border-t p-3 flex justify-between bg-white">
        {step > 1 ? (
          <button
            onClick={() => {
              setError('');
              setStep(step - 1);
            }}
            className="px-4 py-2 text-sm text-purple-600 hover:text-purple-700"
            disabled={isSubmitting}
          >
            Back
          </button>
        ) : (
          <div></div> // Empty div to maintain flex layout
        )}
        
        <div className="flex space-x-2">
          {/* Skip button added to all steps */}
          <button
            onClick={handleSkip}
            className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={isSubmitting}
          >
            Skip to Main Menu
          </button>
          
          {/* Next/Finish button */}
          <button
            onClick={() => {
              if (validateStep()) {
                if (step === 6) {
                  handleSubmit();
                } else {
                  setStep(step + 1);
                }
              }
            }}
            className={`px-6 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : (step === 6 ? 'Finish' : 'Next')}
          </button>
        </div>
      </div>
    </div>
  );
};