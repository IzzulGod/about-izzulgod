
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Halo, Saya IzzulGod
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 mt-8">
            Selamat datang di website pribadi buatanku! 👋
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://id.linkedin.com/in/izzulgod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
            <a 
              href="https://huggingface.co/IzzulGod" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center justify-center"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🤗</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Lihat Portfolio
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
