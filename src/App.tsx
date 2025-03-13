import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';
import { ProductBrowser } from './components/ProductBrowser';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { PreferencesPrompt } from './components/PreferencesPrompt';
import { LikedProductsDrawer } from './components/LikedProductsDrawer';
import type { Product } from './types';

function App() {
  const { user, loading, debugUserState } = useAuthStore();
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Call debug function on every render
  React.useEffect(() => {
    debugUserState();
  }, [debugUserState, user]);

  const handleSwipe = (product: Product, direction: 'left' | 'right') => {
    console.log(`Swiped ${direction} on ${product.name}`);
    
    // If swiped right, add to liked products if not already there
    if (direction === 'right') {
      setLikedProducts(prev => {
        if (prev.some(p => p.id === product.id)) {
          return prev;
        }
        return [...prev, product];
      });
    }
  };

  const toggleLikedProductsDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
        {/* Fixed header for mobile */}
        <nav className="sticky top-0 bg-white shadow-sm z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Sparkles className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-semibold">FashionFinder</span>
              </div>
              <div className="flex items-center space-x-4">
                {user && (
                  <>
                    <button
                      onClick={toggleLikedProductsDrawer}
                      className="relative p-2 text-pink-500 hover:text-pink-700 transition-colors"
                      aria-label="View liked items"
                    >
                      <Heart size={24} />
                      {likedProducts.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {likedProducts.length}
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => useAuthStore.getState().signOut()}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="pb-20 sm:pb-0">
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  // Show the preferences prompt to any user with is_new_user flag set to true
                  (() => {
                    console.log("Current user state:", user); // Debug log
                    
                    // If this is a new user, show the preferences prompt
                    if (user.is_new_user === true) {
                      return <PreferencesPrompt />;
                    } else {
                      // Otherwise show the main app content
                      return (
                        <div className="flex flex-col items-center justify-center px-4 pt-4 sm:pt-8">
                          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">Discover Your Style</h2>
                          <ProductBrowser onSwipe={handleSwipe} />
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

        {/* Liked Products Drawer */}
        <LikedProductsDrawer 
          isOpen={isDrawerOpen} 
          likedProducts={likedProducts} 
          onClose={() => setIsDrawerOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;