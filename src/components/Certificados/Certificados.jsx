import { useState } from 'react';
import './Certificados.css';

const Certificados = () => {
  // Estado para el modal de vista de certificado
  const [certificadoActivo, setCertificadoActivo] = useState(null);

  // Lista de certificados de Jeremy Ylasaca
  const certificadosData = [
    {
      id: 1,
      titulo: "Fullstack Developer Software - Seminario",
      institucion: "SENATI",
      fecha: "2026",
      credencial: "SENATI-FSD-2026",
      descripcion: "Desarrollo de aplicaciones web modernas con React, componentes modulares, backend en Node.js, arquitectura MVC y metodologías ágiles.",
      tags: ["React", "Node.js", "Fullstack", "Bootstrap", "Git"],
      icono: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Python Essentials & Data Analysis",
      institucion: "CISCO Networking Academy",
      fecha: "2025",
      credencial: "CISCO-PY-88392",
      descripcion: "Fundamentos avanzados de programación orientada a objetos en Python, manipulación de estructuras de datos, modularidad y análisis computacional.",
      tags: ["Python", "POO", "Algoritmos", "Data Structures"],
      icono: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Gestión y Modelado de Bases de Datos SQL",
      institucion: "SENATI / Microsoft Learn",
      fecha: "2025",
      credencial: "SEN-SQL-54210",
      descripcion: "Diseño y normalización de bases de datos relacionales, lenguaje SQL ANSI, procedimientos almacenados, optimización de queries y seguridad de datos.",
      tags: ["SQL Server", "MySQL", "T-SQL", "Modelado ER"],
      icono: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Desarrollo Frontend Moderno & TypeScript",
      institucion: "Capacitación Continua",
      fecha: "2026",
      credencial: "DEV-TS-REACT-2026",
      descripcion: "Construcción de interfaces robustas con React 19, TypeScript estricto, manejo de estado, patrones de diseño y consumo de APIs asíncronas.",
      tags: ["TypeScript", "React", "Tailwind CSS", "SPA"],
      icono: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Control de Versiones & Trabajo Colaborativo con Git / GitHub",
      institucion: "SENATI",
      fecha: "2025",
      credencial: "SEN-GIT-99120",
      descripcion: "Flujos de trabajo con ramas (GitFlow), resolución de conflictos, integración continua y despliegues automáticos.",
      tags: ["Git", "GitHub", "CI/CD", "Colaboración"],
      icono: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <line x1="6" y1="3" x2="6" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path>
        </svg>
      )
    },
    {
      id: 6,
      titulo: "Cybersecurity Essentials",
      institucion: "CISCO Networking Academy",
      fecha: "2024",
      credencial: "CISCO-SEC-33214",
      descripcion: "Principios de seguridad de la información, protección contra amenazas web, integridad de datos y buenas prácticas en desarrollo seguro.",
      tags: ["Seguridad Web", "Criptografía", "OWASP", "Redes"],
      icono: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        <h2 className="section-title text-center">Certificaciones & Logros</h2>
        <p className="certificados-subtitle text-center">
          Credenciales oficiales que respaldan mi formación técnica en SENATI y plataformas de prestigio internacional.
        </p>

        {/* Grilla de Certificados */}
        <div className="certificados-grid">
          {certificadosData.map((cert) => (
            <div key={cert.id} className="certificado-card">
              <div className="cert-header">
                <div className="cert-icon-box">
                  {cert.icono}
                </div>
                <span className="cert-fecha">{cert.fecha}</span>
              </div>

              <div className="cert-body">
                <span className="cert-institucion">{cert.institucion}</span>
                <h3 className="cert-titulo">{cert.titulo}</h3>
                <p className="cert-desc">{cert.descripcion}</p>

                <div className="cert-tags">
                  {cert.tags.map((tag, idx) => (
                    <span key={idx} className="cert-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="cert-footer">
                <button 
                  className="btn-ver-cert"
                  onClick={() => setCertificadoActivo(cert)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Ver Credencial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal interactivo de Certificado */}
        {certificadoActivo && (
          <div className="cert-modal-overlay" onClick={() => setCertificadoActivo(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="cert-modal-close" 
                onClick={() => setCertificadoActivo(null)}
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              <div className="cert-modal-badge">
                <span className="status-dot"></span> Credencial Verificada
              </div>

              <h3 className="cert-modal-title">{certificadoActivo.titulo}</h3>
              <p className="cert-modal-inst">
                Emitido por: <strong>{certificadoActivo.institucion}</strong> • Año: {certificadoActivo.fecha}
              </p>

              <div className="cert-modal-box">
                <p className="cert-modal-id">
                  Código de Registro: <code>{certificadoActivo.credencial}</code>
                </p>
                <p className="cert-modal-desc">{certificadoActivo.descripcion}</p>
                
                <div className="cert-tags" style={{ marginTop: '1rem' }}>
                  {certificadoActivo.tags.map((tag, idx) => (
                    <span key={idx} className="cert-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="cert-modal-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    alert(`Credencial: ${certificadoActivo.credencial}\nEmitido a: Jeremy Mey Ling Ylasaca Lipa`);
                  }}
                >
                  Validar Autenticidad
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setCertificadoActivo(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificados;
