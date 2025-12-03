import React from 'react';
import Hero from './components/Hero';
import ImpactSources from './components/ImpactSources';
import ImpactInfographic from './components/ImpactInfographic';
import CharityGrid from './components/CharityGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-purple-100 selection:text-purple-900">
      <Hero />
      <ImpactSources />
      <ImpactInfographic />
      <CharityGrid />
      <Footer />
    </div>
  );
};

export default App;