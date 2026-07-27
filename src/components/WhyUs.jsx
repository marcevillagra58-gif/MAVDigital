import { Code2, UserCheck, DollarSign, Rocket } from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  const pillars = [
    {
      icon: <Code2 size={28} />,
      title: 'Desarrollo 100% a Medida',
      desc: 'No usamos plantillas genéricas ni pesadas. Tu sitio o app web se construye exactamente según las necesidades únicas de tu negocio.'
    },
    {
      icon: <UserCheck size={28} />,
      title: 'Trato Directo y Humano',
      desc: 'Hablás directamente con el desarrollador. Respuestas rápidas, asesoramiento sincero y acompañamiento durante todo el proyecto.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Sin Comisiones por Venta',
      desc: 'Tu tienda o sistema es 100% tuyo. No cobramos porcentajes por tus ventas ni mensualidades abusivas en software.'
    },
    {
      icon: <Rocket size={28} />,
      title: 'Máxima Veloz y SEO',
      desc: 'Código limpio y optimizado para cargar al instante en smartphones y posicionar mejor en las búsquedas de Google.'
    }
  ];

  return (
    <section id="nosotros" className="section">
      <div className="container">
        <div className="section-title">
          <div className="badge-tag">Por Qué Elegirnos</div>
          <h2>El Aliado Digital que tu <span className="gradient-text-primary">PYME Necesita</span></h2>
          <p>
            Nos enfocamos en entregar soluciones simples, potentes y rentables sin vueltas técnicas.
          </p>
        </div>

        <div className="why-us-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card why-card">
              <div className="why-icon-box">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
