"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full py-8 relative bg-black/30 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 <span className="text-white font-semibold">{aboutMe.name}</span>. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;