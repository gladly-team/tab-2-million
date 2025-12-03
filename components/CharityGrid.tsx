
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ExternalLink } from 'lucide-react';

// Data processing
const rawData = [
  { name: 'Water.org', value: 233499.13, color: '#0EA5E9', url: 'https://water.org' },
  { name: 'Conservation International', value: 207487.88, color: '#22C55E', url: 'https://www.conservation.org' },
  { name: 'Save the Children', value: 158172.04, color: '#EF4444', url: 'https://www.savethechildren.org' },
  { name: 'Action Against Hunger', value: 131511.47, color: '#F97316', url: 'https://www.actionagainsthunger.org' },
  { name: 'Foundation to Decrease Worldsuck', value: 129203.44, color: '#8B5CF6', url: 'https://fightworldsuck.org' },
  { name: 'Human Rights Watch', value: 107365.79, color: '#F43F5E', url: 'https://www.hrw.org' },
  { name: 'GiveDirectly', value: 91944.13, color: '#6366F1', url: 'https://www.givedirectly.org' },
  { name: 'Cats', value: 85268.03, color: '#EC4899', url: 'https://tabforcats.org' },
  { name: 'Room to Read', value: 84592.19, color: '#F59E0B', url: 'https://www.roomtoread.org' },
  { name: 'Educate', value: 79381.63, color: '#10B981', url: 'https://www.experienceeducate.org/' },
  { name: 'The Bail Project', value: 42154.58, color: '#14B8A6', url: 'https://bailproject.org' },
  { name: 'Ukraine Relief', value: 42123.40, color: '#3B82F6', url: 'https://tab.gladly.io/ukraine' },
  { name: 'Reproductive Health', value: 34482.69, color: '#DB2777', url: 'https://tab.gladly.io/reproductive-health' },
  { name: 'Seas', value: 22216.05, color: '#06B6D4', url: 'https://tab.gladly.io/teamseas/' },
  { name: 'Trees', value: 16147.15, color: '#15803d', url: 'https://tabfortrees.org' },
];

const smallItems = [
    3465.48, 5084.17, 4975.08, 3683.53, 3729.21, 6253.71, 4307.30, 1241.16, 3729.27
];

const otherTotal = smallItems.reduce((a, b) => a + b, 0);

const chartData = [
  ...rawData,
  { name: 'Other Causes', value: otherTotal, color: '#94A3B8', url: '' }
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 z-50">
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></span>
            <span className="font-bold text-slate-800">{data.name}</span>
        </div>
      </div>
    );
  }
  return null;
};

const CharityGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-16 text-center">
            <h2 className="font-display font-black text-5xl md:text-6xl text-slate-900 mb-6">Distribution of Funds</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Here is the breakdown of how the $2M raised has been allocated to our partner organizations
            </p>
         </div>
         
         {/* Reduced padding on mobile (p-6) to give more width to content */}
         <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start gap-12">
            
            {/* Pie Chart */}
            <div className="w-full md:w-1/2 h-[350px] md:h-[600px] self-center relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius="35%"
                            outerRadius="70%" 
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} isAnimationActive={false} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Legend / List */}
            <div className="w-full md:w-1/2">
                <h3 className="font-display font-bold text-3xl mb-8 border-b pb-4">Partner Breakdown</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {chartData.sort((a,b) => b.value - a.value).map((entry) => {
                        const content = (
                            <>
                                <span 
                                    className="w-4 h-4 rounded-full mr-4 flex-shrink-0 transition-transform group-hover:scale-125" 
                                    style={{ backgroundColor: entry.color }}
                                ></span>
                                {/* Removed truncate, added leading-tight for multi-line support */}
                                <span className="text-slate-700 font-bold text-lg flex-grow text-left leading-tight break-words">{entry.name}</span>
                                {entry.url && <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-40 transition-opacity text-slate-400 flex-shrink-0" />}
                            </>
                        );

                        return (
                             <div key={entry.name} className="flex items-center group py-2 border-b border-gray-50 last:border-0">
                                {entry.url ? (
                                    <a 
                                        href={entry.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center w-full hover:bg-slate-50 rounded-xl -ml-3 px-3 py-2 transition-colors"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div className="flex items-center w-full px-3 py-2 -ml-3">
                                        {content}
                                    </div>
                                )}
                             </div>
                        );
                    })}
                </div>
            </div>

         </div>
      </div>
    </section>
  );
};

export default CharityGrid;
