import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
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

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Estudiante de Desarrollo de Software con IA | SENATI 5to Ciclo | Fullstack Developer
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
