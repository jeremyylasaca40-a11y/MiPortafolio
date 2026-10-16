import './Perfil.css';

const Perfil = () => {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="sobre-mi-container">
        <h2 className="section-title">Sobre mí</h2>
        
        <div className="sobre-mi-grid">
          {/* =====================================
              TARJETA 1: PERFIL PROFESIONAL
              ====================================== */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Usuario (SVG) */}
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Perfil profesional</h3>
            </div>
            
            <p className="card-text">
              Soy estudiante del <strong>5to ciclo de la carrera de Desarrollo de Software con Inteligencia Artificial en SENATI</strong>, con sólida vocación hacia la arquitectura web full stack y soluciones interactivas en tiempo real.
              <br /><br />
              Cuento con experiencia práctica en la creación de aplicaciones web escalables utilizando <strong>TypeScript, React, Node.js, Express, Socket.io, Tailwind CSS, PHP/Laravel</strong> y bases de datos como <strong>PostgreSQL, MySQL y SQL Server</strong>.
              <br /><br />
              Me apasiona integrar herramientas de comunicación bidireccional, desarrollo frontend y backend con tipado estático seguro, código limpio y metodologías ágiles (Scrum).
            </p>
          </div>

          {/* =====================================
              TARJETA 2: EDUCACIÓN
              ====================================== */}
          <div className="card">
            <div className="card-header">
              {/* Ícono de Educación / Sombrero (SVG) */}
              <div className="icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educación & Certificaciones</h3>
            </div>

            <div className="timeline">
              {/* Ítem de Educación 1 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Desarrollo de Software con IA</h4>
                  <span className="badge badge-outline">5to Ciclo - En Curso</span>
                </div>
                <span className="timeline-date">SENATI - Dirección Zonal Lima / Callao</span>
              </div>

              {/* Ítem de Educación 2 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Red Hat System Administration I (RH124)</h4>
                  <span className="badge badge-outline">RHEL 9.3 • Credly</span>
                </div>
                <span className="timeline-date">Red Hat Academy</span>
              </div>

              {/* Ítem de Educación 3 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Fundamentos de Python 1</h4>
                  <span className="badge badge-outline">Certificado Oficial</span>
                </div>
                <span className="timeline-date">SENATI / Cisco Networking Academy</span>
              </div>

              {/* Ítem de Educación 4 */}
              <div className="timeline-item">
                <div className="timeline-header">
                  <h4>Desarrollo con IA & Ciberseguridad</h4>
                  <span className="badge badge-outline">Especialización</span>
                </div>
                <span className="timeline-date">mouredev & BIG school</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
