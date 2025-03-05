import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How does Pledge Vault work?",
    answer:
      "Pledge Vault is a secure money transfer platform that allows you to send money internationally. Simply download our app, create an account, verify your identity, and you can start sending money to your loved ones abroad at competitive rates.",
  },
  {
    question: "What countries can I send money to?",
    answer:
      "We support money transfers to over 150 countries worldwide, including major destinations in Africa, Asia, Europe, and the Americas. You can check specific country availability and rates in our app.",
  },
  {
    question: "How long do transfers take?",
    answer:
      "Most transfers are completed within minutes. However, the exact timing can vary depending on the destination country, payment method, and local banking hours. We'll always show you the estimated delivery time before you confirm your transfer.",
  },
  {
    question: "What are the fees for sending money?",
    answer:
      "Our fees vary depending on the amount you're sending, the destination country, and the payment method you choose. We always show you the exact fee and exchange rate upfront before you confirm your transfer. We pride ourselves on offering competitive rates and transparent pricing.",
  },
  {
    question: "Is my money safe with Pledge Vault?",
    answer:
      "Yes, your money is safe with us. We use bank-level encryption and security measures to protect your transactions and personal information. We're also registered with relevant financial authorities and comply with all applicable regulations.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including bank transfers, debit cards, credit cards, and mobile wallets. Available payment methods may vary by country.",
  },
  {
    question: "How do I track my transfer?",
    answer:
      "You can track your transfer in real-time through our mobile app or website. We'll also send you notifications about your transfer status via email and push notifications if you have our app installed.",
  },
  {
    question: "What do I need to create an account?",
    answer:
      "To create an account, you'll need a valid government-issued ID, proof of address, and your contact information. This is required for security purposes and to comply with financial regulations.",
  },
  {
    question: "Can I cancel my transfer?",
    answer:
      "If your transfer hasn't been picked up or deposited yet, you may be able to cancel it. Contact our customer support team immediately if you need to cancel a transfer.",
  },
  {
    question: "What if something goes wrong with my transfer?",
    answer:
      "Our customer support team is available 24/7 to help resolve any issues. You can reach us through the app, email, phone, or live chat. We'll work quickly to resolve any problems with your transfer.",
  },
];

export function FAQ() {
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
            Frequently Asked <span className="text-green-500">Questions</span>
          </h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Find answers to common questions about using Pledge Vault for your
            international money transfers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div
                    className={`rounded-lg ${
                      theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
                    }`}
                  >
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
                      <span className="text-lg font-semibold">
                        {faq.question}
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-green-500 transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`px-6 pb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-16 p-8 rounded-xl text-center ${
            theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our support team is here to help you 24/7
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
