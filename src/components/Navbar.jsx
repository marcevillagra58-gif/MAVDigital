import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" style={{ textDecoration: 'none' }}>
          <Logo height={44} />
        </a>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li>
            <a href="#servicios" className="nav-link" onClick={() => setMobileOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#caso-exito" className="nav-link" onClick={() => setMobileOpen(false)}>
              Caso de Éxito
            </a>
          </li>
          <li>
            <a href="#cotizador" className="nav-link" onClick={() => setMobileOpen(false)}>
              Cotizador Express
            </a>
          </li>
          <li>
            <a href="#nosotros" className="nav-link" onClick={() => setMobileOpen(false)}>
              Por qué MVD
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link" onClick={() => setMobileOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href="https://wa.me/5491100000000?text=Hola%20MVD%20Digital,%20quiero%20consultar%20por%20una%20solución%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
          >
            <MessageSquare size={16} />
            <span>Consultar</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
