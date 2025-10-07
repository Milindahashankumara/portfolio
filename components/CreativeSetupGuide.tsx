"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaUpload, FaFolderOpen, FaEdit, FaEye, FaPrint, FaDownload, FaCheckCircle } from "react-icons/fa";

const CreativeSetupGuide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: "Create PDF Resume",
      subtitle: "Design your professional CV",
      icon: <FaFileAlt />,
      color: "from-blue-500 to-cyan-500",
      description: "Create a PDF version of your resume using any tool like Microsoft Word, Google Docs, or Canva",
      actions: ["Design your layout", "Add your information", "Export as PDF"],
    },
    {
      id: 2,
      title: "Save with Correct Name",
      subtitle: "Name it properly",
      icon: <FaEdit />,
      color: "from-purple-500 to-pink-500",
      description: "Save your PDF with the exact filename for the system to recognize it",
      actions: ["Save as: Milinda_Hashan_CV.pdf", "Use underscore instead of spaces", "Keep .pdf extension"],
    },
    {
      id: 3,
      title: "Upload to Public Folder",
      subtitle: "Place in correct location",
      icon: <FaUpload />,
      color: "from-emerald-500 to-teal-500",
      description: "Place your PDF file in the public folder of your portfolio project",
      actions: ["Navigate to /public folder", "Drag and drop your PDF", "Verify file location"],
    },
    {
      id: 4,
      title: "Test Resume Button",
      subtitle: "Verify it works",
      icon: <FaEye />,
      color: "from-orange-500 to-red-500",
      description: "Click the resume button to test if everything works correctly",
      actions: ["Click 'View Resume' button", "PDF opens in new tab", "Users can download/print"],
    },
  ];

  const toggleStepCompletion = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const howItWorks = [
    {
      feature: "View Resume Button",
      description: "Opens your PDF in a new tab",
      icon: <FaEye />,
      color: "from-blue-400 to-purple-400",
    },
    {
      feature: "Download Option",
      description: "Users can download your CV",
      icon: <FaDownload />,
      color: "from-green-400 to-emerald-400",
    },
    {
      feature: "Print Friendly",
      description: "Perfect for printing from browser",
      icon: <FaPrint />,
      color: "from-pink-400 to-rose-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            Resume Setup Guide
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Follow these creative steps to add your resume to your portfolio
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Floating Elements */}
              <div className="absolute -inset-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute top-0 right-0 w-4 h-4 bg-gradient-to-r ${step.color} rounded-full blur-sm opacity-60`}
                />
              </div>

              {/* Main Card */}
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${step.color} p-[2px] shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 h-full relative overflow-hidden">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-2xl font-bold text-white/20">
                    {step.id}
                  </div>

                  {/* Completion Checkbox */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStepCompletion(step.id);
                    }}
                    className="absolute top-4 left-4 z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaCheckCircle 
                      className={`text-xl transition-colors duration-300 ${
                        completedSteps.includes(step.id) 
                          ? 'text-green-400' 
                          : 'text-gray-600 hover:text-gray-400'
                      }`} 
                    />
                  </motion.button>

                  {/* Icon */}
                  <div className="relative z-10 mb-4 mt-8">
                    <motion.div
                      animate={{
                        rotateY: activeStep === index ? [0, 360] : 0,
                        scale: activeStep === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeStep === index ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl shadow-lg mx-auto`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {step.subtitle}
                    </p>
                    
                    {/* Active Step Details */}
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-2"
                        >
                          <p className="text-gray-400 text-xs mb-3">
                            {step.description}
                          </p>
                          {step.actions.map((action, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-xs text-gray-300"
                            >
                              <div className="w-1 h-1 bg-purple-400 rounded-full" />
                              {action}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Glow */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${step.color} opacity-60`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            🎯 How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${item.color} p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl mb-4 mx-auto`}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.feature}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-800 rounded-full p-4 shadow-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold">Progress</span>
            <span className="text-purple-400 font-bold">
              {completedSteps.length}/{steps.length} Complete
            </span>
          </div>
          <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeSetupGuide;