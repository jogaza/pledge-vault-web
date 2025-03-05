import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Owner",
    location: "United States",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Pledge Vault has transformed how I send money to my family abroad. The rates are unbeatable, and the transfers are lightning fast!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    location: "Canada",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "I've tried many money transfer apps, but Pledge Vault stands out with its security features and user-friendly interface.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "International Student",
    location: "United Kingdom",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote:
      "As a student abroad, I need reliable and affordable money transfers. Pledge Vault delivers exactly that, every single time.",
  },
];

const stats = [
  { label: "Active Users", value: "2M+" },
  { label: "Countries Served", value: "150+" },
  { label: "Daily Transactions", value: "$50M+" },
  { label: "Customer Rating", value: "4.9/5" },
];

export function Home() {
  const { theme } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 dark:from-blue-900 dark:to-blue-950" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white">
              Send Money Globally with
              <span className="text-blue-300"> Pledge Vault</span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Fast, secure, and affordable money transfers to anywhere in the
              world. Download our mobile app today and experience seamless
              transactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                Download for iOS
              </button>
              <button className="bg-white hover:bg-blue-50 text-blue-900 px-8 py-3 rounded-lg font-semibold">
                Download for Android
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-blue-950" : "bg-blue-50"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-blue-600">Pledge Vault</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-blue-900/50" : "bg-white"
              } shadow-lg backdrop-blur-sm`}
            >
              <div className="text-blue-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p
                className={theme === "dark" ? "text-blue-200" : "text-blue-900"}
              >
                Send money in minutes, not days. Your recipients get their funds
                instantly.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-blue-900/50" : "bg-white"
              } shadow-lg backdrop-blur-sm`}
            >
              <div className="text-blue-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p
                className={theme === "dark" ? "text-blue-200" : "text-blue-900"}
              >
                Bank-level security with advanced encryption to protect your
                transactions.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-blue-900/50" : "bg-white"
              } shadow-lg backdrop-blur-sm`}
            >
              <div className="text-blue-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-4">Best Rates</h3>
              <p
                className={theme === "dark" ? "text-blue-200" : "text-blue-900"}
              >
                Competitive exchange rates with low transfer fees to save you
                money.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-blue-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            What Our Users <span className="text-blue-500">Say</span>
          </h2>
          <p
            className={`text-center mb-16 ${
              theme === "dark" ? "text-blue-200" : "text-blue-600"
            }`}
          >
            Join thousands of satisfied users who trust Pledge Vault for their
            international money transfers
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl p-6 backdrop-blur-sm ${
                  theme === "dark" ? "bg-blue-800/50" : "bg-blue-50"
                } shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-500"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-500 text-sm">{testimonial.role}</p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <blockquote
                  className={`italic ${
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
                  }`}
                >
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 text-blue-500">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-blue-950" : "bg-blue-50"
        } overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p
            className={`text-xl mb-12 max-w-2xl mx-auto ${
              theme === "dark" ? "text-blue-200" : "text-blue-900"
            }`}
          >
            Download the Pledge Vault app now and join thousands of satisfied
            users who trust us for their international money transfers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold w-full sm:w-auto shadow-lg">
                Download for iOS
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <button className="bg-white hover:bg-blue-50 text-blue-900 px-8 py-3 rounded-lg font-semibold w-full sm:w-auto shadow-lg">
                Download for Android
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
