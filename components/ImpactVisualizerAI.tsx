import React, { useState } from 'react';
import { CHARITIES } from '../constants';
import { generateImpactStory } from '../services/geminiService';
import { Sparkles, ArrowRight, RefreshCcw } from 'lucide-react';

const ImpactVisualizerAI: React.FC = () => {
  const [selectedCharityId, setSelectedCharityId] = useState<string>(CHARITIES[0].id);
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [story, setStory] = useState<{ headline: string; story: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateStory = async () => {
    setLoading(true);
    const charity = CHARITIES.find(c => c.id === selectedCharityId);
    if (charity) {
      const result = await generateImpactStory(charity, donationAmount);
      setStory(result);
    }
    setLoading(false);
  };

  const selectedCharity = CHARITIES.find(c => c.id === selectedCharityId);

  return (
    <section id="ai-visualizer" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Powered by Gemini AI
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Visualize Your Impact</h2>
                <p className="text-lg text-gray-600">
                    Wondering what your specific contribution can do?
                    Our AI impact engine breaks it down.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                {/* Story Generator */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl flex flex-col">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <RefreshCcw className="w-6 h-6 mr-3 text-blue-400" />
                        Impact Simulator
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Select a Charity</label>
                            <div className="flex flex-wrap gap-2">
                                {CHARITIES.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => setSelectedCharityId(c.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            selectedCharityId === c.id 
                                            ? 'bg-white text-slate-900' 
                                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                                        }`}
                                    >
                                        {c.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Hypothetical Donation</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                <input 
                                    type="number" 
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                                    className="w-full bg-slate-700 border-none rounded-xl py-4 pl-8 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <button 
                            onClick={handleGenerateStory}
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 flex justify-center items-center"
                        >
                            {loading ? (
                                <span className="animate-pulse">Dreaming up impact...</span>
                            ) : (
                                <>
                                    Generate Impact Story <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </button>
                    </div>

                    {story && !loading && (
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-fade-in">
                            <div className="text-xs font-bold text-blue-300 uppercase mb-2">Impact Report for {selectedCharity?.name}</div>
                            <h4 className="text-xl font-bold mb-3">{story.headline}</h4>
                            <p className="text-gray-300 leading-relaxed">{story.story}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ImpactVisualizerAI;