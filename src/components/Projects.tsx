import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

export function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'MatchMovie',
      description: 'Uma plataforma completa de recomendação de filmes de acordo ao seu historico de favoritismo.',
      technologies: ['React', 'API TMDB', 'TypeScript'],
      githubUrl: 'https://github.com/guilhermereiiss/MatchMovie',
      imageUrl: 'https://i.ibb.co/2H3BBJX/Screenshot-20.png'

    },
    {
      id: '2',
      title: 'Conversor de Moedas',
      description: 'Este é um projeto simples de Conversor de Moedas construído com React. Ele permite a conversão de diferentes moedas em tempo real, utilizando a API AwesomeAPI para buscar as taxas de câmbio atualizadas.',
      technologies: ['Vite', 'TypeScript', 'React', 'AwesomeAPI'],
      githubUrl: 'https://github.com/guilhermereiiss/Conversor-Moedas',
      imageUrl: 'https://i.ibb.co/ZRLgcCHQ/Screenshot-19.png'
    },
    {
      id: '3',
      title: 'Loja Dom-Football',
      description: 'Este é um projeto simples de uma loja de produtos de futebol construído com React. ( No momento so temos deploy do temporario)',
      technologies: ['Vite', 'TypeScript', 'React'],
      githubUrl: 'https://github.com/guilhermereiiss/DOM-temp',
      imageUrl: 'https://i.ibb.co/C538Jzcf/Screenshot-21.png'
    },
    {
      id: '4',
      title: 'BabyCenter',
      description: 'Este é um projeto simples de uma app web para pais registrarem o crescimento de seus filhos como alimentação,horas de sono e necessidades construído com React. (Com tradução para português, inglês, espanhol) ',
      technologies: ['Vite', 'TypeScript', 'React', 'MaterialUI', 'i18next'],
      githubUrl: 'https://github.com/guilhermereiiss/AT-REACT-WEB-2-TRIMESTE',
      imageUrl: 'https://i.ibb.co/d4xvxqgK/Screenshot-22.png'
    },
    {
      id: '5',
      title: 'To do API',
      description: 'Uma API REST simples para gerenciamento de tarefas desenvolvida em Java usando Javalin framework.',
      technologies: ['Java', 'Javalin', 'Gradle', 'JUnit 5 '],
      githubUrl: 'https://github.com/guilhermereiiss/AT-JAVA-2TRIMESTRE',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8RAfWLAr24JX11TZgeYnKoAYCQ30x5S2KA&s'
    },
    {
      id: '6',
      title: 'AgenciaViagem',
      description: 'O projeto AgenciaViagem é uma aplicação web desenvolvida em ASP.NET Core (Razor Pages) com uso de Entity Framework Core e banco de dados SQLite.',
      technologies: ['ASP.NET Core 9 (Razor Pages)', 'Entity Framework Core', 'SQLite', 'Bootstrap', 'jQuery e jQuery Validation'],
      githubUrl: 'https://github.com/guilhermereiiss/AT-C--TRIMESTRE',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyO0z-hRhoBt8_YCwwAquViB3AbNVWqGUgQ&s'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
            Meus Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
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