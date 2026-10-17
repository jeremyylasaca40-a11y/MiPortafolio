import { useState, useEffect } from 'react';
import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const ROLES = [
  "Estudiante de Desarrollo de Software con IA",
  "Fullstack Web Developer",
  "Creador de Soluciones Escalables"
];

const Banner = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[currentRoleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">
        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para prácticas & nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto de Perfil - Jeremy Mey Ling Ylasaca Lipa"
            className="profile-photo"
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Jeremy <br />
          <span className="text-cyan">Ylasaca Lipa</span>
        </h1>

        {/* 4. Subtítulo con Efecto de Tipeo (Typing Effect) */}
        <h2 className="hero-subtitle" aria-live="polite">
          <span className="typing-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Construyo aplicaciones web funcionales, modernas y escalables combinando desarrollo full stack con inteligencia artificial. Enfocado en resolver problemas reales mediante código limpio, buenas prácticas y diseño centrado en el usuario.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <a href="#sobre-mi" className="scroll-indicator" aria-label="Ir a sección Sobre mí">
        ↓
      </a>
    </section>
  );
};

export default Banner;
