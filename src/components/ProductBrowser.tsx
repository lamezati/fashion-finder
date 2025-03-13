import React, { useState, useEffect } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSpring, animated, config } from 'react-spring';
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
  
  // Animation springs
  const [{ x, rotate, scale }, api] = useSpring(() => ({ 
    x: 0, 
    rotate: 0, 
    scale: 1,
    config: {
      tension: 300,
      friction: 20
    }
  }));
  
  // Swipe animation states
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get current product
  const currentProduct = products[currentIndex];

  // Handle end of products
  useEffect(() => {
    if (currentIndex >= products.length && products.length > 0) {
      setCurrentIndex(0);
    }
  }, [currentIndex, products.length]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSwipeDirection(direction);
    
    // Update liked products if swiped right
    if (direction === 'right') {
      setLikedProducts(prev => [...prev, currentProduct.id]);
    }
    
    // Animate the card off screen
    api.start({
      x: direction === 'left' ? -500 : 500,
      rotate: direction === 'left' ? -15 : 15,
      scale: 0.8,
      config: { ...config.gentle },
      onRest: () => {
        // Reset position for next card
        api.start({ x: 0, rotate: 0, scale: 1, immediate: true });
        // Move to next product
        setCurrentIndex(prevIndex => prevIndex + 1);
        // Reset animation states
        setIsAnimating(false);
        setSwipeDirection(null);
        // Callback for parent component
        if (onSwipe) {
          onSwipe(currentProduct, direction);
        }
      }
    });
  };

  const bind = useDrag(({ down, movement: [mx], velocity, direction: [xDir], cancel }) => {
    if (isAnimating) return;
    
    const trigger = velocity > 0.2;
    const dir = xDir > 0 ? 'right' : 'left';
    
    // During drag
    if (down) {
      // Update swipe direction indicator while dragging
      if (mx > 50) {
        setSwipeDirection('right');
      } else if (mx < -50) {
        setSwipeDirection('left');
      } else {
        setSwipeDirection(null);
      }
      
      api.start({ 
        x: mx, 
        rotate: mx * 0.05, 
        scale: 1 - Math.min(Math.abs(mx) * 0.0005, 0.1),
        immediate: false 
      });
    } 
    // End of drag
    else if (!down && (trigger || Math.abs(mx) > 100)) {
      handleSwipe(dir);
      cancel();
    } 
    // Reset if not enough movement
    else {
      setSwipeDirection(null);
      api.start({ x: 0, rotate: 0, scale: 1, config: config.wobbly });
    }
  }, {
    bounds: { left: -200, right: 200 },
    rubberband: true
  });

  // Manual navigation
  const goToPrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setCurrentIndex(prev => prev - 1);
  };

  const goToNext = () => {
    if (isAnimating || currentIndex === products.length - 1) return;
    setCurrentIndex(prev => prev + 1);
  };

  if (!currentProduct) {
    return <div className="text-center p-8">No products available</div>;
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Swipe direction indicators */}
      <div 
        className={`absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-opacity duration-200 ${swipeDirection === 'left' ? 'opacity-70' : 'opacity-0'}`}
      >
        <div className="bg-red-500 rounded-full p-8">
          <X size={80} className="text-white" />
        </div>
      </div>
      <div 
        className={`absolute inset-0 pointer-events-none z-20 flex items-center justify-center transition-opacity duration-200 ${swipeDirection === 'right' ? 'opacity-70' : 'opacity-0'}`}
      >
        <div className="bg-green-500 rounded-full p-8">
          <Heart size={80} className="text-white" />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10 -translate-y-1/2 px-2 md:px-6">
        <button 
          onClick={goToPrevious} 
          disabled={currentIndex === 0 || isAnimating}
          className="bg-white/80 p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext} 
          disabled={currentIndex === products.length - 1 || isAnimating}
          className="bg-white/80 p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product card */}
      <animated.div
        {...bind()}
        style={{
          x,
          rotate,
          scale,
          touchAction: 'none',
        }}
        className="relative w-full mx-auto bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300"
      >
        <div className="relative">
          <img
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {currentProduct.colors[0]}
          </div>
        </div>
        
        <div className="p-4 pb-20 sm:pb-16">
          <h3 className="text-xl font-semibold">{currentProduct.name}</h3>
          <p className="text-gray-600">{currentProduct.brand}</p>
          <p className="text-2xl font-bold mt-2">
            {currentProduct.currency} {currentProduct.price.toFixed(2)}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {currentProduct.sizes.map(size => (
              <span 
                key={size} 
                className="inline-block px-3 py-1 text-sm border border-gray-300 rounded-md"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        
        {/* Fixed bottom action buttons for better mobile visibility */}
        <div className="fixed bottom-0 left-0 right-0 sm:absolute sm:bottom-4 flex justify-center space-x-8 bg-white sm:bg-transparent p-4 sm:p-0 border-t sm:border-0 shadow-md sm:shadow-none z-10">
          <button
            onClick={() => handleSwipe('left')}
            disabled={isAnimating}
            className="p-4 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-600 transition-colors disabled:opacity-70"
            aria-label="Dislike"
          >
            <X size={24} />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            disabled={isAnimating}
            className={`p-4 ${likedProducts.includes(currentProduct.id) ? 'bg-pink-500 hover:bg-pink-600' : 'bg-green-500 hover:bg-green-600'} rounded-full text-white shadow-lg transition-colors disabled:opacity-70`}
            aria-label="Like"
          >
            <Heart size={24} />
          </button>
        </div>
      </animated.div>
      
      {/* Progress indicator */}
      <div className="flex justify-center mt-6 space-x-2 mb-16 sm:mb-0">
        {products.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-purple-600 w-4' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};