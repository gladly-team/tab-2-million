import React from 'react';
import { Users, Heart, Globe, ArrowUpRight } from 'lucide-react';
import { IMPACT_STATS } from '../constants';

const MetricCard: React.FC<{ label: string; value: string; icon: React.ReactNode; color: string }> = ({ label, value, icon, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
    <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  </div>
);

const ImpactMetrics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          label="Total Raised" 
          value={`$${(IMPACT_STATS.totalRaised / 1000000).toFixed(1)} Million`}
          icon={<ArrowUpRight className="w-6 h-6 text-blue-600" />}
          color="bg-blue-500"
        />
        <MetricCard 
          label="Tabbers" 
          value={`${(IMPACT_STATS.totalTabbers / 1000000).toFixed(1)}M+`}
          icon={<Users className="w-6 h-6 text-purple-600" />}
          color="bg-purple-500"
        />
        <MetricCard 
          label="Hearts Donated" 
          value={`${(IMPACT_STATS.heartsDonated / 1000000).toFixed(0)}M+`}
          icon={<Heart className="w-6 h-6 text-pink-600" />}
          color="bg-pink-500"
        />
      </div>
    </div>
  );
};

export default ImpactMetrics;