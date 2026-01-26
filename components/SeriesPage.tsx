import React from 'react';
import SeriesHero from './SeriesHero';
import ArticleList from './ArticleList';
import OtherSeries from './OtherSeries';

const SeriesPage: React.FC = () => {
  return (
    <main className="container mx-auto max-w-[1240px] pt-8 md:pt-12 px-0 md:px-4">
      <SeriesHero />
      <ArticleList />
      <div className="max-w-4xl mx-auto px-4">
          <OtherSeries />
      </div>
    </main>
  );
};

export default SeriesPage;