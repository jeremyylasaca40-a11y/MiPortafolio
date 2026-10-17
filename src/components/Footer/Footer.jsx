import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="text-cyan">Jeremy Mey Ling</span> Ylasaca Lipa
            <p className="footer-tagline">
              Estudiante de SENATI • 5to Ciclo • Desarrollo de Software con IA
            </p>
          </div>

          <div className="footer-links">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Perfil</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#certificados">Certificados</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/jeremy-ylasaca-53627b349"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Perfil de LinkedIn"
              title="LinkedIn - Jeremy Ylasaca"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/jeremyylasaca40-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Perfil de GitHub"
              title="GitHub - jeremyylasaca40-a11y"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jeremy Ylasaca Lipa. Todos los derechos reservados.</p>
          <p className="footer-senati">SENATI - Seminario Fullstack Developer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
