import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Tab for a Cause</h3>
            <p className="text-slate-400 text-sm max-w-sm">
                The easiest way to make a difference. Join the movement and start raising money for charity with every tab you open.
            </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
            <p className="flex items-center text-slate-400 text-sm mb-2">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> by the Tab team
            </p>
            <div className="flex space-x-6">
                <a href="https://tab.gladly.io/privacy-policy/" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
                <a href="https://tab.gladly.io/terms/" className="text-slate-500 hover:text-white transition-colors">Terms</a>
                <a href="https://tab.gladly.io/contact/" className="text-slate-500 hover:text-white transition-colors">Contact</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;