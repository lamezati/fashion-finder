import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductCard } from './components/ProductCard';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { PreferencesPrompt } from './components/PreferencesPrompt';
import { 
  Camera, 
  Heart, 
  ShoppingBag, 
  Search, 
  TrendingUp, 
  User,
  Clock,
  Filter,
  ShoppingBasket
} from 'lucide-react';

// Logo component - embedded SVG
const Logo = ({ className = "h-8 w-8", color = "#9333EA" }) => (
  <div className={className}>
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M426.667 85.333H341.333V64C341.333 46.327 334.208 29.344 321.182 16.849C308.156 4.354 290.473 0 272 0H240C221.527 0 203.844 4.354 190.818 16.849C177.792 29.344 170.667 46.327 170.667 64V85.333H85.333C69.192 85.333 53.811 91.667 42.558 102.891C31.306 114.115 25 129.449 25 145.528V451.805C25 467.884 31.306 483.218 42.558 494.442C53.811 505.666 69.192 512 85.333 512H426.667C442.808 512 458.189 505.666 469.442 494.442C480.694 483.218 487 467.884 487 451.805V145.528C487 129.449 480.694 114.115 469.442 102.891C458.189 91.667 442.808 85.333 426.667 85.333ZM213.333 64C213.333 55.131 216.845 46.739 223.346 40.487C229.848 34.235 238.551 30.857 247.467 30.857H264.533C273.449 30.857 282.152 34.235 288.654 40.487C295.155 46.739 298.667 55.131 298.667 64V85.333H213.333V64ZM444.333 451.805C444.333 458.29 441.942 464.488 437.692 469.054C433.441 473.62 427.625 476.19 421.6 476.19H90.4C84.375 476.19 78.559 473.62 74.308 469.054C70.058 464.488 67.667 458.29 67.667 451.805V145.528C67.667 139.043 70.058 132.845 74.308 128.279C78.559 123.713 84.375 121.143 90.4 121.143H421.6C427.625 121.143 433.441 123.713 437.692 128.279C441.942 132.845 444.333 139.043 444.333 145.528V451.805Z" fill={color}/>
      <path d="M256 427.333C292.8 427.333 324.267 407.467 324.267 384C324.267 360.533 292.8 340.667 256 340.667C219.2 340.667 187.733 360.533 187.733 384C187.733 407.467 219.2 427.333 256 427.333Z" fill={color}/>
    </svg>
  </div>
);

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  // GitHub Pages deploy, we need to use basename
  const basename = import.meta.env.DEV ? '/' : '/fashion-finder';

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-white text-gray-800">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Sidebar - desktop only */}
          <aside className="hidden md:flex md:flex-col md:w-64 bg-gradient-to-b from-yellow-200 to-yellow-400 text-gray-800 border-r border-yellow-300">
            {/* Sidebar header with logo */}
            <div className="p-4 flex items-center justify-center mb-4">
              <div className="flex items-center">
                <Logo className="h-10 w-10" />
                <span className="ml-2 text-xl font-bold">FashionFinder</span>
              </div>
            </div>
            
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
                  <Filter size={18} />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                  <User size={18} />
                </button>
              </div>
            </div>
            
            <div className="p-4 mx-4 bg-white rounded-lg flex items-start mt-2">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-yellow-500 mt-1">
                <TrendingUp size={24} />
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-sm">Style Inspiration Daily</h3>
                <p className="text-xs text-gray-600 mt-1">Get personalized style recommendations based on your preferences</p>
              </div>
            </div>
            
            <div className="mx-4 mt-4 border-b border-yellow-500">
              <div className="flex">
                <button className="px-4 py-2 font-medium border-b-2 border-black">Discover</button>
                <button className="px-4 py-2 text-gray-600">Saved</button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mx-4 mt-4">
              <div className="bg-yellow-300 rounded-lg p-3 text-center">
                <div className="flex justify-center">
                  <Heart size={20} className="text-black" />
                </div>
                <p className="mt-1 text-sm font-medium">Favorites</p>
              </div>
              <div className="bg-yellow-300 rounded-lg p-3 text-center">
                <div className="flex justify-center">
                  <ShoppingBag size={20} className="text-black" />
                </div>
                <p className="mt-1 text-sm font-medium">Cart</p>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 flex flex-col">            
            {/* Mobile Nav */}
            <nav className="md:hidden bg-gradient-to-r from-pink-500 to-purple-500 shadow-sm">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                  <div className="flex items-center">
                    {/* Using the embedded Logo component instead of image */}
                    <Logo className="h-8 w-8" color="#FFFFFF" />
                    <span className="ml-2 text-xl font-semibold text-white">FashionFinder</span>
                  </div>
                  {user && (
                    <div className="flex items-center">
                      <button className="text-white hover:text-gray-100 mr-4">
                        <Search size={20} />
                      </button>
                      <button className="text-white hover:text-gray-100">
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {/* Main app content */}
            <div className="flex-1 flex flex-col">
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
                            <div className="flex-1 flex flex-col items-center justify-center py-4 px-2 bg-white">
                              <div className="w-full max-w-md mb-20">
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
            </div>
            
            {/* Bottom Navigation - Mobile only - hidden to prevent conflict with product actions */}
            <div className="hidden md:flex fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 justify-around items-center">
              <button className="text-pink-500 flex flex-col items-center">
                <Search size={22} />
                <span className="text-xs mt-1">Discover</span>
              </button>
              <button className="text-gray-400 flex flex-col items-center">
                <Heart size={22} />
                <span className="text-xs mt-1">Saved</span>
              </button>
              <button className="text-gray-400 flex flex-col items-center">
                <Clock size={22} />
                <span className="text-xs mt-1">Recent</span>
              </button>
              <button className="text-gray-400 flex flex-col items-center">
                <User size={22} />
                <span className="text-xs mt-1">Profile</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;