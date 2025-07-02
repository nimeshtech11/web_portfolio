import { MapPin } from "lucide-react";
import { Dot } from "lucide-react";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="p-5 pt-24 mt-16" id="home">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Hi, I'm Nimesh Thakur 👋
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 text-justify">
            I'm a passionate Front-End Developer with 3 years of hands-on
            experience building responsive, user-friendly web applications using
            <span className="font-semibold text-blue-600"> React</span> and
            <span className="font-semibold text-purple-600"> Redux</span>. I
            love crafting clean UI and delivering seamless user experiences.
          </p>

          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="text-red-500" />
            <span>Bhopal, Madhya Pradesh, India</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span> Available for Full-Time / Freelance</span>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/nimeshdev11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:text-black transition">
              <PiGithubLogoBold className="text-2xl" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/nimesh-thakur-5976a127a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition">
              <FaLinkedinIn className="text-2xl" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/IMG-C.jpg"
              alt="Nimesh Thakur"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
