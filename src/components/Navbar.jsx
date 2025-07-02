const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-32 cursor-pointer">
          <a href="#home">
            <img
              src="/logo1.PNG"
              alt="Logo"
              className="w-full object-contain"
            />
          </a>
        </div>

        {/* Nav Links & Button */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li className="">
              <a
                href="#about"
                className="text-gray-700 text-base font-medium hover:text-blue-500 transition-all duration-200">
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 text-base font-medium hover:text-blue-500 transition-all duration-200">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-gray-700 text-base font-medium hover:text-blue-500 transition-all duration-200">
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 text-base font-medium hover:text-blue-500 transition-all duration-200">
                Contact
              </a>
            </li>
          </ul>

          {/* Download CV Button */}
          <a
            href="\Nimesh FE .pdf"
            download
            className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-200">
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
