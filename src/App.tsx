/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Instagram, Twitter, ExternalLink, Mail, ArrowRight, Sun, Moon } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const Navbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: (value: boolean) => void }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-14 backdrop-blur-xl ${
        isDark ? "bg-white/5 border border-white/10" : "bg-white/20 border border-white/30"
      } rounded-2xl flex items-center justify-between px-8 z-50 transition-all`}
    >
      <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">BK.</div>
      <div className="flex gap-8 text-sm font-medium tracking-wide items-center">
        <a href="#home" className={`${isDark ? "text-white" : "text-gray-700"} hover:text-purple-400 transition-colors`}>Home</a>
        <a href="#about" className={`${isDark ? "text-gray-400" : "text-gray-600"} hover:text-purple-400 transition-colors`}>About</a>
        <a href="#work" className={`${isDark ? "text-gray-400" : "text-gray-600"} hover:text-purple-400 transition-colors`}>Work</a>
        <a href="mailto:bittugupta3646@gmail.com" className={`${isDark ? "text-gray-400" : "text-gray-600"} hover:text-purple-400 transition-colors`}>Hire Me</a>
        
        {/* Dark/Light Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-lg ${
            isDark ? "bg-purple-500/20 border border-purple-500/30" : "bg-purple-500/30 border border-purple-500/50"
          } hover:bg-purple-500/40 transition-all ml-2`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-purple-300" />
          ) : (
            <Sun className="w-5 h-5 text-purple-400" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};

const FloatingShapes = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {isDark ? (
        <>
          <div className="bg-atmosphere-purple" />
          <div className="bg-atmosphere-blue" />
          <div className="bg-atmosphere-pink" />
        </>
      ) : (
        <>
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-pink-300/5 rounded-full blur-[80px] pointer-events-none" />
        </>
      )}
      
      {/* Decorative Grains */}
      <div className="absolute inset-0 noise-overlay opacity-20 mix-blend-soft-light" />
    </div>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.1, borderColor: "rgba(168, 85, 247, 0.5)" }}
    whileTap={{ scale: 0.9 }}
    href={href}
    className="p-2 rounded-lg bg-white/5 border border-white/10 transition-all group"
  >
    <Icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

const CharacterIllustration = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Abstract Character Representation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="w-72 h-[450px] glass-card rounded-[40px] overflow-hidden relative border border-white/20 group">
          {/* THE IMAGE */}
          <div className="absolute inset-0 bg-space-900 flex items-center justify-center">
            <img 
              src="/profile.jpg" 
              alt="Bittu Kumar"
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                // Fallback if the image isn't uploaded yet
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
              }}              
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Overlay elements for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent pointer-events-none" />
          
          {/* UI Elements on top of image as requested */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/50 to-pink-500/50 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg z-20">
            <div className="text-2xl">👨‍🚀</div>
          </div>

          {/* Rectangle bars over the image */}
          <div className="absolute bottom-20 left-8 right-8 space-y-2 z-20">
            <div className="h-1.5 w-16 bg-purple-400/80 rounded-full shadow-sm"></div>
            <div className="h-1.5 w-full bg-white/30 rounded-full shadow-sm"></div>
            <div className="h-1.5 w-3/4 bg-white/20 rounded-full shadow-sm"></div>
          </div>

          {/* 3 Circles over the image */}
          <div className="absolute bottom-8 left-8 flex -space-x-3 z-20">
            <div className="w-9 h-9 rounded-full bg-purple-500/90 border-2 border-space-950 shadow-xl ring-1 ring-white/10"></div>
            <div className="w-9 h-9 rounded-full bg-pink-500/90 border-2 border-space-950 shadow-xl ring-1 ring-white/10"></div>
            <div className="w-9 h-9 rounded-full bg-blue-500/90 border-2 border-space-950 shadow-xl ring-1 ring-white/10"></div>
          </div>
        </div>
        
        {/* Orbiting Accents */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-blue-500/10 rounded-full blur-[100px]"></div>
        
        {/* Code snippets on top */}
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 -left-12 px-5 py-2.5 glass rounded-2xl text-[11px] font-mono uppercase tracking-widest text-purple-300 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] z-30"
        >
          const bittu = Dev.new()
        </motion.div>

        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 -right-12 px-5 py-2.5 glass rounded-2xl text-[11px] font-mono uppercase tracking-widest text-blue-300 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] z-30"
        >
          {`{ skills: ['MERN'] }`}
        </motion.div>
      </motion.div>
      
      {/* Background ambient decor */}
      <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
      <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
    </div>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="space-y-4 mb-12">
    {subtitle && (
      <div className="flex items-center gap-3">
        <span className="w-8 h-[2px] bg-purple-500"></span>
        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">{subtitle}</span>
      </div>
    )}
    <h2 className="text-5xl font-bold tracking-tight text-white">{children}</h2>
  </div>
);

const ProjectCard = ({ title, description, tags }: { title: string, description: string, tags: string[], key?: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card rounded-[32px] p-8 space-y-4"
  >
    <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 glass flex items-center justify-center">
      <Github className="w-12 h-12 text-white/20" />
    </div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 font-light">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 glass rounded-full text-xs font-mono text-purple-300">{tag}</span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    // Save theme preference and apply to document
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const projects = [
    {
      title: "React E-book Full Stack App",
      description: "A comprehensive E-book platform inspired by Google Books where users can learn and read online.",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
      github: "https://github.com/bittukumar008"
    },
    {
      title: "React Chatbot App Full Stack",
      description: "A real-time chatbot platform featuring live conversation capabilities and a robust backend.",
      tags: ["React.js", "Express.js", "Tailwind CSS", "MongoDB Cloud"],
      github: "https://github.com/bittukumar008"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generator inspired by Meta AI and ChatGPT, creating visuals from text prompts.",
      tags: ["JavaScript", "CSS", "Prompt Engineering"],
      github: "https://github.com/bittukumar008"
    }
  ];

  const certificates = [
    { name: "Programming in Python", issuer: "Trainwithsubham", year: "2025" },
    { name: "API Development", issuer: "Infosys Springboard", year: "2025" },
    { name: "JavaScript Programming", issuer: "Infosys Springboard", year: "2025" }
  ];

  return (
    <div className={`min-h-screen ${
      isDark ? "bg-space-950 text-gray-200" : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
    } relative selection:bg-purple-500/30 font-sans transition-colors duration-300`} data-theme={isDark ? "dark" : "light"}>
      <FloatingShapes isDark={isDark} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen container mx-auto px-6 md:px-20 relative flex items-center pt-24 z-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 w-full">
          <AnimatePresence>
            {isLoaded && (
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <p className="text-purple-400 font-mono text-lg tracking-widest uppercase">
                    Hi!
                  </p>
                  <h1 className="text-8xl font-bold leading-none tracking-tight text-white">
                    I'm <span className="text-white">Bittu</span><br/>
                    <span className="text-gradient-primary">Kumar</span>
                  </h1>
                  <p className="text-2xl text-gray-400 font-light mt-4">
                    Full Stack Developer & Java Enthusiast
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <a href="#work" className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:scale-105 transition-transform flex items-center gap-2 text-center">
                    View My Projects
                  </a>
                  <a href="mailto:bittugupta3646@gmail.com" className="px-8 py-3.5 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all text-center">
                    Hire Me
                  </a>
                </motion.div>

                <div className="flex gap-6 pt-12">
                  <SocialIcon Icon={Github} href="https://github.com/bittukumar008" />
                  <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/bittu-kumar-a992072ab" />
                  <SocialIcon Icon={Twitter} href="#" />
                  <SocialIcon Icon={Instagram} href="#" />
                </div>
              </div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <CharacterIllustration />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 container mx-auto px-6 md:px-20 relative z-10">
        <SectionHeading subtitle="About Me">Resume Highlights</SectionHeading>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-2xl font-display uppercase tracking-wider">Career Objective</h3>
              <p>
                Passionate <span className="text-white font-medium">Full Stack Developer</span> with practical exposure to the MERN stack and a solid foundation in Java-based Data Structures & Algorithms. Seeking to build secure, scalable, and user-centric applications.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-bold text-2xl font-display uppercase tracking-wider">Education</h3>
              <div className="glass p-6 rounded-2xl border-l-4 border-purple-500">
                <h4 className="text-white font-bold text-xl">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-purple-400">Gulzar Group of Institutions, Khanna (Punjab)</p>
                <p className="text-sm mt-2 text-gray-500 font-mono">2023 — 2026 (Expected)</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-2xl">
                <h4 className="text-white font-bold text-lg mb-2">Frontend</h4>
                <p className="text-sm">React.js, HTML5, CSS3, Bootstrap, EJS</p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <h4 className="text-white font-bold text-lg mb-2">Backend</h4>
                <p className="text-sm">Node.js, Express.js, Java, Python</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="glass-card rounded-[40px] p-8 aspect-[4/3] flex flex-col justify-center gap-6">
                <h3 className="text-white font-bold text-2xl font-display uppercase tracking-wider text-center">My Certificates</h3>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 glass rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors"
                    >
                      <div>
                        <p className="text-white font-medium">{cert.name}</p>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                      </div>
                      <span className="text-purple-400 font-mono text-xs">{cert.year}</span>
                    </motion.div>
                  ))}
                </div>
             </div>
             
             <div className="glass p-8 rounded-3xl flex items-center justify-around">
                <div className="text-center">
                  <div className="text-white font-bold text-3xl">4+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects</div>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-white font-bold text-3xl">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Dedication</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 container mx-auto px-6 md:px-20 relative z-10">
        <SectionHeading subtitle="Portfolio">My Recent Projects</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title} 
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/bittukumar008" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Check out more on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-16 container mx-auto px-6 md:px-20 relative z-10">
        <div className="glass-card rounded-[48px] p-12 md:p-20 text-center space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
          
          <SectionHeading subtitle="Hire Me">Let's Connect</SectionHeading>
          
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto font-light mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6">
               <a href="mailto:bittugupta3646@gmail.com" className="flex items-center gap-3 px-8 py-4 glass rounded-2xl hover:bg-white/10 transition-all text-xl border-white/5 hover:border-purple-500/20">
                 <Mail className="w-6 h-6 text-purple-400" />
                 bittugupta3646@gmail.com
               </a>
               <div className="flex items-center gap-3 px-8 py-4 glass rounded-2xl text-xl">
                 <span className="text-purple-400">📱</span>
                 +91 9798334569
               </div>
            </div>

            <div className="flex gap-6 scale-125 pt-6">
              <SocialIcon Icon={Github} href="https://github.com/bittukumar008" />
              <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/bittu-kumar-a992072ab" />
              <SocialIcon Icon={Twitter} href="#" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 font-mono text-xs tracking-widest border-t border-white/5 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 BITTU KUMAR • DEVELOPER PORTFOLIO</p>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-white transition-colors">BACK TO TOP</a>
            <a href="mailto:bittugupta3646@gmail.com" className="hover:text-white transition-colors">HIRE ME</a>
          </div>
        </div>
      </footer>
    </div>
  );
}