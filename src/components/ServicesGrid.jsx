import { 
  Building2, 
  ShoppingBag, 
  FileCheck2, 
  CalendarCheck, 
  LayoutDashboard, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import './ServicesGrid.css';

export default function ServicesGrid() {
  const services = [
    {
      id: 'institucionales',
      icon: <Building2 size={26} />,
      title: 'Sitios Institucionales & Catálogos',
      badge: 'Caso de Éxito',
      description: 'Presencia web profesional a medida para marcas, profesionales y editoriales. Catálogos digitales optimizados para buscadores (SEO) y con diseño de alta velocidad.',
      features: [
        'Diseño responsive y ultrarrápido',
        'Catálogo interactivo de productos/libros',
        'Formularios de contacto directos',
        'Integración con redes y WhatsApp'
      ],
      linkText: 'Ver Caso Editorial Aguilera',
      linkHref: '#caso-exito'
    },
    {
      id: 'ecommerce',
      icon: <ShoppingBag size={26} />,
      title: 'Comercio Online & Pedidos Directos',
      badge: 'Más Vendido',
      description: 'Tienda digital para pequeños comercios e industrias. Permití a tus clientes comprar o pedir directamente por WhatsApp o pagar mediante Mercado Pago.',
      features: [
        'Carrito de compras ágil y moderno',
        'Checkout directo a WhatsApp',
        'Cobros integrados (Mercado Pago)',
        'Sin comisiones porcentuales por venta'
      ],
      linkText: 'Cotizar E-Commerce',
      linkHref: '#cotizador'
    },
    {
      id: 'cot-facturacion',
      icon: <FileCheck2 size={26} />,
      title: 'Facturación & Declaración de COT',
      badge: 'Para Distribuidoras y PYMEs',
      description: 'Aplicación web simplificada para la emisión de remitos, facturación electrónica y generación de Código de Operación de Traslado (COT) ante ARBA/AFIP.',
      features: [
        'Carga rápida de comprobantes',
        'Generación de COT en segundos',
        'Evitá multas y demoras de ARBA',
        'Acceso seguro desde celular o PC'
      ],
      linkText: 'Consultar por COT',
      linkHref: '#cotizador'
    },
    {
      id: 'turneros',
      icon: <CalendarCheck size={26} />,
      title: 'Sistemas de Turnos Online',
      badge: 'Automatización',
      description: 'Agenda inteligente en la nube para consultorios, centros de estética, peluquerías o canchas. Tus clientes reservan solos las 24 horas del día.',
      features: [
        'Calendario interactivo de disponibilidad',
        'Reserva autónoma del cliente',
        'Recordatorios automáticos por WhatsApp/Mail',
        'Panel de administración sencillo'
      ],
      linkText: 'Ver Turnero Demo',
      linkHref: '#cotizador'
    },
    {
      id: 'webapps',
      icon: <LayoutDashboard size={26} />,
      title: 'Dashboards & Web Apps a Medida',
      badge: 'Digitalización Total',
      description: 'Software web personalizado para reemplazar planillas de Excel complejas. Control de inventario, seguimiento de trabajos y tableros para directivos.',
      features: [
        'Digitalización de procesos internos',
        'Dashboards de control en tiempo real',
        'Acceso seguro con niveles de usuarios',
        'Desarrollo 100% adaptable a tu flujo'
      ],
      linkText: 'Consultar Proyecto a Medida',
      linkHref: '#cotizador'
    }
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-title">
          <div className="badge-tag">Nuestras Soluciones</div>
          <h2>5 Soluciones Web para <span className="gradient-text-primary">Potenciar tu Negocio</span></h2>
          <p>
            Creamos herramientas digitales enfocadas en resolver necesidades reales de PYMEs y comercios: vender más, automatizar tareas y proyectar máxima confianza.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="glass-card service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul className="service-features-list">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="service-feature-item">
                    <Check size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a href={service.linkHref} className="service-cta-link">
                <span>{service.linkText}</span>
                <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
