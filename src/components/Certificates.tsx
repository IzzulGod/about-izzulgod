
import { Award, Calendar, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  
  const certificates = [
    {
      title: "Full Stack Developer Certification",
      issuer: "Tech Academy",
      date: "2024",
      description: "Comprehensive certification covering modern web development technologies",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      credentialId: "FS2024001",
      skills: ["React", "Node.js", "Database Design"]
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Cloud computing fundamentals and AWS services certification",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      credentialId: "AWS2024002",
      skills: ["Cloud Computing", "AWS", "Infrastructure"]
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Design Institute",
      date: "2023",
      description: "Advanced certification in user interface and user experience design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      credentialId: "UI2023003",
      skills: ["Figma", "User Research", "Prototyping"]
    },
    {
      title: "JavaScript Developer",
      issuer: "Code Academy",
      date: "2023",
      description: "Advanced JavaScript programming and modern ES6+ features",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      credentialId: "JS2023004",
      skills: ["JavaScript", "ES6+", "Web APIs"]
    },
    {
      title: "Agile Project Management",
      issuer: "Project Management Institute",
      date: "2023",
      description: "Scrum and Agile methodologies for efficient project delivery",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      credentialId: "PM2023005",
      skills: ["Scrum", "Agile", "Team Leadership"]
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Security Institute",
      date: "2022",
      description: "Essential cybersecurity principles and best practices",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      credentialId: "CS2022006",
      skills: ["Security", "Risk Assessment", "Compliance"]
    }
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
    setTimeout(() => {
      const gridElement = document.querySelector('#certificates .grid');
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
      const certificatesSection = document.querySelector('#certificates');
      if (certificatesSection) {
        const rect = certificatesSection.getBoundingClientRect();
        const scrollTarget = window.scrollY + rect.top - 100;
        window.scrollTo({ 
          top: scrollTarget, 
          behavior: 'smooth' 
        });
      }
    }, 50);
  };

  return (
    <section id="certificates" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sertifikat & Pencapaian
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Komitmen saya untuk terus belajar dan mengembangkan kemampuan
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${showAll ? 'opacity-100' : 'opacity-100'}`}>
          {displayedCertificates.map((certificate, index) => (
            <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group ${showAll && index >= 3 ? 'animate-fade-in' : ''}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full transition-colors duration-300">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">{certificate.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 transition-colors duration-300">{certificate.issuer}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed transition-colors duration-300">{certificate.description}</p>
                
                <div className="flex items-center space-x-2 mb-4 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                  <Calendar size={16} />
                  <span>{certificate.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 text-green-600 dark:text-green-400 text-xs rounded-full font-medium transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 dark:text-gray-500 transition-colors duration-300">ID: {certificate.credentialId}</span>
                  <a href="#" className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} />
                    <span className="text-sm">Verify</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && certificates.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              id="show-all-certificates"
              onClick={handleShowAll}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Show All Certificates</span>
              <ChevronDown size={16} className="transition-transform duration-300" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center mt-8">
            <button
              id="show-less-certificates"
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

export default Certificates;
