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
