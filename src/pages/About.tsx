import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export function About() {
  const { theme } = useTheme();

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
            About <span className="text-green-500">Pledge Vault</span>
          </h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            We're on a mission to make international money transfers accessible,
            affordable, and instant for everyone.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div
          className={`rounded-2xl p-8 mb-16 ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } mb-6`}
          >
            At Pledge Vault, we believe that sending money across borders should
            be as easy as sending a text message. We're building the future of
            international money transfers, making it possible for people
            worldwide to support their loved ones instantly and affordably.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                A world where financial borders don't exist, and everyone has
                access to fast, secure, and affordable money transfers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                Trust, transparency, and customer-first thinking guide
                everything we do. We're committed to providing the best possible
                service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                We promise to always put our customers first, maintain the
                highest security standards, and continuously innovate to serve
                you better.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <div className="text-green-500 text-4xl font-bold mb-2">1M+</div>
            <div
              className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
            >
              Active Users
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <div className="text-green-500 text-4xl font-bold mb-2">150+</div>
            <div
              className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
            >
              Countries Served
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <div className="text-green-500 text-4xl font-bold mb-2">$5B+</div>
            <div
              className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
            >
              Transferred
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl text-center ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <div className="text-green-500 text-4xl font-bold mb-2">4.9/5</div>
            <div
              className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
            >
              User Rating
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div
          className={`rounded-2xl p-8 ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Co-founder",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
              },
              {
                name: "David Kumar",
                role: "Head of Operations",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-green-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
