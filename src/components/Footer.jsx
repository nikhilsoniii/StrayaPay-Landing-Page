import { motion } from "framer-motion";
import React from "react";
import { facebook, instagram, linkedin, twitter } from "../assets";
import bgImage from "../assets/Bg_no_block.png"; 

function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: facebook, name: "Facebook", url: "#" },
    { icon: instagram, name: "Instagram", url: "#" },
    { icon: twitter, name: "Twitter", url: "#" },
    { icon: linkedin, name: "LinkedIn", url: "#" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Contact", url: "#" },
        { name: "Blog", url: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Payment Solutions", url: "#" },
        { name: "Mobile App", url: "#" },
        { name: "Business Tools", url: "#" },
        { name: "API", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", url: "#" },
        { name: "Help Center", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
      ],
    },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className="bg-[#0a2e1f] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`, // Applying the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00d37f]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00d37f]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand and Social */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Strayapay</h2>
              <p className="text-[#a3e4c9] mb-6">
                Finance with security and flexibility. Your trusted partner for
                modern payment solutions.
              </p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#00d37f]/20 flex items-center justify-center hover:bg-[#00d37f]/30 transition-colors"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.url}
                      className="text-[#a3e4c9] hover:text-[#00d37f] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a3e2f]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#a3e4c9] text-sm">
              © {new Date().getFullYear()} Strayapay. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-[#a3e4c9] hover:text-[#00d37f] text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a3e4c9] hover:text-[#00d37f] text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#a3e4c9] hover:text-[#00d37f] text-sm transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
