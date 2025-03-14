import React, { useState, useEffect } from 'react';
import { Heart, X, Share2, ShoppingBag, MapPin } from 'lucide-react';
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
    <div className="relative w-full max-w-md mx-auto h-[85vh] bg-white rounded-lg overflow-hidden shadow-lg">
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      )}
      
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
          
          {/* Product Info - fashion-focused overlay */}
          <div className="absolute bottom-16 left-0 right-0 p-4 z-30 text-white">
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">{displayName}</h3>
              <div className="flex items-center">
                <span className="text-xl font-medium">{product.currency}{product.price}</span>
              </div>
            </div>
            
            <div className="flex items-center mt-1 text-gray-200">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{product.brand}</span>
            </div>
            
            {/* Size information */}
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes && product.sizes.map((size) => (
                <span 
                  key={size} 
                  className="text-sm px-2 py-1 rounded-full bg-white/20 border border-white/30"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
      
      {/* Bottom action buttons - clearly labeled */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 flex justify-around items-center">
        <button 
          onClick={() => {}}
          className="flex flex-col items-center justify-center"
        >
          <div className="rounded-full bg-blue-500 p-2 mb-1 w-12 h-12 flex items-center justify-center">
            <Share2 size={24} className="text-white" />
          </div>
          <span className="text-xs text-gray-600">Share</span>
        </button>
        
        <button 
          onClick={() => onSwipe('left')}
          className="flex flex-col items-center justify-center"
        >
          <div className="rounded-full bg-red-500 p-2 mb-1 w-12 h-12 flex items-center justify-center">
            <X size={24} className="text-white" />
          </div>
          <span className="text-xs text-gray-600">Dislike</span>
        </button>
        
        <button 
          onClick={() => onSwipe('right')}
          className="flex flex-col items-center justify-center"
        >
          <div className="rounded-full bg-pink-500 p-2 mb-1 w-12 h-12 flex items-center justify-center">
            <Heart size={24} className="text-white" />
          </div>
          <span className="text-xs text-gray-600">Like</span>
        </button>
        
        <button 
          onClick={() => window.open(product.affiliate_url, '_blank')}
          className="flex flex-col items-center justify-center"
        >
          <div className="rounded-full bg-green-500 p-2 mb-1 w-12 h-12 flex items-center justify-center">
            <ShoppingBag size={24} className="text-white" />
          </div>
          <span className="text-xs text-gray-600">Buy Now</span>
        </button>
      </div>
    </div>
  );
};