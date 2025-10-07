"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaEnvelope, FaTimes } from 'react-icons/fa';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4
            }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Success Animation */}
            <div className="text-center">
              {/* Animated Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.2, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                className="inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto"
              >
                <div className="relative">
                  {/* Outer Ring Animation */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full"
                  />
                  
                  {/* Pulse Animation */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.8, 1.1, 1] }}
                    transition={{ 
                      delay: 0.4, 
                      duration: 0.6, 
                      times: [0, 0.6, 1] 
                    }}
                    className="relative"
                  >
                    <FaCheckCircle className="text-6xl text-green-500 drop-shadow-lg" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Success Message */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-2xl font-bold text-white mb-3"
              >
                Message Sent Successfully!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                Thank you for contacting me. I’ve received your message and will get back to you soon.
              </motion.p>

              {/* Email Confirmation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 mb-6 border border-blue-500/30"
              >
                <div className="flex items-center justify-center gap-3 text-blue-300">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ 
                      delay: 0.8, 
                      duration: 0.6, 
                      repeat: 1 
                    }}
                  >
                    <FaEnvelope className="text-xl" />
                  </motion.div>
                  <span className="text-sm font-medium">
                    Confirmation email sent to your inbox
                  </span>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Continue Exploring
              </motion.button>

              {/* Floating Particles Animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      opacity: 0, 
                      y: 100, 
                      x: Math.random() * 400 - 200,
                      scale: 0 
                    }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      y: -100, 
                      scale: [0, 1, 0] 
                    }}
                    transition={{ 
                      delay: 0.9 + i * 0.1, 
                      duration: 2, 
                      ease: "easeOut" 
                    }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    style={{ 
                      left: `${20 + i * 10}%`, 
                      bottom: '10%' 
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;