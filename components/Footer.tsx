import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Smartphone } from 'lucide-react';

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

export default Footer;