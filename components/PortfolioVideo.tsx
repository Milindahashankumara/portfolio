"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";

const PortfolioVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <>
      <div id="portfolio-video" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Watch my journey through code, creativity, and innovation
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 rounded-2xl blur-sm opacity-75"></div>
            
            {/* Main Video Container */}
            <div 
              className="relative bg-black/90 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Video Element */}
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  src="/portfolio-v.mp4"
                  muted={isMuted}
                  loop
                  playsInline
                  onClick={handleVideoClick}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

                {/* Play Button Overlay */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={togglePlay}
                    >
                      <motion.div
                        className="bg-white/10 backdrop-blur-md rounded-full p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video Controls */}
                <AnimatePresence>
                  {(showControls || !isPlaying) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Play/Pause Button */}
                          <motion.button
                            onClick={togglePlay}
                            className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isPlaying ? (
                              <Pause className="w-6 h-6 text-white" />
                            ) : (
                              <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                            )}
                          </motion.button>

                          {/* Mute/Unmute Button */}
                          <motion.button
                            onClick={toggleMute}
                            className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {isMuted ? (
                              <VolumeX className="w-6 h-6 text-white" />
                            ) : (
                              <Volume2 className="w-6 h-6 text-white" />
                            )}
                          </motion.button>
                        </div>

                        {/* Fullscreen Button */}
                        <motion.button
                          onClick={toggleFullscreen}
                          className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Maximize className="w-6 h-6 text-white" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-60 animate-pulse delay-2000"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-3000"></div>
            </div>

            {/* Background Effects */}
            <motion.div
              className="absolute -inset-20 opacity-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </motion.div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">UI</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Creative Design</h3>
                <p className="text-gray-400 text-sm">Showcasing modern UI/UX principles with beautiful animations</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Optimized for speed and seamless user experience</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Cutting-edge technologies and creative solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={toggleFullscreen}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Fullscreen Video */}
              <video
                className="w-full h-auto max-h-[90vh] object-cover rounded-lg"
                src="/portfolio-v.mp4"
                controls
                autoPlay
                muted={isMuted}
                loop
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioVideo;