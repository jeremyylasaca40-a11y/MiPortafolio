import './Proyectos.css';

const Proyectos = () => {
  // Arreglo de proyectos destacados de Jeremy Ylasaca con aplicaciones reales en producción
  const proyectosData = [
    {
      id: 1,
      imagen: "/proyectos/web_cantabra.png",
      titulo: "WEB-Cántabra | Plataforma de Pedidos & Comida Rápida",
      descripcion: "Aplicación web completa de pedidos para restaurante con catálogo interactivo de platos típicos y bebidas peruanas, carrito de compras dinámico, módulo 'Mis pedidos' y autenticación de usuarios. Desplegada en servidor de producción con dominio web activo.",
      tecnologias: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3 / Responsive", "Apache / InfinityFree"],
      linkDemo: "http://comidarapida.infinityfree.me",
      linkCodigo: "https://github.com/jeremyylasaca26-gif/web_cantabra",
      enProduccion: true
    },
    {
      id: 2,
      imagen: "/proyectos/ecomarket.png",
      titulo: "EcoMarket | E-Commerce de Frutas, Verduras & Abarrotes",
      descripcion: "Tienda online interactiva y ecológica para compra de productos frescos con catálogo filtrable por categorías (Frutas, Verduras, Abarrotes), carrito de compras reactivo, carrusel de ofertas y diseño adaptativo. Desplegada en producción en Vercel.",
      tecnologias: ["JavaScript", "HTML5", "CSS3 Moderno", "Responsive Design", "Vercel", "Git"],
      linkDemo: "https://ecomarket-eight.vercel.app/",
      linkCodigo: "https://github.com/jeremyylasaca26-gif/EcoMarket",
      enProduccion: true
    },
    {
      id: 3,
      imagen: "/proyectos/estacionamiento_tinkercad.png",
      titulo: "Sistema Automatizado de Estacionamiento | Arduino & IoT",
      descripcion: "Simulación y prototipo electrónico interactivo en Tinkercad para la gestión inteligente de estacionamientos vehiculares. Cuenta con microcontrolador Arduino UNO, sensor de presencia PIR para detección vehicular, servomotor para control automático de barrera de acceso, pantalla LCD 16x2 (I2C) informativa de estado, avisador acústico con zumbador piezoeléctrico y sensores ambientales.",
      tecnologias: ["Arduino UNO", "C++", "Tinkercad", "IoT & Sensores", "Sensor PIR", "Servomotor", "Pantalla LCD I2C"],
      linkDemo: "https://www.tinkercad.com/things/8UBEnAFoxPx/editel?returnTo=%2Fdashboard&sharecode=n3VLQxC1nXoCJtrQZsWtbifkNBEc-MWr9bZgW4tXLWg",
      linkCodigo: null,
      textoDemo: "Simulación Tinkercad ↗",
      badgeTexto: "Simulación Interactiva",
      enProduccion: true
    },
    {
      id: 4,
      imagen: "/proyectos/app_tareas.png",
      titulo: "AppTareas | Gestión & Organización de Tareas Diarias (Android)",
      descripcion: "Aplicación móvil nativa creada en Android Studio para planificar, registrar y supervisar actividades cotidianas. Incluye buscador reactivo, filtro por estados (pendientes / finalizadas), calendarización de vencimientos, priorización y arquitectura CRUD completa con almacenamiento local.",
      tecnologias: ["Android Studio", "Java", "XML Layouts", "SQLite", "Material Design", "CRUD Móvil"],
      linkDemo: "/apk/appTareas.apk",
      linkCodigo: "https://github.com/jeremyylasaca40-a11y/AppTareas",
      esApk: true,
      textoDemo: "Descargar APK",
      badgeTexto: "App Android (APK)",
      enProduccion: true
    },
    {
      id: 5,
      imagen: "/proyectos/ecotrack.png",
      titulo: "EcoTrack ECOLIM | Gestión & Registro de Residuos Sólidos (Android)",
      descripcion: "Aplicación móvil empresarial orientada a la sostenibilidad y optimización ambiental desarrollada para ECOLIM S.A.C. Permite el registro digital de residuos sólidos, visualización de métricas estadísticas, generación de reportes y trazabilidad ecológica con interfaz moderna.",
      tecnologias: ["Android Studio", "Java", "XML Layouts", "Gestión de Datos", "Estadísticas & Reportes", "Ecoeficiencia"],
      linkDemo: "/apk/ecotrack.apk",
      linkCodigo: "https://github.com/jeremyylasaca40-a11y/EcoTrack2",
      esApk: true,
      textoDemo: "Descargar APK",
      badgeTexto: "App Android (APK)",
      enProduccion: true
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>
        
        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              {/* 1. Imagen del Proyecto con Badge de Estado */}
              <div className="proyecto-imagen">
                {proyecto.enProduccion && (
                  <div className="proyecto-live-badge">
                    <span className="live-dot"></span>
                    {proyecto.badgeTexto || "Online en Producción"}
                  </div>
                )}
                <img 
                  src={proyecto.imagen} 
                  alt={`Captura de ${proyecto.titulo}`} 
                  loading="eager"
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
                    target={proyecto.esApk ? undefined : "_blank"} 
                    rel={proyecto.esApk ? undefined : "noopener noreferrer"} 
                    download={proyecto.esApk ? true : undefined}
                    className={`btn-proyecto ${proyecto.esApk ? 'btn-apk' : 'btn-demo'}`}
                    title={proyecto.esApk ? "Descargar archivo instalador APK para Android" : undefined}
                  >
                    {proyecto.esApk ? (
                      /* Ícono de Descarga para APK */
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    ) : (
                      /* Ícono de Enlace Externo */
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    )}
                    {proyecto.textoDemo || "Demo en Vivo ↗"}
                  </a>
                  
                  {proyecto.linkCodigo && (
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
                  )}
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
