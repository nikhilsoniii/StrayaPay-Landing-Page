import { motion } from "framer-motion";
import heroImage from "../assets/HeroSection-img.png";
import bgImage from "../assets/Group 469296.png";

function Hero({ isVisible }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#0f1d17] dark:text-white">
              <span className="block bg-gradient-to-r from-[#00d37f] via-[#00b36b] to-[#04684C] bg-clip-text text-transparent pb-4">
                Financial
              </span>
              <span className="block bg-gradient-to-r from-[#00b36b] via-[#00d37f] to-[#04684C] bg-clip-text text-transparent">
                Freedom
              </span>
            </h1>
            <p className="mt-8 text-xl font-medium text-[#d4d4d3] dark:text-[#d4d4d3] max-w-2xl">
              Experience the next generation of payments with Strayapay.
              Seamless transactions, unmatched security, and innovative
              solutions for modern businesses.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("waitlist")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-lg bg-gradient-to-r from-[#00d37f] to-[#00b36b] hover:from-[#00b36b] hover:to-[#00995e] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Get started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("features")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-base font-semibold text-[#e4e4e4] dark:text-[#e4e4e4] hover:text-[#00b36b] dark:hover:text-[#00b36b] transition-colors flex items-center gap-2"
              >
                Learn more
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="relative hidden lg:flex justify-end"
        >
          <img
            src={heroImage}
            alt="Hero Section"
            className="w-[60%] max-w-xl h-auto object-contain transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
