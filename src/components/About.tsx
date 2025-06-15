import { Code, Database, Globe, Cpu, Bot, Layers, Sparkles, Star, Heart, Coffee } from "lucide-react";
const About = () => {
  const skills = [{
    name: "Python",
    icon: Code,
    description: "PyTorch, TensorFlow, Scikit-learn"
  }, {
    name: "Machine Learning",
    icon: Cpu,
    description: "Deep Learning, NLP, Computer Vision"
  }, {
    name: "AI/LLM",
    icon: Bot,
    description: "Transformers, Hugging Face, OpenRouter"
  }, {
    name: "Data Science",
    icon: Database,
    description: "Pandas, NumPy, Matplotlib"
  }, {
    name: "MLOps",
    icon: Layers,
    description: "Docker, MLflow, Kubernetes"
  }, {
    name: "Cloud & Deployment",
    icon: Globe,
    description: "AWS, GCP, FastAPI"
  }];
  return <section id="about" className="py-20 px-4 bg-white">
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
                <div className="absolute inset-2 bg-white rounded-3xl p-2 shadow-2xl">
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
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Muhammad Izzul Fahmi Mustofa
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">AI Engineer</p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
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

        {/* Skills Section */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Keahlian & Teknologi</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => <div key={index} className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">{skill.name}</h5>
                <p className="text-gray-600 text-xs leading-relaxed">{skill.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;
