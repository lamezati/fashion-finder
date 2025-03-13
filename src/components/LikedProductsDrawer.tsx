import React from 'react';
import { X } from 'lucide-react';
import type { Product } from '../types';

interface LikedProductsDrawerProps {
  isOpen: boolean;
  likedProducts: Product[];
  onClose: () => void;
}

export const LikedProductsDrawer: React.FC<LikedProductsDrawerProps> = ({
  isOpen,
  likedProducts,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-opacity duration-300">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto shadow-xl transform transition-transform duration-300">
        <div className="sticky top-0 flex justify-between items-center p-4 border-b bg-white z-10">
          <h2 className="text-xl font-bold">Your Liked Items</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close drawer"
          >
            <X size={24} />
          </button>
        </div>

        {likedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center h-72">
            <p className="text-gray-500 mb-4">You haven't liked any items yet.</p>
            <p className="text-sm text-gray-400">Swipe right on items you love to see them here!</p>
          </div>
        ) : (
          <div className="p-4 space-y-4 pb-20">
            {likedProducts.map((product) => (
              <div 
                key={product.id}
                className="flex items-center space-x-4 border rounded-lg p-3 hover:bg-gray-50 transition-colors"
              >
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.brand}</p>
                  <p className="font-bold mt-1">
                    {product.currency} {product.price.toFixed(2)}
                  </p>
                </div>
                <a 
                  href={product.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors whitespace-nowrap"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};