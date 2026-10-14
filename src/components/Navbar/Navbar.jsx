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
