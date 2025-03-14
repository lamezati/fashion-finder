import React, { useState, useRef, useEffect } from 'react';
import { TikTokProductCard } from './TikTokProductCard';
import type { Product } from '../types';

interface TikTokFeedProps {
  products: Product[];
  onLike?: (product: Product) => void;
  onComment?: (product: Product) => void;
  onShare?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

export const TikTokFeed: React.FC<TikTokFeedProps> = ({
  products,
  onLike,
  onComment,
  onShare,
  onBuyNow,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll to determine which product is currently in view
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const height = container.clientHeight;
    
    // Calculate which product is most visible
    const index = Math.round(scrollTop / height);
    if (index !== activeIndex && index >= 0 && index < products.length) {
      setActiveIndex(index);
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, products.length]);

  return (
    <div 
      ref={containerRef}
      className="h-full overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {products.map((product, index) => (
        <div key={product.id} className="h-full snap-start">
          <TikTokProductCard 
            product={product}
            isActive={index === activeIndex}
            onLike={() => onLike?.(product)}
            onComment={() => onComment?.(product)}
            onShare={() => onShare?.(product)}
            onBuyNow={() => onBuyNow?.(product)}
          />
        </div>
      ))}
    </div>
  );
}; 