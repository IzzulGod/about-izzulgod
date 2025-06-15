

import { ExternalLink, Github, ChevronDown, Bot } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "Chat-Tuned GPT2",
      description:
        "LLM GPT2-Small yang diadaptasi dengan fine-tuning instruction-based menggunakan LoRA yang menginjeksi seluruh layer Transformer, untuk memahami perintah dan berdialog secara interaktif.",
      image: "/lovable-uploads/ec75d52d-2a18-467c-a0f7-6d0df3bcf9be.png",
      tech: ["Python", "Transformers", "LoRA"],
      github: "https://huggingface.co/IzzulGod/GPT2-Indo-chat-tuned",
      live: null,
      huggingface: true
    },
    {
      title: "Sorachio AI",
      description: "Chatbot multimodal cerdas dengan antarmuka modern yang dikembangkan menggunakan platform Lovable.dev. Terintegrasi dengan Large Language Model melalui OpenRouter API dan dilengkapi sistem pencarian real-time menggunakan Brave Search API.",
      image: "/lovable-uploads/96a1acad-ecdd-4016-992e-19c0c1780ec6.png",
      tech: ["TypeScript", "Lovable.dev", "OpenRouter", "Brave API"],
      github: "https://github.com/IzzulGod/Sorachio-Chat",
      live: "https://sorachio.netlify.app"
    },
    {
      title: "Computer Vision System",
      description: "Sistem deteksi objek real-time untuk monitoring keamanan menggunakan YOLO dan OpenCV",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      tech: ["Python", "YOLO", "OpenCV"],
      github: "#",
      live: "#"
    },
    {
      title: "Recommendation Engine",
      description: "Machine learning model untuk sistem rekomendasi produk dengan collaborative filtering",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech: ["Scikit-learn", "TensorFlow", "Docker"],
      github: "#",
      live: "#"
    },
    {
      title: "NLP Text Classifier",
      description: "Model klasifikasi teks multi-label untuk kategorisasi dokumen dengan BERT fine-tuning",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      tech: ["BERT", "Hugging Face", "MLflow"],
      github: "#",
      live: "#"
    },
    {
      title: "Time Series Forecasting",
      description: "Model prediksi time series untuk forecasting penjualan menggunakan LSTM dan Prophet",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      tech: ["LSTM", "Prophet", "Pandas"],
      github: "#",
      live: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
    setTimeout(() => {
      const gridElement = document.querySelector('#projects .grid');
      if (gridElement) {
        const rect = gridElement.getBoundingClientRect();
        const scrollTarget = window.scrollY + rect.bottom - window.innerHeight + 100;
        window.scrollTo({ 
          top: scrollTarget, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

  const handleShowLess = () => {
    setShowAll(false);
    
    setTimeout(() => {
      const projectsSection = document.querySelector('#projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const scrollTarget = window.scrollY + rect.top - 100;
        window.scrollTo({ 
          top: scrollTarget, 
          behavior: 'smooth' 
        });
      }
    }, 50);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              AI & ML Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Koleksi project machine learning dan AI yang telah saya kembangkan
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${showAll ? 'opacity-100' : 'opacity-100'}`}>
          {displayedProjects.map((project, index) => (
            <div key={index} className={`glass dark:glass-dark rounded-xl shadow-lg card-hover overflow-hidden group gpu-accelerated ${showAll && index >= 3 ? 'animate-fade-in' : 'fade-in-on-scroll'} stagger-${(index % 3) + 1}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 gpu-accelerated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="p-6 card-content">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 glass dark:glass-dark text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium hover-glow transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.huggingface ? (
                    <a href={project.github} className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift transition-all duration-300" target="_blank" rel="noopener noreferrer">
                      <span className="text-base">🤗</span>
                      <span className="text-sm">HuggingFace</span>
                    </a>
                  ) : (
                    <a href={project.github} className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift transition-all duration-300" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift transition-all duration-300" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && projects.length > 3 && (
          <div className="flex justify-center mt-8 fade-in-on-scroll">
            <button
              id="show-all-projects"
              onClick={handleShowAll}
              className="flex items-center space-x-2 px-6 py-3 btn-magic text-white rounded-full font-semibold hover-lift transition-all duration-300 active:scale-95 gpu-accelerated"
            >
              <span>Show All Projects</span>
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:animate-bounce-gentle" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-8">
            <button
              id="show-less-projects"
              onClick={handleShowLess}
              className="flex items-center space-x-2 px-6 py-3 glass dark:glass-dark border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover-lift hover-glow transition-all duration-300 active:scale-95 gpu-accelerated"
            >
              <span>Show Less</span>
              <ChevronDown size={16} className="rotate-180 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

