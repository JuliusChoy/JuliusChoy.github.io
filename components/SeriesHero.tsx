import React from 'react';
import { Share2, Link, Bookmark } from 'lucide-react';
import { HERO_INTRO_TEXT } from '../constants';

const SeriesHero: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4 mt-8">
      {/* Series Label */}
      <div className="inline-block border-b-2 border-dashed border-scmp-blue mb-4">
        <h2 className="text-scmp-blue font-serif uppercase tracking-widest text-sm font-semibold mb-1">
          SCMP China Series
        </h2>
      </div>

      {/* Main Title */}
      <h1 className="font-display font-bold italic text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
        China’s leadership reshuffle 2022
      </h1>

      {/* Intro Text */}
      <p className="font-serif text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 max-w-3xl mx-auto">
        {HERO_INTRO_TEXT}
      </p>

      {/* Action Bar */}
      <div className="flex items-center justify-center space-x-4 mb-4">
         <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors">
            <Share2 size={18} />
         </button>
         <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors">
            <Link size={18} />
         </button>
         <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-black hover:border-black transition-colors">
            <Bookmark size={18} />
         </button>
      </div>

      <div className="text-xs text-gray-500 font-sans mb-10">
        Updated: 17 Jun, 2022
      </div>

      {/* Hero Image */}
      <div className="w-full mb-16 relative">
        <img 
          src="https://picsum.photos/seed/baton/1200/500" 
          alt="Runners passing baton illustration" 
          className="w-full h-auto object-cover max-h-[500px]"
        />
        {/* Artistic overlay effect to match the gritty style roughly */}
        <div className="absolute inset-0 bg-yellow-900 mix-blend-overlay opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SeriesHero;