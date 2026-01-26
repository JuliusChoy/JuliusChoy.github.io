import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, Printer, MessageSquare } from 'lucide-react';
import { ARTICLES } from '../constants';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="container mx-auto max-w-[1240px] px-4 py-20 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Article not found</h2>
        <Link to="/" className="text-scmp-blue hover:underline">Return to Series</Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto max-w-[1240px] pt-8 px-4 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto mb-6 text-xs font-sans text-gray-500 uppercase tracking-wide flex items-center">
        <Link to="/" className="hover:text-scmp-blue flex items-center">
           <ArrowLeft size={12} className="mr-1" /> Back to Series
        </Link>
        <span className="mx-2 text-gray-300">/</span>
        <span className="text-scmp-blue font-bold">China</span>
        <span className="mx-2 text-gray-300">/</span>
        <span>Politics</span>
      </div>

      <article className="max-w-3xl mx-auto">
        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {article.title}
        </h1>

        {/* Subhead / Description */}
        <h2 className="font-sans text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          {article.description}
        </h2>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-3 mb-8 gap-4">
            <div className="flex items-center text-xs text-gray-500 font-sans">
                <span className="font-bold text-gray-900 mr-2">SCMP Reporter</span>
                <span className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    Published: {article.date}
                </span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
                <button className="hover:text-gray-900 transition-colors"><Share2 size={16} /></button>
                <button className="hover:text-gray-900 transition-colors"><MessageSquare size={16} /></button>
                <button className="hover:text-gray-900 transition-colors"><Printer size={16} /></button>
            </div>
        </div>

        {/* Main Image */}
        <figure className="mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto object-cover rounded-sm"
            />
            <figcaption className="text-xs text-gray-500 mt-2 font-sans italic">
                Photo: Handout
            </figcaption>
        </figure>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none font-serif text-gray-800">
          {article.content.map((paragraph, idx) => (
             <p key={idx} className="mb-6 leading-loose text-[1.1rem]">
                {idx === 0 ? (
                    <span className="float-left text-5xl font-bold font-display text-scmp-blue mr-3 mt-[-10px] leading-none">
                        {paragraph.charAt(0)}
                    </span>
                ) : null}
                {idx === 0 ? paragraph.slice(1) : paragraph}
             </p>
          ))}
        </div>

        {/* End Badge */}
        <div className="flex justify-center my-10">
             <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
             <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
             <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
        </div>

      </article>
    </main>
  );
};

export default ArticlePage;