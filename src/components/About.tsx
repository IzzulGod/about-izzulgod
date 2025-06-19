
import { Code, Database, Globe, Cpu, Bot, Layers, Sparkles, Star, Heart, Coffee } from "lucide-react";

const About = () => {
  const skills = [{
    name: "Python",
    icon: Code,
    description: "PyTorch, TensorFlow, Scikit-learn",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    name: "Machine Learning",
    icon: Cpu,
    description: "Deep Learning, NLP, Computer Vision",
    gradient: "from-purple-500 to-pink-500"
  }, {
    name: "AI/LLM",
    icon: Bot,
    description: "Transformers, Hugging Face, OpenRouter",
    gradient: "from-green-500 to-emerald-500"
  }, {
    name: "Data Science",
    icon: Database,
    description: "Pandas, NumPy, Matplotlib",
    gradient: "from-orange-500 to-red-500"
  }, {
    name: "MLOps",
    icon: Layers,
    description: "Docker, MLflow, Kubernetes",
    gradient: "from-indigo-500 to-purple-500"
  }, {
    name: "Cloud & Deployment",
    icon: Globe,
    description: "AWS, GCP, FastAPI",
    gradient: "from-teal-500 to-cyan-500"
  }];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
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
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4 transition-colors duration-300">AI Engineer</p>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p className="text-lg">Halo! Saya seorang AI Engineer yang passionate dalam mengembangkan model AI dan solusi machine learning yang inovatif.</p>
                
                <p className="text-lg">
                  Dengan keahlian dalam deep learning, NLP, dan Large Language Models (LLM), 
                  saya fokus menciptakan solusi AI yang dapat memberikan dampak nyata.
                </p>
                
                <p className="text-lg">
                  Mari berkolaborasi untuk mengembangkan teknologi AI yang dapat 
                  mengubah dunia menjadi lebih baik! 🤖
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section - Enhanced */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Keahlian & Teknologi
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon with floating animation */}
                  <div className={`relative mb-4 p-4 rounded-2xl bg-gradient-to-r ${skill.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                    <skill.icon className="w-8 h-8 text-white" />
                    
                    {/* Floating particles effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Title with gradient on hover */}
                  <h5 className={`font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:${skill.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                    {skill.name}
                  </h5>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                  
                  {/* Progress bar animation */}
                  <div className="w-full mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${skill.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-12 space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
