import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <footer className="bg-slate-100 dark:bg-slate-800 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              © 2025 Guilherme Reis. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;