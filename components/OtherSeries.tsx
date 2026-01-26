import React from 'react';
import { OTHER_SERIES } from '../constants';

const OtherSeries: React.FC = () => {
  return (
    <div className="bg-slate-100 p-6 md:p-8 rounded-sm my-12">
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-2">
        <h3 className="font-serif text-lg text-scmp-blue italic font-semibold">
          Other SCMP Series
        </h3>
        <a href="#" className="font-sans text-xs text-blue-600 hover:underline">
          View all series
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {OTHER_SERIES.map((item) => (
          <div key={item.id} className="bg-white p-3 border border-gray-200 flex items-start space-x-3 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1">
              <h4 className="font-serif text-sm font-bold text-gray-800 leading-snug line-clamp-3">
                {item.title}
              </h4>
            </div>
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-16 h-16 object-cover flex-shrink-0 border border-gray-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSeries;