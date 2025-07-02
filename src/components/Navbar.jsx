import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Already on home page → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      navigate("/");
    }
  };
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-32 cursor-pointer" onClick={handleLogoClick}>
          <Link to="/">
            <img
              src="/logo1.PNG"
              alt="Logo"
              className="w-full object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
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
      </div>
    </nav>
  );
};

export default Navbar;
