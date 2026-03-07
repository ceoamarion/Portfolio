import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import CoreExpertise from './sections/CoreExpertise';
import FeaturedProjects from './sections/FeaturedProjects';
import ExperimentalSection from './sections/ExperimentalSection';
import DesignPhilosophy from './sections/DesignPhilosophy';
import Footer from './sections/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 overflow-x-hidden pt-20">
      <Navigation />

      <main className="flex flex-col gap-24 md:gap-32 lg:gap-40 pb-32">
        <Hero />
        <About />
        <CoreExpertise />
        <FeaturedProjects />
        <ExperimentalSection />
        <DesignPhilosophy />
      </main>

      <Footer />
    </div>
  );
}

export default App;
