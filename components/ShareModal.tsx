import React from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    value: string;
    description: string;
    image: string;
    color: string;
    contextText: string;
  } | null;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  const shareUrl = "https://tab.gladly.io/2-million"; 
  const shareText = `${data.contextText} Check out the impact of Tab for a Cause:`;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'reddit':
        url = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-4 sm:px-0">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-fade-in scale-100 origin-center">
        
        {/* LEFT SIDE: The "Playful" Preview */}
        <div className="w-full md:w-1/2 aspect-square relative overflow-hidden group p-2">
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                <img 
                    src={data.image} 
                    alt="Impact Context" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${data.color} mix-blend-multiply opacity-70`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Branding Overlay */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                        <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wide shadow-sm">Tab for a Cause</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                    <div className="mb-4">
                        <h2 className="text-white font-display font-black text-6xl md:text-7xl leading-[0.9] tracking-tighter drop-shadow-lg">
                            {data.value}
                        </h2>
                    </div>
                    <p className="text-white text-xl font-medium leading-tight max-w-xs drop-shadow-md opacity-95">
                        {data.contextText}
                    </p>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE: Controls */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col">
            <div className="flex justify-between items-center mb-10">
                <h3 className="font-display font-bold text-2xl text-slate-900">Share the Joy</h3>
                <button onClick={onClose} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                    <X className="w-6 h-6 text-slate-600" />
                </button>
            </div>

            <p className="text-slate-500 mb-8 text-lg leading-relaxed font-medium">
                Sharing good news is a great way to inspire others. Post this stat to help us reach the next milestone!
            </p>

            <div className="grid grid-cols-1 gap-3 mb-8">
                <button onClick={() => handleShare('twitter')} className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-900 hover:text-white transition-all group">
                    <span className="font-bold">Twitter / X</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </button>
                <button onClick={() => handleShare('facebook')} className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-[#1877F2] hover:text-white transition-all group">
                    <span className="font-bold">Facebook</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </button>
                <button onClick={() => handleShare('linkedin')} className="flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 hover:bg-[#0077b5] hover:text-white transition-all group">
                    <span className="font-bold">LinkedIn</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </button>
            </div>

            <div className="mt-auto text-center text-slate-400 text-sm font-medium">
                tab.gladly.io/2-million
            </div>
        </div>

      </div>
    </div>
  );
};

export default ShareModal;