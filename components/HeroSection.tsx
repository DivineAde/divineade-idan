"use client"

// components/HeroSection.tsx
import { useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
 
  
  // Simplified tech stack with icons
  const techStack = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" }
  ];

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // TypeWriter effect for the tagline
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer & UI Designer";
  const typingSpeed = 70;
  
  useEffect(() => {
    if (!isLoaded) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [isLoaded]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 z-0" />
      
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0" />
      
      {/* Main content container */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-28 lg:py-32 min-h-[90vh] flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text content - 3 columns */}
          <div className="lg:col-span-3">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-3 py-1.5 text-sm rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 mb-6"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Available for freelance work
            </motion.div>
            
            {/* Main heading with sequential animation */}
            <div className="space-y-3 mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400"
              >
                Hi there, I&apos;m
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Divine Adeyeye
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-12"
              >
                <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
                  <span className="relative">
                    {displayText}
                    <span className="inline-block ml-1 w-[2px] h-6 bg-blue-500 dark:bg-blue-400 animate-blink"></span>
                  </span>
                </h3>
              </motion.div>
            </div>
            
            {/* Description with animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8"
            >
              I create beautiful, functional, and accessible digital experiences that help businesses 
              grow. Specializing in modern web technologies to deliver seamless user experiences 
              that drive results.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link 
                href="#projects" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all overflow-hidden shadow-lg shadow-blue-500/20"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 w-full h-full scale-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-100 transition-transform -z-10"></span>
              </Link>
              
              <Link 
                href="#contact" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg transition-all shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <span className="absolute inset-0 w-0 bg-blue-50 dark:bg-blue-900/20 group-hover:w-full transition-all -z-10 rounded-lg"></span>
              </Link>
            </motion.div>
            
            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-1"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 mr-4">Find me on:</span>
              {[
                { icon: Github, href: "https://github.com/DivineAde", label: "Github" },
                { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/adeyeye_divine", label: "Twitter" },
                { icon: Mail, href: "divineadeyeye121@gmail.com", label: "Email" }
              ].map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  className="group p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </motion.div>
          </div>
          
          {/* Image content - 2 columns */}
          <div className="lg:col-span-2 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Image container with gradient border */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 shadow-2xl max-w-lg aspect-[4/5]">
                <Image 
                  src="/IMG-20230907-WA0060.jpg" 
                  alt="Divine Adeyeye"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-2xl" />
              </div>
              
              {/* Tech stack badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 md:left-auto md:-right-10 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-3 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Tech Stack:</span>
                  <div className="flex">
                    {techStack.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="w-8 h-8 flex items-center justify-center"
                        title={tech.name}
                      >
                        <i className={`${tech.icon} text-xl`}></i>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-4 -left-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <span className="font-bold">2+</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">Years of</span>
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">Experience</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center cursor-pointer group">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
              Scroll down
            </span>
            <motion.div 
              animate={{ 
                y: [0, 6, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Add link for Devicons in head */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        
        .animate-blink {
          animation: blink 0.7s infinite;
        }
        
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;