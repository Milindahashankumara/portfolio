"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import SuccessModal from "./ui/SuccessModal";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaMedium, 
  FaWhatsapp, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialPlatform {
  name: string;
  icon: React.ComponentType<any>;
  url: string;
  color: string;
  hoverColor: string;
  description: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("DG0bpmpqDS2DbGlQd"); // Your EmailJS public key
  }, []);

  const socialPlatforms: SocialPlatform[] = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/milinda.hashan.54",
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-500 to-blue-600",
      description: "Connect on Facebook"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/_milinda.hashan_/",
      color: "from-pink-600 to-purple-600",
      hoverColor: "from-pink-500 to-purple-500",
      description: "Follow on Instagram"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/hashan-wickramasinghe-3853b9271",
      color: "from-blue-700 to-blue-800",
      hoverColor: "from-blue-600 to-blue-700",
      description: "Professional Network"
    },
    {
      name: "Medium",
      icon: FaMedium,
      url: "https://medium.com/@milindahashan07",
      color: "from-gray-700 to-gray-800",
      hoverColor: "from-gray-600 to-gray-700",
      description: "Read My Articles"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/94786236965",
      color: "from-green-600 to-green-700",
      hoverColor: "from-green-500 to-green-600",
      description: "Quick Chat"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:milindahashan07@gmail.com",
      color: "from-red-600 to-red-700",
      hoverColor: "from-red-500 to-red-600",
      description: "Send Email"
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "milindahashan07@gmail.com",
      link: "mailto:milindahashan07@gmail.com"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+94 78 623 6965",
      link: "tel:+94786236965"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Sri Lanka",
      link: null
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Show success modal with animation
        setShowSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      alert("Sorry, there was an error sending your message. Please try again or contact me directly at milindahashan1002@gmail.com");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="pt-1 pb-12 bg-black/50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information & Social Links - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Professional Social Links */}
            <div className="bg-gray-900/60 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-3">Connect With Me</h3>
                <p className="text-gray-400">Let’s stay connected across different platforms</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl transition-all duration-300 border border-gray-700/30 hover:border-gray-600"
                  >
                    {/* Professional Icon Container */}
                    <div className="w-12 h-12 mb-3 bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-purple-600 group-hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg">
                      <platform.icon className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Platform Name */}
                    <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors duration-300">
                      {platform.name}
                    </span>
                    
                    {/* Subtle Hover Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/60 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm">I’d love to hear from you. Send me a message and I’ll respond as soon as possible.</p>
            </div>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-gray-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/80 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/80 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-gray-500"
                  placeholder="What’s this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group"
              >
                {/* Professional Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-slate-500 via-blue-600 to-slate-500 group-hover:from-blue-500 group-hover:via-indigo-600 group-hover:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(0deg, #64748b, #2563eb, #64748b)",
                      "linear-gradient(90deg, #64748b, #2563eb, #64748b)",
                      "linear-gradient(180deg, #64748b, #2563eb, #64748b)",
                      "linear-gradient(270deg, #64748b, #2563eb, #64748b)",
                      "linear-gradient(0deg, #64748b, #2563eb, #64748b)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-full h-full bg-transparent rounded-xl" />
                </motion.div>

                {/* Main Button Content */}
                <div className="relative bg-gradient-to-r from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700 border border-slate-600 group-hover:border-slate-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg group-hover:shadow-xl">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </section>
  );
};

export default ContactPage;