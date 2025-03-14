import React, { useState, useRef } from 'react';
import { Heart, MessageCircle, Share2, ShoppingBag, Music, ChevronDown, User } from 'lucide-react';
import type { Product } from '../types';

interface TikTokProductCardProps {
  product: Product;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBuyNow?: () => void;
  isActive?: boolean;
}

export const TikTokProductCard: React.FC<TikTokProductCardProps> = ({
  product,
  onLike = () => {},
  onComment = () => {},
  onShare = () => {},
  onBuyNow = () => {},
  isActive = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use the first image as a fallback if we don't have a video
  const productImage = product.images[0];

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike();
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Play/pause video when component becomes active/inactive
  React.useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(e => console.log('Video play error:', e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden snap-start">
      {/* Main content - image or video */}
      <div className="absolute inset-0 w-full h-full">
        {/* For now we're using an image, but this could be replaced with a video */}
        <img 
          src={productImage} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Top bar with brand info */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center z-10">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
            {product.brand.charAt(0)}
          </div>
          <div className="ml-2">
            <p className="text-white font-medium">{product.brand}</p>
            <p className="text-white/70 text-xs">Fashion Brand</p>
          </div>
        </div>
        <button className="ml-auto bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Follow
        </button>
      </div>

      {/* Right side action buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6 z-10">
        <button 
          onClick={handleLike}
          className="flex flex-col items-center"
        >
          <div className={`w-10 h-10 rounded-full bg-black/30 flex items-center justify-center ${isLiked ? 'text-red-500' : 'text-white'}`}>
            <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
          </div>
          <span className="text-white text-xs mt-1">
            {Math.floor(Math.random() * 1000) + 100}
          </span>
        </button>

        <button 
          onClick={onComment}
          className="flex flex-col items-center"
        >
          <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white">
            <MessageCircle size={24} />
          </div>
          <span className="text-white text-xs mt-1">
            {Math.floor(Math.random() * 100) + 10}
          </span>
        </button>

        <button 
          onClick={onShare}
          className="flex flex-col items-center"
        >
          <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white">
            <Share2 size={24} />
          </div>
          <span className="text-white text-xs mt-1">
            Share
          </span>
        </button>

        <button 
          onClick={onBuyNow}
          className="flex flex-col items-center"
        >
          <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white">
            <ShoppingBag size={24} />
          </div>
          <span className="text-white text-xs mt-1">
            Shop
          </span>
        </button>
      </div>

      {/* Bottom product info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="mb-2">
          <h3 className="text-white font-bold text-lg">{product.name}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center bg-black/30 rounded-full px-3 py-1.5">
            <Music size={16} className="text-white mr-2" />
            <div className="overflow-hidden">
              <p className="text-white text-sm whitespace-nowrap animate-marquee">
                Fashion Trend Music - Popular TikTok Song
              </p>
            </div>
          </div>
        </div>

        {/* Product tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.sizes.map(size => (
            <span key={size} className="bg-black/30 text-white text-xs px-2 py-1 rounded-full">
              Size: {size}
            </span>
          ))}
          {product.colors.map(color => (
            <span key={color} className="bg-black/30 text-white text-xs px-2 py-1 rounded-full">
              {color}
            </span>
          ))}
          <span className="bg-black/30 text-white text-xs px-2 py-1 rounded-full">
            {product.currency}{product.price}
          </span>
        </div>

        {/* Buy now button */}
        <button 
          onClick={onBuyNow}
          className="w-full bg-pink-500 text-white py-2 rounded-full font-medium flex items-center justify-center"
        >
          <ShoppingBag size={18} className="mr-2" />
          Buy Now - {product.currency}{product.price}
        </button>
      </div>

      {/* Product details panel (hidden by default) */}
      {showDetails && (
        <div className="absolute inset-0 bg-black/90 z-50 p-4 overflow-y-auto">
          <button 
            onClick={toggleDetails}
            className="absolute top-4 right-4 text-white"
          >
            <ChevronDown size={24} />
          </button>
          
          <div className="mt-10">
            <h2 className="text-white text-xl font-bold mb-4">{product.name}</h2>
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
                {product.brand.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-white font-medium">{product.brand}</p>
                <p className="text-white/70 text-xs">Official Store</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-4">{product.description}</p>
            
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <span key={size} className="bg-white/10 text-white px-3 py-1 rounded-md">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-white font-medium mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <span key={color} className="bg-white/10 text-white px-3 py-1 rounded-md">
                    {color}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-white font-medium mb-2">Price</h3>
              <p className="text-white text-xl font-bold">{product.currency}{product.price}</p>
            </div>
            
            <button 
              onClick={onBuyNow}
              className="w-full bg-pink-500 text-white py-3 rounded-md font-medium"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 