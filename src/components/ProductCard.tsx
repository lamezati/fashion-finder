import React, { useState, useEffect } from 'react';
import { Heart, X, Star, RotateCcw, Zap, MapPin, User, X as XIcon } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSwipe: (direction: 'left' | 'right') => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSwipe }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Get the first word of the product name for the "name" display
  const displayName = product.name.split(' ')[0];
  
  // Add effect to log product data to debug
  useEffect(() => {
    console.log("Product data:", product);
    console.log("Current image:", product.images[currentImageIndex]);
  }, [product, currentImageIndex]);
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Function to handle image area clicks for navigation on all devices
  const handleImageAreaClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    
    // If click is on the left side, go to previous image, otherwise go to next
    if (x < rect.width / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };

  const bind = useDrag(({ down, movement: [mx], velocity, direction: [xDir], cancel }) => {
    const trigger = velocity > 0.2;
    
    if (!down && (trigger || Math.abs(mx) > 100)) {
      const dir = xDir > 0 ? 'right' : 'left';
      onSwipe(dir);
      cancel();
    } else {
      api.start({ x: down ? mx : 0, immediate: down });
    }
  }, {
    bounds: { left: -200, right: 200 },
    rubberband: true
  });

  return (
    <div className="relative w-full max-w-md mx-auto h-[70vh] bg-white rounded-lg overflow-hidden shadow-lg">
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      )}
      
      {/* Banner for web exclusive - only on mobile */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-300 to-pink-500 text-white py-1 px-4 flex items-center">
        <span className="text-sm font-medium mr-1">FashionFinder Web Exclusive</span>
        <div className="bg-pink-600 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-xs">Save 10% when you purchase here on Web!</span>
        <button className="ml-auto text-white">
          <XIcon size={16} />
        </button>
      </div>
      
      {/* Main Card with Swipe Animation */}
      <animated.div
        {...bind()}
        style={{
          transform: x.to((x) => `translateX(${x}px) rotate(${x * 0.05}deg)`),
          touchAction: 'none'
        }}
        className="relative w-full h-full overflow-hidden"
      >
        {/* Image - click left/right areas for navigation */}
        <div 
          className="relative w-full h-full" 
          onClick={handleImageAreaClick}
        >
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className={`w-full h-full object-cover ${isImageLoaded ? 'block' : 'hidden'}`}
            onLoad={handleImageLoad}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent z-20" />
          
          {/* Product Info - Tinder-like overlay */}
          <div className="absolute bottom-5 left-0 right-0 p-4 z-30 text-white">
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">{displayName}</h3>
              <div className="flex items-center">
                <span className="text-xl font-medium">{product.currency}{product.price}</span>
                <span className="ml-2 bg-blue-500 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
            </div>
            
            <div className="flex items-center mt-1 text-gray-200">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{product.brand}</span>
            </div>
            
            {/* Sizes as tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes && product.sizes.map((size, index) => (
                <span 
                  key={size} 
                  className={`text-sm px-2 py-1 rounded-full ${index === 0 ? 'bg-white/20 border border-white/30' : 'bg-white/10'}`}
                >
                  {size}
                </span>
              ))}
              {product.colors && product.colors.map((color) => (
                <span 
                  key={color} 
                  className="text-sm px-2 py-1 bg-white/10 rounded-full"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
      
      {/* Action Buttons - Tinder style */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-5 z-40 px-4">
        <button
          onClick={() => {}}
          className="p-2 bg-white/10 rounded-full text-yellow-400 border border-yellow-400/30 shadow-lg hover:bg-white/20 active:scale-95 transition-all"
          aria-label="Rewind"
        >
          <RotateCcw size={26} />
        </button>
        
        <button
          onClick={() => onSwipe('left')}
          className="p-3 bg-white rounded-full text-pink-500 shadow-lg hover:bg-gray-100 active:scale-95 transition-all"
          aria-label="Dislike"
        >
          <X size={30} strokeWidth={2} />
        </button>
        
        <button
          onClick={() => {}}
          className="p-2 bg-white rounded-full text-blue-400 shadow-lg hover:bg-gray-100 active:scale-95 transition-all"
          aria-label="Super Like"
        >
          <Star size={28} fill="currentColor" />
        </button>
        
        <button
          onClick={() => onSwipe('right')}
          className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 transition-all"
          aria-label="Like"
        >
          <Heart size={30} fill="white" />
        </button>
        
        <button
          onClick={() => {}}
          className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 transition-all"
          aria-label="Boost"
        >
          <Zap size={26} />
        </button>
      </div>
      
      {/* Bottom Control Buttons */}
      <div className="hidden md:flex absolute bottom-0 left-0 right-0 bg-white py-2 justify-center items-center space-x-3 border-t border-gray-200 z-50 text-gray-700">
        <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md">
          Hide
        </button>
        <button className="px-3 py-1 flex items-center text-gray-600 text-sm">
          <X size={14} className="mr-1" /> Nope
        </button>
        <button className="px-3 py-1 flex items-center text-gray-600 text-sm">
          <Heart size={14} className="mr-1" /> Like
        </button>
        <button className="px-3 py-1 flex items-center text-gray-600 text-sm">
          <User size={14} className="mr-1" /> Open Profile
        </button>
        <button className="px-3 py-1 flex items-center text-gray-600 text-sm">
          <XIcon size={14} className="mr-1" /> Close Profile
        </button>
        <button className="px-3 py-1 flex items-center text-gray-600 text-sm">
          <Star size={14} className="mr-1" /> Super Like
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md">
          Next Photo
        </button>
      </div>
    </div>
  );
};