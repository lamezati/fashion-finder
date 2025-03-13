import React, { useState, useEffect } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import type { Product } from '../types';

// Sample product images in different colors
const SAMPLE_PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500', // White dress
  'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500', // Blue dress
  'https://images.unsplash.com/photo-1568251188392-f6e7f81f4527?w=500', // Red dress
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500'  // Black dress
];

const PRODUCT_COLORS = ['White', 'Blue', 'Red', 'Black'];

// Generate sample products with different colors
const generateSampleProducts = () => {
  return PRODUCT_COLORS.map((color, index) => ({
    id: `product-${index + 1}`,
    name: `Summer ${color} Dress`,
    brand: 'Fashion Brand',
    price: 89.99,
    currency: '$',
    description: `Beautiful ${color.toLowerCase()} summer dress perfect for any occasion`,
    images: [SAMPLE_PRODUCT_IMAGES[index]],
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [color],
    affiliate_url: `https://example.com/dress/${color.toLowerCase()}`
  }));
};

interface ProductBrowserProps {
  initialProducts?: Product[];
  onSwipe?: (product: Product, direction: 'left' | 'right') => void;
}

export const ProductBrowser: React.FC<ProductBrowserProps> = ({ 
  initialProducts = generateSampleProducts(),
  onSwipe
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // Get current product
  const currentProduct = products[currentIndex];

  // Handle end of products
  useEffect(() => {
    if (currentIndex >= products.length && products.length > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, products.length]);

  const handleSwipe = (direction: 'left' | 'right') => {
    // Update liked products if swiped right
    if (direction === 'right') {
      setLikedProducts(prev => [...prev, currentProduct.id]);
    }
    
    // Animate the card off screen
    api.start({
      x: direction === 'left' ? -500 : 500,
      config: { duration: 300 },
      onRest: () => {
        // Reset position for next card
        api.start({ x: 0, immediate: true });
        // Move to next product
        setCurrentIndex(prevIndex => prevIndex + 1);
        // Callback for parent component
        if (onSwipe) {
          onSwipe(currentProduct, direction);
        }
      }
    });
  };

  const bind = useDrag(({ down, movement: [mx], velocity, direction: [xDir], cancel }) => {
    const trigger = velocity > 0.2;
    
    if (!down && (trigger || Math.abs(mx) > 100)) {
      const dir = xDir > 0 ? 'right' : 'left';
      handleSwipe(dir);
      cancel();
    } else {
      api.start({ x: down ? mx : 0, immediate: down });
    }
  }, {
    bounds: { left: -200, right: 200 },
    rubberband: true
  });

  // Manual navigation
  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(products.length - 1, prev + 1));
  };

  if (!currentProduct) {
    return <div className="text-center p-8">No products available</div>;
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10 -translate-y-1/2 px-4">
        <button 
          onClick={goToPrevious} 
          disabled={currentIndex === 0}
          className="bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext} 
          disabled={currentIndex === products.length - 1}
          className="bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product card */}
      <animated.div
        {...bind()}
        style={{
          transform: x.to((x) => `translateX(${x}px) rotate(${x * 0.05}deg)`),
          touchAction: 'none'
        }}
        className="relative w-full mx-auto bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300"
      >
        <div className="relative">
          <img
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {currentProduct.colors[0]}
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-semibold">{currentProduct.name}</h3>
          <p className="text-gray-600">{currentProduct.brand}</p>
          <p className="text-2xl font-bold mt-2">
            {currentProduct.currency} {currentProduct.price.toFixed(2)}
          </p>
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
          <button
            onClick={() => handleSwipe('left')}
            className="p-4 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-600 transition-colors"
            aria-label="Dislike"
          >
            <X size={24} />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className={`p-4 ${likedProducts.includes(currentProduct.id) ? 'bg-pink-500 hover:bg-pink-600' : 'bg-green-500 hover:bg-green-600'} rounded-full text-white shadow-lg transition-colors`}
            aria-label="Like"
          >
            <Heart size={24} />
          </button>
        </div>
      </animated.div>
      
      {/* Progress indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};