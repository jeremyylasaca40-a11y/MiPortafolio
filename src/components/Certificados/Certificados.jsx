import { useState, useEffect } from 'react';
import './Certificados.css';

const Certificados = () => {
  // Estado para el modal de vista de certificado
  const [certificadoActivo, setCertificadoActivo] = useState(null);
  // Estado para el filtro de categorías
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCertificadoActivo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 1. Las dos Medallas / Insignias Digitales Oficiales destacadas
  const medallasData = [
    {
      id: "badge-cybersecurity",
      titulo: "Introduction to Cybersecurity",
      institucion: "Cisco Networking Academy",
      fecha: "Septiembre 2024",
      estado: "Verificada Oficial",
      imagen: "/certificados/introduction-to-cybersecurity.png",
      descripcion: "Validación de competencias globales en ciberdefensa, protección de información digital, identificación de vectores de ataque y mitigación de vulnerabilidades.",
      tags: ["Ciberseguridad", "Network Security", "Mitigación de Riesgos", "Cisco"],
      pdfUrl: "/certificados/Introduction_to_Cybersecurity_Badge20241010-7-mdjqu0.pdf",
      previewUrl: "/certificados/previews/preview_cybersecurity_cisco.jpg"
    },
    {
      id: "badge-networking",
      titulo: "Networking Basics",
      institucion: "Cisco Networking Academy",
      fecha: "Octubre 2024",
      estado: "Verificada Oficial",
      imagen: "/certificados/networking-basics.png",
      descripcion: "Acreditación de conocimientos fundamentales sobre arquitecturas de red, modelo OSI / TCP-IP, protocolos de comunicación, subredes y conmutación de paquetes.",
      tags: ["Redes", "TCP/IP", "Subnetting", "Routing & Switching"],
      pdfUrl: "/certificados/Networking_Basics_Badge20241010-7-kh4eph.pdf",
      previewUrl: "/certificados/previews/preview_networking_basics.jpg"
    }
  ];

  // 2. Lista completa de Certificados Reales de Jeremy Ylasaca
  const certificadosData = [
    {
      id: 11,
      titulo: "Java Fundamentals",
      institucion: "Oracle Academy",
      instructores: "Giancarlos Barboza Nieto (Instructor Oficial Oracle Academy)",
      fecha: "Octubre 2026",
      categoria: "oracle",
      credencial: "ORACLE-ACADEMY-JF-2026",
      descripcion: "Acreditación oficial que certifica competencias nucleares en el lenguaje Java: control de flujo, estructuras de datos, programación orientada a objetos (POO), depuración y resolución algorítmica.",
      tags: ["Java", "POO", "Algoritmos", "Oracle Academy", "Clean Code"],
      preview: "/certificados/previews/preview_oracle_java_fundamentals_ok.jpg?v=3",
      pdfUrl: "/certificados/oracle_java_fundamentals_ok.jpg?v=3",
      icono: "java"
    },
    {
      id: 12,
      titulo: "Java Foundations",
      institucion: "Oracle Academy",
      instructores: "Giancarlos Barboza Nieto (Instructor Oficial Oracle Academy)",
      fecha: "Octubre 2026",
      categoria: "oracle",
      credencial: "ORACLE-ACADEMY-JFD-2026",
      descripcion: "Certificación internacional sobre arquitectura y fundamentos avanzados de desarrollo en Java: herencia, polimorfismo, interfaces, encapsulamiento, colecciones de objetos y manejo de excepciones.",
      tags: ["Java Foundations", "POO Avanzada", "Colecciones", "Oracle Academy"],
      preview: "/certificados/previews/preview_oracle_java_foundations_ok.jpg?v=3",
      pdfUrl: "/certificados/oracle_java_foundations_ok.jpg?v=3",
      icono: "java"
    },
    {
      id: 13,
      titulo: "Database Programming with SQL",
      institucion: "Oracle Academy",
      instructores: "Giancarlos Barboza Nieto (Instructor Oficial Oracle Academy)",
      fecha: "Octubre 2026",
      categoria: "oracle",
      credencial: "ORACLE-ACADEMY-DPSQL-2026",
      descripcion: "Especialización en desarrollo y optimización de sentencias SQL: manipulación y definición de datos (DML/DDL), consultas avanzadas con JOINs, agrupamientos, subconsultas y transacciones ACID.",
      tags: ["SQL", "Oracle Database", "Consultas Avanzadas", "DML / DDL", "Oracle Academy"],
      preview: "/certificados/previews/preview_oracle_database_programming_ok.jpg?v=3",
      pdfUrl: "/certificados/oracle_database_programming_ok.jpg?v=3",
      icono: "database"
    },
    {
      id: 14,
      titulo: "Database Design",
      institucion: "Oracle Academy",
      instructores: "Giancarlos Barboza Nieto (Instructor Oficial Oracle Academy)",
      fecha: "Octubre 2026",
      categoria: "oracle",
      credencial: "ORACLE-ACADEMY-DD-2026",
      descripcion: "Diseño y modelado integral de bases de datos relacionales: diagramas entidad-relación (ERD), normalización de tablas (1FN, 2FN, 3FN), reglas de negocio e integridad referencial.",
      tags: ["Database Design", "Diagramas ERD", "Normalización", "Modelado de Datos", "Oracle Academy"],
      preview: "/certificados/previews/preview_oracle_database_design_ok.jpg?v=3",
      pdfUrl: "/certificados/oracle_database_design_ok.jpg?v=3",
      icono: "database"
    },
    {
      id: 1,
      titulo: "Iniciación al Desarrollo con IA",
      institucion: "mouredev & BIG school",
      instructores: "Brais Moure (Director Máster IA) & Romuald Fons (CEO BIG school)",
      fecha: "Octubre 2026",
      horas: "4 horas lectivas",
      categoria: "ia",
      credencial: "BIG-MDEV-IA-2026",
      descripcion: "Formación de vanguardia sobre integración de modelos de Inteligencia Artificial (LLMs), ingeniería de prompts y arquitecturas híbridas de desarrollo de software.",
      tags: ["Inteligencia Artificial", "LLMs", "Prompt Engineering", "Fullstack IA"],
      preview: "/certificados/previews/preview_ia_mouredev.jpg",
      pdfUrl: "/certificados/Certificado-Jeremy-Mey-Ling-Ylasaca-lipa-islqbdlw.pdf",
      icono: "ai"
    },
    {
      id: 2,
      titulo: "Ciberseguridad y Hacking Ético",
      institucion: "BIG school",
      instructores: "Mario Álvarez (Director Ciberseguridad) & Romuald Fons (CEO BIG school)",
      fecha: "Abril 2026",
      horas: "6 horas lectivas",
      categoria: "seguridad",
      credencial: "BIG-HACK-SEC-2026",
      descripcion: "Jornadas especializadas en técnicas de auditoría de seguridad, defensa digital proactiva, análisis forense inicial y detección oportuna de vulnerabilidades web.",
      tags: ["Hacking Ético", "Defensa Digital", "Vulnerabilidades", "Auditoría"],
      preview: "/certificados/previews/preview_ciberseguridad_bigschool.jpg",
      pdfUrl: "/certificados/Certificado-Jeremy-Mey-ling-Ylasaca-lipa-89g8orpd.pdf",
      icono: "security"
    },
    {
      id: 3,
      titulo: "Fundamentos de Python 1",
      institucion: "SENATI & Cisco Networking Academy",
      instructores: "Raul Santos Torres Salinas (Instructor SENATI)",
      fecha: "Marzo 2025",
      categoria: "ia",
      credencial: "1642035-senati-pe",
      descripcion: "Certificado oficial emitido por SENATI mediante Cisco Networking Academy acreditando dominio en resolución algorítmica, tipos de datos, estructuras de control y POO en Python.",
      tags: ["Python", "Algoritmos", "POO", "SENATI Oficial"],
      preview: "/certificados/previews/preview_senati_python.jpg",
      pdfUrl: "/certificados/_certificate_1642035-senati-pe_2e211626-81d5-4989-b6c2-5f8d189c3719.pdf",
      icono: "python"
    },
    {
      id: 4,
      titulo: "Red Hat System Administration I (RH124 - RHA) Ver. 9.3",
      institucion: "Red Hat Academy",
      instructores: "Red Hat Training & Certification",
      fecha: "Junio 2025",
      categoria: "sistemas",
      credencial: "RH124-Ver9.3",
      credlyUrl: "https://www.credly.com/go/zsJy4HYX",
      descripcion: "Competencias nucleares de administración de sistemas operativos Red Hat Enterprise Linux (RHEL 9.3): gestión de usuarios, almacenamiento, procesos, permisos POSIX y servicios esenciales.",
      tags: ["Linux", "Red Hat", "RH124", "SysAdmin", "Credly"],
      preview: "/certificados/previews/preview_redhat.jpg",
      pdfUrl: "/certificados/RedHatSystemAdministrationIRH124-RHA-Ver.9.3_Badge20250602-27-8akeay.pdf",
      icono: "linux"
    },
    {
      id: 5,
      titulo: "Python Essentials 1",
      institucion: "Cisco Networking Academy",
      instructores: "OpenEDG Python Institute / Cisco",
      fecha: "Diciembre 2024",
      categoria: "ia",
      credencial: "CSCO-PY1-2024",
      descripcion: "Certificación internacional sobre programación en Python: modularización, tratamiento de excepciones, colecciones de datos complejas y estándares PEP 8.",
      tags: ["Python", "Data Structures", "Funciones", "Cisco"],
      preview: "/certificados/previews/preview_python_essentials.jpg",
      pdfUrl: "/certificados/Python_Essentials_1_Badge20241222-23-zcoh3t.pdf",
      icono: "python"
    },
    {
      id: 6,
      titulo: "Introduction to Cybersecurity",
      institucion: "Cisco Networking Academy",
      instructores: "Cisco Networking Academy",
      fecha: "Septiembre 2024",
      categoria: "seguridad",
      credencial: "CSCO-SEC-2024",
      descripcion: "Entendimiento holístico de la seguridad informática: vectores de ataque, privacidad de datos, principios de confidencialidad, integridad y disponibilidad (CIA Triad).",
      tags: ["Ciberseguridad", "Seguridad Web", "Protección de Datos", "Cisco"],
      preview: "/certificados/previews/preview_cybersecurity_cisco.jpg",
      pdfUrl: "/certificados/Introduction_to_Cybersecurity_Badge20241010-7-mdjqu0.pdf",
      icono: "security"
    },
    {
      id: 7,
      titulo: "Networking Basics",
      institucion: "Cisco Networking Academy",
      instructores: "Cisco Networking Academy",
      fecha: "Octubre 2024",
      categoria: "sistemas",
      credencial: "CSCO-NET-2024",
      descripcion: "Diseño y fundamentos de infraestructura de red: direccionamiento IPv4/IPv6, protocolos de capa de aplicación, transporte, routers y switches.",
      tags: ["Redes", "IPv4/IPv6", "Topologías", "Cisco"],
      preview: "/certificados/previews/preview_networking_basics.jpg",
      pdfUrl: "/certificados/Networking_Basics_Badge20241010-7-kh4eph.pdf",
      icono: "network"
    },
    {
      id: 8,
      titulo: "Introduction to Data Science",
      institucion: "Cisco Networking Academy",
      instructores: "Cisco Networking Academy",
      fecha: "Noviembre 2024",
      categoria: "ia",
      credencial: "CSCO-DS-2024",
      descripcion: "Conceptos clave de la ciencia de datos, ciclo de vida analítico, recolección y preprocesamiento de datos y modelado para soluciones inteligentes.",
      tags: ["Data Science", "Análisis de Datos", "Machine Learning", "Cisco"],
      preview: "/certificados/previews/preview_data_science.jpg",
      pdfUrl: "/certificados/Introduction_to_Data_Science_Badge20241222-28-6yipgc.pdf",
      icono: "ai"
    },
    {
      id: 9,
      titulo: "Introduction to IoT (Internet of Things)",
      institucion: "Cisco Networking Academy",
      instructores: "Cisco Networking Academy",
      fecha: "Septiembre 2024",
      categoria: "sistemas",
      credencial: "CSCO-IOT-2024",
      descripcion: "Interconexión inteligente de sensores, actuadores y plataformas en la nube, habilitando la recolección distribuida de datos y automatización industrial.",
      tags: ["IoT", "Sensores", "Automatización", "Cloud"],
      preview: "/certificados/previews/preview_iot.jpg",
      pdfUrl: "/certificados/Introduction_to_IoT_Badge20240914-7-ujq24y.pdf",
      icono: "network"
    },
    {
      id: 10,
      titulo: "Computer Hardware Basics",
      institucion: "Cisco Networking Academy",
      instructores: "Cisco Networking Academy",
      fecha: "Noviembre 2024",
      categoria: "sistemas",
      credencial: "CSCO-HW-2024",
      descripcion: "Ensamblaje, mantenimiento de sistemas, compatibilidad de hardware, interfaces periféricas y diagnóstico exhaustivo de equipos computacionales.",
      tags: ["Hardware", "Arquitectura PC", "Diagnóstico", "Mantenimiento"],
      preview: "/certificados/previews/preview_hardware_basics.jpg",
      pdfUrl: "/certificados/Computer_Hardware_Basics_Badge20241105-28-w9n27z.pdf",
      icono: "chip"
    }
  ];

  // Filtro dinámico
  const certificadosFiltrados = categoriaActiva === 'todos'
    ? certificadosData
    : certificadosData.filter((c) => c.categoria === categoriaActiva);

  // Renderizar íconos según categoría o tipo
  const renderIcono = (tipo) => {
    switch (tipo) {
      case 'ai':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
          </svg>
        );
      case 'security':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case 'python':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <path d="M12 2c5 0 5 3 5 3v3H9V7c0-2 2-5 3-5z"></path>
            <path d="M12 22c-5 0-5-3-5-3v-3h8v1c0 2-2 5-3 5z"></path>
            <circle cx="10" cy="5" r="1" fill="currentColor"></circle>
            <circle cx="14" cy="19" r="1" fill="currentColor"></circle>
          </svg>
        );
      case 'linux':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"></path>
            <path d="M6 14v1a6 6 0 0 0 12 0v-1"></path>
            <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path>
          </svg>
        );
      case 'network':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <rect x="2" y="2" width="6" height="6" rx="1"></rect>
            <rect x="16" y="2" width="6" height="6" rx="1"></rect>
            <rect x="9" y="16" width="6" height="6" rx="1"></rect>
            <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M12 13v3"></path>
          </svg>
        );
      case 'java':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        );
      case 'database':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
        );
    }
  };

  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">
        
        {/* Título de la Sección */}
        <div className="certificados-header-block">
          <h2 className="section-title text-center">Certificaciones & Logros</h2>
          <p className="certificados-subtitle text-center">
            Credenciales oficiales y acreditaciones técnicas emitidas por <strong>Oracle Academy</strong>, <strong>SENATI</strong>, <strong>Cisco Networking Academy</strong>, <strong>Red Hat</strong>, <strong>mouredev</strong> y <strong>BIG school</strong>.
          </p>
        </div>

        {/* ========================================================
            SECCIÓN DESTACADA: INSIGNIAS Y MEDALLAS DIGITALES OFICIALES
            ======================================================== */}
        <div className="medallas-showcase">
          <div className="medallas-title-row">
            <div className="medallas-badge-pill">
              <span className="pulsing-dot"></span>
              Insignias Oficiales Verificadas (Digital Badges)
            </div>
            <p className="medallas-caption">
              Medallas oficiales emitidas por Cisco Networking Academy que validan competencias especializadas en redes y ciberseguridad.
            </p>
          </div>

          <div className="medallas-grid">
            {medallasData.map((medalla) => (
              <div key={medalla.id} className="medalla-card">
                <div className="medalla-glow-effect"></div>
                <div className="medalla-visual">
                  <img 
                    src={medalla.imagen} 
                    alt={`Medalla ${medalla.titulo}`} 
                    className="medalla-img" 
                    loading="lazy"
                  />
                  <span className="medalla-status-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    {medalla.estado}
                  </span>
                </div>

                <div className="medalla-info">
                  <span className="medalla-issuer">{medalla.institucion} • {medalla.fecha}</span>
                  <h3 className="medalla-name">{medalla.titulo}</h3>
                  <p className="medalla-description">{medalla.descripcion}</p>

                  <div className="medalla-tags">
                    {medalla.tags.map((tag, idx) => (
                      <span key={idx} className="medalla-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="medalla-actions">
                    <button 
                      className="btn-medalla btn-preview"
                      onClick={() => setCertificadoActivo({
                        titulo: medalla.titulo,
                        institucion: medalla.institucion,
                        fecha: medalla.fecha,
                        credencial: "CISCO-BADGE-VERIFIED",
                        descripcion: medalla.descripcion,
                        tags: medalla.tags,
                        preview: medalla.previewUrl,
                        pdfUrl: medalla.pdfUrl
                      })}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      Ver Diploma Completo
                    </button>

                    <a 
                      href={medalla.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-medalla btn-pdf"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      PDF Oficial ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            FILTROS DE CATEGORÍA
            ======================================================== */}
        <div className="cert-filter-bar">
          <button 
            className={`filter-btn ${categoriaActiva === 'todos' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('todos')}
          >
            Todos ({certificadosData.length})
          </button>
          <button 
            className={`filter-btn ${categoriaActiva === 'oracle' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('oracle')}
          >
            Java & Bases de Datos ({certificadosData.filter(c => c.categoria === 'oracle').length})
          </button>
          <button 
            className={`filter-btn ${categoriaActiva === 'ia' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('ia')}
          >
            IA & Python ({certificadosData.filter(c => c.categoria === 'ia').length})
          </button>
          <button 
            className={`filter-btn ${categoriaActiva === 'seguridad' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('seguridad')}
          >
            Ciberseguridad ({certificadosData.filter(c => c.categoria === 'seguridad').length})
          </button>
          <button 
            className={`filter-btn ${categoriaActiva === 'sistemas' ? 'active' : ''}`}
            onClick={() => setCategoriaActiva('sistemas')}
          >
            Sistemas & Redes ({certificadosData.filter(c => c.categoria === 'sistemas').length})
          </button>
        </div>

        {/* ========================================================
            GRILLA PRINCIPAL DE CERTIFICADOS
            ======================================================== */}
        <div className="certificados-grid">
          {certificadosFiltrados.map((cert) => (
            <article key={cert.id} className="certificado-card">
              {/* Imagen Miniatura / Preview del Certificado */}
              <div 
                className="cert-thumbnail-box"
                onClick={() => setCertificadoActivo(cert)}
                title="Haz clic para ver el certificado ampliado"
              >
                <img 
                  src={cert.preview} 
                  alt={`Certificado ${cert.titulo}`} 
                  className="cert-thumbnail-img"
                  loading="eager"
                />
                <div className="cert-thumbnail-overlay">
                  <span className="overlay-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    Inspeccionar
                  </span>
                </div>
              </div>

              {/* Encabezado */}
              <div className="cert-header">
                <div className="cert-icon-box">
                  {renderIcono(cert.icono)}
                </div>
                <div className="cert-meta-tags">
                  {cert.horas && <span className="cert-horas">{cert.horas}</span>}
                  <span className="cert-fecha">{cert.fecha}</span>
                </div>
              </div>

              {/* Cuerpo del Certificado */}
              <div className="cert-body">
                <span className="cert-institucion">{cert.institucion}</span>
                <h3 className="cert-titulo">{cert.titulo}</h3>
                <p className="cert-desc">{cert.descripcion}</p>

                {cert.instructores && (
                  <p className="cert-instructores">
                    <strong>Docente / Emisor:</strong> {cert.instructores}
                  </p>
                )}

                <div className="cert-tags">
                  {cert.tags.map((tag, idx) => (
                    <span key={idx} className="cert-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="cert-footer">
                <div className="cert-buttons-row">
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

                  <a 
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pdf-link"
                    title={cert.pdfUrl?.endsWith('.pdf') ? "Abrir documento PDF original en pestaña nueva" : "Abrir certificado oficial en alta resolución"}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="12" y1="18" x2="12" y2="12"></line>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    {cert.pdfUrl?.endsWith('.pdf') ? 'PDF' : 'Ver Doc'}
                  </a>

                  {cert.credlyUrl && (
                    <a 
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-credly-link"
                      title="Validar insignia digital en Credly"
                    >
                      Credly ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========================================================
            MODAL INTERACTIVO AMPLIO DE CERTIFICADOS
            ======================================================== */}
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
                <span className="status-dot"></span> Credencial Técnica Auténtica
              </div>

              {/* Imagen del Certificado en Grande */}
              {certificadoActivo.preview && (
                <div className="cert-modal-image-wrapper">
                  <img 
                    src={certificadoActivo.preview} 
                    alt={`Documento de ${certificadoActivo.titulo}`}
                    className="cert-modal-img"
                  />
                </div>
              )}

              <h3 className="cert-modal-title">{certificadoActivo.titulo}</h3>
              <p className="cert-modal-inst">
                Emitido por: <strong>{certificadoActivo.institucion}</strong> • Fecha: <strong>{certificadoActivo.fecha}</strong>
              </p>

              {certificadoActivo.instructores && (
                <p className="cert-modal-instructor-info">
                  <strong>Responsables / Ponentes:</strong> {certificadoActivo.instructores}
                </p>
              )}

              <div className="cert-modal-box">
                {certificadoActivo.credencial && (
                  <p className="cert-modal-id">
                    Identificador / Registro: <code>{certificadoActivo.credencial}</code>
                  </p>
                )}
                {certificadoActivo.horas && (
                  <p className="cert-modal-id">
                    Carga Horaria: <strong>{certificadoActivo.horas}</strong>
                  </p>
                )}
                <p className="cert-modal-desc">{certificadoActivo.descripcion}</p>
                
                <div className="cert-tags" style={{ marginTop: '1rem', marginBottom: 0 }}>
                  {certificadoActivo.tags.map((tag, idx) => (
                    <span key={idx} className="cert-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="cert-modal-actions">
                <a 
                  href={certificadoActivo.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  {certificadoActivo.pdfUrl?.endsWith('.pdf') ? 'Abrir Documento PDF Oficial ↗' : 'Abrir Certificado Oficial ↗'}
                </a>

                {certificadoActivo.credlyUrl && (
                  <a 
                    href={certificadoActivo.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary credly-action-btn"
                  >
                    Verificar en Credly ↗
                  </a>
                )}

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
