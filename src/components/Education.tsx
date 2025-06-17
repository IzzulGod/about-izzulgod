
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Teknik Komputer dan Jaringan",
      institution: "SMK Negeri 1 Jakarta",
      period: "2018 - 2021",
      location: "Jakarta, Indonesia",
      description: "Fokus pada jaringan komputer, pemrograman dasar, dan teknologi informasi",
      logo: "/education/smk-logo.png", // You can add your SMK logo here
      gpa: "3.8/4.0",
      achievements: ["Juara 2 Lomba Programming Tingkat Provinsi", "Best Student Award"]
    },
    {
      degree: "Teknik Informatika",
      institution: "Universitas Indonesia",
      period: "2021 - Sekarang",
      location: "Depok, Indonesia", 
      description: "Mempelajari pengembangan software, artificial intelligence, dan machine learning",
      logo: "/education/ui-logo.png", // You can add your university logo here
      gpa: "3.9/4.0",
      achievements: ["Dean's List", "AI Research Assistant"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pendidikan
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Perjalanan pendidikan yang membentuk fondasi pengetahuan dan keahlian saya
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Logo/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                        {edu.institution}
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {edu.description}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>IPK: {edu.gpa}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                          Pencapaian:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium transition-colors duration-300"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
