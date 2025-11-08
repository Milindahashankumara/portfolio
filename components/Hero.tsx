"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  // Video loading management
  useEffect(() => {
    const timer = setTimeout(() => {
      const video = document.querySelector('#hero-video') as HTMLVideoElement;
      if (video) {
        video.play().then(() => {
          setVideoLoaded(true);
          console.log('Video is playing');
        }).catch((error) => {
          console.log('Video autoplay failed:', error);
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Logo in upper right corner */}
      <HeroLogo />
      
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.5) contrast(1.1) saturate(1.1)'
          }}
        >
          <source src="/portfolio-v.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        
        {/* Creative Video Frame */}
        <div className="absolute inset-0 border-4 border-gradient-to-r from-purple-500/30 via-transparent to-blue-500/30 pointer-events-none"></div>
      </div>
      
      {/* Video Status Indicator */}
      <div className="absolute top-4 left-4 z-50">
        {videoLoaded ? (
          <div className="flex items-center gap-2 text-green-400 text-sm bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-green-500/30">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            LIVE
          </div>
        ) : (
          <div className="text-yellow-400 text-sm bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-yellow-500/30">
            Loading Video...
          </div>
        )}
      </div>
      
      {/* Clean Video Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Simple Corner Accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-purple-400/40 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400/40 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-400/40 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-pink-400/40 rounded-br-lg"></div>
        
        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content - Above Video */}
      <div className="relative z-20 flex justify-center items-center min-h-screen px-4">
        <div className="max-w-4xl w-full text-center">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-white font-bold leading-tight text-[48px] md:text-6xl lg:text-7xl mb-4">
              <div className="text-shadow-lg">Hi, I&apos;m</div>
              <div className="text-purple-400 font-extrabold text-shadow-lg">
                Hashan Wickramasinghe
              </div>
            </h1>
            
            {/* Animated Title */}
            <h3 className="text-white font-semibold text-[24px] md:text-3xl lg:text-4xl">
              I am a{" "}
              <AnimatePresence mode="wait">
                <motion.span 
                  className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block min-w-[300px]"
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {titles[currentTitle]}
                </motion.span>
              </AnimatePresence>
            </h3>
          </motion.div>

          {/* Resume Button with Light Border Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <motion.div className="relative group">
              {/* Subtle Animated Border Light */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                  padding: "1px",
                }}
                animate={{
                  backgroundPosition: ["-100% 0%", "100% 0%", "-100% 0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full bg-black/60 backdrop-blur-sm rounded-lg" />
              </motion.div>
              
              <motion.button
                onClick={handleViewResume}
                className="relative px-10 py-3 font-semibold text-lg tracking-wide cursor-pointer bg-black/60 backdrop-blur-sm rounded-lg border border-white/20 group-hover:border-blue-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Enhanced Corner Accents */}
                <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg group-hover:border-blue-300/70 transition-colors duration-300"></div>
                <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg group-hover:border-blue-300/70 transition-colors duration-300"></div>
                
                {/* Small Light Dots */}
                <motion.div
                  className="absolute top-1 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                
                {/* Button Text */}
                <span className="relative z-10 text-white font-semibold tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                  Resume
                </span>
                
                {/* Subtle Light Sweep */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%)",
                  }}
                  animate={{
                    backgroundPosition: ["-100% -100%", "100% 100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
