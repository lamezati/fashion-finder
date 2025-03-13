import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { PreferencesPrompt } from './components/PreferencesPrompt';

function App() {
  const { user, loading, debugUserState } = useAuthStore();

  // Call debug function on every render
  React.useEffect(() => {
    debugUserState();
  }, [debugUserState, user]);

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
                  // Only show preference prompt for brand new registered users
                  (() => {
                    console.log("Current user state:", user); // Debug log
                    // Check if this is a new account (not just a login)
                    const isNewRegistration = sessionStorage.getItem('newUserRegistration') === 'true';
                    
                    // If new registration, show preferences prompt
                    if (isNewRegistration && user.is_new_user === true) {
                      return <PreferencesPrompt />;
                    } else {
                      // Otherwise show the main app content
                      return (
                        <div className="flex flex-col items-center justify-center min-h-[80vh]">
                          <div className="w-full max-w-md">
                            <ProductCard product={sampleProduct} onSwipe={handleSwipe} />
                          </div>
                        </div>
                      );
                    }
                  })()
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