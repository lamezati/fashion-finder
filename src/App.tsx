import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { PreferencesPrompt } from './components/PreferencesPrompt';
import { Flame, Camera, Heart, ShoppingBag, MessageSquare, Eye, Send } from 'lucide-react';

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
    price: 90,
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
  const basename = import.meta.env.DEV ? '/' : '/fashion-finder-app';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-100 md:bg-black text-black md:text-white">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Sidebar - desktop only */}
          <aside className="hidden md:flex md:flex-col md:w-64 bg-gradient-to-b from-yellow-200 to-yellow-400 text-gray-800 border-r border-yellow-300">
            <div className="p-4 flex items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="ml-2 text-lg font-medium">Leonel</span>
              <div className="ml-auto flex gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                  <Camera size={18} />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                  <ShoppingBag size={18} />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                  <Heart size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-4 mx-4 bg-white rounded-lg flex items-start mt-2">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-yellow-500 mt-1">
                <Flame size={24} />
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-sm">Match Faster With Platinum™</h3>
                <p className="text-xs text-gray-600 mt-1">No more waiting: Get your profile in front of the people you Like sooner</p>
              </div>
            </div>
            
            <div className="mx-4 mt-4 border-b border-yellow-500">
              <div className="flex">
                <button className="px-4 py-2 font-medium border-b-2 border-black">Matches</button>
                <button className="px-4 py-2 text-gray-600">Messages</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mx-4 mt-4">
              <div className="bg-yellow-300 rounded-lg p-3 text-center">
                <div className="flex justify-center">
                  <Heart size={20} className="text-black" />
                </div>
                <p className="mt-1 text-sm font-medium">Get Likes</p>
              </div>
              <div className="bg-yellow-300 rounded-lg p-3 text-center">
                <div className="flex justify-center">
                  <Send size={20} className="text-black" />
                </div>
                <p className="mt-1 text-sm font-medium">Likes Sent</p>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 flex flex-col md:overflow-hidden">
            {/* Top banner - web exclusive */}
            <div className="hidden md:flex bg-pink-100 text-pink-800 p-2 items-center justify-between">
              <div className="flex items-center">
                <span className="font-medium mr-1">FashionFinder Web Exclusive</span>
                <div className="bg-pink-500 text-white rounded-full p-0.5 w-5 h-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-1 text-sm">Save 10% on Subscriptions, Boosts and Super Likes when you purchase here on Web!</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Nav */}
            <nav className="md:hidden bg-gradient-to-r from-pink-500 to-purple-500 shadow-sm">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="ml-2 text-xl font-semibold text-white">FashionFinder</span>
                  </div>
                  {user && (
                    <button
                      onClick={() => useAuthStore.getState().signOut()}
                      className="text-white hover:text-gray-100"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </nav>

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
                          <div className="flex-1 flex flex-col items-center justify-center py-4 md:py-8 px-2 bg-gray-100 md:bg-black">
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
            
            {/* Bottom Navigation - Mobile only */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 flex justify-around items-center">
              <button className="text-pink-500 flex flex-col items-center">
                <Heart size={24} />
                <span className="text-xs mt-1">Discover</span>
              </button>
              <button className="text-gray-400 flex flex-col items-center">
                <MessageSquare size={24} />
                <span className="text-xs mt-1">Matches</span>
              </button>
              <button className="text-gray-400 flex flex-col items-center">
                <Eye size={24} />
                <span className="text-xs mt-1">Viewed</span>
              </button>
              <button className="text-gray-400 flex flex-col items-center">
                <ShoppingBag size={24} />
                <span className="text-xs mt-1">Cart</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;