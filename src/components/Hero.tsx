import { motion } from 'framer-motion';
import { Rocket, Mail, Code } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-20 md:py-32 relative z-10 bg-gradient-to-r from-[#e0f2fe] via-transparent to-[#fef9c3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex-shrink-0"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 md:w-64 md:h-64 bg-primary border-[3px] border-pixel-outline shadow-[12px_12px_0_0_hsl(var(--pixel-outline))] flex items-center justify-center relative"
          >
            <Code className="w-24 h-24 md:w-32 md:h-32 text-white stroke-[3]" />
            {/* Yellow Star */}
            <motion.div 
              animate={{ 
                rotate: 360,
                y: [0, 10, 0] 
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-6 -right-6 w-12 h-12"
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-coin-gold text-coin-gold drop-shadow-md">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-pixel text-4xl md:text-6xl text-pixel-outline mb-4">
              Hanan Raza
            </h1>
            <h2 className="font-press-start text-sm md:text-base text-primary mb-6 leading-loose">
              FULL-STACK DEVELOPER
            </h2>
            <p className="font-body text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Building pixel-perfect web experiences and crushing code challenges like boss battles. Level 99 developer with max XP in React, Node.js, and creative problem solving.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollTo('projects')}
                className="bg-primary text-white font-press-start text-xs py-4 px-6 border-[3px] border-pixel-outline shadow-[6px_6px_0_0_hsl(var(--pixel-outline))] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_hsl(var(--pixel-outline))] active:translate-y-1 active:shadow-[0_0_0_0_hsl(var(--pixel-outline))] transition-all flex items-center gap-3"
              >
                <Rocket className="w-4 h-4 fill-current" />
                VIEW PROJECTS
              </button>
              
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-white text-pixel-outline font-press-start text-xs py-4 px-6 border-[3px] border-pixel-outline shadow-[6px_6px_0_0_hsl(var(--pixel-outline))] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_hsl(var(--pixel-outline))] active:translate-y-1 active:shadow-[0_0_0_0_hsl(var(--pixel-outline))] transition-all flex items-center gap-3"
              >
                <Mail className="w-4 h-4" />
                HIRE ME
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
