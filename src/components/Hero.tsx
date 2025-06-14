
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-izzul-fahmi.jpg';
    link.download = 'CV-Izzul-Fahmi.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting with icon */}
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mr-4 md:mr-6 animate-pulse" />
            <span className="text-xl md:text-3xl text-gray-600 font-medium">
              Halo, Selamat datang! 👋
            </span>
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-purple-600 ml-4 md:ml-6 animate-pulse delay-500" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-10 md:mb-16 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Saya IzzulGod
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-600 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            Passionate Developer & AI Enthusiast
            <br />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500">
              Menciptakan solusi digital yang inovatif dan bermakna ✨
            </span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 md:space-x-10 mb-12 md:mb-16">
            <a 
              href="https://github.com/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://id.linkedin.com/in/izzulgod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-4 md:p-5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://huggingface.co/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center justify-center border border-gray-100"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          {/* CTA Buttons - Consistent sizing */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group text-lg md:text-xl"
            >
              <span>Portfolio</span>
              <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={downloadCV}
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 text-lg md:text-xl"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
