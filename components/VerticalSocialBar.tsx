"use client";

import React from "react";
import { motion } from "framer-motion";

// SVG Icons Components
const GitHubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MediumIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

interface SocialLink {
  platform: 'github' | 'linkedin' | 'medium';
  url: string;
  label?: string;
}

interface VerticalSocialBarProps {
  socialLinks: SocialLink[];
  accentColor?: string;
  className?: string;
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  medium: MediumIcon,
};

const VerticalSocialBar: React.FC<VerticalSocialBarProps> = ({
  socialLinks,
  accentColor = "#8b5cf6", // Default purple
  className = "",
}) => {
  return (
    <div className={`vertical-social-bar ${className}`}>
      {/* Social Icons */}
      <div className="social-icons">
        {socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.platform];
          const defaultLabel = `Visit my ${link.platform.charAt(0).toUpperCase() + link.platform.slice(1)} profile`;
          
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label || defaultLabel}
              className="social-icon"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                x: -8,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-circle">
                <IconComponent />
              </div>
            </motion.a>
          );
        })}
      </div>
      
      {/* Vertical Divider */}
      <motion.div 
        className="vertical-divider"
        initial={{ height: 0 }}
        animate={{ height: "60px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ backgroundColor: accentColor }}
      />

      <style jsx>{`
        .vertical-social-bar {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 50;
        }

        .social-icons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .social-icon {
          display: block;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .social-icon:hover .icon-circle {
          background-color: white;
          border-color: white;
          color: #1a1a1a;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .social-icon:focus {
          outline: 2px solid ${accentColor};
          outline-offset: 4px;
          border-radius: 50%;
        }

        .vertical-divider {
          width: 2px;
          border-radius: 1px;
          opacity: 0.6;
        }

        /* Hide on screens under 900px */
        @media (max-width: 899px) {
          .vertical-social-bar {
            display: none;
          }
        }

        /* Ensure accessibility */
        @media (prefers-reduced-motion: reduce) {
          .social-icon {
            transition: none;
          }
          
          .icon-circle {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalSocialBar;