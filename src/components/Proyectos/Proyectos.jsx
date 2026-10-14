import './Proyectos.css';

const Proyectos = () => {
  // Arreglo de proyectos destacados de Jeremy Ylasaca con tecnologías actualizadas
  const proyectosData = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      titulo: "Plataforma E-Commerce & Carrito Fullstack",
      descripcion: "Aplicación web integral de comercio electrónico con catálogo dinámico, tipado estático seguro, carrito reactivo, persistencia de sesión y pasarela de pago simulada.",
      tecnologias: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "PostgreSQL"],
      linkDemo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio",
      linkCodigo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio"
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80",
      titulo: "App Web en Tiempo Real con Socket.io & Chat",
      descripcion: "Sistema de comunicación bidireccional instantáneo con salas virtuales privadas, notificaciones en tiempo real, eventos en vivo y sincronización de datos con WebSockets.",
      tecnologias: ["React", "TypeScript", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      linkDemo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio",
      linkCodigo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio"
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      titulo: "Sistema de Gestión y Registro Académico SENATI",
      descripcion: "Plataforma web para administración de notas, asistencias y seguimiento de estudiantes del ciclo formativo con autenticación segura basada en roles y reportería.",
      tecnologias: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap 5", "MVC"],
      linkDemo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio",
      linkCodigo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio"
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      titulo: "Portafolio Web Profesional React 19 & CSS Modular",
      descripcion: "Sitio web de portafolio personal moderno y responsivo estructurado por componentes modulares, variables de color CSS, animaciones fluidas y soporte multiplataforma.",
      tecnologias: ["React 19", "Vite", "TypeScript", "Vanilla CSS", "Responsive Design", "Git"],
      linkDemo: "#inicio",
      linkCodigo: "https://github.com/jeremyylasaca40-a11y/MiPortafolio"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>
        
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              {/* 1. Imagen del Proyecto */}
              <div className="proyecto-imagen">
                <img 
                  src={proyecto.imagen} 
                  alt={`Captura de ${proyecto.titulo}`} 
                  loading="lazy"
                />
              </div>

              {/* 2. Contenido de la Tarjeta */}
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 4. Botones de Acción */}
                <div className="proyecto-links">
                  <a 
                    href={proyecto.linkDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-proyecto btn-demo"
                  >
                    {/* Ícono de Enlace Externo */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo en Vivo
                  </a>
                  
                  <a 
                    href={proyecto.linkCodigo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-proyecto btn-codigo"
                  >
                    {/* Ícono de GitHub */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
