import { motion } from "framer-motion";

function QRPayment({ isVisible }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 dark:from-primary-900/20 dark:via-transparent dark:to-secondary-900/20 opacity-50" />
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-primary-400/30 via-secondary-400/20 to-primary-600/10 rounded-full blur-3xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <div className="mx-auto max-w-7xl relative py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 flex justify-center items-center">
            <motion.div
              className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-secondary-400/20 rounded-2xl" />
              <div className="relative">
                <div className="w-64 h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center space-y-4 p-6">
                  <svg
                    className="w-16 h-16 text-gray-400 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4v1m6 11h2m-2 0h-2m-4-8h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Scan QR Code
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      to Pay or Join Waitlist
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 bg-primary-600 rounded-full shadow-lg">
                    <p className="text-xs text-white font-medium">
                      Demo Purpose Only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:order-1 text-left">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Seamless Payments with QR Technology
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Experience the future of payments with our innovative QR code
              technology. Simply scan, confirm, and pay - it's that easy!
            </motion.p>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Quick and Easy
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Complete transactions in seconds with just a scan of a QR
                    code.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400"
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
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Secure Transactions
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Every payment is protected with state-of-the-art encryption.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default QRPayment;
