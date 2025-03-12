import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { StylePreferencesPrompt } from './components/StylePreferencesPrompt';

function App() {
  const { user, loading } = useAuthStore();

  // Temporary product data - will be replaced with API data
  const sampleProduct = {
    id: '1',
    name: 'Summer Floral Dress',
    brand: 'Fashion Brand',
    price: 89.99,
    currency: '$',
    description: 'Beautiful floral summer dress perfect for any occasion',
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500'],
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blue', 'Pink'],
    affiliate_url: 'https://example.com/dress',
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction}`);
    // Will implement recommendation logic here
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Function to check if user has skipped or completed preferences
  const hasPreferenceData = () => {
    if (!user) return false;
    
    // Debug user preference data
    console.log("Current user preferences:", user.style_preferences);

    // Check if user has any style types saved (including 'Skip')
    if (user.style_preferences.style_types && user.style_preferences.style_types.length > 0) {
      // Specifically check if user has 'Skip' marker
      if (user.style_preferences.style_types.includes('Skip')) {
        console.log("User has skipped preferences");
        return true;
      }
      
      // Or check if they have regular preferences
      if (user.style_preferences.style_types.some(type => type !== 'Skip')) {
        console.log("User has filled out preferences");
        return true;
      }
    }
    
    // If we get here, user needs to fill out or skip preferences
    console.log("User needs to set preferences or skip");
    return false;
  };

  // GitHub Pages deploy, we need to use basename
  const basename = import.meta.env.DEV ? '/' : '/fashion-finder';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Sparkles className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-semibold">FashionFinder</span>
              </div>
              {user && (
                <button
                  onClick={() => useAuthStore.getState().signOut()}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  hasPreferenceData() ? (
                    <div className="flex flex-col items-center justify-center min-h-[80vh]">
                      <div className="w-full max-w-md">
                        <ProductCard product={sampleProduct} onSwipe={handleSwipe} />
                      </div>
                    </div>
                  ) : (
                    <StylePreferencesPrompt />
                  )
                ) : (
                  <Navigate to="/auth" replace />
                )
              }
            />
            <Route
              path="/auth"
              element={!user ? <AuthPage /> : <Navigate to="/" replace />}
            />
            <Route
              path="/preferences"
              element={
                user ? <StylePreferences /> : <Navigate to="/auth" replace />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;