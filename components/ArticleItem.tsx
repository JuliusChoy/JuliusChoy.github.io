import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleItemProps {
  article: Article;
  index: number;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article, index }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-gray-100 last:border-0">
      <div className="hidden md:block flex-shrink-0 pt-1">
        <span className="font-serif text-2xl text-scmp-blue italic font-medium opacity-70">
          [{index}]
        </span>
      </div>
      
      <div className="flex-1 order-2 md:order-1">
        <div className="flex items-center md:hidden mb-2">
            <span className="font-serif text-xl text-scmp-blue italic font-medium opacity-70 mr-3">
            [{index}]
            </span>
        </div>
        
        <Link to={`/article/${article.id}`}>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3 hover:text-scmp-blue cursor-pointer transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          {article.description}
        </p>
        <div className="font-sans text-xs text-gray-400 uppercase tracking-wide">
          {article.date}
        </div>
      </div>

      <div className="w-full md:w-64 h-40 md:h-36 flex-shrink-0 order-1 md:order-2">
        <Link to={`/article/${article.id}`}>
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ArticleItem;