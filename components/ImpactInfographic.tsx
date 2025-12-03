
import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import ShareModal from './ShareModal';

interface ShareItem {
  title: string;
  value: string;
  description: string;
  image: string;
  color: string;
  contextText: string;
}

// Moved Section outside to avoid recreation on every render
const Section = ({ 
  children, 
  className = "" 
}: { children?: React.ReactNode, className?: string }) => (
  <div className={`relative w-full flex flex-col items-center justify-center py-24 ${className}`}>
      {children}
  </div>
);

const ImpactInfographic: React.FC = () => {
  const [shareItem, setShareItem] = useState<ShareItem | null>(null);

  const handleShareClick = (item: ShareItem) => {
    setShareItem(item);
  };

  const ShareTrigger = ({ item, darkText = false }: { item: ShareItem, darkText?: boolean }) => (
    <button 
        onClick={() => handleShareClick(item)}
        className={`inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-xl hover:-translate-y-1 ${darkText ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
    >
        Share This Impact <Share2 className="w-4 h-4" />
    </button>
  );

  return (
    <div className="overflow-hidden bg-[#FDFBF7]">
      <ShareModal 
        isOpen={!!shareItem} 
        onClose={() => setShareItem(null)} 
        data={shareItem} 
      />

      {/* HEADER SECTION */}
      <Section className="py-32 md:py-48 bg-[#FDFBF7]">
         <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <h2 className="font-display font-black text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tighter mb-6">
                Online actions turn into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">real world impact.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
                Every tab, search, and purchase adds up to massive change for our planet and its people.
            </p>
         </div>
      </Section>

      {/* SECTION 2: PLASTIC & TREES (Split) */}
      <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Plastic */}
          <div className="relative bg-[#083344] flex flex-col items-center justify-center p-12 overflow-hidden min-h-[800px]">
               {/* Complex Graphic Background: Ocean Currents & Debris */}
               <div className="absolute inset-0">
                   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                       <defs>
                           <linearGradient id="deepWater" x1="0%" y1="0%" x2="0%" y2="100%">
                               <stop offset="0%" stopColor="#155e75" />
                               <stop offset="100%" stopColor="#083344" />
                           </linearGradient>
                       </defs>
                       {/* Abstract Currents */}
                       <path d="M-100 100 Q 200 300 500 100 T 1100 200" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.5"/>
                       <path d="M-100 300 Q 300 500 700 300 T 1300 400" fill="none" stroke="#22d3ee" strokeWidth="4" opacity="0.3"/>
                       <path d="M-100 600 Q 400 800 800 600 T 1400 700" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.7"/>
                       
                       {/* Geometric "Plastic" Debris */}
                       <circle cx="10%" cy="20%" r="5" fill="#facc15" opacity="0.6" />
                       <rect x="80%" y="15%" width="15" height="15" transform="rotate(15)" fill="#f472b6" opacity="0.5" />
                       <path d="M50 700 L70 730 L30 730 Z" fill="#4ade80" opacity="0.4" />
                       <circle cx="90%" cy="80%" r="10" fill="#ffffff" opacity="0.2" />
                       <rect x="20%" y="85%" width="20" height="8" transform="rotate(-15)" fill="#fb923c" opacity="0.5" />
                   </svg>
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#083344] opacity-80"></div>
               </div>
               
               <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
                   <div className="w-64 h-64 md:w-80 md:h-80 mb-12 relative rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden border-4 border-white/10 bg-slate-800">
                       <img src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dense Ocean Plastic" />
                   </div>
                   
                   <h3 className="font-display font-black text-5xl md:text-7xl text-white mb-2 leading-none drop-shadow-lg">20,000</h3>
                   <p className="text-xl font-bold uppercase tracking-widest text-cyan-400">Lbs of Plastic Removed</p>
                   <p className="mt-6 text-cyan-100/80 text-lg leading-relaxed font-medium">
                       From the ocean through the Ocean Cleanup Project.
                   </p>
                   <ShareTrigger item={{
                        title: "Ocean Plastic",
                        value: "20,000 lbs",
                        description: "Of plastic removed.",
                        image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=800&auto=format&fit=crop",
                        color: "bg-cyan-600",
                        contextText: "We helped remove over 20,000 lbs of plastic from the ocean."
                    }} />
               </div>
          </div>

          {/* Trees */}
          <div className="relative bg-[#022c22] flex flex-col items-center justify-center p-12 overflow-hidden min-h-[800px]">
               {/* Graphic Background: Growth Rings */}
               <div className="absolute inset-0">
                   <svg width="100%" height="100%" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className="opacity-10 text-emerald-400">
                        <circle cx="400" cy="400" r="100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
                        <circle cx="400" cy="400" r="180" fill="none" stroke="currentColor" strokeWidth="4" />
                        <circle cx="400" cy="400" r="280" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.5" />
                        <circle cx="400" cy="400" r="550" fill="none" stroke="currentColor" strokeWidth="2" />
                        {/* Organic accents */}
                        <path d="M400 400 L800 0" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                        <path d="M400 400 L0 800" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                   </svg>
               </div>

               <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
                   <div className="w-64 h-64 md:w-80 md:h-80 mb-12 relative -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden border-4 border-white/10 bg-slate-800">
                       <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Planting Trees" />
                   </div>

                   <h3 className="font-display font-black text-5xl md:text-7xl text-white mb-2 leading-none drop-shadow-lg">100,000</h3>
                   <p className="text-xl font-bold uppercase tracking-widest text-emerald-400">Trees Planted</p>
                   <p className="mt-6 text-emerald-100/80 text-lg leading-relaxed font-medium">
                       Restoring mangrove forests with Eden Reforestation Project.
                   </p>
                    <ShareTrigger item={{
                        title: "Reforestation",
                        value: "100,000",
                        description: "Trees planted.",
                        image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=800&auto=format&fit=crop",
                        color: "bg-green-600",
                        contextText: "We've planted over 100,000 mangrove trees with Eden Reforestation Projects."
                    }} />
               </div>
          </div>
      </div>

      {/* SECTION 3: RAINFOREST (Feature) */}
      <Section className="bg-[#14532d] text-white min-h-[800px] overflow-hidden">
           {/* Graphic Background: Canopy & Texture + Trees */}
           <div className="absolute inset-0 opacity-20">
               <svg width="100%" height="100%" preserveAspectRatio="none" className="text-green-400">
                   <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                   </filter>
                   <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
                   
                   {/* Large Abstract Leaves */}
                   <path d="M0 0 Q 300 100 400 400 T 800 800" fill="none" stroke="currentColor" strokeWidth="100" opacity="0.1" />
                   <path d="M800 0 Q 500 300 400 400 T 0 800" fill="none" stroke="currentColor" strokeWidth="80" opacity="0.1" />

                   {/* Background Tree Silhouettes */}
                    <g transform="translate(100, 200) scale(2)" opacity="0.2" fill="currentColor">
                        <path d="M50 0 L90 100 L10 100 Z" />
                        <rect x="40" y="100" width="20" height="40" />
                    </g>
                    <g transform="translate(800, 100) scale(3)" opacity="0.15" fill="currentColor">
                         <path d="M50 0 L100 80 L0 80 Z" />
                         <rect x="40" y="80" width="20" height="30" />
                    </g>
                    <g transform="translate(400, 50) scale(1.5)" opacity="0.1" fill="currentColor">
                         <circle cx="50" cy="50" r="50" />
                         <rect x="40" y="100" width="20" height="50" />
                    </g>
               </svg>
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#14532d] via-transparent to-[#14532d] opacity-90"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 px-6 max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] rotate-2 hover:rotate-0 transition-all duration-700 bg-slate-800 border-4 border-white/5">
                      <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Rainforest" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
              </div>
              
              <div className="w-full md:w-1/2 text-center md:text-left">
                   <h2 className="font-display font-black text-[12vw] md:text-[10rem] leading-none text-green-300 mix-blend-overlay opacity-80">8,000</h2>
                   <p className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6 drop-shadow-md">Acres Preserved</p>
                   <p className="text-xl text-green-100 max-w-lg mb-8 leading-relaxed font-medium">
                       Protecting critical rainforest habitat with Conservation International, ensuring biodiversity thrives for generations.
                   </p>
                   <ShareTrigger item={{
                        title: "Rainforest",
                        value: "8,000 Acres",
                        description: "Preserved forever.",
                        image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop",
                        color: "bg-green-700",
                        contextText: "Helping preserve over 8,000 acres of rainforest."
                    }} />
              </div>
          </div>
      </Section>

      {/* SECTION 4: VACCINES & NUTRITION (Split) */}
      <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Vaccines */}
          <div className="relative bg-[#7f1d1d] flex flex-col items-center justify-center p-12 overflow-hidden min-h-[800px]">
               {/* Graphic Background: Protection Grid */}
               <div className="absolute inset-0 opacity-10">
                   <svg width="100%" height="100%" className="text-red-300">
                        <pattern id="crosses" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                             <path d="M30 10 L50 10 L50 30 L70 30 L70 50 L50 50 L50 70 L30 70 L30 50 L10 50 L10 30 L30 30 Z" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#crosses)" />
                        <circle cx="50%" cy="50%" r="300" stroke="currentColor" strokeWidth="20" fill="none" opacity="0.3" />
                   </svg>
               </div>
               
               <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
                   <div className="w-64 h-64 md:w-80 md:h-80 mb-12 relative rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-full overflow-hidden border-8 border-red-800/50 bg-slate-800">
                       <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Smiling Children" />
                   </div>

                   <h3 className="font-display font-black text-5xl md:text-7xl text-white mb-2 leading-none drop-shadow-lg">150,000</h3>
                   <p className="text-xl font-bold uppercase tracking-widest text-red-300">Essential Vaccines</p>
                   <p className="mt-6 text-red-100/80 text-lg leading-relaxed font-medium">
                       Provided to children with Save the Children, protecting the most vulnerable lives.
                   </p>
                   <ShareTrigger item={{
                        title: "Vaccines",
                        value: "150,000",
                        description: "Vaccines provided.",
                        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
                        color: "bg-red-500",
                        contextText: "We provided over 150,000 essential vaccines to children in need."
                    }} />
               </div>
          </div>

          {/* Nutrition */}
          <div className="relative bg-[#c2410c] flex flex-col items-center justify-center p-12 overflow-hidden min-h-[800px]">
               {/* Graphic Background: Sunburst */}
               <div className="absolute inset-0 opacity-10">
                   <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                       <g className="text-orange-200">
                            {[...Array(12)].map((_, i) => (
                                <rect 
                                    key={i} 
                                    x="90" y="-100" width="20" height="200" 
                                    transform={`rotate(${i * 30} 100 100)`} 
                                    fill="currentColor" 
                                />
                            ))}
                       </g>
                       <circle cx="100" cy="100" r="50" fill="currentColor" opacity="0.5" />
                   </svg>
               </div>

               <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
                   <div className="w-64 h-64 md:w-80 md:h-80 mb-12 relative -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden border-4 border-white/20 bg-slate-800">
                       <img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Child Nutrition" />
                   </div>

                   <h3 className="font-display font-black text-5xl md:text-7xl text-white mb-2 leading-none drop-shadow-lg">450,000</h3>
                   <p className="text-xl font-bold uppercase tracking-widest text-orange-200">Nutrition Packets</p>
                   <p className="mt-6 text-orange-100/90 text-lg leading-relaxed font-medium">
                       Emergency nutrition distributed through Action Against Hunger.
                   </p>
                   <ShareTrigger item={{
                        title: "Nutrition",
                        value: "450,000",
                        description: "Nutrition packets.",
                        image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=800&auto=format&fit=crop",
                        color: "bg-orange-500",
                        contextText: "Over 450,000 packets of emergency nutrition distributed."
                    }} />
               </div>
          </div>
      </div>

       {/* SECTION 5: WATER (Feature) */}
      <Section className="bg-[#e0f2fe] py-32 overflow-hidden">
          {/* Graphic Background: Ripples & Flow + Droplets */}
          <div className="absolute inset-0 opacity-40">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                   <path d="M0 800 C 300 700 500 900 1000 600 L 1000 1000 L 0 1000 Z" fill="#bae6fd" />
                   <path d="M0 900 C 400 850 600 950 1200 800 L 1200 1000 L 0 1000 Z" fill="#7dd3fc" />
                   <circle cx="80%" cy="30%" r="200" fill="url(#grad1)" opacity="0.3" />
                   
                   {/* Droplets */}
                   <path d="M200 100 Q 220 150 200 200 Q 180 150 200 100" fill="#38bdf8" opacity="0.6" transform="scale(1.5)"/>
                   <path d="M800 50 Q 820 100 800 150 Q 780 100 800 50" fill="#38bdf8" opacity="0.4" transform="scale(2) translate(100, 50)"/>
                   <path d="M100 400 Q 110 420 100 440 Q 90 420 100 400" fill="#38bdf8" opacity="0.5" transform="scale(3)"/>
                   <path d="M1200 200 Q 1230 250 1200 300 Q 1170 250 1200 200" fill="#38bdf8" opacity="0.3" transform="scale(1.2)"/>

                   <defs>
                       <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                           <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                           <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
                       </radialGradient>
                   </defs>
               </svg>
           </div>

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className="w-full md:w-1/2 relative order-2 md:order-1">
                   <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(56,189,248,0.3)] relative z-10 rotate-1 hover:rotate-0 transition-transform duration-500 border-8 border-white bg-slate-200">
                       <img src="https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Water Pump" />
                   </div>
                   {/* Decorative Splash */}
                   <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-400 rounded-full blur-3xl opacity-30 z-0"></div>
              </div>
              
              <div className="w-full md:w-1/2 order-1 md:order-2">
                   <h2 className="font-display font-black text-6xl md:text-[8rem] text-sky-900 leading-none mb-4 tracking-tighter">18,000</h2>
                   <h3 className="font-display font-bold text-3xl md:text-5xl text-sky-600 mb-8">People Empowered</h3>
                   <p className="text-xl text-sky-900/80 leading-relaxed mb-8 max-w-lg font-medium">
                       With access to clean water through Water.org. That's 18,000 lives changed with safety, health, and hope for a better future.
                   </p>
                   <ShareTrigger darkText item={{
                        title: "Clean Water",
                        value: "18,000",
                        description: "People served.",
                        image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=800&auto=format&fit=crop",
                        color: "bg-sky-500",
                        contextText: "Providing clean water access to over 18,000 people."
                    }} />
              </div>
          </div>
      </Section>
    </div>
  );
};

export default ImpactInfographic;
