
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap dan user experience yang optimal",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan drag & drop interface dan real-time collaboration",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio responsive dengan animasi smooth dan optimasi SEO",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["React", "Framer Motion", "Vercel"],
      github: "#",
      live: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Aplikasi mobile banking dengan security tinggi dan UX yang intuitif",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tech: ["React Native", "Express", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Dashboard",
      description: "Dashboard analytics dengan machine learning integration dan data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Python", "React", "TensorFlow"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Platform",
      description: "Platform media sosial dengan real-time messaging dan content sharing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tech: ["Next.js", "Socket.io", "Redis"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beberapa project yang telah saya kerjakan dengan penuh dedikasi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
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
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
