"use client";

// components/AboutSection.tsx
import { useState } from "react";
import {
  Code,
  Smartphone,
  Network,
  Download,
  Briefcase,
  Zap,
  User,
} from "lucide-react";

type Skill = {
  name: string;
  level: number;
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "mobile" | "network">(
    "frontend"
  );

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
    mobile: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 60 },
      { name: "Swift", level: 35 },
      { name: "Mobile UI/UX", level: 90 },
      { name: "App Publishing", level: 85 },
    ],
    network: [
      { name: "Network Security", level: 80 },
      { name: "Cloud Infrastructure", level: 85 },
      { name: "Cisco Networking", level: 75 },
      { name: "Virtualization", level: 80 },
      { name: "Network Automation", level: 75 },
    ],
  };

  const experiences = [
    {
      title: "NOC Engineer",
      company: "Proline Technologies Ltd.",
      period: "01/2023 - 06/2023",
      description:
        "Designed and implemented network infrastructure solutions for enterprise clients, ensuring 99.9% uptime.",
    },
    {
      title: "Frontend Developer",
      company: "Freelancer",
      period: "2022 - 2025",
      description:
        "Development of various enterprise web applications using React and Next.js, improving performance by 80%.",
    },
    {
      title: "Mobile Application Developer",
      company: "Freelancer",
      period: "2025",
      description:
        "Developed cross-platform mobile applications using React Native for clients across various industries.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900/30 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900/30 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Section header with modern styling */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium text-sm">
            <User className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            My Journey & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A versatile tech professional blending frontend excellence, mobile
            innovation, and network engineering expertise.
          </p>
        </div>

        {/* Restructured content with modern card-based layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column: Profile card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 flex-1">
              <div className="flex flex-col items-center">
                {/* Profile image with better framing */}
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-md"></div>
                  <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img
                      src="/IMG-20230907-WA0060.jpg"
                      className="object-cover w-full h-full"
                      alt="Profile"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Divine Adeyeye
                </h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  Frontend & Mobile Developer
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Passionate about creating exceptional digital experiences with
                  a background in network engineering.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 w-full gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      2+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Years
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      20+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Projects
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      6+
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Clients
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="/Divine CV.pdf"
                  download
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </div>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="relative pl-6 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <span className="font-medium">{experience.company}</span>
                      <span className="mx-2">•</span>
                      <span>{experience.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Skills */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center mb-8">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Skills & Expertise
                </h3>
              </div>

              {/* Modern tabbed interface */}
              <div className="flex mb-8 overflow-x-auto no-scrollbar">
                <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                  <button
                    onClick={() => setActiveTab("frontend")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      activeTab === "frontend"
                        ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Code className="h-4 w-4" /> Frontend
                  </button>
                  <button
                    onClick={() => setActiveTab("mobile")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      activeTab === "mobile"
                        ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Smartphone className="h-4 w-4" /> Mobile
                  </button>
                  <button
                    onClick={() => setActiveTab("network")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                      activeTab === "network"
                        ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <Network className="h-4 w-4" /> Network
                  </button>
                </div>
              </div>

              {/* Skill content */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  {activeTab === "frontend" &&
                    "Frontend Development Proficiency"}
                  {activeTab === "mobile" && "Mobile Development Proficiency"}
                  {activeTab === "network" && "Network Engineering Proficiency"}
                </h3>
                <div className="space-y-6">
                  {skills[activeTab].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional content specific to each skill area */}
              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {activeTab === "frontend" && "Frontend Focus"}
                  {activeTab === "mobile" && "Mobile Development Focus"}
                  {activeTab === "network" && "Network Engineering Focus"}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {activeTab === "frontend" &&
                    "Specialized in building modern, responsive web applications with React and Next.js, focusing on performance optimization and delightful user experiences."}
                  {activeTab === "mobile" &&
                    "Experienced in creating cross-platform mobile applications that provide native-like experiences while maintaining a single codebase for efficiency."}
                  {activeTab === "network" &&
                    "Proficient in designing and implementing secure, reliable network infrastructures that support organizational goals and maintain consistent uptime."}
                </p>

                {/* Relevant projects or achievements */}
                <div className="mt-6">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {activeTab === "frontend" && (
                      <>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Improved website load time by 40% through code
                            splitting and optimization
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Built reusable component libraries for enterprise
                            applications
                          </span>
                        </li>
                      </>
                    )}
                    {activeTab === "mobile" && (
                      <>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Released 5+ apps with 4.5+ star ratings across app
                            stores
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Reduced app size by 30% while maintaining all core
                            functionality
                          </span>
                        </li>
                      </>
                    )}
                    {activeTab === "network" && (
                      <>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Maintained 99.9% network uptime for enterprise
                            clients
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Implemented security protocols that reduced breach
                            attempts by 75%
                          </span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
