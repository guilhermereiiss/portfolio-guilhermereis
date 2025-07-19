import { Code, Palette, Server, Database } from 'lucide-react';
import { Skill } from '../types';
import imagem from '../assets/img/Screenshot_15.png';

export function About() {
  const skills: Skill[] = [
    { name: 'React', level: 75, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Java', level: 50, category: 'backend' },
    { name: 'C#', level: 42, category: 'backend' },
    { name: 'Git', level: 60, category: 'tools' },
    { name: 'Figma', level: 85, category: 'tools' }
  ];

  const categories = {
    frontend: { icon: Code, title: 'Frontend' },
    backend: { icon: Server, title: 'Backend' },
    tools: { icon: Database, title: 'Ferramentas' }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden">
                <img src={imagem} alt="" className="w-full h-full object-cover rounded-full" />
              </div>

            </div>

            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Olá! Meu nome é Guilherme Reis e estou cursando Engenharia de Software no Instituto INFNET.
                Atualmente, estou em busca de um estágio na área de Tecnologia da Informação.
                Tenho interesse em aprimorar minhas habilidades tanto em front-end quanto em
                back-end e gostaria de trabalhar em projetos desafiadores para ganhar mais
                experiência, especialmente em tecnologias que envolvam diferentes linguagens,
                como Java, C#.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Gosto de aplicar os conhecimentos adquiridos na faculdade em situações reais de
                trabalho e estou sempre em busca de oportunidades para aprender e crescer
                profissionalmente. Comecei com o front-end pelo HTML, CSS, JavaScript, React.
                Iniciei meus estudos na área de back-end com Java e C# e sinto que estou
                evoluindo muito bem. Espero poder continuar aprendendo e contribuir para o
                crescimento da sua empresa.
              </p>

            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(categories).map(([category, { icon: Icon, title }]) => (
              <div key={category} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    {title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}