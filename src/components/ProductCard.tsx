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
    <animated.div
      {...bind()}
      style={{
        transform: x.to((x) => `translateX(${x}px) rotate(${x * 0.1}deg)`),
        touchAction: 'none'
      }}
      className="relative w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.brand}</p>
        <p className="text-2xl font-bold mt-2">
          {product.currency} {product.price.toFixed(2)}
        </p>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
        <button
          onClick={() => onSwipe('left')}
          className="p-4 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-600 transition-colors"
        >
          <X size={24} />
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="p-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors"
        >
          <Heart size={24} />
        </button>
      </div>
    </animated.div>
  );
};