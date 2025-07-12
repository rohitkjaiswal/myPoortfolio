import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    import("aos").then(AOS => AOS.init({ once: true, duration: 800, offset: 100 }));
    // Parallax effect for background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      document.querySelector(".parallax-bg").style.transform = `translateY(${scrolled * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="parallax-bg"></div>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;