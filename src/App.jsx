import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import GlowingCursor from "./components/GlowingCursor";
import OJT from "./components/OJT";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <GlowingCursor />

      <div className="container mx-auto px-8 pt-20">
        <Navbar />
        <Hero />
        <div id="about">
          <About/>
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="ojt">
          <OJT/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;