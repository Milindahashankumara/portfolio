"use client";

import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import HeroLogo from "./HeroLogo";
//import { AnimatedText } from "./ui/AnimatedText";
//import { FloatingSidebar } from "./ui/FloatingSidebar";

const Hero = () => {
  const handleResumeClick = () => {
    // Open resume in new tab for viewing/printing as PDF
    window.open("/resume.html", "_blank");
  };

  return (
    <div id="home" className="pb-20 pt-36 relative">
      {/* Logo in upper right corner */}
      <HeroLogo />
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

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
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
              <div>Hi, I'm</div>
              <div className="text-purple-400 font-extrabold">
                Hashan Wickramasinghe
              </div>
            </h1>
            <h3 className="text-white font-semibold leading-tight text-[20px] md:text-2xl lg:text-3xl mt-4">
              I am a{" "}
              <span className="text-blue-400 font-extrabold">
                FullStack Developer
              </span>
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
            <motion.button
              onClick={handleResumeClick}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[2px] shadow-2xl">
                <div className="bg-black rounded-full px-8 py-4 group-hover:bg-gray-900 transition-all duration-300 relative">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-white text-lg"
                    >
                    <FaDownload /> 
                    </motion.div>
                    <span className="text-white font-semibold text-lg whitespace-nowrap">
                      Resume
                    </span>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:animate-ping pointer-events-none" />
                </div>
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* <FloatingSidebar /> */}
    </div>
  );
};

export default Hero;
