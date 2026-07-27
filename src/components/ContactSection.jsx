import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate direct contact or WhatsApp redirect
    const text = `Hola MaV Digital! Nombre: ${formData.nombre} (${formData.empresa || 'Particular'}). Mensaje: ${formData.mensaje}`;
    const url = `https://wa.me/5491100000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="contact-box glass-card">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="badge-tag">Hablemos de tu Proyecto</div>
              <h3>¿Tenés una idea o necesidad en tu <span className="gradient-text-primary">Comercio / Empresa?</span></h3>
              <p>
                Escribinos sin compromiso. Analizamos tu requerimiento y te proponemos la mejor solución ajustada a tu presupuesto.
              </p>

              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="contact-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div className="contact-details">
                    <h5>WhatsApp Directo</h5>
                    <p>Atención y respuesta rápida</p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <h5>Email de Consultas</h5>
                    <p>contacto@mavdigital.com.ar</p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details">
                    <h5>Ubicación</h5>
                    <p>Buenos Aires, Argentina (Trabajos en todo el país)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div style={{ textDecoration: 'none', textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={50} color="#10b981" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>¡Consulta enviada!</h4>
                  <p style={{ color: 'var(--text-muted)' }}>
                    Serás redirigido a WhatsApp para coordinar los detalles de tu propuesta.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre y Apellido *</label>
                    <input
                      type="text"
                      id="nombre"
                      className="form-input"
                      placeholder="Ej: Marcelo Aguilera"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa">Nombre de tu Comercio / PYME</label>
                    <input
                      type="text"
                      id="empresa"
                      className="form-input"
                      placeholder="Ej: Distribuidora Soles"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      id="telefono"
                      className="form-input"
                      placeholder="Ej: +54 9 11 1234 5678"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">¿Qué necesitas desarrollar? *</label>
                    <textarea
                      id="mensaje"
                      className="form-input"
                      placeholder="Contanos brevemente sobre tu negocio o qué solución querés implementar..."
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={18} />
                    <span>Enviar Consulta Ahora</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
