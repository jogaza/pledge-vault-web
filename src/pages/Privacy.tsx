import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const sections = [
  {
    title: "Introduction",
    content: `This Privacy Policy explains how Pledge Vault ("we," "us," or "our") collects, uses, shares, and protects your personal information when you use our money transfer services, website, and mobile applications.`,
  },
  {
    title: "Information We Collect",
    content: `We collect information that you provide directly to us, including:
    • Personal identification information (name, date of birth, government ID)
    • Contact information (email, phone number, address)
    • Financial information (bank account details, credit/debit card information)
    • Transaction information (transfer amounts, recipients, dates)
    • Device and usage information (IP address, browser type, operating system)`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to:
    • Process your money transfers
    • Verify your identity and prevent fraud
    • Communicate with you about your transactions
    • Improve our services and develop new features
    • Comply with legal obligations and regulatory requirements
    • Send you marketing communications (with your consent)`,
  },
  {
    title: "Information Sharing",
    content: `We may share your information with:
    • Financial institutions and payment processors to complete your transfers
    • Identity verification and fraud prevention services
    • Law enforcement and regulatory authorities when required by law
    • Service providers who assist in our operations
    We never sell your personal information to third parties.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your information, including:
    • Encryption of sensitive data
    • Secure servers and networks
    • Regular security assessments
    • Employee training on data protection
    • Access controls and monitoring`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
    • Access your personal information
    • Correct inaccurate information
    • Request deletion of your information
    • Opt-out of marketing communications
    • Withdraw consent for data processing
    Contact our privacy team to exercise these rights.`,
  },
  {
    title: "International Transfers",
    content: `We may transfer your information to countries outside your residence for processing. We ensure appropriate safeguards are in place to protect your information during these transfers.`,
  },
  {
    title: "Data Retention",
    content: `We retain your information for as long as necessary to:
    • Provide our services
    • Comply with legal obligations
    • Resolve disputes
    • Enforce our agreements`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not intended for children under 18. We do not knowingly collect information from children under 18. If we learn we have collected such information, we will delete it.`,
  },
  {
    title: "Updates to Privacy Policy",
    content: `We may update this Privacy Policy periodically. We will notify you of material changes through our website or email. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or our privacy practices, contact us at:
    Email: privacy@pledgevault.com
    Phone: +1 (888) 123-4567
    Address: 123 Privacy Street, Suite 100, New York, NY 10001`,
  },
];

export function Privacy() {
  const { theme } = useTheme();

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">
            Privacy <span className="text-green-500">Policy</span>
          </h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Last updated: March 15, 2024
          </p>
        </motion.div>

        {/* Privacy Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } space-y-4 whitespace-pre-line`}
              >
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-16 p-8 rounded-xl ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Questions about our Privacy Policy?
          </h2>
          <p
            className={`text-center mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our privacy team is here to help you understand how we protect your
            data
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Privacy Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
