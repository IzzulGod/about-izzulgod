
import { Code, Database, Globe, Cpu, Bot, Layers, Sparkles, Star, Heart, Coffee } from "lucide-react";

const About = () => {
  const skills = [{
    name: "Python",
    icon: Code,
    description: "PyTorch, TensorFlow, Scikit-learn",
    level: 90,
    color: "from-blue-500 to-cyan-500"
  }, {
    name: "Machine Learning",
    icon: Cpu,
    description: "Deep Learning, NLP, Computer Vision",
    level: 88,
    color: "from-purple-500 to-pink-500"
  }, {
    name: "AI/LLM",
    icon: Bot,
    description: "Transformers, Hugging Face, OpenRouter",
    level: 85,
    color: "from-green-500 to-emerald-500"
  }, {
    name: "Data Science",
    icon: Database,
    description: "Pandas, NumPy, Matplotlib",
    level: 87,
    color: "from-orange-500 to-red-500"
  }, {
    name: "MLOps",
    icon: Layers,
    description: "Docker, MLflow, Kubernetes",
    level: 80,
    color: "from-indigo-500 to-purple-500"
  }, {
    name: "Cloud & Deployment",
    icon: Globe,
    description: "AWS, GCP, FastAPI",
    level: 82,
    color: "from-teal-500 to-blue-500"
  }];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-72 relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl"></div>
                
                {/* Image container */}
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-3xl p-2 shadow-2xl transition-colors duration-300">
                  <img src="/lovable-uploads/d54a47b3-36d0-45e0-a835-b2bb4b5b3ee5.png" alt="Muhammad Izzul Fahmi Mustofa" className="w-full h-full object-cover rounded-2xl" />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-1/2 -left-4 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                
                <div className="absolute top-1/4 -right-4 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Muhammad Izzul Fahmi Mustofa
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4 transition-colors duration-300">AI Engineer | Pengembang Solusi Machine Learning & Artificial Intelligence</p>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p className="text-lg">Halo! Saya Muhammad Izzul Fahmi Mustofa, seorang AI Engineer yang antusias dalam mengembangkan teknologi kecerdasan buatan untuk menciptakan solusi inovatif dan berdampak nyata.</p>
                
                <p className="text-lg">
                  Dengan fokus pada bidang deep learning, Natural Language Processing (NLP), serta Large Language Models (LLM).
                  saya terus berupaya memanfaatkan potensi AI guna menjawab tantangan di dunia nyata.
                </p>
                
                <p className="text-lg">
                  Saya percaya bahwa AI bukan hanya tentang algoritma dan data, tetapi juga tentang bagaimana teknologi ini bisa memberikan manfaat bagi masyarakat. 
                  Mari berkolaborasi dalam proyek-proyek yang bermakna dan membawa perubahan positif melalui kekuatan artificial intelligence. 🤖✨               
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Keahlian & Teknologi
              </span>
            </h4>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai dalam pengembangan AI dan Machine Learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Skill name and description */}
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {skill.name}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:animate-pulse`}
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skillProgress 2s ease-out ${index * 0.2}s both`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Additional stats section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">ML Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">AI Models</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Certificates</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skillProgress {
          from {
            width: 0%;
          }
          to {
            width: ${100}%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
