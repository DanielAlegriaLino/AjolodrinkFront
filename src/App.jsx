import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroContent';
import SectionIcons from './components/SectionIcons';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionIcons />
      <AboutUs />
    </>
  );
}

export default App;