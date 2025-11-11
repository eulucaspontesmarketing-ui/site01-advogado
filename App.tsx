import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Process from './components/Articles'; // Renamed for clarity, points to the new process section
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-branco-quente font-lato text-cinza-grafite antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Process />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;