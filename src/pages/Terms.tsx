import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Pledge Vault's services, website, or mobile applications (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.`,
  },
  {
    title: "2. Service Description",
    content: `Pledge Vault provides international money transfer services that allow users to send money to recipients in various countries. Our Services are subject to applicable laws and regulations governing money transmission.`,
  },
  {
    title: "3. User Registration",
    content: `To use our Services, you must:
    • Be at least 18 years old
    • Provide accurate and complete registration information
    • Maintain the security of your account credentials
    • Promptly update any changes to your information
    • Comply with all applicable laws and regulations`,
  },
  {
    title: "4. User Obligations",
    content: `You agree to:
    • Use the Services only for lawful purposes
    • Provide accurate information for all transactions
    • Not use the Services for any fraudulent or illegal activities
    • Not attempt to circumvent any security measures
    • Not interfere with the proper operation of the Services`,
  },
  {
    title: "5. Fees and Charges",
    content: `• We charge fees for our Services as disclosed at the time of transaction
    • Exchange rates are set by us and include a margin
    • All fees and exchange rates will be clearly displayed before you confirm your transaction
    • You are responsible for all charges, fees, and taxes applicable to your transactions`,
  },
  {
    title: "6. Transaction Processing",
    content: `• We will process your transactions in accordance with your instructions
    • Transaction times may vary depending on various factors
    • We reserve the right to delay, block, or refuse transactions that violate our policies
    • You are responsible for providing correct recipient information`,
  },
  {
    title: "7. Cancellation and Refunds",
    content: `• You may cancel a transaction before it is completed
    • Refunds will be processed according to our refund policy
    • Completed transactions cannot be reversed
    • Refund processing times may vary based on payment method and other factors`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content, trademarks, logos, and intellectual property on our platforms are owned by Pledge Vault or our licensors. You may not use, copy, or distribute our intellectual property without our explicit permission.`,
  },
  {
    title: "9. Privacy and Data Protection",
    content: `Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to our collection and use of your information as described in the Privacy Policy.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted by law, Pledge Vault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.`,
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify and hold Pledge Vault harmless from any claims, damages, losses, liabilities, and expenses arising from your use of our Services or violation of these Terms.`,
  },
  {
    title: "12. Modifications to Services",
    content: `We reserve the right to modify, suspend, or discontinue any part of our Services at any time. We will provide notice of material changes when required by law.`,
  },
  {
    title: "13. Governing Law",
    content: `These Terms are governed by the laws of the jurisdiction in which Pledge Vault is registered, without regard to its conflict of law principles.`,
  },
  {
    title: "14. Dispute Resolution",
    content: `Any disputes arising from these Terms or our Services will be resolved through binding arbitration, except where prohibited by law.`,
  },
  {
    title: "15. Contact Information",
    content: `If you have any questions about these Terms, please contact us at:
    Email: legal@pledgevault.com
    Phone: +1 (888) 123-4567
    Address: 123 Legal Street, Suite 200, New York, NY 10001`,
  },
];

export function Terms() {
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
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-blue-200" : "text-blue-600"
              } max-w-3xl mx-auto`}
            >
              Last updated: March 15, 2024
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  theme === "dark" ? "bg-blue-900/50" : "bg-blue-50"
                } backdrop-blur-sm`}
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div
                  className={`${
                    theme === "dark" ? "text-blue-200" : "text-blue-900"
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
              theme === "dark" ? "bg-blue-800/50" : "bg-blue-50"
            } backdrop-blur-sm`}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Questions about our Terms?
            </h2>
            <p
              className={`text-center mb-6 ${
                theme === "dark" ? "text-blue-200" : "text-blue-600"
              }`}
            >
              Our legal team is here to help you understand our terms of service
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Contact Legal Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
