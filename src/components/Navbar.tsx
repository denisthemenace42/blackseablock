import React, { useState, useEffect } from 'react';

interface NavbarProps {
  className?: string;
  scrollToSection?: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ className = '', scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      // Fallback to native smooth scroll if locomotive scroll isn't available
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Our Mission', id: 'mission' },
    { label: 'Why Join', id: 'why-join' },
    { label: 'How it works', id: 'how-it-works' },
    { label: 'Projects', id: 'projects' },
    { label: 'Team', id: 'team' },
    { label: 'Discord', id: 'discord', isExternal: true }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isExternal && item.id === 'discord') {
      window.open('https://discord.gg/ujpUU9T3Vc', '_blank', 'noopener,noreferrer');
    } else {
      handleScrollToSection(item.id);
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-blue/90 backdrop-blur-md border-b border-neon-cyan/30' 
        : 'bg-dark-blue/60 backdrop-blur-lg'
    } ${className}`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className="text-sm font-ari text-neon-cyan hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-neon-cyan hover:text-white transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-dark-blue/95 backdrop-blur-xl border-b border-neon-cyan/30 shadow-lg">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-sm font-ari text-neon-cyan hover:text-white transition-colors duration-200 py-2 border-b border-neon-cyan/10 last:border-b-0"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
