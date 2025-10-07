"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { aboutMe, skills, education } from "@/data";

const AboutPage = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  const skillCategories = [
    { key: "frontend", label: "Frontend",  },
    { key: "backend", label: "Backend", },
    { key: "database", label: "Database",  },
    { key: "mobile", label: "Mobile Development",  },
    { key: "programming", label: "Programming",  },
    { key: "tools", label: "Tools", },
    
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="dark:text-gray-300 text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for creating
            amazing digital experiences
          </p>
        </motion.div>

        {/* Personal Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Photo and Basic Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl"
              >
                <Image
                  src={aboutMe.photo}
                  alt={aboutMe.name}
                  fill
                  className="object-cover"
                  sizes="256px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
              </motion.div>
              <div className="absolute -bottom-2 -right-2 bg-green-400 w-8 h-8 rounded-full border-4 dark:border-gray-900 border-white flex items-center justify-center">
                <span className="text-xs"></span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                {aboutMe.name}
              </h3>
              <p className="text-purple-400 font-medium mb-4">
                {aboutMe.title}
              </p>
              <div className="dark:text-gray-300 text-gray-600">
                <p className="flex items-center  justify-center md:justify-start">
                  Moratuwa Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                My Story
              </h4>
              <div className="dark:text-gray-300 text-gray-600 leading-relaxed space-y-4">
                {aboutMe.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            My Skills & Expertise
          </h3>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 dark:bg-gray-800 bg-gray-100 p-2 rounded-full">
              {skillCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveSkillCategory(category.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSkillCategory === category.key
                      ? "bg-purple-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeSkillCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills[activeSkillCategory as keyof typeof skills].map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    {'image' in skill ? (
                      <Image 
                        src={skill.image} 
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-3xl">{'icon' in skill ? skill.icon : '🔧'}</span>
                    )}
                  </div>
                  <h4 className="font-semibold text-white text-center">
                    {skill.name}
                  </h4>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center dark:text-white text-gray-900 mb-12">
            Education & Learning
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="dark:bg-gray-800 bg-white rounded-xl p-8 shadow-lg border dark:border-gray-700 border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold dark:text-white text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    {edu.school && (
                      <p className="text-purple-400 font-medium mb-1">
                        {edu.school}
                      </p>
                    )}
                    <p className="dark:text-gray-400 text-gray-500 text-sm">
                       {edu.location} •  {edu.year}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.CGPA ? `CGPA: ${edu.CGPA}` : edu.SUBJECTS ? `Results: ${edu.SUBJECTS}` : ''}
                    </span>
                  </div>
                </div>

                <p className="dark:text-gray-300 text-gray-600 mb-4">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
