import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { 
  Menu, Search, ChevronDown, User, 
  Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Smartphone,
  ArrowLeft, Clock, Share2, Printer, MessageSquare, 
  Link as LinkIcon, Bookmark 
} from 'lucide-react';

// --- TYPES ---

export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  content: string[];
}

export interface OtherSeriesItem {
  id: number;
  title: string;
  imageUrl: string;
}

export interface HeaderLink {
  label: string;
  href: string;
}

// --- CONSTANTS ---

export const HEADER_LINKS: HeaderLink[] = [
  { label: 'Latest', href: '#' },
  { label: 'China', href: '#' },
  { label: 'Economy', href: '#' },
  { label: 'HK', href: '#' },
  { label: 'Asia', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Tech', href: '#' },
  { label: 'Lifestyle', href: '#' },
  { label: 'People & Culture', href: '#' },
  { label: 'World', href: '#' },
  { label: 'Opinion', href: '#' },
  { label: 'Video', href: '#' },
  { label: 'Sport', href: '#' },
  { label: 'PostMag', href: '#' },
  { label: 'Style', href: '#' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Why Chinese leader wants more technocrats in key roles",
    description: "Analyst believe this year's leadership shake-up will see more cadres with backgrounds in science, technology, engineering and mathematics taking on key roles.",
    date: "17 May, 2022",
    imageUrl: "https://picsum.photos/seed/tech/400/250",
    content: [
      "In a significant shift in personnel strategy, the Communist Party of China is increasingly looking to promote cadres with technical backgrounds to key leadership positions. This trend, often referred to as the rise of the 'technocrats', signals a departure from the dominance of career administrators and economists in the top echelons of power.",
      "Analysts suggest that this move is driven by the country's focus on scientific self-reliance and technological innovation as primary drivers of future growth. With challenges ranging from semiconductor manufacturing to green energy transition, the leadership believes that officials with specialized knowledge in science, technology, engineering, and mathematics (STEM) are better equipped to steer the nation's development.",
      "President Xi Jinping has repeatedly emphasized the importance of science and technology in achieving the 'great rejuvenation of the Chinese nation'. This rhetoric is now translating into concrete personnel decisions at the provincial and ministerial levels, where a growing number of newly appointed officials boast advanced degrees in engineering and natural sciences.",
      "This shift also reflects a broader effort to modernize the governance system. By integrating scientific expertise into policy-making, the party aims to enhance the precision and effectiveness of its administration. However, observers note that while technical skills are valued, political loyalty remains the paramount criterion for advancement within the party hierarchy."
    ]
  },
  {
    id: 2,
    title: "China's children of the 70s start to come to the fore",
    description: "Cadres born in the 1970s are starting to move up the Communist Party career ladder as they prepare for more senior roles.",
    date: "23 May, 2022",
    imageUrl: "https://picsum.photos/seed/run/400/250",
    content: [
      "A new generation of political leaders is emerging in China: the '70s generation'. Born during the tumultuous final years of the Cultural Revolution and coming of age during the era of Reform and Opening Up, this cohort brings a distinct set of experiences and perspectives to the table.",
      "Unlike their predecessors, many of whom were educated in the Soviet Union or had their education disrupted by political turmoil, the 70s generation benefited from the restoration of the national university entrance exam. Many have also had exposure to Western management concepts and international practices, making them potentially more adaptable to the complexities of a globalized world.",
      "As they ascend to vice-ministerial and provincial standing committee positions, these cadres are being tested in high-pressure environments. Their performance in areas such as economic development, environmental protection, and social stability will determine their future trajectory towards the highest levels of national leadership.",
      "Political analysts are closely watching this group for clues about the future direction of Chinese policy. While they are expected to adhere strictly to the party line, their unique generational background may influence their approach to problem-solving and governance in subtle but significant ways."
    ]
  },
  {
    id: 3,
    title: "Who can fill the shoes of China's Iron Lady Sun Chunlan on Politburo?",
    description: "For two years she has ruled the country's Covid-19 response with an iron fist, but at 72 the vice-premier is expected to step down at this year's party congress.",
    date: "17 Jun, 2022",
    imageUrl: "https://picsum.photos/seed/pol/400/250",
    content: [
      "Vice-Premier Sun Chunlan, the only woman in the current Politburo, has been a ubiquitous figure in China's battle against COVID-19. Known for her decisive and uncompromising style, she has earned the moniker 'Iron Lady' for her role in enforcing stringent lockdown measures across the country.",
      "However, as the 20th Party Congress approaches, Sun, now 72, is expected to retire, leaving a significant void in the country's top leadership. The question of who will succeed her—and whether another woman will take a seat at the Politburo table—is a subject of intense speculation among political observers.",
      "Finding a successor with Sun's unique blend of political clout and administrative experience will be a challenge. Her portfolio, which covers not only public health but also education and sports, requires a leader who can navigate complex bureaucratic landscapes and mobilize vast resources at a moment's notice.",
      "The lack of female representation in the highest echelons of Chinese politics remains a structural issue. While there are capable female cadres rising through the ranks, the path to the Politburo remains exceptionally narrow. Sun's retirement brings this disparity into sharp focus, raising questions about the party's commitment to gender diversity in its leadership core."
    ]
  }
];

export const OTHER_SERIES: OtherSeriesItem[] = [
  { id: 1, title: "Beijing's recalibration of its Taiwan policy", imageUrl: "https://picsum.photos/seed/tw/100/100" },
  { id: 2, title: "China Inc. goes global", imageUrl: "https://picsum.photos/seed/global/100/100" },
  { id: 3, title: "The new narrative: how China is telling its own story", imageUrl: "https://picsum.photos/seed/flag/100/100" },
  { id: 4, title: "China's 15th 5-year plan", imageUrl: "https://picsum.photos/seed/plan/100/100" },
];

export const HERO_INTRO_TEXT = "The Communist Party of China will undergo a major leadership shake-up at its party congress in the second half of 2022. In this series, the South China Morning Post looks at what the party's next generation of leaders might look like.";

// --- COMPONENTS ---

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

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-4 border-black pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 border-b border-gray-200 pb-8">
          <div className="mb-6 md:mb-0">
             <div className="flex items-center space-x-3 mb-4">
                {/* Geometric Logo: Yellow/Blue bars */}
                <div className="flex h-8 w-10">
                    <div className="w-1/2 bg-scmp-gold"></div>
                    <div className="w-1/2 bg-scmp-blue"></div>
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">South China Morning Post</span>
             </div>
          </div>
          <div className="flex space-x-3 text-gray-400">
            <div className="p-2 border border-gray-300 rounded-full hover:border-black hover:text-black cursor-pointer transition-colors"><Facebook size={18} /></div>
            <div className="p-2 border border-gray-300 rounded-full hover:border-black hover:text-black cursor-pointer transition-colors"><Twitter size={18} /></div>
            <div className="p-2 border border-gray-300 rounded-full hover:border-black hover:text-black cursor-pointer transition-colors"><Youtube size={18} /></div>
            <div className="p-2 border border-gray-300 rounded-full hover:border-black hover:text-black cursor-pointer transition-colors"><Instagram size={18} /></div>
            <div className="p-2 border border-gray-300 rounded-full hover:border-black hover:text-black cursor-pointer transition-colors"><Linkedin size={18} /></div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm font-sans mb-12">
            <div>
                <h5 className="font-bold text-black mb-4">Company</h5>
                <ul className="space-y-2 text-gray-600">
                    <li><a href="#" className="hover:underline">About SCMP</a></li>
                    <li><a href="#" className="hover:underline">Policies & Standards</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:underline">Careers with SCMP</a></li>
                    <li><a href="#" className="hover:underline">Help Centre</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-black mb-4">SCMP.com</h5>
                <ul className="space-y-2 text-gray-600">
                    <li><a href="#" className="hover:underline">Latest</a></li>
                    <li><a href="#" className="hover:underline">Hong Kong</a></li>
                    <li><a href="#" className="hover:underline">China</a></li>
                    <li><a href="#" className="hover:underline">Asia</a></li>
                    <li><a href="#" className="hover:underline">World</a></li>
                    <li><a href="#" className="hover:underline">Business</a></li>
                    <li><a href="#" className="hover:underline">Economy</a></li>
                    <li><a href="#" className="hover:underline">Tech</a></li>
                    <li><a href="#" className="hover:underline">Lifestyle</a></li>
                    <li><a href="#" className="hover:underline">Opinion</a></li>
                </ul>
            </div>
             <div>
                <h5 className="font-bold text-black mb-4">More</h5>
                <ul className="space-y-2 text-gray-600">
                    <li><a href="#" className="hover:underline">Video</a></li>
                    <li><a href="#" className="hover:underline">Pictures</a></li>
                    <li><a href="#" className="hover:underline">Infographics</a></li>
                    <li><a href="#" className="hover:underline">Games</a></li>
                    <li><a href="#" className="hover:underline">SCMP Series</a></li>
                    <li><a href="#" className="hover:underline">Spotlight</a></li>
                    <li><a href="#" className="hover:underline">All Topics</a></li>
                    <li><a href="#" className="hover:underline">All Authors</a></li>
                    <li><a href="#" className="hover:underline">RSS Feeds</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-black mb-4">Products</h5>
                <ul className="space-y-2 text-gray-600">
                    <li><a href="#" className="hover:underline">Mobile & apps</a></li>
                    <li><a href="#" className="hover:underline">ePaper</a></li>
                    <li><a href="#" className="hover:underline">SCMP Plus</a></li>
                    <li><a href="#" className="hover:underline">Style</a></li>
                    <li><a href="#" className="hover:underline">PostMag</a></li>
                    <li><a href="#" className="hover:underline">100 Top Tables</a></li>
                    <li><a href="#" className="hover:underline">HK Racing</a></li>
                    <li><a href="#" className="hover:underline">Young Post</a></li>
                </ul>
            </div>
            
            {/* Subscription Box (Spans 2 columns on large) */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 border-l border-gray-200 pl-0 md:pl-8">
                <div className="mb-8">
                    <h5 className="font-bold text-black mb-2">Subscribe to the SCMP</h5>
                    <p className="text-gray-500 mb-4 text-xs">Critical insights and analysis on China that matter to the world</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-sm w-full md:w-auto text-sm transition-colors">
                        SUBSCRIBE
                    </button>
                </div>

                <div className="mb-8">
                    <h5 className="font-bold text-black mb-2">Sign up for our newsletters</h5>
                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2 px-4 rounded-sm flex items-center justify-center space-x-2 w-full md:w-auto text-sm transition-colors">
                        <Mail size={16} />
                        <span>FIND OUT MORE</span>
                    </button>
                </div>
                 
                 <div>
                    <h5 className="font-bold text-black mb-2">Read more in the SCMP App</h5>
                    <div className="flex space-x-2">
                        <button className="border border-black rounded px-3 py-1 flex items-center space-x-1 hover:bg-gray-100">
                             <Smartphone size={16} />
                             <span className="text-xs font-semibold">App Store</span>
                        </button>
                        <button className="border border-black rounded px-3 py-1 flex items-center space-x-1 hover:bg-gray-100">
                             <Smartphone size={16} />
                             <span className="text-xs font-semibold">Google Play</span>
                        </button>
                    </div>
                 </div>
            </div>
        </div>
        
        <div className="text-center text-xs text-gray-400 border-t border-gray-200 pt-8">
            Copyright © 2022 South China Morning Post Publishers Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const ArticleItem: React.FC<{ article: Article; index: number }> = ({ article, index }) => {
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
            <LinkIcon size={18} />
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

// --- PAGES ---

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

// --- APP ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Header />
        
        <Routes>
          <Route path="/" element={<SeriesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;