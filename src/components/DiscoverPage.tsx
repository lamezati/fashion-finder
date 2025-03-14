import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Flame, Heart } from 'lucide-react';
import type { Product } from '../types';

// Sample categories for the Discover page
const categories = [
  'All', 'Trending', 'New Arrivals', 'Summer', 'Winter', 'Casual', 
  'Formal', 'Streetwear', 'Vintage', 'Sustainable', 'Luxury',
  'Accessories', 'Shoes', 'Dresses', 'Tops', 'Bottoms'
];

// Sample trending tags
const trendingTags = [
  '#SummerStyle', '#Minimalist', '#Vintage', '#Sustainable', 
  '#OfficeWear', '#PartyOutfit', '#CasualChic', '#StreetStyle'
];

interface DiscoverPageProps {
  products: Product[];
}

export const DiscoverPage: React.FC<DiscoverPageProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  // Set up featured products on component mount
  useEffect(() => {
    // Randomly select 4 products for the featured section
    const randomProducts = [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    
    setFeaturedProducts(randomProducts);
  }, [products]);

  // Filter products based on search query and active category
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery 
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    const matchesCategory = activeCategory === 'All' 
      ? true 
      : product.category === activeCategory || 
        (activeCategory === 'Trending' && featuredProducts.some(p => p.id === product.id));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header with search */}
      <div className="flex justify-between items-center py-3 px-4 border-b border-gray-800">
        <div className="text-xl font-bold">Discover</div>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Main content area with scrolling */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* Categories */}
        <div className="sticky top-0 z-10 bg-black overflow-x-auto whitespace-nowrap py-3 px-4 border-b border-gray-800 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 mr-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured section (only show on All or Trending) */}
        {(activeCategory === 'All' || activeCategory === 'Trending') && !searchQuery && (
          <div className="px-4 py-5">
            <div className="flex items-center mb-3">
              <Flame className="h-5 w-5 text-pink-500 mr-2" />
              <h2 className="text-lg font-bold">Featured Collections</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {featuredProducts.map((product) => (
                <div 
                  key={`featured-${product.id}`}
                  className="relative rounded-lg overflow-hidden bg-gray-900 cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                    <p className="text-white font-medium truncate">{product.name}</p>
                    <p className="text-gray-300 text-sm">{product.brand}</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trending tags section */}
        {!searchQuery && (
          <div className="px-4 py-3 border-t border-gray-800">
            <div className="flex items-center mb-3">
              <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
              <h2 className="text-lg font-bold">Trending Tags</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingTags.map((tag) => (
                <button
                  key={tag}
                  className="bg-gray-800/50 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm flex items-center"
                >
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="relative group rounded-lg overflow-hidden bg-gray-900 cursor-pointer transition-all hover:shadow-lg hover:shadow-pink-500/10"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white font-medium truncate">{product.name}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-gray-300 text-sm">{product.brand}</p>
                    <p className="text-white font-bold">{product.currency}{product.price}</p>
                  </div>
                </div>
                {/* Like button overlay */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-black/50 hover:bg-pink-600 p-1.5 rounded-full text-white">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                {/* Category tag */}
                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col justify-center items-center h-40">
              <p className="text-gray-400 mb-2">No products found</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="text-pink-500 hover:text-pink-400"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Style for hiding scrollbar but allowing scroll */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}; 