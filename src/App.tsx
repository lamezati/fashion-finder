import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    name: 'Elegant Red Evening Dress',
    brand: 'Versace',
    price: 89.99,
    currency: '$',
    description: 'Stunning red evening dress with asymmetric design',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500', 
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500'
    ],
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Red'],
    affiliate_url: 'https://example.com/dress',
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log(`Swiped ${direction}`);
    // Will implement recommendation logic here
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  // GitHub Pages deploy, we need to use basename
  const basename = import.meta.env.DEV ? '/' : '/fashion-finder';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-black text-white">
        <nav className="bg-black shadow-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24"><path d="M12.009 0C6.292 0 1.657 4.632 1.657 10.347c0 2.764 1.084 5.387 3.053 7.349.391.389.39 1.022-.001 1.41l-1.954 1.95a.975.975 0 0 0 0 1.382.975.975 0 0 0 1.382 0l1.945-1.942a.996.996 0 0 1 1.414 0 10.28 10.28 0 0 0 7.345 3.046c5.717 0 10.348-4.631 10.348-10.347S17.726 0 12.009 0zm-.008 5.7a4.658 4.658 0 0 1 4.653 4.652 4.658 4.658 0 0 1-4.653 4.652 4.658 4.658 0 0 1-4.652-4.652A4.658 4.658 0 0 1 12.001 5.7z" fill="currentColor"/></svg>
                <span className="ml-2 text-xl font-semibold text-white">FashionFinder</span>
              </div>
              {user && (
                <button
                  onClick={() => useAuthStore.getState().signOut()}
                  className="text-gray-300 hover:text-white"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-0 py-0">
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
                        <div className="flex flex-col items-center justify-center">
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