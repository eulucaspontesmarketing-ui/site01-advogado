import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-azul-petroleo shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-center items-center">
        <a href="#inicio" className="transition-opacity hover:opacity-80">
          <img src="https://i.postimg.cc/0NCkjN7j/image-removebg-preview.png" alt="Logo" className="h-14 w-auto" />
        </a>
      </div>
    </header>
  );
};

export default Header;
