"use client";

import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add("dark");
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }, []);

  // Return null since we don't need a toggle anymore - always dark mode
  return null;
};

export default ThemeToggle;
