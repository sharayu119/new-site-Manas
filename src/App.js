import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';
import Preloader from './components/Preloader';
import Topbar from './components/Topbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Service from './components/Service';
import SpecialDish from './components/SpecialDish';
import Menu from './components/Menu';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="top">
      {loading && <Preloader />}
      <Topbar />
      <Header />
      <HeroSection />
      <About />
      <Service />
      <SpecialDish />
      <Menu />
    </div>
  );
}

export default App;