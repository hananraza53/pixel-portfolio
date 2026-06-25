import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollTo = (id: string) => {
    const targetId = id === 'about' ? 'hero' : id;
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pixel-outline text-white py-12" data-testid="footer">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div data-testid="footer-about">
            <h3 className="font-pixel text-xl mb-4">Hanan Raza</h3>
            <p className="text-sm text-gray-300">
              Full-stack developer crafting pixel-perfect experiences. Always ready for the next challenge.
            </p>
          </div>
          <div data-testid="footer-links">
            <h3 className="font-pixel text-xl mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              {['about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block text-sm text-gray-300 hover:text-coin-gold transition-colors capitalize"
                  data-testid={`footer-link-${item}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div data-testid="footer-social">
            <h3 className="font-pixel text-xl mb-4">CONNECT</h3>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -4 }}
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-[3px] border-white flex items-center justify-center hover:bg-coin-gold transition-colors"
                data-testid="footer-social-github"
              >
                <Github className="w-6 h-6 text-pixel-outline" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4 }}
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-[3px] border-white flex items-center justify-center hover:bg-coin-gold transition-colors"
                data-testid="footer-social-linkedin"
              >
                <Linkedin className="w-6 h-6 text-pixel-outline" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -4 }}
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-[3px] border-white flex items-center justify-center hover:bg-coin-gold transition-colors"
                data-testid="footer-social-twitter"
              >
                <Twitter className="w-6 h-6 text-pixel-outline" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="border-t-[3px] border-white/20 pt-8 text-center">
          <p className="font-press-start text-xs text-gray-300" data-testid="footer-copyright">
            © 2026 Hanan Raza. BUILT WITH <Heart className="inline w-3 h-3 text-heart-red fill-heart-red" /> & REACT
          </p>
        </div>
      </div>
    </footer>
  );
}
