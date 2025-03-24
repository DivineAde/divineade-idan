"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Network,
  ExternalLink,
  Github,
  X,
  LayoutGrid,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "mobile" | "network" | "all";
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

const PortfolioSection = () => {
  const [filter, setFilter] = useState<
    "all" | "frontend" | "mobile" | "network"
  >("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const projects: Project[] = [
    {
      id: "project1",
      title: "Latest Movies/Shows and Trailer",
      description:
        "Website for the latest movie trailers! It's the perfect spot to catch exclusive sneak peeks of upcoming blockbusters, indie films, and more movies.",
      image: "/moviebox.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "frontend",
      liveUrl: "https://hng-movie-box.vercel.app/",
      repoUrl: "https://github.com/yourusername/ecommerce-dashboard",
      featured: true,
    },
    {
      id: "project2",
      title: "SSKN",
      description:
        "Introducing SSKN, a premier cosmetic e-commerce store offering a wide selection of skincare and beauty products from top brands and emerging favorites.",
      image: "/sskn.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "frontend",
      liveUrl: "https://sskn.vercel.app/",
      repoUrl: "https://github.com/yourusername/travel-companion",
      featured: true,
    },
    {
      id: "project3",
      title: "Portfolio",
      description:
        "A Portfolio website that showcases my skills as a frontend developer.",
      image: "/portfolio.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Three.js"],
      category: "frontend",
      liveUrl: "https://hng-movie-box.vercel.app/",
      repoUrl: "https://github.com/yourusername/network-monitor",
    },
    {
      id: "project4",
      title: "Animated Apple Iphone 3D Website",
      description:
        "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
      image: "/p4.svg",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Three.js", "GSAP"],
      category: "frontend",
      liveUrl: "https://github.com/adrianhajdin/iphone",
      repoUrl: "https://github.com/yourusername/sdwan-implementation",
    },
    {
      id: "project5",
      title: "Divine UI Library",
      description:
        "This is a UI component library I built. Users can check out ready-made components such as buttons, cards, and inputs. More components will be added very soon.",
      image: "/component.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "frontend",
      liveUrl: "https://github.com/adrianhajdin/iphone",
      repoUrl: "https://github.com/yourusername/health-tracker",
    },
    {
      id: "project6",
      title: "Memory game",
      description:
        "A fun and interactive memory game built to test and improve your memory skills.",
      image: "/memory.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "mobile",
      liveUrl: "https://memory-game-divineade.vercel.app/",
      repoUrl: "https://github.com/yourusername/sdwan-implementation",
    },
    {
      id: "project7",
      title: "Chart Dashboard",
      description:
        "A dashboard for visualizing data with interactive charts and graphs.",
      image: "/chart dashboard.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "network",
      liveUrl: "https://chart-dashboard-psi.vercel.app/",
      repoUrl: "https://github.com/yourusername/sdwan-implementation",
    },
    {
      id: "project8",
      title: "Shoes",
      description:
        "An e-commerce website showcasing a collection of shoes with a modern and responsive design.",
      image: "/shoes.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "frontend",
      liveUrl: "https://nike-store-pi.vercel.app/",
      repoUrl: "https://github.com/yourusername/sdwan-implementation",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [filter]);

  const openModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setActiveProject(null), 300);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Code className="h-4 w-4" />;
      case "mobile":
        return <Smartphone className="h-4 w-4" />;
      case "network":
        return <Network className="h-4 w-4" />;
      default:
        return <Briefcase className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Section header with enhanced styling */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium text-sm">
            <LayoutGrid className="w-4 h-4 mr-2" />
            Portfolio
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work across different technologies and
            disciplines.
          </p>
        </div>

        {/* Featured projects - horizontal scrolling carousel */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Featured Work
              </h3>
              <button
                onClick={() => setFilter("all")}
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Project thumbnail with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-30 transition-opacity z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/60 text-blue-600 dark:text-blue-400">
                        {getCategoryIcon(project.category)}
                        <span className="ml-1 capitalize">
                          {project.category}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => openModal(project)}
                        className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        View Details <ArrowRight className="ml-1 w-4 h-4" />
                      </button>

                      <div className="flex gap-3">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter tabs with modern styling */}
        <div className="relative mb-10">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-0 w-full md:w-auto text-center md:text-left">
              Project Gallery
            </h3>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("frontend")}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all ${
                  filter === "frontend"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <Code className="h-4 w-4" /> Frontend
              </button>
              <button
                onClick={() => setFilter("mobile")}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all ${
                  filter === "mobile"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <Smartphone className="h-4 w-4" /> Mobile
              </button>
              <button
                onClick={() => setFilter("network")}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all ${
                  filter === "network"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <Network className="h-4 w-4" /> Network
              </button>
            </div>
          </div>
        </div>

        {/* Animated project grid with hover effects */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${
            animateCards ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                transform: animateCards ? "translateY(0)" : "translateY(20px)",
                transition:
                  "transform 0.5s ease, opacity 0.5s ease, box-shadow 0.3s ease",
                opacity: animateCards ? 1 : 0,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Project image with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-30 transition-opacity z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                {/* Category indicator */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/90 dark:bg-black/60 text-blue-600 dark:text-blue-400">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1 capitalize">{project.category}</span>
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <button
                    onClick={() => openModal(project)}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 truncate">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Enhanced modal with animations */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
                activeProject ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Project image */}
                <div className="h-64 sm:h-80 w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center relative">
                  <img
                    src={activeProject?.image}
                    alt={activeProject?.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/60 text-blue-600 dark:text-blue-400">
                      {activeProject && getCategoryIcon(activeProject.category)}
                      <span className="ml-1 capitalize">
                        {activeProject?.category}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {activeProject?.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  {activeProject?.description}
                </p>

                {/* Project details */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject?.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-white dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Category
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                      {activeProject && getCategoryIcon(activeProject.category)}
                      <span className="ml-1 capitalize">
                        {activeProject?.category}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  {activeProject?.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {activeProject?.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:shadow-lg transition-all"
                    >
                      GitHub Repo <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
