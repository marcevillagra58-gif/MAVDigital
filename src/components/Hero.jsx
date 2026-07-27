import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge-tag">
            <Sparkles size={14} /> Soluciones Web & Apps para PYMEs
          </div>

          <h1>
            Llevá tu Comercio o Empresa al <span className="gradient-text-primary">Siguiente Nivel Digital</span>
          </h1>

          <p className="hero-description">
            Diseñamos y desarrollamos sitios web institucionales, e-commerce, sistemas de facturación, declaración de COT (ARBA/AFIP) y turneros online pensados para aumentar tus ventas y optimizar tu tiempo.
          </p>

          <div className="hero-cta">
            <a href="#cotizador" className="btn btn-primary">
              <span>Cotizar mi Proyecto</span>
              <ArrowRight size={18} />
            </a>

            <a href="#caso-exito" className="btn btn-secondary">
              <span>Ver Caso de Éxito</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>A Medida</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Disponibilidad</p>
            </div>
            <div className="stat-item">
              <h3>0%</h3>
              <p>Comisiones Ocultas</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-preview">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
              <div className="browser-address">mavdigital.com.ar</div>
            </div>

            <div className="preview-features-grid">
              <div className="feature-mini-card">
                <div className="feature-icon-box">
                  <Globe size={20} />
                </div>
                <h4>Sitios Institucionales</h4>
                <p>Presencia profesional única y veloz.</p>
              </div>

              <div className="feature-mini-card">
                <div className="feature-icon-box">
                  <Zap size={20} />
                </div>
                <h4>E-Commerce & WhatsApp</h4>
                <p>Ventas directas sin intermediarios.</p>
              </div>

              <div className="feature-mini-card">
                <div className="feature-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <h4>Gestión de COT / ARBA</h4>
                <p>Carga de remitos rápida y sin errores.</p>
              </div>

              <div className="feature-mini-card">
                <div className="feature-icon-box">
                  <CheckCircle2 size={20} />
                </div>
                <h4>Turneros Inteligentes</h4>
                <p>Reservas autónomas para tus clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
