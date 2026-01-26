import React from 'react';
import ArticleItem from './ArticleItem';
import { ARTICLES } from '../constants';

const ArticleList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="space-y-4">
        {ARTICLES.map((article, index) => (
          <ArticleItem 
            key={article.id} 
            article={article} 
            index={index + 1} 
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;