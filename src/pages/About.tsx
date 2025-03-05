import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "With over 15 years in fintech, Sarah leads Pledge Vault's mission to revolutionize global money transfers.",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "A veteran software architect bringing cutting-edge security and innovation to our platform.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Ensuring smooth, reliable service delivery across our global network of partners.",
  },
];

const stats = [
  { label: "Founded", value: "2020" },
  { label: "Team Members", value: "100+" },
  { label: "Global Offices", value: "12" },
  { label: "Customer Satisfaction", value: "98%" },
];

export function About() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-blue-950" : "bg-white"
      }`}
    >
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              About <span className="text-blue-600">Pledge Vault</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-blue-200" : "text-blue-600"
              } max-w-3xl mx-auto`}
            >
              Building the future of international money transfers
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 rounded-xl ${
              theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
            } backdrop-blur-sm mb-16`}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-blue-200" : "text-blue-900"
              }`}
            >
              At Pledge Vault, we're committed to making international money
              transfers accessible, affordable, and secure for everyone. Our
              platform leverages cutting-edge technology to provide instant,
              low-cost transfers across borders, helping families and businesses
              stay connected financially.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
                } backdrop-blur-sm text-center`}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div
                  className={
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
                  } backdrop-blur-sm text-center`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p
                    className={
                      theme === "dark" ? "text-blue-200" : "text-blue-900"
                    }
                  >
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`p-8 rounded-xl ${
              theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
            } backdrop-blur-sm`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-blue-500 text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-4">Security First</h3>
                <p
                  className={
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }
                >
                  Your security and privacy are our top priorities. We employ
                  bank-level encryption and security measures.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-500 text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p
                  className={
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }
                >
                  We continuously innovate to provide the best possible service
                  and user experience.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-500 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-4">
                  Trust & Transparency
                </h3>
                <p
                  className={
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }
                >
                  We believe in complete transparency in our fees and services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
