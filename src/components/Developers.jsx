import { motion } from "framer-motion";
import React from "react";

function Developers({ isVisible }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const codeExample = `// Initialize Strayapay
const strayapay = new Strayapay({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Create a payment
const payment = await strayapay.createPayment({
  amount: 1000, // $10.00
  currency: 'AUD',
  description: 'Order #123'
});`;

  return (
    <motion.section
      id="developers"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary-50/10 to-transparent dark:from-transparent dark:via-secondary-900/10 dark:to-transparent"
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
            Developer Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10"
          >
            Integrate Strayapay into your application with our comprehensive API
            and SDKs
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Start Guide
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    1
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Install the SDK
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Get started with our SDK using npm or yarn
                  </p>
                  <div className="mt-3 bg-gray-800 rounded-lg p-4">
                    <code className="text-sm text-white">
                      npm install @strayapay/sdk
                    </code>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    2
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Configure API Keys
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Set up your API keys in the dashboard and initialize the SDK
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    3
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Make Your First Payment
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Create a test payment to verify your integration
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-2xl transform -rotate-1" />
            <div className="relative bg-gray-800 rounded-xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-gray-400">example.js</div>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View Full Documentation
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Developers;
