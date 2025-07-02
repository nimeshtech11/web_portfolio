import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Profile */}
        <div>
          <h2 className="text-xl font-bold mb-2">Nimesh Thakur</h2>
          <p className="text-sm text-gray-400">
            Front-End Developer (React.js, Redux Toolkit, Tailwind CSS)
          </p>
          <div className="flex items-center gap-2 text-sm mt-3 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>Bhopal, Madhya Pradesh</span>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/#home" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/#skills" className="hover:text-white">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/#experience" className="hover:text-white">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex gap-4 mb-3">
            <a
              href="https://github.com/nimeshdev11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nimesh-thakur-5976a127a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-sm text-gray-400">📧 nimeshthakur009@gmail.com</p>
          <p className="text-sm text-gray-400">📞 +91 9630916386</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nimesh Thakur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
