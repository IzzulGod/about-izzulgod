
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "Sentiment Analysis Model",
      description: "Model deep learning untuk analisis sentimen media sosial dengan akurasi 95% menggunakan transformer architecture",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Python", "PyTorch", "Transformers"],
      github: "#",
      live: "#"
    },
    {
      title: "Sorachio AI",
      description: "Web chatbot multimodal canggih dengan frontend modern buatan lovable.dev, memakai API key OpenRouter untuk LLM dan Brave untuk searching. 97% TypeScript karena dibangun dengan lovable.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
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
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI & ML Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Koleksi project machine learning dan AI yang telah saya kembangkan
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${showAll ? 'opacity-100' : 'opacity-100'}`}>
          {displayedProjects.map((project, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group ${showAll && index >= 3 ? 'animate-fade-in' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={project.live} className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              id="show-all-projects"
              onClick={handleShowAll}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Show All Projects</span>
              <ChevronDown size={16} className="transition-transform duration-300" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-8">
            <button
              id="show-less-projects"
              onClick={handleShowLess}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
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
