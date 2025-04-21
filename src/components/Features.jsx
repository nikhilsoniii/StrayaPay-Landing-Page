import { motion } from "framer-motion";

function Features({ isVisible }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="features"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary-50/10 to-transparent dark:from-transparent dark:via-primary-900/10 dark:to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-primary-400/30 via-secondary-400/20 to-primary-600/10 rounded-full blur-3xl z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 relative z-10"
          >
            Why Choose Strayapay?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10"
          >
            Experience the next generation of payment solutions designed for
            modern businesses and consumers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Bank-Grade Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              End-to-end encryption and advanced fraud protection keep your
              transactions safe and secure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Complete transactions in seconds with our optimized payment
              processing system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Easy Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamlessly integrate with your existing systems using our
              comprehensive API.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              99.9%
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Uptime Guarantee
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              0.1s
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Average Transaction Time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              10K+
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Active Merchants
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              1M+
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Happy Customers
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
