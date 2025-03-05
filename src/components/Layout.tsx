import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-10 ${
          theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-500">
                  Pledge Vault
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="px-4 py-2 rounded-lg hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 rounded-lg hover:text-blue-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="px-4 py-2 rounded-lg hover:text-blue-500 transition-colors"
              >
                FAQ
              </Link>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer
        className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Pledge Vault</h3>
              <p
                className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
              >
                Fast, secure, and affordable international money transfers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-blue-500">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="hover:text-blue-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-blue-500">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-blue-500">
                  📱
                </a>
                <a href="#" className="text-2xl hover:text-blue-500">
                  💬
                </a>
                <a href="#" className="text-2xl hover:text-blue-500">
                  📧
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              © {new Date().getFullYear()} Pledge Vault. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
