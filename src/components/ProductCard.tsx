import React, { useState } from 'react';
import { Heart, X, Star, Zap, MapPin, ChevronLeft, ChevronRight, User } from 'lucide-react';
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

  // Get the first word of the product name for the "name" display
  const displayName = product.name.split(' ')[0];
  
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
    <div className="relative w-full max-w-md mx-auto h-[80vh] bg-gray-900 rounded-lg overflow-hidden">
      {/* Main Card with Swipe Animation */}
      <animated.div
        {...bind()}
        style={{
          transform: x.to((x) => `translateX(${x}px) rotate(${x * 0.05}deg)`),
          touchAction: 'none'
        }}
        className="relative w-full h-full overflow-hidden"
      >
        {/* Image */}
        <div className="relative w-full h-full">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation arrows */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-1 bg-black/30 rounded-full text-white z-20 hover:bg-black/50"
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1 bg-black/30 rounded-full text-white z-20 hover:bg-black/50"
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
          
          {/* Gradient overlay for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent z-20" />
          
          {/* Product Info */}
          <div className="absolute bottom-5 left-0 right-0 p-4 z-30 text-white">
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">{displayName}</h3>
              <span className="text-2xl">{product.price ? product.price.toFixed(0) : 29}</span>
              <span className="bg-blue-500 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>
            
            <div className="flex items-center mt-1 text-gray-200">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{product.brand}</span>
              <span className="mx-2">•</span>
              <span className="text-sm">{product.currency}{product.price}</span>
            </div>
            
            {/* Sizes as tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes.map((size, index) => (
                <span 
                  key={size} 
                  className={`text-sm px-2 py-1 rounded-full ${index === 0 ? 'bg-white/20 border border-white/30' : 'bg-white/10'}`}
                >
                  {size}
                </span>
              ))}
              {product.colors.map((color) => (
                <span 
                  key={color} 
                  className="text-sm px-2 py-1 bg-white/10 rounded-full"
                >
                  {color}
                </span>
              ))}
            </div>
            
            {/* Bio/Description with emoji */}
            <div className="mt-3 flex items-center">
              <span className="text-2xl mr-2">😊</span>
              <p className="text-sm">Still figuring it out</p>
            </div>
          </div>
        </div>
      </animated.div>
      
      {/* Action Buttons */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-5 z-40 px-4">
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
      
      {/* Bottom Control Buttons - desktop only */}
      <div className="hidden md:flex absolute bottom-0 left-0 right-0 bg-black/80 py-2 px-2 justify-center items-center space-x-3 border-t border-gray-800 z-50">
        <button className="px-3 py-1 flex items-center text-gray-300 text-sm">
          <X size={14} className="mr-1" /> Nope
        </button>
        <button className="px-3 py-1 flex items-center text-gray-300 text-sm">
          <Heart size={14} className="mr-1" /> Like
        </button>
        <button className="px-3 py-1 flex items-center text-gray-300 text-sm">
          <User size={14} className="mr-1" /> Open Profile
        </button>
        <button className="px-3 py-1 flex items-center text-gray-300 text-sm">
          <X size={14} className="mr-1" /> Close Profile
        </button>
        <button className="px-3 py-1 flex items-center text-gray-300 text-sm">
          <Star size={14} className="mr-1" /> Super Like
        </button>
      </div>
    </div>
  );
};