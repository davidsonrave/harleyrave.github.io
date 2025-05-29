import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

interface PortfolioProps {
  geistSans?: {
    variable: string;
  };
  geistMono?: {
    variable: string;
  };
}

interface Skill {
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
}

const Portfolio = ({ geistSans, geistMono }: PortfolioProps) => {
  const router = useRouter(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  type SectionId = 'inicio' | 'sobre-mi' | 'habilidades' | 'proyectos' | 'contacto';
  const [activeSection, setActiveSection] = useState<SectionId>('inicio');

  // Animación de typing para el título
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desarrollador Web';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const skills: Skill[] = [
    { name: 'WordPress', icon: '🔥', description: 'Desarrollo de temas y plugins personalizados', color: 'from-blue-500 to-blue-600' },
    { name: 'PHP', icon: '🐘', description: 'Backend robusto y APIs escalables', color: 'from-purple-500 to-purple-600' },
    { name: 'React', icon: '⚛️', description: 'Interfaces dinámicas y componentes reutilizables', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Next.js', icon: '▲', description: 'Apps full-stack con SSR y optimización SEO', color: 'from-gray-800 to-gray-900' },
    { name: 'TypeScript', icon: '📘', description: 'Código más seguro y mantenible', color: 'from-blue-600 to-blue-700' },
    { name: 'JavaScript', icon: '⚡', description: 'Lógica interactiva y experiencias modernas', color: 'from-yellow-500 to-yellow-600' }
  ];

  const projects: Project[] = [
    {
      title: 'Página web Pintuco Colombia',
      description: 'Desarrollo de la página web de Pintuco Colombia, con un enfoque en la experiencia del usuario en bloques de Gutenberg y la optimización SEO.',
      tech: ['WordPress', 'PHP', 'React', 'MySQL'],
      image: '/pintuco.png',
      link: 'https://www.pintuco.com.co/',
    },
    {
      title: 'Página web Pintuco Ecuador',
      description: 'Desarrollo de la página web de Pintuco Ecuador, con un enfoque en la experiencia del usuario en bloques de Gutenberg y la optimización SEO.',
      tech: ['WordPress', 'PHP', 'React', 'MySQL'],
      image: '/pintucoEcuador.png',
      link: 'https://www.pintuco.com.ec/',
    },
     {
      title: 'Página web bolivariano',
      description: 'Trabajo colobativo en el desarrollo de la pagina web fronted de transportes y logistica Bolivariano, con un enfoque en la experiencia del usuario  para la compra de tiquetes ',
      tech: ['Next ts',  'React', 'MySQL'],
      image: '/bolivariano.png',
      link: 'https://bolivariano-qa.plm.com.co/',
    },
    {
      title: 'Grandeza Run Fest',
      description: 'Trabajo colaborativo para el evento Grandeza Run Fest, con landing page y sistema de registro.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/grandeza.png',
      link: 'https://grandeza.atlnacional.com.co/',
    },
    {
      title: 'Recetario',
      description: 'Página web de recetas con Next.js, TypeScript y Tailwind CSS, optimizada para SEO.',
      tech: ['Next.js', 'TypeScript'],
      image: '/recetario.png',
      link: 'https://come-cerdo-recetas-qa.plm.com.co/',
    },
  ];

  const scrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white ${geistSans?.variable || ''} ${geistMono?.variable || ''} font-sans`}>
      {/* Navegación */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portafolio
            </div>
            
            {/* Menú Desktop */}
            <div className="hidden md:flex space-x-8">
              {(['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'] as SectionId[]).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Menú Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Menú Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {(['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'] as SectionId[]).map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-white/80 hover:text-purple-400 transition-colors"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl">
              👨‍💻
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Davidson Rave
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-purple-300 min-h-[2.5rem]">
              {displayText}<span className="animate-pulse">|</span>
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Soy un experto en crear experiencias web excepcionales utilizando tecnologías modernas. Transformo ideas en soluciones digitales innovadoras.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              Contactarme
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/davidsonrave/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/davidson-rave-126b44191/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:davidsonrave1@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un desarrollador entusiasta con más de 2 años de experiencia en la creación de soluciones web innovadoras. Me especializo en el desarrollo Web, utilizando tecnologías modernas como React, Next.js, PHP y WordPress.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi enfoque se centra en crear experiencias de usuario excepcionales, 
                código limpio y soluciones escalables que impulsen el crecimiento 
                de los negocios.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm">Desarrollo Web</span>
                <span className="px-4 py-2 bg-green-600/30 rounded-full text-sm">Optimización SEO Técnico</span>
                <span className="px-4 py-2 bg-blue-600/30 rounded-full text-sm">Experiencia de Usuario</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center text-8xl backdrop-blur-sm border border-white/10">
                💻
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">{skill.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={`${router.basePath}${project.image}`} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-600/30 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Ver Demo</span>
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Github size={18} />
                        <span>Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ¿Trabajamos Juntos?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Estoy disponible para asumir proyectos freelance y explorar oportunidades de colaboración. ¡Hagamos que tu idea cobre vida!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:davidsonrave1@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                davidsonrave1@gmail.com
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/davidson-rave-126b44191/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                davidson-rave-126b44191
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <Github className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/davidsonrave/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                davidsonrave
              </a>
            </div>
          </div>

          <a 
            href="mailto:davidsonrave1@gmail.com" 
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Enviar Mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Davidson Rave. Desarrollado con ❤️ usando Next.js y TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;