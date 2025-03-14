import React from 'react';
import { Share2, X, Heart, ShoppingBag } from 'lucide-react';

interface BottomActionButtonsProps {
  onShare?: () => void;
  onDislike?: () => void;
  onLike?: () => void;
  onBuyNow?: () => void;
}

export const BottomActionButtons: React.FC<BottomActionButtonsProps> = ({
  onShare = () => {},
  onDislike = () => {},
  onLike = () => {},
  onBuyNow = () => {},
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 z-50 bg-white border-t border-gray-200 md:bg-black md:border-gray-800">
      <button 
        onClick={onShare} 
        className="flex flex-col items-center text-gray-600 hover:text-gray-800 md:text-gray-300 md:hover:text-white transition-colors"
        aria-label="Share"
      >
        <div className="w-12 h-12 bg-gray-200 md:bg-blue-500 rounded-full flex items-center justify-center md:text-white">
          <Share2 size={22} />
        </div>
        <span className="text-xs mt-1">Share</span>
      </button>
      
      <button 
        onClick={onDislike} 
        className="flex flex-col items-center text-gray-600 hover:text-gray-800 md:text-gray-300 md:hover:text-white transition-colors"
        aria-label="Dislike"
      >
        <div className="w-12 h-12 bg-gray-200 md:bg-red-500 rounded-full flex items-center justify-center md:text-white">
          <X size={22} />
        </div>
        <span className="text-xs mt-1">Dislike</span>
      </button>
      
      <button 
        onClick={onLike} 
        className="flex flex-col items-center text-gray-600 hover:text-gray-800 md:text-gray-300 md:hover:text-white transition-colors"
        aria-label="Like"
      >
        <div className="w-12 h-12 bg-pink-100 md:bg-pink-500 rounded-full flex items-center justify-center text-pink-500 md:text-white">
          <Heart size={22} />
        </div>
        <span className="text-xs mt-1">Like</span>
      </button>
      
      <button 
        onClick={onBuyNow} 
        className="flex flex-col items-center text-gray-600 hover:text-gray-800 md:text-gray-300 md:hover:text-white transition-colors"
        aria-label="Buy Now"
      >
        <div className="w-12 h-12 bg-green-100 md:bg-green-500 rounded-full flex items-center justify-center text-green-500 md:text-white">
          <ShoppingBag size={22} />
        </div>
        <span className="text-xs mt-1">Buy Now</span>
      </button>
    </div>
  );
};
