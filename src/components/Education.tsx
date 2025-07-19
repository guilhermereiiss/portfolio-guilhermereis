import { Calendar, MapPin, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { Education as EducationType } from '../types';

export function Education() {
  const education: EducationType[] = [
    {
      id: '1',
      institution: 'Instituto Infnet',
      degree: 'Bacharelado',
      field: 'Engenharia de Software',
      period: ' 2024 - presente',
      location: 'Rio de Janeiro, RJ',
      description: 'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web.',
      achievements: [
        'Projeto de consumo de API focado em aplicações web',
        'Participação em grupos de desenvolvimento back-end',
        'Participante do clube da programação'
      ],
      institutionUrl: 'https://www.infnet.edu.br/infnet/home/',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXaAjZVhjBUsSlKFLvYODUlSyVDUItTwRJA&s'
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
            Formação Acadêmica
          </h2>
          
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 md:h-auto relative overflow-hidden">
                    <img
                      src={edu.logoUrl}
                      alt={`Logo ${edu.institution}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                            {edu.degree} em {edu.field}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          {edu.institutionUrl ? (
                            <a
                              href={edu.institutionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center gap-1"
                            >
                              {edu.institution}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                              {edu.institution}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:items-end text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Destaques:
                          </h4>
                        </div>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}