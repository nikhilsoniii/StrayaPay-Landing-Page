import { motion } from "framer-motion";

function Pricing({ isVisible }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 1,000 transactions/month",
        "Basic analytics",
        "Email support",
        "API access",
        "Mobile app",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses with higher volume",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced analytics",
        "Priority support",
        "Full API access",
        "Custom integrations",
        "Fraud protection",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited transactions",
        "Real-time analytics",
        "24/7 dedicated support",
        "Custom development",
        "SLA guarantee",
        "Advanced security",
        "Account manager",
      ],
    },
  ];

  return (
    <motion.section
      id="pricing"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary-50/10 to-transparent dark:from-transparent dark:via-primary-900/10 dark:to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? "ring-2 ring-primary-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button
                  onClick={() => {
                    document
                      .getElementById("waitlist")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full px-6 py-3 text-base font-medium rounded-lg transition-colors shadow-md hover:shadow-lg ${
                    plan.popular
                      ? "text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600"
                      : "text-primary-700 bg-primary-50 hover:bg-primary-100 dark:text-primary-300 dark:bg-primary-900/50 dark:hover:bg-primary-900/70"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Pricing;
