
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passion saya adalah menciptakan solusi AI yang inovatif dan bermanfaat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Muhammad Izzul Fahmi Mustofa</h3>
                <p className="text-lg text-blue-600 font-semibold">AI Engineer</p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Halo! Saya seorang AI Engineer yang passionate dalam mengembangkan solusi artificial intelligence 
                yang inovatif. Dengan keahlian dalam machine learning, deep learning, dan robotika, 
                saya selalu berusaha memberikan yang terbaik dalam setiap project.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Saya percaya bahwa AI dapat memberikan dampak positif bagi kehidupan manusia. 
                Mari berkolaborasi untuk mewujudkan ide-ide kreatif menjadi solusi AI yang bermakna!
              </p>

              <div className="grid gap-4 mt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                      <skill.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center shadow-2xl">
                <div className="w-72 h-88 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-6xl text-gray-400">📸</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
