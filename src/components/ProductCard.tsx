import React from 'react';
import { Heart, X } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSwipe: (direction: 'left' | 'right') => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSwipe }) => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

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
    <div className="relative w-full max-w-sm mx-auto">
      {/* Product Tag/Badge at the top right */}
      {product.colors.length > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            {product.colors[0]}
          </span>
        </div>
      )}
      
      {/* Main Card with Swipe Animation */}
      <animated.div
        {...bind()}
        style={{
          transform: x.to((x) => `translateX(${x}px) rotate(${x * 0.1}deg)`),
          touchAction: 'none'
        }}
        className="relative w-full bg-white rounded-xl shadow-lg overflow-hidden no-select"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        
        {/* Product Info */}
        <div className="p-4 pb-20 product-details"> {/* Added extra padding at bottom to make room for action buttons */}
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.brand}</p>
          <p className="text-2xl font-bold mt-2">
            {product.currency} {product.price.toFixed(2)}
          </p>
          
          {/* Sizes */}
          <div className="mt-3">
            <p className="text-sm text-gray-500 mb-1">Available sizes:</p>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <span key={size} className="inline-block px-2 py-1 border border-gray-300 rounded-md text-xs">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
      
      {/* Fixed Action Buttons at Bottom - Outside the swipeable area */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center space-x-8 z-20">
        <button
          onClick={() => onSwipe('left')}
          className="p-4 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-600 transition-colors active:scale-95 transform duration-100 interactive-element"
          aria-label="Dislike"
        >
          <X size={24} />
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="p-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors active:scale-95 transform duration-100 interactive-element"
          aria-label="Like"
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};