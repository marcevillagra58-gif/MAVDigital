import { 
  X, 
  Check, 
  ExternalLink, 
  ShoppingBag, 
  FileCheck2, 
  CalendarCheck, 
  LayoutDashboard, 
  Globe, 
  Zap,
  ArrowRight,
  Database,
  Server,
  Smartphone
} from 'lucide-react';
import './PreviewModal.css';

export default function PreviewModal({ feature, onClose, onSelect, isSelected }) {
  if (!feature) return null;

  const renderMockup = () => {
    switch (feature.id) {
      case 'web':
        return (
          <div className="mockup-display-box">
            <div className="mockup-browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: 'auto', fontFamily: 'monospace' }}>
                editorialaguilera.com.ar
              </span>
            </div>
            <div className="mockup-content-inner" style={{ textAlign: 'center', background: 'radial-gradient(circle, #1e293b 0%, #0f172a 100%)' }}>
              <Globe size={36} color="#00f0ff" style={{ marginBottom: '0.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>EDITORIAL AGUILERA</h4>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                Ejemplo real de Sitio Institucional + Catálogo Digital interactivo
              </p>
              <a
                href="https://editorialaguilera.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ fontSize: '0.85rem' }}
              >
                <span>Probar Sitio Real</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="mockup-display-box">
            <div className="mockup-browser-header">
              <span style={{ fontSize: '0.8rem', color: '#00f0ff', fontWeight: 'bold' }}>🛒 Carrito de Compras en Vivo</span>
            </div>
            <div className="mockup-content-inner cart-sim-box">
              <div className="cart-item-row">
                <span>📦 Producto A - Repuesto Industrial</span>
                <strong style={{ color: '#00f0ff' }}>$12.500</strong>
              </div>
              <div className="cart-item-row">
                <span>📦 Producto B - Insumo Comercio</span>
                <strong style={{ color: '#00f0ff' }}>$8.200</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <span>Total: <strong style={{ color: '#fff', fontSize: '1.1rem' }}>$20.700</strong></span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span className="badge-tag" style={{ background: '#25D36622', borderColor: '#25D366', color: '#25D366', fontSize: '0.75rem' }}>
                    WhatsApp Directo
                  </span>
                  <span className="badge-tag" style={{ background: '#009ee322', borderColor: '#009ee3', color: '#009ee3', fontSize: '0.75rem' }}>
                    Mercado Pago
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cot':
        return (
          <div className="mockup-display-box">
            <div className="mockup-browser-header">
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 'bold' }}>📑 Sistema de Remitos & COT ARBA/AFIP</span>
            </div>
            <div className="mockup-content-inner cot-form-sim">
              <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '0.75rem', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Nº Remito:</span>
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>REM-0001-00048291</p>
              </div>
              <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '0.75rem', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Destino / Patente:</span>
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{"AD-391-XY (CABA -> PBA)"}</p>
              </div>
              <div style={{ gridColumn: '1 / -1', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '0.75rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 'bold' }}>✓ COT GENERADO ARBA</span>
                  <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#fff' }}>COT-2026-94810294</p>
                </div>
                <span style={{ fontSize: '0.75rem', background: '#10b981', color: '#000', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>VALIDADO</span>
              </div>
            </div>
          </div>
        );

      case 'turnero':
        return (
          <div className="mockup-display-box">
            <div className="mockup-browser-header">
              <span style={{ fontSize: '0.8rem', color: '#8b5cf6', fontWeight: 'bold' }}>📅 Turnero Online 24/7</span>
            </div>
            <div className="mockup-content-inner">
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.75rem' }}>Horarios disponibles para hoy:</p>
              <div className="calendar-sim-grid">
                <div className="time-slot">09:00 hs</div>
                <div className="time-slot">10:30 hs</div>
                <div className="time-slot" style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b', borderColor: 'transparent' }}>14:00 (Ocupado)</div>
                <div className="time-slot">16:00 hs</div>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '1rem', textAlign: 'center' }}>
                ✓ Confirmación inmediata + Recordatorio por WhatsApp
              </p>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="mockup-display-box">
            <div className="mockup-browser-header">
              <span style={{ fontSize: '0.8rem', color: '#00f0ff', fontWeight: 'bold' }}>📊 Panel de Control & Gestión</span>
            </div>
            <div className="mockup-content-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(30, 41, 59, 0.6)', padding: '0.75rem', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Ventas del Mes</span>
                <p style={{ color: '#00f0ff', fontWeight: 'bold', fontSize: '1.1rem' }}>$4.850.000</p>
              </div>
              <div style={{ background: 'rgba(30, 41, 59, 0.6)', padding: '0.75rem', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Pedidos Activos</span>
                <p style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>42 Envíos</p>
              </div>
              <div style={{ background: 'rgba(30, 41, 59, 0.6)', padding: '0.75rem', borderRadius: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Stock Alerta</span>
                <p style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.1rem' }}>3 Productos</p>
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="mockup-display-box">
            <div className="mockup-browser-header">
              <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 'bold' }}>⚡ Conexión vía API Rest / GraphQL</span>
            </div>
            <div className="mockup-content-inner">
              <div className="api-diagram">
                <div className="api-node">
                  <Globe size={20} color="#00f0ff" />
                  <p style={{ fontSize: '0.75rem', marginTop: '0.3rem' }}>Tu Sitio Web</p>
                </div>
                <div className="api-connection-line">
                  <span style={{ position: 'absolute', top: '-18px', left: '30%', fontSize: '0.65rem', color: '#00f0ff' }}>JSON API</span>
                </div>
                <div className="api-node">
                  <Server size={20} color="#8b5cf6" />
                  <p style={{ fontSize: '0.75rem', marginTop: '0.3rem' }}>ERP / Sistema</p>
                </div>
                <div className="api-connection-line">
                  <span style={{ position: 'absolute', top: '-18px', left: '20%', fontSize: '0.65rem', color: '#a855f7' }}>AFIP / ARBA</span>
                </div>
                <div className="api-node">
                  <Database size={20} color="#10b981" />
                  <p style={{ fontSize: '0.75rem', marginTop: '0.3rem' }}>Base de Datos</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="preview-modal-backdrop" onClick={onClose}>
      <div className="preview-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-box">
            <Zap size={22} color="#00f0ff" />
            <h3>Vista Previa: <span className="gradient-text-primary">{feature.label}</span></h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {renderMockup()}

          <h4 style={{ fontSize: '1.05rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Beneficios Clave para tu Negocio:
          </h4>

          <div className="modal-benefits-list">
            <div className="benefit-pill">
              <Check size={16} color="#00f0ff" />
              <span>Desarrollo 100% optimizado y sin intermediarios</span>
            </div>
            <div className="benefit-pill">
              <Check size={16} color="#00f0ff" />
              <span>Diseño adaptado a celulares, tablets y PC</span>
            </div>
            <div className="benefit-pill">
              <Check size={16} color="#00f0ff" />
              <span>Capacitación y soporte incluido</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            <span>Cerrar Vista Previa</span>
          </button>

          <button
            className={`btn ${isSelected ? 'btn-whatsapp' : 'btn-primary'}`}
            onClick={() => {
              onSelect(feature.id);
              onClose();
            }}
          >
            <Check size={18} />
            <span>{isSelected ? 'Solución Seleccionada' : 'Sumar esta Solución'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
