
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Vue, Angular" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD" },
    { name: "Performance", icon: Zap, description: "Optimization & Speed" },
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
            Passion saya adalah menciptakan pengalaman digital yang luar biasa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Halo! Saya seorang developer yang passionate dalam menciptakan solusi digital inovatif. 
                Dengan pengalaman di berbagai teknologi modern, saya selalu berusaha memberikan yang terbaik 
                dalam setiap project.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Saya percaya bahwa detail terkecil dapat membuat perbedaan besar. 
                Mari berkolaborasi untuk mewujudkan ide-ide kreatif menjadi kenyataan digital!
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
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-gray-400">📸</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
