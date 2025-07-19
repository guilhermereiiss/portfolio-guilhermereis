import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

export function Experience() {
  const experiences: ExperienceType[] = [
    {
      id: '1',
      company: 'Iwwa - Agência Digital',
      position: 'Estágio Front-end',
      period: 'Abril 2025 - Presente',
      location: 'Salvador, BA',
      description: 'Lido com desenvolvimento de aplicações web escaláveis usando PHP, JavaScript, Wordpress. Responsável por fazer manutenção e atualizações em sites existentes como: Vitarella, Piraquê, Brillux, Vitalmed...',
      achievements: [
        'Entreguei 15+ projetos web com 100% de satisfação do cliente',
        'Implementei design system que reduziu tempo de desenvolvimento em 30%',
        'Criei componentes reutilizáveis adotados por toda a equipe',
        'Melhorei scores de acessibilidade nos projetos que fiz manutenções'
      ],
      technologies: ['PHP', 'JavaScript', 'Wordpress', 'HTML', 'Client FTP', 'SCSS'],
      companyUrl: 'https://iwwa.com.br/'
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
            Experiência Profissional
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="relative flex flex-col md:flex-row gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-125 transition-transform duration-300" />

                  {/* Content */}
                  <div className="md:ml-16 flex-1">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                              {experience.position}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            {experience.companyUrl ? (
                              <a
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center gap-1"
                              >
                                {experience.company}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            ) : (
                              <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                                {experience.company}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col sm:items-end text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Principais Conquistas:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
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

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Tecnologias:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}