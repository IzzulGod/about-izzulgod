
import { Code, Brain, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    { 
      name: "AI & Machine Learning", 
      icon: Brain, 
      description: "PyTorch, TensorFlow, Hugging Face, Scikit-learn" 
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-1">
                <img 
                  src="/lovable-uploads/d54a47b3-36d0-45e0-a835-b2bb4b5b3ee5.png"
                  alt="Muhammad Izzul Fahmi Mustofa"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Muhammad Izzul Fahmi Mustofa
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-6">AI Engineer</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Halo! Saya seorang AI Engineer yang passionate dalam mengembangkan solusi 
                  artificial intelligence yang inovatif dan bermanfaat.
                </p>
                
                <p className="text-lg">
                  Dengan keahlian dalam machine learning, deep learning, dan robotika, 
                  saya selalu berusaha memberikan yang terbaik dalam setiap project yang saya kerjakan.
                </p>
                
                <p className="text-lg">
                  Mari berkolaborasi untuk mewujudkan ide-ide kreatif menjadi solusi AI yang bermakna!
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Keahlian & Teknologi</h4>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex-shrink-0">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{skill.name}</h5>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
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
