import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function Contact() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-blue-950" : "bg-white"
      }`}
    >
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-blue-200" : "text-blue-600"
              } max-w-3xl mx-auto`}
            >
              We're here to help with any questions about our services
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 rounded-xl ${
              theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
            } backdrop-blur-sm`}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-blue-200" : "text-blue-900"
                    }`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`mt-1 block w-full rounded-lg px-4 py-2 ${
                      theme === "dark"
                        ? "bg-blue-800/50 border-blue-700 text-blue-100 placeholder-blue-400"
                        : "bg-white border-blue-200 text-blue-900 placeholder-blue-400"
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-blue-200" : "text-blue-900"
                    }`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`mt-1 block w-full rounded-lg px-4 py-2 ${
                      theme === "dark"
                        ? "bg-blue-800/50 border-blue-700 text-blue-100 placeholder-blue-400"
                        : "bg-white border-blue-200 text-blue-900 placeholder-blue-400"
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 block w-full rounded-lg px-4 py-2 ${
                    theme === "dark"
                      ? "bg-blue-800/50 border-blue-700 text-blue-100 placeholder-blue-400"
                      : "bg-white border-blue-200 text-blue-900 placeholder-blue-400"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`mt-1 block w-full rounded-lg px-4 py-2 ${
                    theme === "dark"
                      ? "bg-blue-800/50 border-blue-700 text-blue-100 placeholder-blue-400"
                      : "bg-white border-blue-200 text-blue-900 placeholder-blue-400"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`mt-1 block w-full rounded-lg px-4 py-2 ${
                    theme === "dark"
                      ? "bg-blue-800/50 border-blue-700 text-blue-100 placeholder-blue-400"
                      : "bg-white border-blue-200 text-blue-900 placeholder-blue-400"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
              } backdrop-blur-sm text-center`}
            >
              <div className="text-blue-500 text-2xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p
                className={theme === "dark" ? "text-blue-200" : "text-blue-900"}
              >
                123 Business Street
                <br />
                New York, NY 10001
              </p>
            </div>
            <div
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
              } backdrop-blur-sm text-center`}
            >
              <div className="text-blue-500 text-2xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p
                className={theme === "dark" ? "text-blue-200" : "text-blue-900"}
              >
                +1 (888) 123-4567
                <br />
                Mon-Fri 9am-6pm EST
              </p>
            </div>
            <div
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
              } backdrop-blur-sm text-center`}
            >
              <div className="text-blue-500 text-2xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p
                className={theme === "dark" ? "text-blue-200" : "text-blue-900"}
              >
                support@pledgevault.com
                <br />
                24/7 Support
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
