import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { PreferencesPrompt } from './components/PreferencesPrompt';
import { TikTokFeed } from './components/TikTokFeed';
import { TikTokNavBar } from './components/TikTokNavBar';
import type { Product } from './types';

function App() {
  const { user, loading, debugUserState } = useAuthStore();

  // Call debug function on every render
  React.useEffect(() => {
    debugUserState();
  }, [debugUserState, user]);

  // Sample products data - will be replaced with API data
  const sampleProducts: Product[] = [
    {
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
    },
    {
      id: '2',
      name: 'Designer Denim Jacket',
      brand: 'Gucci',
      price: 120,
      currency: '$',
      description: 'Premium denim jacket with embroidered details',
      images: [
        'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500'
      ],
      category: 'Jackets',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue'],
      affiliate_url: 'https://example.com/jacket',
    },
    {
      id: '3',
      name: 'Casual Summer Dress',
      brand: 'Zara',
      price: 45,
      currency: '$',
      description: 'Light and comfortable summer dress with floral pattern',
      images: [
        'https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?w=500',
        'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500',
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500'
      ],
      category: 'Dresses',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Floral'],
      affiliate_url: 'https://example.com/summer-dress',
    }
  ];

  const handleLike = (product: Product) => {
    console.log(`Liked product: ${product.name}`);
  };

  const handleComment = (product: Product) => {
    console.log(`Comment on product: ${product.name}`);
  };

  const handleShare = (product: Product) => {
    console.log(`Share product: ${product.name}`);
  };

  const handleBuyNow = (product: Product) => {
    console.log(`Buy product: ${product.name}`);
    window.open(product.affiliate_url, '_blank');
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
      <div className="min-h-screen bg-black text-white">
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
                      <div className="flex flex-col h-screen">
                        {/* Top header */}
                        <div className="flex justify-center items-center py-3 border-b border-gray-800">
                          <div className="text-lg font-bold">For You</div>
                        </div>
                        
                        {/* Main content - TikTok feed */}
                        <div className="flex-1 overflow-hidden">
                          <TikTokFeed 
                            products={sampleProducts}
                            onLike={handleLike}
                            onComment={handleComment}
                            onShare={handleShare}
                            onBuyNow={handleBuyNow}
                          />
                        </div>
                        
                        {/* Bottom navigation */}
                        <TikTokNavBar />
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
          <Route
            path="/discover"
            element={
              user ? (
                <div className="flex flex-col h-screen">
                  <div className="flex justify-center items-center py-3 border-b border-gray-800">
                    <div className="text-lg font-bold">Discover</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-400">Discover page coming soon</p>
                  </div>
                  <TikTokNavBar />
                </div>
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route
            path="/inbox"
            element={
              user ? (
                <div className="flex flex-col h-screen">
                  <div className="flex justify-center items-center py-3 border-b border-gray-800">
                    <div className="text-lg font-bold">Inbox</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-400">Inbox page coming soon</p>
                  </div>
                  <TikTokNavBar />
                </div>
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              user ? (
                <div className="flex flex-col h-screen">
                  <div className="flex justify-center items-center py-3 border-b border-gray-800">
                    <div className="text-lg font-bold">Profile</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-400">Profile page coming soon</p>
                  </div>
                  <TikTokNavBar />
                </div>
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;