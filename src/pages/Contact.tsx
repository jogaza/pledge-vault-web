import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export function Contact() {
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            We're here to help! Reach out to us through any of the channels
            below.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <EnvelopeIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              support@pledgevault.com
            </p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              } mt-2`}
            >
              24/7 response time
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <PhoneIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              +1 (888) 123-4567
            </p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              } mt-2`}
            >
              Mon-Fri, 9am-6pm EST
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <ChatBubbleLeftRightIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              Chat with our support team
            </p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              } mt-2`}
            >
              Available 24/7
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div
          className={`max-w-3xl mx-auto rounded-2xl p-8 ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className={`w-full px-4 py-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } border focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
