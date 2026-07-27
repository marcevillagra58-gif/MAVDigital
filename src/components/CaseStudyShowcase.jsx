import { ExternalLink, Award, Sparkles, BookOpen, Layers } from 'lucide-react';
import './CaseStudyShowcase.css';

export default function CaseStudyShowcase() {
  return (
    <section id="caso-exito" className="section">
      <div className="container">
        <div className="case-study-box">
          <div className="case-study-grid">
            <div className="case-study-content">
              <div className="case-content-badge">
                <Award size={14} /> Proyecto de Referencia
              </div>

              <h3>
                Caso de Éxito: <span className="gradient-text-primary">Editorial Aguilera</span>
              </h3>

              <p>
                Desarrollamos el sitio web oficial para Editorial Aguilera, creando un catálogo digital elegante y dinámico que permite a los lectores y librerías explorar sus publicaciones de forma intuitiva desde cualquier dispositivo.
              </p>

              <div className="case-highlights-grid">
                <div className="case-highlight-card">
                  <h4>Catálogo Interactivo</h4>
                  <p>Organización por categorías y filtrado veloz de libros.</p>
                </div>

                <div className="case-highlight-card">
                  <h4>Diseño 100% Responsive</h4>
                  <p>Adaptado a smartphones, tablets y computadoras de escritorio.</p>
                </div>

                <div className="case-highlight-card">
                  <h4>Carga Ultrarrápida</h4>
                  <p>Optimizado con estándares modernos de performance.</p>
                </div>

                <div className="case-highlight-card">
                  <h4>Contacto Directo</h4>
                  <p>Canales integrados de atención a clientes y librerías.</p>
                </div>
              </div>

              <a
                href="https://editorialaguilera.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Visitar editorialaguilera.com.ar</span>
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="case-visual-preview">
              <div className="case-mockup-frame">
                <div className="mockup-bar">
                  <div className="browser-dot dot-red"></div>
                  <div className="browser-dot dot-yellow"></div>
                  <div className="browser-dot dot-green"></div>
                  <div className="mockup-url">
                    <ExternalLink size={12} />
                    <span>editorialaguilera.com.ar</span>
                  </div>
                </div>

                <div className="mockup-body">
                  <div className="mockup-logo-temp">EDITORIAL AGUILERA</div>
                  <div className="mockup-sub">Catálogo Digital & Publicaciones</div>

                  <div className="mockup-books-sim">
                    <div className="mock-book">
                      <span>LIBRO I</span>
                    </div>
                    <div className="mock-book">
                      <span>LIBRO II</span>
                    </div>
                    <div className="mock-book">
                      <span>LIBRO III</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
