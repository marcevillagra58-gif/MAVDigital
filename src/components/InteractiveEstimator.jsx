import { useState } from 'react';
import { Calculator, Check, MessageSquare, Sparkles, Store, Building, Stethoscope, Truck } from 'lucide-react';
import './InteractiveEstimator.css';

export default function InteractiveEstimator() {
  const [businessType, setBusinessType] = useState('comercio');
  const [selectedFeatures, setSelectedFeatures] = useState(['web']);

  const businessTypes = [
    { id: 'comercio', label: 'Comercio / Tienda', desc: 'Ventas al público o local', icon: <Store size={18} /> },
    { id: 'pyme', label: 'PYME / Empresa', desc: 'Servicios o producción', icon: <Building size={18} /> },
    { id: 'profesional', label: 'Profesional / Salud', desc: 'Consultorio o servicios', icon: <Stethoscope size={18} /> },
    { id: 'distribuidora', label: 'Distribuidora / Logística', desc: 'Despacho de mercadería', icon: <Truck size={18} /> },
  ];

  const featureOptions = [
    { id: 'web', label: 'Sitio Web Institucional', desc: 'Presencia formal + Catálogo' },
    { id: 'ecommerce', label: 'Ventas por WhatsApp / Mercado Pago', desc: 'Carrito y cobro online' },
    { id: 'cot', label: 'Declaración de COT (ARBA / AFIP)', desc: 'Gestión de remitos y traslados' },
    { id: 'turnero', label: 'Turnero & Agenda Online', desc: 'Reservas 24/7 automáticas' },
    { id: 'dashboard', label: 'Dashboard / App a Medida', desc: 'Digitalización de procesos' },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const generateWhatsAppLink = () => {
    const selectedBusiness = businessTypes.find((b) => b.id === businessType)?.label || '';
    const selectedFeatLabels = selectedFeatures
      .map((fId) => featureOptions.find((f) => f.id === fId)?.label)
      .join(', ');

    const message = `Hola MaV Digital! 👋 Me interesa cotizar una solución web para mi tipo de negocio: *${selectedBusiness}*.\n\nFuncionalidades de interés:\n- ${selectedFeatLabels}\n\n¿Podrían darme más asesoramiento?`;

    return `https://wa.me/5491100000000?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="cotizador" className="section">
      <div className="container">
        <div className="section-title">
          <div className="badge-tag">Cotizador Express</div>
          <h2>Configurá tu <span className="gradient-text-primary">Proyecto Web en 1 Minuto</span></h2>
          <p>
            Seleccioná tu rubro y las herramientas que necesita tu negocio para armar una consulta personalizada inmediata.
          </p>
        </div>

        <div className="glass-card estimator-card">
          <div className="estimator-step">
            <h4>
              <Calculator size={20} /> 1. Seleccioná tu Tipo de Negocio
            </h4>
            <div className="options-grid">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  className={`option-btn ${businessType === type.id ? 'selected' : ''}`}
                  onClick={() => setBusinessType(type.id)}
                >
                  <div className="option-btn-check">
                    {businessType === type.id && <Check size={14} />}
                  </div>
                  <div className="option-btn-text">
                    <h5>{type.label}</h5>
                    <p>{type.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="estimator-step">
            <h4>
              <Sparkles size={20} /> 2. ¿Qué funcionalidades querés sumar?
            </h4>
            <div className="options-grid">
              {featureOptions.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    className={`option-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleFeature(feat.id)}
                  >
                    <div className="option-btn-check">
                      {isSelected && <Check size={14} />}
                    </div>
                    <div className="option-btn-text">
                      <h5>{feat.label}</h5>
                      <p>{feat.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="estimator-summary">
            <div className="summary-info">
              <h5>Proyecto Seleccionado ({selectedFeatures.length} soluciones)</h5>
              <p>Te enviamos una propuesta formal a medida con presupuesto estimado y tiempos de entrega.</p>
            </div>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={18} />
              <span>Enviar Consulta por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
