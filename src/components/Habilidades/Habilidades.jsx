import './Habilidades.css';

const Habilidades = () => {
  // Arreglo de datos: Stack tecnológico moderno y fullstack para Jeremy Ylasaca
  const skillsData = [
    {
      id: 1,
      titulo: "React.js",
      descripcion: "Construcción de Single Page Applications, componentización modular, Custom Hooks, gestión de estado y consumo de APIs asíncronas.",
      nivel: "Avanzado",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"></ellipse>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"></ellipse>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"></ellipse>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "TypeScript (Fullstack)",
      descripcion: "Tipado estático seguro tanto en Frontend (React) como Backend (Node.js/Express), interfaces, tipos genéricos, DTOs y prevención de errores.",
      nivel: "Avanzado",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <rect x="3" y="3" width="18" height="18" rx="3" ry="3"></rect>
          <path d="M7 8h5M9.5 8v8"></path>
          <path d="M14 14.5c.6.6 1.3.9 2.1.9 1 0 1.6-.5 1.6-1.2 0-1.8-3.4-.6-3.4-3 0-1.1.9-1.8 2.2-1.8.8 0 1.5.3 2 .8"></path>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Node.js & Express",
      descripcion: "Arquitectura backend orientada a servicios, desarrollo de APIs RESTful, middlewares de autenticación (JWT), CORS y hashing con bcrypt.",
      nivel: "Avanzado",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"></path>
          <path d="M12 22V12"></path>
          <path d="M12 12L2.5 7"></path>
          <path d="M12 12l9.5-5"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Socket.io & WebSockets",
      descripcion: "Comunicación bidireccional en tiempo real, salas (rooms), eventos distribuidos, notificaciones push instantáneas y aplicaciones de chat.",
      nivel: "Intermedio",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Tailwind CSS & CSS3 Moderno",
      descripcion: "Maquetación ultra rápida con clases de utilidad, diseño responsive móvil-first, personalización de temas oscuros, Flexbox y Grid.",
      nivel: "Avanzado",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M5.5 10c1.5-3 3.5-3 5-1 1 1.5 2 2 3.5 1 2-1 2.5-3 2.5-3s-1.5 3-3.5 3c-1.5 0-2.5-1.5-3.5-2.5-1-1-2.5-1-4 2.5z"></path>
          <path d="M2.5 15c1.5-3 3.5-3 5-1 1 1.5 2 2 3.5 1 2-1 2.5-3 2.5-3s-1.5 3-3.5 3c-1.5 0-2.5-1.5-3.5-2.5-1-1-2.5-1-4 2.5z"></path>
        </svg>
      )
    },
    {
      id: 6,
      titulo: "SQL Server / MySQL / PostgreSQL",
      descripcion: "Diseño relacional entidad-relación, normalización, transacciones ACID, optimización de índices, vistas y procedimientos almacenados.",
      nivel: "Avanzado",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      id: 7,
      titulo: "PHP & Laravel",
      descripcion: "Desarrollo backend estructurado, ORM Eloquent, autenticación, migraciones, controladores, validaciones y arquitectura MVC sólida.",
      nivel: "Intermedio",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"></path>
        </svg>
      )
    },
    {
      id: 8,
      titulo: "Git & GitHub",
      descripcion: "Flujo GitFlow, ramas, merge, resolución de conflictos, pull requests, integración continua y repositorios en la nube.",
      nivel: "Avanzado",
      botonTexto: "DOMINADO",
      estado: "completado",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <line x1="6" y1="3" x2="6" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path>
        </svg>
      )
    },
    {
      id: 9,
      titulo: "Python & Inteligencia Artificial",
      descripcion: "Procesamiento de datos con Pandas/NumPy, conexión con APIs de LLMs, automatización de tareas y desarrollo de soluciones con IA.",
      nivel: "En Progreso",
      botonTexto: "EN PROCESO",
      estado: "proceso",
      icono: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M12 2c5 0 5 3 5 3v3H9V7c0-2 2-5 3-5z"></path>
          <path d="M12 22c-5 0-5-3-5-3v-3h8v1c0 2-2 5-3 5z"></path>
          <circle cx="10" cy="5" r="1" fill="currentColor"></circle>
          <circle cx="14" cy="19" r="1" fill="currentColor"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title text-center">Tech Stack & Habilidades</h2>
        
        {/* Iteramos sobre el arreglo de datos usando .map() */}
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              {/* Cabecera de la tarjeta: Ícono y Botón */}
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icono}
                </div>
                
                {/* Clases dinámicas: Si el estado es proceso, aplicamos badge-yellow */}
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>

              {/* Cuerpo de la tarjeta: Textos */}
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <div className="skill-footer">
                  <span className="skill-level-label">Nivel:</span>
                  <span className="skill-level">{skill.nivel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
