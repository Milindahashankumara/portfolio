"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import HeroLogo from "./HeroLogo";

const Hero = () => {
  // Animated changing titles
  const titles = [
    "FullStack Developer",
    "Problem Solver", 
    "Web Developer",
    "Tech Enthusiast"
  ];
  
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [titles.length]);
  const handleViewResume = () => {
    // Open your CV PDF file
    window.open("/Milinda Hashan.pdf", "_blank");
  };

  return (
    <div id="home" className="pb-20 pt-36 relative">
      {/* Logo in upper right corner */}
      <HeroLogo />
      
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-20 w-60 h-60 bg-gradient-to-l from-cyan-500/25 to-blue-500/25 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Original Spotlights with Enhanced Colors */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Enhanced Original Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Creative Floating Elements */}
        <div className="absolute inset-0">
          {/* Floating Dots */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
          
          {/* Animated Lines */}
          <motion.div
            className="absolute top-1/3 left-10 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-10 w-24 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           
          </motion.p>

          <motion.div
            className="text-left mt-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-white font-bold leading-tight text-[40px] md:text-5xl lg:text-6xl">
              <div>Hi, I&apos;m</div>
              <div className="text-purple-400 font-extrabold">
                Hashan Wickramasinghe
              </div>
            </h1>
            <h3 className="text-white font-semibold leading-tight text-[20px] md:text-2xl lg:text-3xl mt-4">
              I am a{" "}
              <AnimatePresence mode="wait">
                <motion.span 
                  className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block min-w-[280px] text-left"
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6,
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  {titles[currentTitle]}
                </motion.span>
              </AnimatePresence>
            </h3>
          </motion.div>

          <motion.p
            className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Elegant Creative Resume Button */}
            <motion.button
              onClick={handleViewResume}
              className="relative inline-block px-8 py-4 font-semibold group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Subtle Shadow */}
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 bg-gradient-to-r from-purple-500/40 to-blue-500/40 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
              
              {/* Professional Border Layer */}
              <motion.div
                className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-slate-400 via-blue-500 to-slate-400 group-hover:from-blue-400 group-hover:via-indigo-500 group-hover:to-blue-400"
                animate={{
                  background: [
                    "linear-gradient(0deg, #64748b, #3b82f6, #64748b)",
                    "linear-gradient(90deg, #64748b, #3b82f6, #64748b)",
                    "linear-gradient(180deg, #64748b, #3b82f6, #64748b)",
                    "linear-gradient(270deg, #64748b, #3b82f6, #64748b)",
                    "linear-gradient(0deg, #64748b, #3b82f6, #64748b)"
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full bg-black/95 rounded-lg" />
              </motion.div>
              
              {/* Main Button Background */}
              <span className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] bg-gradient-to-br from-gray-900 to-black group-hover:from-slate-800 group-hover:to-gray-900 rounded-lg transition-all duration-300"></span>
              
              {/* Button Content */}
              <span className="relative z-10 text-gray-200 group-hover:text-white font-semibold text-lg flex items-center gap-3 transition-colors duration-300">
                {/* Simple Clean Text */}
                <span className="group-hover:text-white transition-colors duration-300">
                  Resume
                </span>
                
                {/* Gentle Arrow */}
                <motion.span
                  animate={{
                    y: [0, 3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 text-xl"
                >
                  ↓
                </motion.span>
              </span>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </motion.button>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
