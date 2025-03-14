import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './components/AuthPage';
import { StylePreferences } from './components/StylePreferences';
import { PreferencesPrompt } from './components/PreferencesPrompt';
import { TikTokFeed } from './components/TikTokFeed';
import { TikTokNavBar } from './components/TikTokNavBar';
import { DiscoverPage } from './components/DiscoverPage';
import type { Product } from './types';

function App() {
  const { user, loading, debugUserState } = useAuthStore();

  // Call debug function on every render
  useEffect(() => {
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
    },
    {
      id: '4',
      name: 'Leather Biker Jacket',
      brand: 'AllSaints',
      price: 299,
      currency: '$',
      description: 'Classic black leather biker jacket with silver hardware',
      images: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
        'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500'
      ],
      category: 'Jackets',
      sizes: ['S', 'M', 'L'],
      colors: ['Black'],
      affiliate_url: 'https://example.com/leather-jacket',
    },
    {
      id: '5',
      name: 'Slim Fit Jeans',
      brand: 'Levi\'s',
      price: 79,
      currency: '$',
      description: 'Classic blue slim fit jeans with stretch comfort',
      images: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
        'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500'
      ],
      category: 'Bottoms',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Blue'],
      affiliate_url: 'https://example.com/jeans',
    },
    {
      id: '6',
      name: 'Cashmere Sweater',
      brand: 'Uniqlo',
      price: 89,
      currency: '$',
      description: 'Soft and warm cashmere sweater for winter',
      images: [
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500',
        'https://images.unsplash.com/photo-1611911813383-67769b37a149?w=500'
      ],
      category: 'Tops',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Beige', 'Gray', 'Black'],
      affiliate_url: 'https://example.com/sweater',
    },
    {
      id: '7',
      name: 'Floral Maxi Dress',
      brand: 'H&M',
      price: 49,
      currency: '$',
      description: 'Flowing floral maxi dress perfect for summer',
      images: [
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500',
        'https://images.unsplash.com/photo-1583846552345-d9650d2c9cca?w=500'
      ],
      category: 'Dresses',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Floral'],
      affiliate_url: 'https://example.com/maxi-dress',
    },
    {
      id: '8',
      name: 'White Sneakers',
      brand: 'Adidas',
      price: 110,
      currency: '$',
      description: 'Classic white sneakers with comfortable cushioning',
      images: [
        'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500',
        'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500'
      ],
      category: 'Shoes',
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['White'],
      affiliate_url: 'https://example.com/sneakers',
    },
    {
      id: '9',
      name: 'Silk Blouse',
      brand: 'Everlane',
      price: 88,
      currency: '$',
      description: 'Elegant silk blouse for professional settings',
      images: [
        'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500',
        'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500'
      ],
      category: 'Tops',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Black', 'Navy'],
      affiliate_url: 'https://example.com/blouse',
    },
    {
      id: '10',
      name: 'Leather Crossbody Bag',
      brand: 'Coach',
      price: 195,
      currency: '$',
      description: 'Stylish leather crossbody bag with gold hardware',
      images: [
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500',
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500'
      ],
      category: 'Accessories',
      sizes: ['One Size'],
      colors: ['Brown', 'Black'],
      affiliate_url: 'https://example.com/bag',
    },
    {
      id: '11',
      name: 'Linen Shirt',
      brand: 'J.Crew',
      price: 65,
      currency: '$',
      description: 'Breathable linen shirt for summer days',
      images: [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
        'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500'
      ],
      category: 'Tops',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Blue', 'Beige'],
      affiliate_url: 'https://example.com/linen-shirt',
    },
    {
      id: '12',
      name: 'Pleated Midi Skirt',
      brand: 'COS',
      price: 99,
      currency: '$',
      description: 'Elegant pleated midi skirt for office or evening',
      images: [
        'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500',
        'https://images.unsplash.com/photo-1577900232427-18219b8349fd?w=500'
      ],
      category: 'Bottoms',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Black', 'Navy', 'Beige'],
      affiliate_url: 'https://example.com/skirt',
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
  const basename = import.meta.env.DEV ? '/' : '/fashion-finder';

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
                  
                  // Check if this is a new account or the user is flagged as new
                  if (user.is_new_user === true) {
                    // Clear the new user flag after displaying preferences
                    sessionStorage.setItem('newUserRegistration', 'true');
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
                  <DiscoverPage products={sampleProducts} />
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