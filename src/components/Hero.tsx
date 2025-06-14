
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting with icon */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 animate-pulse" />
            <span className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
              Halo, Selamat datang! 👋
            </span>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 ml-2 sm:ml-3 animate-pulse delay-500" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Saya IzzulGod
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate Developer & AI Enthusiast
            <br />
            <span className="text-sm sm:text-base lg:text-lg text-gray-500">
              Menciptakan solusi digital yang inovatif dan bermakna ✨
            </span>
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-8 sm:mb-12">
            <a 
              href="https://github.com/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://id.linkedin.com/in/izzulgod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://huggingface.co/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center justify-center border border-gray-100"
            >
              <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-sm sm:max-w-none mx-auto">
            <button 
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group text-sm sm:text-base"
            >
              <span>Portfolio</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={downloadCV}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Download CV
            </button>
          </div>

          {/* Scroll indicator - Static */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
