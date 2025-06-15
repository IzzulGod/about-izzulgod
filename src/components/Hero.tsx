
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Zap, Star, Heart, Coffee } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
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
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 -z-5">
        {/* Left side floating elements */}
        <div className="absolute top-20 left-4 md:left-10 animate-float">
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg">
            <Code className="w-4 md:w-8 h-4 md:h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <div className="absolute top-1/3 left-8 md:left-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg p-2 md:p-3">
            <Zap className="w-4 md:w-6 h-4 md:h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-6 md:left-16 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-md">
            <Heart className="w-4 md:w-6 h-4 md:h-6 text-red-500" />
          </div>
        </div>
        <div className="absolute bottom-20 left-2 md:left-8 animate-float" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-2 md:p-4">
            <Coffee className="w-4 md:w-7 h-4 md:h-7 text-orange-600" />
          </div>
        </div>

        {/* Right side floating elements */}
        <div className="absolute top-16 right-4 md:right-12 animate-float" style={{ animationDelay: '0.7s' }}>
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full p-2 md:p-4 shadow-lg">
            <Star className="w-4 md:w-8 h-4 md:h-8 text-yellow-500" />
          </div>
        </div>
        <div className="absolute top-1/2 right-8 md:right-20 animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg p-2 md:p-3">
            <Sparkles className="w-4 md:w-6 h-4 md:h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-6 md:right-14 animate-float">
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-md">
            <Zap className="w-4 md:w-6 h-4 md:h-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-16 right-2 md:right-6 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-2 md:p-4">
            <Code className="w-4 md:w-7 h-4 md:h-7 text-pink-600 dark:text-pink-400" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced greeting with icon */}
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-blue-600 dark:text-blue-400 mr-2 md:mr-3 transition-colors duration-300 animate-bounce" />
            <span className="text-gray-600 dark:text-gray-300 font-medium text-2xl md:text-xl transition-colors duration-300">Hello World!</span>
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-purple-600 dark:text-purple-400 ml-2 md:ml-3 transition-colors duration-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gradient">
              Saya IzzulGod
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-3 leading-relaxed transition-colors duration-300">
              Selamat datang di website buatanku {'>'}{'<'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-14">
            <a href="https://github.com/IzzulGod" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:scale-110">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://id.linkedin.com/in/izzulgod" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:scale-110">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:contact@example.com" className="w-12 h-12 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:scale-110">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://huggingface.co/IzzulGod" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:scale-110">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToProjects} className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group text-sm sm:text-base max-w-40 sm:max-w-none hover:scale-105">
              <span>Portfolio</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
            </button>
            <button onClick={downloadCV} className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base max-w-40 sm:max-w-none bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
