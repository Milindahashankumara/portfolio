"use client";

import { navItems, aboutMe } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ThemeToggle from "@/components/ThemeToggle";
import VerticalSocialBar from "@/components/VerticalSocialBar";

const Home = () => {
  // Social links configuration
  const socialLinks = [
    {
      platform: 'github' as const,
      url: aboutMe.github,
      label: 'Visit my GitHub profile'
    },
    {
      platform: 'linkedin' as const,
      url: aboutMe.linkedin,
      label: 'Connect with me on LinkedIn'
    },
    {
      platform: 'medium' as const,
      url: 'https://medium.com/@milindahashan07',
      label: 'Read my articles on Medium'
    }
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <ThemeToggle />
        <VerticalSocialBar 
          socialLinks={socialLinks}
          accentColor="#8b5cf6"
        />
        <Hero />
        <AboutPage />
        <RecentProjects />
        <Approach />
        <ContactPage />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
