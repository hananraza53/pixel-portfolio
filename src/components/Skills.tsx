import { motion } from 'framer-motion';

const skills = [
  { 
    name: 'React & Frontend', 
    level: 90, 
    icon: '⚡', 
    color: 'bg-[#0ea5e9]' 
  },
  { 
    name: 'Node.js & Backend', 
    level: 85, 
    icon: '🔋', 
    color: 'bg-[#10b981]' 
  },
  { 
    name: 'UI/UX Design', 
    level: 75, 
    icon: '✨', 
    color: 'bg-[#eab308]' 
  },
  { 
    name: 'Problem Solving', 
    level: 95, 
    icon: '💪', 
    color: 'bg-[#ef4444]' 
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-pixel-outline mb-4">
            PLAYER STATS
          </h2>
          <p className="font-body text-gray-600 text-base">
            Skills leveled up through countless side quests
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div 
              key={skill.name} 
              className="bg-white border-[3px] border-pixel-outline shadow-[8px_8px_0_0_hsl(var(--pixel-outline))] p-6 md:p-8 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_hsl(var(--pixel-outline))] transition-all duration-300 cursor-default"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-pixel text-xl md:text-2xl text-pixel-outline">
                  {skill.name}
                </h3>
                <span className="text-2xl">{skill.icon}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between font-press-start text-xs md:text-sm text-pixel-outline">
                  <span>LVL</span>
                  <span>{skill.level}</span>
                </div>
                
                <div className="h-6 w-full border-[3px] border-pixel-outline bg-white p-[2px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className={`h-full ${skill.color}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
