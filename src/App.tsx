import { useState } from 'react';
import { HUD } from './components/HUD';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [coins, setCoins] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-body relative overflow-x-hidden">
      {/* Global scanlines overlay */}
      <div className="scanlines z-50 pointer-events-none fixed inset-0"></div>

      <HUD coins={coins} setCoins={setCoins} />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <Skills />
        <Projects setCoins={setCoins} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
