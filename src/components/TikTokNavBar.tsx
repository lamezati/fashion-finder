import React from 'react';
import { Home, Search, Plus, MessageSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const TikTokNavBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-2 z-50">
      <div className="flex justify-around items-center">
        <Link 
          to="/" 
          className={`flex flex-col items-center ${currentPath === '/' ? 'text-white' : 'text-gray-500'}`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/discover" 
          className={`flex flex-col items-center ${currentPath === '/discover' ? 'text-white' : 'text-gray-500'}`}
        >
          <Search size={24} />
          <span className="text-xs mt-1">Discover</span>
        </Link>
        
        <button className="flex flex-col items-center">
          <div className="w-12 h-8 flex items-center justify-center bg-gradient-to-r from-pink-500 to-blue-500 rounded-md">
            <Plus size={20} className="text-white" />
          </div>
        </button>
        
        <Link 
          to="/inbox" 
          className={`flex flex-col items-center ${currentPath === '/inbox' ? 'text-white' : 'text-gray-500'}`}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">Inbox</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center ${currentPath === '/profile' ? 'text-white' : 'text-gray-500'}`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
}; 