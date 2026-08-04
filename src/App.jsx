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
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400/80 selection:text-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),_transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,1))]" />
      </div>

      <GlowingCursor />

      <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="pt-24 sm:pt-28">
          <Hero />
          <section id="about" className="scroll-mt-24">
            <About />
          </section>
          <section id="technologies" className="scroll-mt-24">
            <Technologies />
          </section>
          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          <section id="ojt" className="scroll-mt-24">
            <OJT />
          </section>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </main>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;