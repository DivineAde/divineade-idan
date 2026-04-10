"use client";

// components/AboutSection.tsx
import React, { useState } from "react";
import {
  Code,
  Network,
  Briefcase,
  User,
  Wrench,
  Server,
  Cloud,
  Calendar
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "network">(
    "frontend"
  );

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: "HTML", icon: <img src="/icons/html-5-svgrepo-com.svg" alt="React" className="w-20 h-20 object-contain" /> },
      { name: "CSS", icon: <img src="/icons/css-3-svgrepo-com.svg" alt="React" className="w-20 h-20 object-contain" /> },
      { name: "JavaScript", icon: <img src="/icons/javascript-svgrepo-com.svg" alt="React" className="w-20 h-20 object-contain" /> },
      { name: "React", icon: <img src="/icons/reactjs-svgrepo-com.svg" alt="React" className="w-20 h-20 object-contain" /> },
      { name: "Next.js", icon: <img src="/icons/nextjs-svgrepo-com.svg" alt="Next.js" className="w-20 h-20 object-contain dark:invert" /> },
      { name: "Scss", icon: <img src="/icons/scss-svgrepo-com.svg" alt="React" className="w-20 h-20 object-contain" /> },
      { name: "TypeScript", icon: <img src="/icons/typescript-official-svgrepo-com.svg" alt="TypeScript" className="w-20 h-20 object-contain" /> },
      { name: "Tailwind CSS", icon: <img src="/icons/tailwind-svgrepo-com.svg" alt="Tailwind CSS" className="w-20 h-20 object-contain" /> },
      { name: "Git", icon: <img src="/icons/git-svgrepo-com.svg" alt="Stripe" className="w-20 h-20 object-contain" /> },
      { name: "Figma", icon: <img src="/icons/figma-svgrepo-com.svg" alt="React" className="w-20 h-20 object-contain" /> },
    ],
    backend: [
      { name: "Node.js", icon: <img src="/iconsb/node-js-svgrepo-com.svg" alt="nodejs" className="w-20 h-20 object-contain dark:invert" /> },
      { name: "Nest Js", icon: <img src="/iconsb/nestjs-svgrepo-com.svg" alt="nestjs" className="w-20 h-20 object-contain dark:invert" /> },
      { name: "Express Js", icon: <img src="/iconsb/express-svgrepo-com.svg" alt="express" className="w-20 h-20 object-contain dark:invert" /> },
      { name: "MongoDB", icon: <img src="/iconsb/mongodb-svgrepo-com.svg" alt="mongodb" className="w-20 h-20 object-contain" /> },
      { name: "PostgreSQL", icon: <img src="/iconsb/postgresql-svgrepo-com.svg" alt="postgresql" className="w-20 h-20 object-contain" /> },
      { name: "Swagger", icon: <img src="/iconsb/swagger-svgrepo-com.svg" alt="swagger" className="w-20 h-20 object-contain" /> },
      { name: "Postman", icon: <img src="/icons/postman-icon-svgrepo-com.svg" alt="postman" className="w-20 h-20 object-contain" /> },
      { name: "Prisma", icon: <img src="/iconsb/prisma-svgrepo-com.svg" alt="prisma" className="w-20 h-20 object-contain" /> },
      { name: "Docker", icon: <img src="/iconsb/docker-svgrepo-com.svg" alt="docker" className="w-20 h-20 object-contain" /> },
      { name: "Git", icon: <img src="/icons/git-svgrepo-com.svg" alt="git" className="w-20 h-20 object-contain" /> },
    ],
    network:[
      { name: "Network Infrastructure", icon: <img src="/icons/nextjs-svgrepo-com.svg" alt="Network" className="w-20 h-20 object-contain" /> },
      { name: "Cloud Infrastructure", icon: <Cloud className="w-20 h-20 text-blue-400" /> },
      { name: "Cisco Networking", icon: <Network className="w-20 h-20 text-gray-700 dark:text-gray-300" /> },
      { name: "Virtualization", icon: <img src="/icons/nextjs-svgrepo-com.svg" alt="Virtualization" className="w-20 h-20 object-contain" /> },
      { name: "Network Automation", icon: <img src="/icons/nextjs-svgrepo-com.svg" alt="Network Automation" className="w-20 h-20 object-contain" /> },
    ],
  };

  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Daply",
      period: "Jul 2025 – Present",
      description:
        "Building responsive and scalable web applications using Next.js, TypeScript, and Tailwind CSS for an AI-powered content curation platform. Integrated RESTful APIs, optimized UI performance, and implemented modular components for personalized content and SEO. Collaborated with backend engineers and designers, utilizing Bitbucket, GitHub, Vercel, and CI/CD workflows for seamless deployment.",
    },
    {
      title: "Frontend Developer & Network Engineer",
      company: "Proline Technologies Limited – Lagos, Nigeria",
      period: "Jan 2023 – Jun 2023",
      description:
        "Simulated and managed network environments using MikroTik Winbox and Cisco Packet Tracer, configuring routing, switching, IP addressing, and troubleshooting connectivity issues. Monitored network performance metrics including latency, packet loss, and throughput to maintain optimal uptime. Additionally, developed responsive frontend dashboards using React.js and Chart.js to visualize real-time network data, integrating WebSocket APIs and ensuring cross-browser and mobile compatibility.",
    },
  ];


  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Section header with modern styling */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium text-sm">
            <User className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-5xl font-bold text-blue-600 mb-6">
            Skills & Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate software engineer with expertise in frontend and backend development, as well as network engineering. I thrive on creating exceptional digital experiences and have a proven track record of delivering high-quality projects for clients worldwide.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-8">
            <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills & Expertise
            </h3>
          </div>

          {/* Modern tabbed interface */}
          <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar">
            <div className="inline-flex p-1 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => setActiveTab("frontend")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === "frontend"
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <Code className="h-4 w-4" /> Frontend
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === "backend"
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <Server className="h-4 w-4" /> Backend
              </button>
              <button
                onClick={() => setActiveTab("network")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === "network"
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <Network className="h-4 w-4" /> Network
              </button>
            </div>
          </div>

          {/* Skill SVG Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills[activeTab].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h3>
          </div>

          <div className="relative container mx-auto px-4 max-w-5xl">
            {/* Center Line for Desktop / Left Line for Mobile */}
            <div className="absolute left-[43px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800 rounded-full"></div>

            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`mb-12 md:mb-16 relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Half Width Spacer */}
                  <div className="hidden md:block w-full md:w-1/2"></div>

                  {/* Timeline Dot (More elegant concentric circle design) */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-900 border-4 border-white dark:border-gray-950 shadow-[0_0_0_2px_rgba(37,99,235,0.4)] dark:shadow-[0_0_0_2px_rgba(59,130,246,0.5)] z-10 transition-transform duration-300 hover:scale-110">
                    <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800/80 rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group">
                      
                      {/* Period Badge */}
                      <div className={`inline-flex items-center px-3 py-1 mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide ${isEven ? 'md:ml-auto' : ''}`}>
                        <Calendar className="w-3 h-3 mr-1.5" />
                        {exp.period}
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h4>
                      
                      <div
                        className={`flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 font-medium mb-5 text-sm gap-2 ${
                          isEven ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-blue-600/90 dark:text-blue-400/90">{exp.company}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed text-left md:text-inherit">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
