import React, { useState } from 'react';
import { Menu, Search, ChevronDown, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HEADER_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 lg:px-0 max-w-[1240px]">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-1 hover:bg-gray-100 rounded flex items-center justify-center">
              {/* Geometric Logo: Yellow/Blue bars */}
              <div className="flex h-6 w-8">
                <div className="w-1/2 bg-scmp-gold"></div>
                <div className="w-1/2 bg-scmp-blue"></div>
              </div>
            </Link>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            <button className="hidden md:block bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
              myNews
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm font-sans font-medium text-gray-700 overflow-x-auto no-scrollbar">
            {HEADER_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="whitespace-nowrap hover:text-scmp-blue transition-colors">
                {link.label}
              </a>
            ))}
            <div className="flex items-center cursor-pointer hover:text-scmp-blue">
              <span>All</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
             <button className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-sm transition-colors">
               SUBSCRIBE
             </button>
             <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full border border-transparent hover:border-gray-200">
                <User className="w-6 h-6" />
             </button>
             <button 
                className="lg:hidden p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
                <Menu className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2">
            {HEADER_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                {link.label}
              </a>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;