
import { Code, Brain, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    { 
      name: "AI & Machine Learning", 
      icon: Brain, 
      description: "Python, PyTorch, TensorFlow, Hugging Face Transformers, Scikit-learn, NumPy" 
    },
    { 
      name: "Programming Languages", 
      icon: Code, 
      description: "Python, JavaScript, C++" 
    },
    { 
      name: "Robotics & IoT", 
      icon: Cpu, 
      description: "ESP32, Arduino, Raspberry Pi, Nvidia Jetson Nano" 
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-72 h-80 relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl"></div>
                
                {/* Image container */}
                <div className="absolute inset-2 bg-white rounded-3xl p-2 shadow-2xl">
                  <img 
                    src="/lovable-uploads/d54a47b3-36d0-45e0-a835-b2bb4b5b3ee5.png"
                    alt="Muhammad Izzul Fahmi Mustofa"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-xl">🤖</span>
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-xl">⚡</span>
                </div>
                
                <div className="absolute top-1/2 -left-4 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">🚀</span>
                </div>
                
                <div className="absolute top-1/4 -right-4 w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Muhammad Izzul Fahmi Mustofa
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">AI Engineer</p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Halo! Saya seorang AI Engineer yang passionate dalam mengembangkan 
                  solusi artificial intelligence yang inovatif dan bermanfaat.
                </p>
                
                <p className="text-lg">
                  Dengan keahlian dalam machine learning, deep learning, dan robotika, 
                  saya selalu berusaha memberikan yang terbaik dalam setiap project.
                </p>
                
                <p className="text-lg">
                  Mari berkolaborasi untuk mewujudkan ide-ide kreatif menjadi 
                  solusi AI yang bermakna! 🚀
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Keahlian & Teknologi</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-100">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex-shrink-0">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">{skill.name}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
