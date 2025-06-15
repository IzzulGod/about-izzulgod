
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Index;
