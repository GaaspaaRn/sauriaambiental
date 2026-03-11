'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Leaf, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

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

  const baseLinkClasses = "px-4 py-2 text-dark font-bold uppercase tracking-widest text-sm transition-colors";
  const desktopLinkClasses = "hover:text-primary";
  const mobileLinkClasses = "block text-left py-4 px-6 text-lg tracking-wider hover:bg-gray-100 uppercase font-bold";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white border-gray-200 shadow-sm py-2' : 'bg-white/95 backdrop-blur-md border-gray-100 py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-2xl font-black font-display text-dark uppercase tracking-tighter hover:text-primary transition-colors">
            <Leaf className="w-8 h-8 text-primary"/>
            <span className="mt-1">Sáuria.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className={`${baseLinkClasses} ${desktopLinkClasses} ${pathname === '/' ? 'text-primary' : ''}`}>
              Início
            </Link>
            <Link href="/sobre" className={`${baseLinkClasses} ${desktopLinkClasses} ${pathname === '/sobre' ? 'text-primary' : ''}`}>
              Dossiê
            </Link>
            
            {/* Mega Menu Dropdown */}
            <div 
              className="relative group h-full py-4 -my-4 flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`${baseLinkClasses} ${desktopLinkClasses} flex items-center gap-1 ${pathname.startsWith('/servicos') ? 'text-primary' : ''}`}>
                Escopo Técnico <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Content - Sharp Brutalist Box */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[800px] transition-all duration-300 origin-top ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-4 border-primary p-8 grid grid-cols-2 gap-x-12 gap-y-6">
                  <div className="col-span-2 pb-4 border-b-2 border-dark flex justify-between items-end">
                    <span className="font-black text-dark text-xl uppercase tracking-widest">Matriz Especialista</span>
                    <Link href="/servicos" className="text-sm text-primary font-bold uppercase tracking-wider hover:text-dark flex items-center gap-1">Ver Índice Completo <ArrowRight className="w-4 h-4"/></Link>
                  </div>
                  {servicesData.slice(0, 10).map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/servicos/${service.slug}`}
                      className="group/item flex items-start gap-4 hover:-translate-y-1 transition-transform"
                    >
                      <div className="mt-1 text-gray-400 group-hover/item:text-primary transition-colors">
                        <service.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-bold text-dark group-hover/item:text-primary transition-colors text-sm uppercase tracking-wide leading-tight">{service.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={`${baseLinkClasses} ${desktopLinkClasses} ${pathname === '/portfolio' ? 'text-primary' : ''}`}>
              Auditorias
            </Link>

            <Link href="/contato" className="ml-6 bg-dark hover:bg-primary text-white font-bold py-3 px-8 text-sm uppercase tracking-widest transition-colors border border-dark hover:border-primary">
              Contato Direto
            </Link>
          </nav>
          
          {/* Mobile Menu Button - Sharp Look */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark bg-gray-100 focus:outline-none p-3 hover:bg-primary hover:text-white transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Reduced Cognitive Load */}
      {isOpen && (
        <div className="md:hidden bg-light shadow-2xl absolute top-full left-0 w-full border-b-[8px] border-primary h-screen overflow-y-auto pb-32">
          <nav className="flex flex-col pt-4">
            <Link href="/" className={`${mobileLinkClasses} ${pathname === '/' ? 'text-primary' : 'text-dark'}`}>Home</Link>
            <Link href="/sobre" className={`${mobileLinkClasses} ${pathname === '/sobre' ? 'text-primary' : 'text-dark'}`}>O Dossiê</Link>
            
            <div className="bg-white border-y border-gray-200 py-4 my-2">
              <span className="block px-6 font-black text-gray-400 text-xs uppercase tracking-[0.2em] mb-4">
                Principais Serviços
              </span>
              <div className="flex flex-col gap-2 px-4">
                {servicesData.slice(0, 5).map((service) => (
                  <Link 
                    key={service.slug} 
                    href={`/servicos/${service.slug}`}
                    className={`pl-6 pr-4 py-3 bg-gray-50 border-l-4 hover:border-primary transition-colors flex items-center gap-3 ${pathname === `/servicos/${service.slug}` ? 'border-primary text-primary font-bold' : 'border-transparent text-gray-600'}`}
                  >
                    <service.icon size={18} className="opacity-50" />
                    <span className="text-sm font-bold uppercase tracking-wide">{service.title}</span>
                  </Link>
                ))}
                <Link href="/servicos" className="mt-4 px-6 py-4 bg-dark text-white text-center font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  Acessar Catálogo Completo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <Link href="/portfolio" className={`${mobileLinkClasses} ${pathname === '/portfolio' ? 'text-primary' : 'text-dark'}`}>Auditorias</Link>
            
            <div className="p-6 mt-8">
              <Link href="/contato" className="block w-full bg-primary text-white text-center font-bold py-5 text-sm uppercase tracking-widest transition-colors">
                Iniciar Diagnóstico
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;