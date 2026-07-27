import { Heart } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <Logo height={52} />
            </a>
            <p>
              Desarrollo de soluciones web y aplicaciones a medida para PYMEs, comercios, particulares e industrias. Impulsamos tu presencia digital con velocidad y alto impacto.
            </p>
          </div>

          <div className="footer-col">
            <h5>Soluciones</h5>
            <ul className="footer-links">
              <li><a href="#servicios">Sitios Institucionales</a></li>
              <li><a href="#servicios">E-Commerce & WhatsApp</a></li>
              <li><a href="#servicios">Declaración de COT / ARBA</a></li>
              <li><a href="#servicios">Turneros Online</a></li>
              <li><a href="#servicios">Web Apps a Medida</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Casos de Éxito</h5>
            <ul className="footer-links">
              <li><a href="https://editorialaguilera.com.ar" target="_blank" rel="noopener noreferrer">Editorial Aguilera</a></li>
              <li><a href="#cotizador">Cotizador Express</a></li>
              <li><a href="#nosotros">Metodología de Trabajo</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contacto</h5>
            <ul className="footer-links">
              <li><a href="#contacto">Formulario Directo</a></li>
              <li><a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">WhatsApp de Ventas</a></li>
              <li><a href="mailto:contacto@mavdigital.com.ar">contacto@mavdigital.com.ar</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} MVD Digital. Todos los derechos reservados.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Desarrollado con <Heart size={14} color="#ef4444" fill="#ef4444" /> para PYMEs y Emprendedores.
          </p>
        </div>
      </div>
    </footer>
  );
}
