import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Experience from "./section/Experience";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
