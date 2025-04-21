import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import heroImage from "../assets/Group 469296.png"; 
import bgImage from "../assets/Bg_no_block.png";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) { // After scrolling 650px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg shadow-sm"
      style={{
        backgroundImage: scrolled ? `url(${bgImage})` : `url(${heroImage})`, // Conditional background
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)", // Dark background color with transparency
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out, background-color 0.5s ease-in-out", // Smooth transitions for both
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Strayapay Logo"
                  className="h-8 object-contain mr-1"
                  style={{ height: "2rem" }}
                />
                <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#d4d4d3] to-[#d4d4d3] bg-clip-text text-transparent">
                  Strayapay
                </span>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium bg-gradient-to-r from-[#d4d4d3] to-[#d4d4d3] bg-clip-text text-transparent hover:from-[#00b36b] hover:to-[#00b36b] transition-colors"
                onClick={() =>
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" })
                }
                href="#features"
              >
                Features
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium bg-gradient-to-r from-[#d4d4d3] to-[#d4d4d3] bg-clip-text text-transparent hover:from-[#00b36b] hover:to-[#00b36b] transition-colors"
                href="#solutions"
              >
                Solutions
              </motion.a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("waitlist")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 rounded-lg transition-colors"
            >
              Get started
            </motion.button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full bg-gray-100 p-2 text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
