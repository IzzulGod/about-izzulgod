
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Zap, Star, Heart, Coffee } from "lucide-react";

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

      {/* Floating decorative elements */}
      <div className="absolute inset-0 -z-5 hidden lg:block">
        {/* Left side floating elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-300">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
            <Code className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="absolute top-1/3 left-20 animate-pulse delay-700">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-3 backdrop-blur-sm">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-16 animate-bounce delay-1000">
          <div className="bg-white/70 rounded-full p-3 shadow-md">
            <Heart className="w-6 h-6 text-red-500" />
          </div>
        </div>
        <div className="absolute bottom-20 left-8 animate-pulse delay-500">
          <div className="bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-xl p-4 backdrop-blur-sm">
            <Coffee className="w-7 h-7 text-orange-600" />
          </div>
        </div>

        {/* Right side floating elements */}
        <div className="absolute top-16 right-12 animate-bounce delay-200">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="absolute top-1/2 right-20 animate-pulse delay-900">
          <div className="bg-gradient-to-l from-green-500/20 to-blue-500/20 rounded-lg p-3 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-14 animate-bounce delay-600">
          <div className="bg-white/70 rounded-full p-3 shadow-md">
            <Zap className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="absolute bottom-16 right-6 animate-pulse delay-1200">
          <div className="bg-gradient-to-tl from-pink-400/30 to-purple-500/30 rounded-xl p-4 backdrop-blur-sm">
            <Code className="w-7 h-7 text-pink-600" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-green-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-800"></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 -z-5 hidden lg:block overflow-hidden">
        <div className="absolute top-10 left-1/4 w-20 h-20 border-2 border-blue-300/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-10 right-1/4 w-16 h-16 border-2 border-purple-300/30 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-dashed border-blue-300/40 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting with icon */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-blue-600 mr-3 animate-pulse" />
            <span className="text-xl text-gray-600 font-medium">
              Halo, Selamat datang! 👋
            </span>
            <Sparkles className="w-6 h-6 text-purple-600 ml-3 animate-pulse delay-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Saya IzzulGod
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              Passionate Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Menciptakan solusi digital yang inovatif dan bermakna ✨
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://id.linkedin.com/in/izzulgod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-gray-100"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://huggingface.co/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center justify-center border border-gray-100"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group text-base"
            >
              <span>Portfolio</span>
              <ArrowDown className="w-5 h-5" />
            </button>
            <button 
              onClick={downloadCV}
              className="w-full sm:w-auto px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 text-base"
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
