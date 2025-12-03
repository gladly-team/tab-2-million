import React, { useState } from 'react';
import { Monitor, Search, ShoppingBag, Gamepad2, Smartphone, X, Apple, Play } from 'lucide-react';

const SourceItem: React.FC<{ 
    icon: React.ReactNode; 
    label: string; 
    color: string; 
    delay: string; 
    href?: string;
    onClick?: () => void;
}> = ({ icon, label, color, delay, href, onClick }) => {
  const Content = (
    <div className={`flex flex-col items-center group ${delay} w-32 md:w-40`}>
      <div className={`mb-6 p-6 md:p-8 rounded-[2rem] bg-slate-800 border border-slate-700 shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:bg-slate-700 group-hover:border-${color.split('-')[1]}-400/50 w-full aspect-square flex items-center justify-center`}>
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: `w-10 h-10 md:w-16 md:h-16 ${color} transition-transform duration-500 group-hover:scale-110` })}
      </div>
      <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-wide">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
        {Content}
      </a>
    );
  }

  if (onClick) {
    return (
        <button onClick={onClick} className="text-left focus:outline-none">
            {Content}
        </button>
    )
  }

  return Content;
};

const AppModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-fade-in">
            <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-500" />
            </button>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-6 text-center">Get the App</h3>
            <div className="space-y-4">
                <a 
                    href="https://apps.apple.com/ng/app/app-for-a-cause/id6740837141" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all hover:scale-105"
                >
                    <Apple className="w-6 h-6" />
                    <span className="font-bold text-lg">App Store</span>
                </a>
                <a 
                    href="https://play.google.com/store/apps/details?id=io.gladly.appforacause&hl=en-US" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl hover:border-slate-900 transition-all hover:scale-105"
                >
                    <Play className="w-6 h-6 fill-current" />
                    <span className="font-bold text-lg">Google Play</span>
                </a>
            </div>
        </div>
    </div>
)

const ImpactSources: React.FC = () => {
  const [showAppModal, setShowAppModal] = useState(false);

  return (
    <section className="py-32 bg-slate-900 relative z-20">
        {showAppModal && <AppModal onClose={() => setShowAppModal(false)} />}
        
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">The Ecosystem</p>
                <h2 className="font-display font-black text-5xl md:text-7xl text-white tracking-tighter">
                    5 Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Give</span>
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <SourceItem 
                    icon={<Monitor />} 
                    label="Tab" 
                    color="text-blue-400" 
                    delay=""
                    href="https://tab.gladly.io"
                />
                <SourceItem 
                    icon={<Search />} 
                    label="Search" 
                    color="text-purple-400" 
                    delay="md:mt-12"
                    href="https://search.gladly.io"
                />
                <SourceItem 
                    icon={<ShoppingBag />} 
                    label="Shop" 
                    color="text-pink-400" 
                    delay=""
                    href="https://shop.gladly.io"
                />
                <SourceItem 
                    icon={<Gamepad2 />} 
                    label="Game" 
                    color="text-green-400" 
                    delay="md:mt-12"
                />
                 <SourceItem 
                    icon={<Smartphone />} 
                    label="App" 
                    color="text-yellow-400" 
                    delay=""
                    onClick={() => setShowAppModal(true)}
                />
            </div>
        </div>
    </section>
  );
};

export default ImpactSources;