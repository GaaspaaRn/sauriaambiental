'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Leaf, Menu, X, ChevronDown } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/portfolio', label: 'Portfólio' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const baseLinkClasses = "px-4 py-2 text-gray-700 transition duration-300 font-medium";
  const desktopLinkClasses = "hover:text-primary";
  const mobileLinkClasses = "block text-left py-4 px-6 text-lg hover:bg-green-50";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-display text-primary">
            <Leaf className="w-8 h-8"/>
            <span>Sáuria Ambiental</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/" className={`${baseLinkClasses} ${desktopLinkClasses} ${pathname === '/' ? 'text-primary' : ''}`}>
              Home
            </Link>
            <Link href="/sobre" className={`${baseLinkClasses} ${desktopLinkClasses} ${pathname === '/sobre' ? 'text-primary' : ''}`}>
              Sobre
            </Link>
            
            {/* Mega Menu Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`${baseLinkClasses} ${desktopLinkClasses} flex items-center gap-1 ${pathname.startsWith('/servicos') ? 'text-primary' : ''}`}>
                Serviços <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Content */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-0 pt-2 w-[800px] transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100 grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="col-span-2 pb-2 border-b border-gray-100 flex justify-between items-center">
                    <span className="font-bold text-gray-800 font-display">Nossas Especialidades</span>
                    <Link href="/servicos" className="text-sm text-primary font-medium hover:underline">Ver Todos →</Link>
                  </div>
                  {servicesData.slice(0, 16).map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/servicos/${service.slug}`}
                      className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-green-50/50 transition-colors"
                    >
                      <div className="mt-1 p-2 rounded-md bg-green-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                        <service.icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 group-hover/item:text-primary transition-colors text-sm font-display relative top-[2px]">{service.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={`${baseLinkClasses} ${desktopLinkClasses} ${pathname === '/portfolio' ? 'text-primary' : ''}`}>
              Portfólio
            </Link>

            <Link href="/contato" className="ml-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full border-t border-gray-100 h-screen overflow-y-auto pb-32">
          <nav className="flex flex-col pt-2">
            <Link href="/" className={`${mobileLinkClasses} ${pathname === '/' ? 'bg-green-50 text-primary font-bold' : ''}`}>Home</Link>
            <Link href="/sobre" className={`${mobileLinkClasses} ${pathname === '/sobre' ? 'bg-green-50 text-primary font-bold' : ''}`}>Sobre a Sáuria</Link>
            
            <div className="bg-gray-50 py-2">
              <Link href="/servicos" className="block px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                Serviços Ambientais (Ver Todos)
              </Link>
              <div className="flex flex-col">
                {servicesData.map((service) => (
                  <Link 
                    key={service.slug} 
                    href={`/servicos/${service.slug}`}
                    className={`pl-10 pr-6 py-3 text-gray-700 hover:bg-green-100 transition-colors flex items-center gap-3 ${pathname === `/servicos/${service.slug}` ? 'text-primary font-bold bg-green-50' : ''}`}
                  >
                    <service.icon size={16} className="text-primary opacity-70" />
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" className={`${mobileLinkClasses} ${pathname === '/portfolio' ? 'bg-green-50 text-primary font-bold' : ''}`}>Portfólio de Projetos</Link>
            
            <div className="p-6">
              <Link href="/contato" className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-bold py-4 rounded-xl text-lg transition duration-300 shadow-lg">
                Falar com Consultor
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;