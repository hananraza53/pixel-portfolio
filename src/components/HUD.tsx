import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

interface HUDProps {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

export function HUD({ coins, setCoins }: HUDProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleCoinClick = () => {
    setCoins(prev => prev + 1);
    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 800);
  };

  const navItems = [
    { label: 'ABOUT', href: '#hero' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    
    // Small delay to ensure the mobile menu closing animation 
    // doesn't interrupt the smooth scroll engine on mobile browsers.
    setTimeout(() => {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background border-b-[3px] border-pixel-outline px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-primary text-white w-10 h-10 flex items-center justify-center border-[3px] border-pixel-outline cursor-pointer"
          >
            <Code className="w-6 h-6 stroke-[3]" />
          </motion.div>
          <span className="font-pixel text-lg font-bold hidden sm:block text-pixel-outline mt-1" data-testid="logo-text">DEV</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-pixel-outline mt-1">
          {navItems.map(item => (
            <button 
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="font-press-start text-xs hover:text-[hsl(var(--primary))] transition-colors"
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <motion.button 
              onClick={handleCoinClick}
              animate={coins > 0 ? { scale: [1, 1.1, 1] } : {}} 
              transition={{ duration: 0.3 }}
              className="bg-white border-[3px] border-pixel-outline shadow-[4px_4px_0_0_hsl(var(--pixel-outline))] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_0_0_0_hsl(var(--pixel-outline))] transition-all flex items-center gap-2 px-3 py-2 cursor-pointer"
            >
              <div className="w-4 h-4 bg-coin-gold rounded-full border-2 border-pixel-outline"></div>
              <span className="font-press-start text-xs text-pixel-outline">{coins}</span>
            </motion.button>
            
            <AnimatePresence>
              {showPlusOne && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-6 right-0 font-press-start text-xs text-coin-gold drop-shadow-md z-50 pointer-events-none"
                >
                  +1
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            className="md:hidden text-pixel-outline p-2 border-[3px] border-pixel-outline bg-white shadow-[4px_4px_0_0_hsl(var(--pixel-outline))]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b-[3px] border-pixel-outline shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6 border-t-[3px] border-pixel-outline">
              {navItems.map(item => (
                <button 
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="font-press-start text-xs text-pixel-outline hover:text-[hsl(var(--primary))] transition-colors"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
