import { motion } from "framer-motion";
import React from "react";
import FormImage from "../assets/Form-bg.png";
import heroImage from "../assets/Waitlist-img.png";

function Waitlist({
  isVisible,
  userType,
  setUserType,
  email,
  setEmail,
  isSubmitting,
  isSubmitted,
  onSubmit,
}) {
  const [formData, setFormData] = React.useState({
    businessName: "",
    contactName: "",
    phoneNumber: "",
    location: "",
    businessType: "",
    name: "",
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="waitlist"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 mx-32 my-32 rounded-3xl" // Added mx-12 and my-12 for 50px margin
      style={{
        backgroundImage: `url(${FormImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out", 
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Waitlist
        </motion.h2>
        <motion.p
          className="text-lg text-[#e4e4e4] dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Be among the first to experience the future of payments. Sign up now
          for early access and exclusive updates.
        </motion.p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg max-w-md mx-auto"
          >
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
              Thank you for joining!
            </h3>
            <p className="text-green-700 dark:text-green-300">
              We'll keep you updated on our progress.
            </p>
          </motion.div>
        ) : (
          <motion.div className="bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-between">
            <motion.form
              onSubmit={onSubmit}
              className="max-w-md mx-auto space-y-4 px-4 py-8 bg-transparent rounded-lg lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-center space-x-4 mb-4">
                <button
                  type="button"
                  onClick={() => setUserType("merchant")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    userType === "merchant"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  Merchant
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("customer")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    userType === "customer"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  Customer
                </button>
              </div>
              <div className="space-y-4">
                {userType === "merchant" ? (
                  <>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      placeholder="Business Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactName: e.target.value,
                        })
                      }
                      placeholder="Contact Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        })
                      }
                      placeholder="Suburb/Location"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="text"
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessType: e.target.value,
                        })
                      }
                      placeholder="Type of Business (Optional)"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        })
                      }
                      placeholder="Suburb/Location (Optional)"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </div>
            </motion.form>

            <motion.div
  className="max-w-md mx-auto space-y-4 px-4 py-8 bg-transparent rounded-lg w-80"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "480px", 
  }}
/>

          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Waitlist;
