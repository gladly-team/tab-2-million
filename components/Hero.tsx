import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(count)}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-b from-blue-200 to-purple-200 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-t from-pink-200 to-orange-100 rounded-full blur-[80px] opacity-30 translate-y-1/3 -translate-x-1/4 animate-float-delayed"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col items-start">
            
            <h1 className="font-display font-extrabold text-[14vw] md:text-[11rem] text-slate-900 leading-[0.85] tracking-tighter mix-blend-multiply">
              Small tabs,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                big change.
              </span>
            </h1>
            
            <div className="mt-12 max-w-xl ml-auto mr-8 md:mr-24">
                <div className="mb-6 font-display font-black text-5xl md:text-7xl text-slate-900 tracking-tighter">
                    <CountUp end={2000000} />
                    <span className="text-2xl md:text-3xl ml-2 text-slate-400 font-bold">RAISED</span>
                </div>
                <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                   It started with a simple idea: use the time we spend online to do good. 
                   Two million dollars later, we're just getting started.
                </p>
            </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;