

import { Mail, MapPin, Phone, Send, Heart, Coffee, Code, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Saya akan membalas segera.",
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Punya project menarik? Mari diskusikan dan wujudkan bersama!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in-on-scroll">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                Saya selalu terbuka untuk membahas project baru, ide kreatif, atau kesempatan 
                untuk menjadi bagian dari visi Anda. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover-lift gpu-accelerated">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg hover-glow transition-all duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">fahmiml666@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover-lift gpu-accelerated">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg hover-glow transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">+62 821 4188 3598</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover-lift gpu-accelerated">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg hover-glow transition-all duration-300">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Jawa Tengah, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass dark:glass-dark rounded-xl shadow-lg p-8 card-hover gpu-accelerated fade-in-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-in-right stagger-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass dark:glass-dark border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-300"
                  placeholder="Nama lengkap Anda"
                  required
                />
              </div>

              <div className="animate-slide-in-right stagger-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass dark:glass-dark border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-300"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="animate-slide-in-right stagger-3">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 glass dark:glass-dark border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover-glow transition-all duration-300 resize-none"
                  placeholder="Ceritakan tentang project atau ide Anda..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-magic text-white py-3 px-6 rounded-lg font-semibold hover-lift transition-all duration-300 flex items-center justify-center space-x-2 animate-scale-up stagger-4 gpu-accelerated"
              >
                <Send size={20} />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center fade-in-on-scroll">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 transition-colors duration-300">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                <span className="text-sm">Crafted with</span>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-500 animate-pulse-glow" />
                  <Code className="w-4 h-4 text-blue-500 animate-bounce-gentle" />
                  <Coffee className="w-4 h-4 text-amber-600 animate-float" />
                </div>
                <span className="text-sm">in Indonesia</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                <Sparkles className="w-4 h-4 text-purple-500 animate-bounce-gentle" />
                <span>Building digital dreams since 2025</span>
                <span className="mx-2">•</span>
                <span className="font-medium text-gradient">
                  IzzulGod
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

