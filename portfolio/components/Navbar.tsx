import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#hero" className="text-white font-bold text-xl">Achuth Krishna K</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
          <a href="#career" className="text-white hover:text-accent transition-colors">Career</a>
          <a href="#skills" className="text-white hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-white hover:text-accent transition-colors">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
            className="text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div id="mobile-menu" className="md:hidden hidden bg-gray-900 shadow-lg">
        <div className="container-custom py-4 flex flex-col space-y-3">
          <a href="#about" className="text-white hover:text-accent transition-colors">About</a>
          <a href="#career" className="text-white hover:text-accent transition-colors">Career</a>
          <a href="#skills" className="text-white hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="text-white hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-white hover:text-accent transition-colors">Connect</a>
        </div>
      </div>
    </nav>
  );
}