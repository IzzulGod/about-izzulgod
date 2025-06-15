
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
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating decorative elements - improved mobile positioning */}
      <div className="absolute inset-0 -z-5">
        {/* Left side floating elements - repositioned for mobile */}
        <div className="absolute top-12 left-2 md:top-20 md:left-10 animate-bounce delay-300">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full p-1.5 md:p-4 shadow-lg transition-colors duration-300">
            <Code className="w-3 md:w-8 h-3 md:h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <div className="absolute top-1/4 left-1 md:top-1/3 md:left-20 animate-pulse delay-700">
          <div className="bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-lg p-1.5 md:p-3 backdrop-blur-sm">
            <Zap className="w-3 md:w-6 h-3 md:h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-1/2 left-3 md:bottom-1/3 md:left-16 animate-bounce delay-1000">
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-full p-1.5 md:p-3 shadow-md transition-colors duration-300">
            <Heart className="w-3 md:w-6 h-3 md:h-6 text-red-500" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1 md:bottom-20 md:left-8 animate-pulse delay-500">
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl p-1.5 md:p-4 backdrop-blur-sm">
            <Coffee className="w-3 md:w-7 h-3 md:h-7 text-orange-600" />
          </div>
        </div>

        {/* Right side floating elements - repositioned for mobile */}
        <div className="absolute top-10 right-2 md:top-16 md:right-12 animate-bounce delay-200">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full p-1.5 md:p-4 shadow-lg transition-colors duration-300">
            <Star className="w-3 md:w-8 h-3 md:h-8 text-yellow-500" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1 md:top-1/2 md:right-20 animate-pulse delay-900">
          <div className="bg-gradient-to-l from-green-500/15 to-blue-500/15 rounded-lg p-1.5 md:p-3 backdrop-blur-sm">
            <Sparkles className="w-3 md:w-6 h-3 md:h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="absolute bottom-1/2 right-3 md:bottom-1/4 md:right-14 animate-bounce delay-600">
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-full p-1.5 md:p-3 shadow-md transition-colors duration-300">
            <Zap className="w-3 md:w-6 h-3 md:h-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-6 right-1 md:bottom-16 md:right-6 animate-pulse delay-1200">
          <div className="bg-gradient-to-tl from-pink-400/20 to-purple-500/20 rounded-xl p-1.5 md:p-4 backdrop-blur-sm">
            <Code className="w-3 md:w-7 h-3 md:h-7 text-pink-600 dark:text-pink-400" />
          </div>
        </div>

        {/* Floating particles - reduced for mobile */}
        <div className="hidden md:block absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="hidden md:block absolute top-3/4 left-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-700"></div>
        <div className="hidden md:block absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
        <div className="hidden md:block absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-500 rounded-full animate-ping delay-500"></div>
        <div className="hidden md:block absolute top-2/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-800"></div>
        
        {/* Mobile-only smaller particles */}
        <div className="block md:hidden absolute top-1/5 left-1/2 w-1 h-1 bg-blue-400/70 rounded-full animate-ping delay-300"></div>
        <div className="block md:hidden absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-500/70 rounded-full animate-ping delay-700"></div>
      </div>

      {/* Animated geometric shapes - adjusted for mobile */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-8 left-1/5 md:top-10 md:left-1/4 w-8 md:w-20 h-8 md:h-20 border border-blue-300/20 dark:border-blue-600/30 md:border-2 rotate-45 animate-spin transition-colors duration-300" style={{
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-8 right-1/5 md:bottom-10 md:right-1/4 w-6 md:w-16 h-6 md:h-16 border border-purple-300/20 dark:border-purple-600/30 md:border-2 rotate-12 animate-spin transition-colors duration-300" style={{
          animationDuration: '15s',
          animationDirection: 'reverse'
        }}></div>
        <div className="hidden md:block absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
        <div className="hidden md:block absolute bottom-1/4 right-10 w-24 h-24 border border-dashed border-blue-300/40 dark:border-blue-600/50 rounded-full animate-spin transition-colors duration-300" style={{
          animationDuration: '25s'
        }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting with icon */}
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-blue-600 dark:text-blue-400 mr-2 md:mr-3 transition-colors duration-300" />
            <span className="text-gray-600 dark:text-gray-300 font-medium text-lg md:text-xl transition-colors duration-300">Hello World!</span>
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-purple-600 dark:text-purple-400 ml-2 md:ml-3 transition-colors duration-300" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
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
            <a href="https://github.com/IzzulGod" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://id.linkedin.com/in/izzulgod" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="mailto:contact@example.com" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://huggingface.co/IzzulGod" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100 dark:border-gray-700 flex items-center justify-center">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToProjects} className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 group text-base sm:text-lg max-w-48 sm:max-w-none">
              <span>Portfolio</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button onClick={downloadCV} className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105 text-base sm:text-lg max-w-48 sm:max-w-none">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
