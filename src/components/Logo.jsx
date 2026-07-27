import logoImg from '../assets/Logo MaVDigital.png';
import './Logo.css';

export default function Logo({ height = 48 }) {
  return (
    <div className="brand-logo-wrapper">
      <img
        src={logoImg}
        alt="MaV Digital Logo"
        style={{ height: `${height}px`, width: 'auto' }}
        className="mav-logo-img"
      />
    </div>
  );
}
