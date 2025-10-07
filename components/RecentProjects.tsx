"use client";

import { FaGithub, FaCode, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  role?: string;
}

interface ProjectShowcaseProps {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

// Three.js Floating Orb Component
const FloatingOrb: React.FC<{ position: [number, number, number]; color: string; scale: number }> = ({ position, color, scale }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <Sphere ref={meshRef} args={[scale, 16, 16]} position={position}>
        <MeshDistortMaterial 
          color={color} 
          attach="material" 
          distort={0.2} 
          speed={1.5} 
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
};

// Professional Background Component
const ProfessionalBackground: React.FC = () => {
  return (
    <Canvas className="absolute inset-0" camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#8b5cf6" />
      <FloatingOrb position={[-4, 2, -3]} color="#8b5cf6" scale={0.3} />
      <FloatingOrb position={[4, -1, -4]} color="#ec4899" scale={0.25} />
      <FloatingOrb position={[0, 3, -6]} color="#06b6d4" scale={0.2} />
    </Canvas>
  );
};

// Charming Creative Project Showcase Component
const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index, isActive, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="relative group cursor-pointer mb-20"
      onClick={onClick}
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Project Image Section */}
        <motion.div 
          className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Creative Image Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-0.5 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-700">
              <div className="bg-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="aspect-[16/10] relative">
                  {/* Debug: Show image path */}
                  <div className="absolute top-2 left-2 bg-black/75 text-white text-xs px-2 py-1 rounded z-10">
                    {project.img}
                  </div>
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      console.log(`Failed to load image: ${project.img}`);
                      e.currentTarget.src = "/favicon.png"; // Fallback image
                    }}
                    onLoad={() => console.log(`Loaded image: ${project.img}`)}
                  />
                  
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent"
                    animate={{
                      borderColor: isActive 
                        ? ["rgba(139, 92, 246, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(139, 92, 246, 0.5)"]
                        : "transparent"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Tech Stack Preview */}
            <div className="absolute -bottom-4 -right-4 flex gap-2">
              {project.iconLists.slice(0, 3).map((icon, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: iconIndex * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center border border-white/20 shadow-lg"
                >
                  <img src={icon} alt="tech" className="w-5 h-5" />
                </motion.div>
              ))}
              {project.iconLists.length > 3 && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="w-10 h-10 bg-purple-600/80 backdrop-blur-lg rounded-xl flex items-center justify-center border border-purple-500/50 shadow-lg"
                >
                  <span className="text-xs font-bold text-white">+{project.iconLists.length - 3}</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Content Section */}
        <motion.div 
          className={`lg:col-span-5 space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Project Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-white leading-tight"
          >
            <motion.span
              whileHover={{
                background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                backgroundClip: "text",
                color: "transparent"
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.span>
          </motion.h3>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 group-hover:border-purple-500/30 transition-all duration-500">
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.des}
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-purple-400 font-semibold uppercase tracking-wider text-sm flex items-center">
              <FaCode className="mr-2" />
              Tech Stack
            </h4>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
              {project.iconLists.map((icon, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: iconIndex * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="aspect-square bg-gray-800/60 backdrop-blur-lg border border-gray-600/50 rounded-xl flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                >
                  <img src={icon} alt="tech" className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Role & Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`pt-6 flex items-center ${project.role ? 'justify-between' : 'justify-start'}`}
          >
            {/* Role Information - Only show if project has role */}
            {project.role && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="text-gray-400 text-sm font-medium">Role:</span>
                <span className="text-purple-400 text-sm font-semibold bg-purple-500/10 px-4 py-1.5 rounded-lg border border-purple-500/20">
                  {project.role}
                </span>
              </motion.div>
            )}

            {/* View Code Button */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-purple-500/20 text-sm"
            >
              <FaGithub className="text-base" />
              <span>View Code</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveProject(prev => prev === projects.length - 1 ? 0 : prev + 1);
    }, 4000); // Change project every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveProject(prev => prev === 0 ? projects.length - 1 : prev - 1);
        setIsAutoPlay(false); // Pause auto-play when manually navigating
      } else if (e.key === 'ArrowRight') {
        setActiveProject(prev => prev === projects.length - 1 ? 0 : prev + 1);
        setIsAutoPlay(false);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAutoPlay]);
  
  return (
    <section id="projects" className="py-20 bg-black-100 relative overflow-hidden">
      {/* Professional Three.js Background */}
      <div className="absolute inset-0 opacity-40">
        <ProfessionalBackground />
      </div>
      
      {/* Subtle overlay to match other pages */}
      <div className="absolute inset-0 bg-black-100/90" />

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="heading text-white"
          >
            My{" "}
            <span className="text-purple">Works</span>
          </motion.h1>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <motion.button
              onClick={() => setActiveProject(prev => prev === 0 ? projects.length - 1 : prev - 1)}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-purple-400/60 rounded-2xl backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <FaChevronLeft className="text-2xl text-purple-300 group-hover:text-white transition-colors" />
            </motion.button>
            
            <motion.button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-3 rounded-xl backdrop-blur-lg transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 hover:border-green-400/60' 
                  : 'bg-gradient-to-r from-gray-600/20 to-gray-500/20 border border-gray-500/30 hover:border-gray-400/60'
              }`}
            >
              {isAutoPlay ? (
                <FaPause className="text-lg text-green-300 group-hover:text-white transition-colors" />
              ) : (
                <FaPlay className="text-lg text-gray-300 group-hover:text-white transition-colors" />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setActiveProject(prev => prev === projects.length - 1 ? 0 : prev + 1)}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-500/30 hover:border-purple-400/60 rounded-2xl backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <FaChevronRight className="text-2xl text-purple-300 group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ProjectShowcase
                  project={projects[activeProject]}
                  index={activeProject}
                  isActive={true}
                  onClick={() => {}}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Counter & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <div className="text-gray-400 text-lg">
              <span className="text-purple-400 font-semibold text-xl">{activeProject + 1}</span>
              <span className="text-gray-500 mx-2">/</span>
              <span className="text-pink-400 font-semibold text-xl">{projects.length}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;