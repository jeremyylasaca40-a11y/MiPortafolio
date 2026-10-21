import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [cargando, setCargando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  // Función para envío de correo mediante EmailJS
  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);
    setEnviado(false);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_t2hqa7k';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_rtstzu8';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '0SORe1ChaLDS5sQac';

      // Parámetros compatibles tanto en español como en inglés para la plantilla de EmailJS
      const templateParams = {
        nombre: formulario.nombre,
        from_name: formulario.nombre,
        user_name: formulario.nombre,
        name: formulario.nombre,

        correo: formulario.email,
        email: formulario.email,
        from_email: formulario.email,
        user_email: formulario.email,
        reply_to: formulario.email,

        mensaje: formulario.mensaje,
        message: formulario.mensaje,

        titulo: formulario.nombre,
        subject: `Nuevo mensaje de ${formulario.nombre} desde MiPortafolio`
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200 || response.text === 'OK') {
        setEnviado(true);
        setFormulario({ nombre: '', email: '', mensaje: '' });

        // Modal emergente idéntico al solicitado con SweetAlert2
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje Enviado!',
          text: 'Gracias por contactarme. Te responderé a la brevedad.',
          background: '#0d1527',
          color: '#ffffff',
          confirmButtonColor: '#00d8ff',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title',
            htmlContainer: 'swal-custom-text',
            confirmButton: 'swal-custom-btn'
          }
        });

        setTimeout(() => setEnviado(false), 8000);
      } else {
        throw new Error('Respuesta inesperada al enviar correo');
      }
    } catch (err) {
      console.error("Error al enviar mensaje con EmailJS:", err);
      setError("No se pudo enviar en este momento. También puedes escribirme directamente a jeremyylasaca40@gmail.com o por WhatsApp.");

      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'No se pudo enviar el mensaje en este momento. También puedes escribirme directamente a jeremyylasaca40@gmail.com o por WhatsApp.',
        background: '#0d1527',
        color: '#ffffff',
        confirmButtonColor: '#00d8ff',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'swal-custom-popup',
          title: 'swal-custom-title',
          htmlContainer: 'swal-custom-text',
          confirmButton: 'swal-custom-btn'
        }
      });

      setTimeout(() => setError(null), 8000);
    } finally {
      setCargando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title text-center">Trabajemos Juntos</h2>
        
        <div className="contacto-grid">
          {/* =====================================
              COLUMNA IZQUIERDA: INFORMACIÓN
              ====================================== */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente, necesitas apoyo técnico o buscas un desarrollador full stack con habilidades en IA para tus prácticas o proyectos? ¡Escríbeme!
            </p>

            <div className="info-items">
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <a href="mailto:jeremyylasaca40@gmail.com" className="item-text-link">
                    jeremyylasaca40@gmail.com
                  </a>
                </div>
              </div>

              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima, Perú</p>
                </div>
              </div>

              {/* Ítem Institución */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Institución</span>
                  <p className="item-text">SENATI - Escuela de Tecnologías (5to Ciclo)</p>
                </div>
              </div>

              {/* Ítem GitHub */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">GitHub</span>
                  <a href="https://github.com/jeremyylasaca40-a11y" target="_blank" rel="noopener noreferrer" className="item-text-link">
                    github.com/jeremyylasaca40-a11y
                  </a>
                </div>
              </div>

              {/* Ítem LinkedIn */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/jeremy-ylasaca-53627b349" target="_blank" rel="noopener noreferrer" className="item-text-link">
                    linkedin.com/in/jeremy-ylasaca-53627b349
                  </a>
                </div>
              </div>

              {/* Ítem WhatsApp */}
              <div className="info-item">
                <div className="info-icon" style={{ color: '#25D366' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="item-label">WhatsApp Directo</span>
                  <a
                    href={`https://wa.me/51970885033?text=${encodeURIComponent("Hola Jeremy, vi tu portafolio y me gustaría conversar sobre una oportunidad...")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-text-link"
                    style={{ color: '#25D366', fontWeight: 600 }}
                  >
                    +51 970 885 033 (Escríbeme)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              COLUMNA DERECHA: FORMULARIO
              ====================================== */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre completo"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu.correo@ejemplo.com"
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto o propuesta..."
                  rows="5"
                  required
                  disabled={cargando}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={cargando}>
                {cargando ? 'Enviando mensaje...' : 'Enviar Mensaje'}
              </button>

              {enviado && (
                <div className="envio-exito">
                  ✓ ¡Mensaje enviado exitosamente! Te responderé directamente a tu correo a la brevedad.
                </div>
              )}

              {error && (
                <div className="envio-error">
                  ⚠ {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
