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

export function Home() {
  const { theme } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-8">
              Send Money Globally with
              <span className="text-green-500"> Pledge Vault</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-2xl mx-auto`}
            >
              Fast, secure, and affordable money transfers to anywhere in the
              world. Download our mobile app today and experience seamless
              transactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold">
                Download for iOS
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold">
                Download for Android
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-green-500">Pledge Vault</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800/50" : "bg-white"
              }`}
            >
              <div className="text-green-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                Send money in minutes, not days. Your recipients get their funds
                instantly.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800/50" : "bg-white"
              }`}
            >
              <div className="text-green-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                Bank-level security with advanced encryption to protect your
                transactions.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-gray-800/50" : "bg-white"
              }`}
            >
              <div className="text-green-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-4">Best Rates</h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-600"}
              >
                Competitive exchange rates with low transfer fees to save you
                money.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">
            What Our Users <span className="text-green-500">Say</span>
          </h2>
          <p
            className={`section-description text-center ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of satisfied users who trust Pledge Vault for their
            international money transfers
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl p-6 backdrop-blur-sm ${
                  theme === "dark" ? "bg-gray-800/50" : "bg-white shadow-lg"
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-green-500 text-sm">{testimonial.role}</p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <blockquote
                  className={`italic ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4 text-green-500">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p
            className={`text-xl mb-12 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Download the Pledge Vault app now and join thousands of satisfied
            users who trust us for their international money transfers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
                Download for iOS
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold w-full sm:w-auto">
                Download for Android
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
