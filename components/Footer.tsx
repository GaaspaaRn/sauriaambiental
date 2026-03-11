import React from 'react';
import Link from 'next/link';
import { Leaf, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/sauriaconsultoria', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sauriaconsultoria', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre Nós' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/portfolio', label: 'Portfólio' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-display text-white">
              <Leaf className="w-8 h-8 text-primary" />
              <span>Sauria Ambiental</span>
            </Link>
            <p className="text-gray-400">
              Consultoria especializada em meio ambiente, patrimônio cultural e arqueologia para um futuro sustentável. Atuando com excelência em Joinville e Santa Catarina.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-primary transition duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-display">Navegação</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link href={link.to} className="hover:text-primary transition duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-display">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <span>Atendimento 100% Digital em toda Santa Catarina</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@sauriaambiental.com.br" className="hover:text-primary transition">contato@sauriaambiental.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+5547988693054" className="hover:text-primary transition">(47) 9 8869-3054</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-display">Sáuria Insights</h3>
            <p className="text-gray-400 mb-4">Receba novidades e informações sobre licenciamento ambiental.</p>
            <form className="flex">
              <input type="email" placeholder="Seu melhor e-mail" className="w-full px-4 py-2 rounded-l-md text-dark focus:outline-none" />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition">
                Assinar
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sáuria Consultoria Ambiental. Joinville/SC. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="/sobre" className="hover:text-primary transition">Sobre a Empresa</Link>
            <Link href="/servicos" className="hover:text-primary transition">Nossos Serviços</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;