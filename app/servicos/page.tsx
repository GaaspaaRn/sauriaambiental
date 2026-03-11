import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { Metadata } from 'next';
import { ChevronRight, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Catálogo de Serviços Ambientais | Sáuria Joinville',
  description: 'Conheça nossos serviços regulatórios: licenciamento ambiental, EIA/RIMA, inventário de fauna, flora, arqueologia e PRAD corporativo em SC.',
};

export default function Services() {
  return (
    <div className="bg-light pt-24 pb-12">
      {/* Hero - Brutalist Style */}
      <section className="container mx-auto px-6 mb-16 mt-12">
        <div className="bg-dark text-white border-l-8 border-primary p-12 relative overflow-hidden flex flex-col items-start justify-center min-h-[400px]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[200px] opacity-10"></div>
          <span className="text-primary font-mono text-xs uppercase tracking-[0.4em] font-bold block mb-4 border-b border-gray-700 pb-2 inline-block">Módulo Técnico</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-8 text-white leading-none">
            Catálogo de<br/> Conformidade.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
            Resoluções do CONAMA e instruções normativas do IBAMA/IMA decodificadas em soluções de engenharia ambiental de alto impacto.
          </p>
        </div>
      </section>

      {/* Services Grid - Strict Geometry */}
      <section className="container mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-dark pb-6">
          <h2 className="text-3xl font-black font-display text-dark uppercase tracking-tight">
            Especialidades Operacionais
          </h2>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
            <Filter size={16} /> Índice Geral ({servicesData.length})
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <Link 
              href={`/servicos/${service.slug}`}
              key={service.slug} 
              className="group bg-white border-2 border-dark p-8 flex hover:bg-dark hover:border-dark transition-all duration-300 shadow-[4px_4px_0px_#006400]"
            >
              <div className="mr-6 hidden sm:block">
                 <div className="w-16 h-16 bg-gray-100 flex items-center justify-center border border-gray-300 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <service.icon className="w-8 h-8 text-dark group-hover:text-white transition-colors" strokeWidth={1.5} />
                 </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">ID. {String(idx + 1).padStart(3, '0')}</span>
                    <service.icon className="w-6 h-6 text-dark group-hover:text-primary transition-colors sm:hidden" />
                  </div>
                  <h3 className="text-xl font-black font-display text-dark mb-4 uppercase tracking-wide leading-tight group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm mb-6 group-hover:text-gray-300 transition-colors line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="mt-auto border-t border-gray-200 group-hover:border-gray-800 pt-4 flex justify-between items-center transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest text-dark group-hover:text-primary transition-colors">
                    Analisar Escopo
                  </span>
                  <ChevronRight size={16} className="text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Brutalist Lead Gen Box */}
        <div className="mt-20 border-4 border-dark bg-primary p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-dark rounded-full mix-blend-multiply opacity-20 -translate-y-1/2 translate-x-1/4"></div>
            <h3 className="text-2xl md:text-4xl font-black font-display mb-6 text-white uppercase tracking-tighter max-w-3xl">
              Incerteza Regulatória afeta o Cronograma Financeiro da sua Obra?
            </h3>
            <p className="text-dark font-medium mb-10 max-w-2xl text-lg leading-relaxed">
              Evite paralisações por exigências técnicas não mapeadas. Realizamos análises de viabilidade robustas.
            </p>
            <Link href="/contato" className="inline-block bg-dark hover:bg-white text-white hover:text-dark font-black py-4 px-10 text-sm uppercase tracking-widest transition-colors shadow-xl">
              Solicitar Triagem Oficial
            </Link>
        </div>
      </section>
    </div>
  );
}
