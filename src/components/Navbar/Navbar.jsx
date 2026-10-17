import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para controlar el menú hamburguesa en móviles
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Sección del Logo */}
      <div className="navbar-logo">
        <a href="#inicio" className="logo-link">
          <span className="text-cyan">Jeremy</span> Ylasaca
        </a>
      </div>

      {/* Enlaces de Navegación */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* Al hacer clic en un enlace en móvil, cerramos el menú */}
        <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Perfil</a>
        <a href="#tech-stack" onClick={() => setIsOpen(false)}>Tech Stack</a>
        <a href="#certificados" onClick={() => setIsOpen(false)}>Certificados</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>

        {/* Redes sociales en menú móvil */}
        <div className="navbar-social-mobile">
          <a
            href="https://www.linkedin.com/in/jeremy-ylasaca-53627b349"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            aria-label="Perfil de LinkedIn"
            title="LinkedIn - Jeremy Ylasaca"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/jeremyylasaca40-a11y"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            aria-label="Perfil de GitHub"
            title="GitHub - jeremyylasaca40-a11y"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Redes Sociales en Versión de Escritorio */}
      <div className="navbar-social-desktop">
        <a
          href="https://www.linkedin.com/in/jeremy-ylasaca-53627b349"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-icon"
          aria-label="Perfil de LinkedIn"
          title="LinkedIn - Jeremy Ylasaca"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://github.com/jeremyylasaca40-a11y"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-icon"
          aria-label="Perfil de GitHub"
          title="GitHub - jeremyylasaca40-a11y"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </div>

      {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
      <div 
        className={`navbar-toggle ${isOpen ? "toggle-active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
