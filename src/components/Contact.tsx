import { useState } from 'react';
import { Zap } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-pixel-outline mb-4">
            START A QUEST
          </h2>
          <p className="font-body text-gray-600 text-base">
            Let's team up and build something legendary
          </p>
        </div>
        
        <div className="bg-white border-[3px] border-pixel-outline shadow-[12px_12px_0_0_hsl(var(--pixel-outline))] p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label className="font-press-start text-xs block text-pixel-outline" htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full flex h-12 rounded-none border-[3px] border-[color:hsl(var(--pixel-outline))] bg-transparent px-4 py-2 focus-visible:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] font-body"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-press-start text-xs block text-pixel-outline" htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full flex h-12 rounded-none border-[3px] border-[color:hsl(var(--pixel-outline))] bg-transparent px-4 py-2 focus-visible:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] font-body"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-press-start text-xs block text-pixel-outline" htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full flex rounded-none border-[3px] border-[color:hsl(var(--pixel-outline))] bg-transparent px-4 py-3 focus-visible:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] min-h-[160px] font-body resize-y"
                required
                data-testid="contact-message-textarea"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-none border-[3px] border-[color:hsl(var(--pixel-outline))] shadow-[6px_6px_0_0_hsl(var(--pixel-outline))] active:shadow-[0_0_0_0_hsl(var(--pixel-outline))] active:translate-x-[6px] active:translate-y-[6px] bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--sky-blue))] font-press-start text-xs md:text-sm py-5 flex items-center justify-center transition-all"
              data-testid="contact-submit-button"
            >
              <Zap className="w-4 h-4 mr-3 fill-current" />
              SEND MESSAGE
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
}
