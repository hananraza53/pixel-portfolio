import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  coins: number;
  details: string;
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Pixel Quest RPG',
    description: 'A retro-style RPG game built with React and Canvas API',
    tags: ['React', 'Canvas', 'Game'],
    link: '#',
    coins: 15,
    details: 'A fully playable retro RPG right in the browser. Features collision detection, sprite animation, and a custom tile engine.',
  },
  {
    id: 'p2',
    title: 'AI Chat Bot',
    description: 'Smart chatbot powered by latest AI models',
    tags: ['AI', 'Node.js', 'API'],
    link: '#',
    coins: 20,
    details: 'An intelligent conversational agent that helps users navigate complex documentation using embeddings and vector search.',
  },
  {
    id: 'p3',
    title: 'E-Commerce Platform',
    description: 'Full-stack shopping experience with payment integration',
    tags: ['Full-Stack', 'Stripe', 'MongoDB'],
    link: '#',
    coins: 25,
    details: 'A robust e-commerce solution with cart state management, secure Stripe checkout, and an admin dashboard.',
  },
  {
    id: 'p4',
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization',
    tags: ['React', 'API', 'Charts'],
    link: '#',
    coins: 10,
    details: 'Displays beautiful, animated weather forecasts using OpenWeatherMap API and Recharts for historical data trends.',
  },
  {
    id: 'p5',
    title: 'Task Manager Pro',
    description: 'Collaborative project management tool',
    tags: ['React', 'WebSocket', 'Firebase'],
    link: '#',
    coins: 18,
    details: 'Real-time kanban boards allowing multiple users to drag and drop tasks simultaneously without conflicts.',
  },
  {
    id: 'p6',
    title: 'Portfolio Generator',
    description: 'Automated portfolio site builder',
    tags: ['Next.js', 'CMS', 'Deploy'],
    link: '#',
    coins: 22,
    details: 'A platform that lets developers create their own pixel-art portfolios by filling out a simple JSON configuration.',
  },
];

interface ProjectsProps {
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

export function Projects({ setCoins }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [earnedProjects, setEarnedProjects] = useState<Set<string>>(new Set());

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    if (!earnedProjects.has(project.id)) {
      setCoins(c => c + project.coins);
      setEarnedProjects(new Set([...earnedProjects, project.id]));
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-pixel-outline mb-4">
            QUEST LOG
          </h2>
          <p className="font-body text-gray-600 text-base">
            Epic projects completed on the journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-[3px] border-pixel-outline shadow-[8px_8px_0_0_hsl(var(--pixel-outline))] p-6 cursor-pointer hover:-translate-y-2 hover:shadow-[12px_12px_0_0_hsl(var(--pixel-outline))] transition-all duration-300 flex flex-col group"
              onClick={() => handleProjectClick(project)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-pixel text-xl text-pixel-outline pr-4">
                  {project.title}
                </h3>
                <div className="flex-shrink-0 flex items-center gap-1 bg-coin-gold border-[3px] border-pixel-outline px-2 py-1">
                  <div className="w-3 h-3 bg-white rounded-full border-2 border-pixel-outline" />
                  <span className="font-press-start text-xs text-pixel-outline leading-none mt-0.5">
                    {project.coins}
                  </span>
                </div>
              </div>
              
              <p className="font-body text-gray-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-white text-pixel-outline font-press-start text-[10px] md:text-xs px-2 py-1 border-[2px] border-pixel-outline"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retro Modal using Radix Dialog */}
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 rounded-none border-[3px] border-pixel-outline bg-white p-6 md:p-8 shadow-[8px_8px_0_0_hsl(var(--pixel-outline))] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]" data-testid="project-dialog">
            {selectedProject && (
              <>
                <Dialog.Title className="font-pixel text-2xl md:text-3xl text-pixel-outline mb-2" data-testid="project-dialog-title">
                  {selectedProject.title}
                </Dialog.Title>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-coin-gold border-[3px] border-pixel-outline">
                    <div className="w-4 h-4 bg-white rounded-full border-2 border-pixel-outline" />
                    <span className="font-press-start text-xs text-pixel-outline mt-0.5">
                      {selectedProject.coins} COINS
                    </span>
                  </div>
                </div>

                <Dialog.Description className="font-body text-lg text-gray-600 mb-6 leading-relaxed" data-testid="project-dialog-description">
                  {selectedProject.details}
                </Dialog.Description>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="rounded-none border-[3px] border-pixel-outline bg-white text-pixel-outline font-press-start text-xs px-3 py-1.5" data-testid="project-dialog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t-[3px] border-pixel-outline">
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-none border-[3px] border-pixel-outline shadow-[4px_4px_0_0_hsl(var(--pixel-outline))] active:shadow-[0_0_0_0_hsl(var(--pixel-outline))] active:translate-x-[4px] active:translate-y-[4px] bg-primary text-white hover:bg-sky-blue font-press-start text-xs py-4 px-6 flex items-center transition-all"
                      data-testid="project-dialog-github-btn"
                    >
                      <Github className="w-4 h-4 mr-2" /> VIEW CODE
                    </a>
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-none border-[3px] border-pixel-outline shadow-[4px_4px_0_0_hsl(var(--pixel-outline))] active:shadow-[0_0_0_0_hsl(var(--pixel-outline))] active:translate-x-[4px] active:translate-y-[4px] bg-white text-pixel-outline hover:bg-gray-100 font-press-start text-xs py-4 px-6 flex items-center transition-all"
                      data-testid="project-dialog-demo-btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> LIVE DEMO
                    </a>
                  </div>
                </div>

                <Dialog.Close className="absolute right-4 top-4 rounded-none opacity-70 transition-opacity hover:opacity-100 focus:outline-none w-8 h-8 flex items-center justify-center text-pixel-outline hover:bg-gray-100 border-[3px] border-transparent hover:border-pixel-outline">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
