import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon library or SVG

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-40 cursor-pointer" onClick={handleLogoClick}>
          <img
            src="nimesh_logo.png"
            alt="Logo"
            className="w-full object-cover"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link to="/#about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/#skills" className="hover:text-blue-500 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/#experience"
                className="hover:text-blue-500 transition">
                Work
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-500 transition">
                My Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/#about"
                onClick={closeMobileMenu}
                className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#skills"
                onClick={closeMobileMenu}
                className="hover:text-blue-500 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/#experience"
                onClick={closeMobileMenu}
                className="hover:text-blue-500 transition">
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className="hover:text-blue-500 transition">
                My Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
