import React, { useState } from 'react';
import { Heart, X, Star, RotateCcw, Send, MapPin } from 'lucide-react';
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
    <div className="relative w-full max-w-sm mx-auto h-[85vh] bg-gray-900 no-select">
      {/* Image Pagination Indicators */}
      <div className="absolute top-2 left-0 right-0 z-10 flex justify-center space-x-1 px-2">
        {product.images.map((_, index) => (
          <div 
            key={index} 
            className={`h-1 rounded-full ${index === currentImageIndex ? 'bg-white w-14' : 'bg-gray-400 w-14 opacity-50'}`}
          />
        ))}
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
        {/* Image with click areas for navigation */}
        <div className="relative w-full h-full">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Left/Right click areas for image navigation */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer" 
            onClick={prevImage}
          />
          <div 
            className="absolute top-0 right-0 w-1/2 h-full z-10 cursor-pointer" 
            onClick={nextImage}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-20" />
          
          {/* Product Info - Tinder-like overlay */}
          <div className="absolute bottom-24 left-0 right-0 p-4 z-30 text-white">
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">{product.name.split(' ')[0]}</h3>
              <span className="text-2xl">{"29"}</span>
            </div>
            
            <div className="flex items-center mt-1 mb-2 opacity-80">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{product.brand}</span>
              <span className="mx-2">•</span>
              <span className="text-sm">{product.currency}{product.price.toFixed(0)}</span>
            </div>
            
            {/* Sizes as tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {product.sizes.map((size) => (
                <span key={size} className="text-xs px-2 py-0.5 bg-gray-800/60 rounded-full">
                  {size}
                </span>
              ))}
              {product.colors.map((color) => (
                <span key={color} className="text-xs px-2 py-0.5 bg-gray-800/60 rounded-full">
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
      
      {/* Action Buttons - Tinder style */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center space-x-4 z-40 px-4">
        <button
          onClick={() => {}}
          className="p-3 bg-white/10 rounded-full text-yellow-400 border border-yellow-400/30 shadow-lg"
          aria-label="Rewind"
        >
          <RotateCcw size={28} />
        </button>
        
        <button
          onClick={() => onSwipe('left')}
          className="p-4 bg-white rounded-full text-pink-500 shadow-lg hover:bg-gray-100 active:scale-95 transform duration-100 interactive-element"
          aria-label="Dislike"
        >
          <X size={32} strokeWidth={3} />
        </button>
        
        <button
          onClick={() => {}}
          className="p-3 bg-white rounded-full text-blue-400 shadow-lg hover:bg-gray-100 active:scale-95 transform duration-100 interactive-element"
          aria-label="Super Like"
        >
          <Star size={30} fill="currentColor" />
        </button>
        
        <button
          onClick={() => onSwipe('right')}
          className="p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 transform duration-100 interactive-element"
          aria-label="Like"
        >
          <Heart size={32} fill="white" />
        </button>
        
        <button
          onClick={() => {}}
          className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white shadow-lg"
          aria-label="Boost"
        >
          <Send size={28} />
        </button>
      </div>
      
      {/* Bottom Navigation (Optional) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black py-3 flex justify-around items-center tab-nav">
        <button className="text-pink-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.009 0C6.292 0 1.657 4.632 1.657 10.347c0 2.764 1.084 5.387 3.053 7.349.391.389.39 1.022-.001 1.41l-1.954 1.95a.975.975 0 0 0 0 1.382.975.975 0 0 0 1.382 0l1.945-1.942a.996.996 0 0 1 1.414 0 10.28 10.28 0 0 0 7.345 3.046c5.717 0 10.348-4.631 10.348-10.347S17.726 0 12.009 0zm-.008 5.7a4.658 4.658 0 0 1 4.653 4.652 4.658 4.658 0 0 1-4.653 4.652 4.658 4.658 0 0 1-4.652-4.652A4.658 4.658 0 0 1 12.001 5.7z"></path></svg></button>
        <button className="text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M2.8 3h18.4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2.8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm.2 16h18V5H3v14zM16 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm9 4h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2z"></path></svg></button>
        <button className="text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.83h.78l4.69 2.83c.78.49 1.48.16 1.33-.82l-1.08-5.75c0-.16 0-.5.23-.66l4.06-3.77c.78-.82.55-1.65-.47-1.65z"></path></svg></button>
        <button className="text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z"></path></svg></button>
        <button className="text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.085 13.2l.292.295a6.201 6.201 0 0 0 1.437-3.987C17.814 5.464 14.383 2 10.407 2 6.43 2 3 5.464 3 9.508c0 4.046 3.43 7.51 7.407 7.51 1.572 0 3.027-.491 4.229-1.329l.291.293-7.887 7.887L8.797 22.5 16.604 14.7l7.806 7.8 1.757-1.757-7.889-7.882 7.887-7.889-1.756-1.756-7.803 7.804-8.778-8.779L6.068 4.9l8.778 8.779 1.757-1.757-7.887-7.891 7.887-7.887L14.847 3.9l-7.889 7.887-9.068-9.068L-3.867 4.47l16.829 16.857a2.362 2.362 0 0 1 3.33 0 2.362 2.362 0 0 1 0 3.33 2.362 2.362 0 0 1-3.33 0l-1.688-1.687-1.757 1.757 1.684 1.684a5.007 5.007 0 0 0 7.07 0 5.007 5.007 0 0 0 0-7.07 5.01 5.01 0 0 0-2.37-1.332l.253-.253z"></path></svg></button>
      </div>
    </div>
  );
};