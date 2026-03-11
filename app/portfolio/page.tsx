import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { Metadata } from 'next';
import { ShieldAlert, Crosshair, CheckSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auditorias & Portfólio de Projetos | Sáuria Consultoria Ambiental',
  description: 'Conheça nossos cases de sucesso em licenciamento ambiental, arqueologia, EIA/RIMA e PRAD elaborados para empresas em Santa Catarina.',
};

export default function Portfolio() {
  return (
    <div className="bg-light pt-24 pb-12">
      {/* Header - Brutalist */}
      <section className="container mx-auto px-6 mb-24 mt-12">
        <div className="bg-white border-4 border-dark p-12 lg:p-24 relative overflow-hidden flex flex-col items-start justify-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-bold block mb-4 border-b-2 border-primary pb-2 inline-block">Repositório Técnico</span>
          <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-8 leading-[0.9] text-dark">
            Auditorias &<br/> Execuções.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed">
            Relatórios abertos sobre a viabilização de Passivos Ambientais, Licenciamentos Complexos (EIA/RIMA) e Resgates Arqueológicos em SC.
          </p>
        </div>
      </section>

      {/* Projects List - Technical Journal Style */}
      <section className="container mx-auto px-6 pb-20">
        <div className="space-y-12">
          {portfolioData.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white border-2 border-dark hover:border-primary transition-colors flex flex-col lg:flex-row shadow-[8px_8px_0px_#343a40]"
            >
              {/* Image Side - Strictly geometric */}
              <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-dark">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-0 left-0 bg-dark text-white text-xs font-mono uppercase tracking-widest py-2 px-4 shadow-lg border-b-2 border-r-2 border-dark">
                  Id: {index + 101} / {project.category}
                </div>
              </div>

              {/* Content Side - Sharp typography */}
              <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
                  <span className="bg-gray-100 text-dark py-1 px-3 border border-dark">{project.clientSector}</span>
                  <span className="text-primary font-bold">{project.location}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black font-display text-dark mb-8 leading-tight uppercase tracking-tight">
                  {project.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Context */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase text-dark tracking-widest flex items-center gap-2 border-b border-gray-200 pb-2">
                       Contexto Base
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-light text-justify">
                       {project.description}
                    </p>
                  </div>
                  
                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 border-l-4 border-red-500">
                      <h3 className="text-xs font-black uppercase text-red-600 tracking-widest mb-3 flex items-center gap-2">
                         <ShieldAlert className="w-4 h-4" /> Hard Block (Risco)
                      </h3>
                      <p className="text-dark leading-relaxed text-xs">
                         {project.challenge}
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 border-l-4 border-primary">
                      <h3 className="text-xs font-black uppercase text-primary tracking-widest mb-3 flex items-center gap-2">
                         <CheckSquare className="w-4 h-4" /> Validação Sáuria
                      </h3>
                      <p className="text-dark leading-relaxed text-xs">
                         {project.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brutalist Lead Gen CTA */}
        <div className="mt-32 text-center bg-dark p-16 relative overflow-hidden border-t-8 border-primary">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[80px]"></div>
          <Crosshair className="w-16 h-16 text-primary mx-auto mb-8" strokeWidth={1.5} />
          <h3 className="text-3xl md:text-5xl font-black font-display mb-6 text-white uppercase tracking-tighter">
            Avaliação Documental Cautelar
          </h3>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Não submeta seu projeto ao órgão ambiental sem uma validação de risco prévia. Agende uma reunião técnica com nossa diretoria.
          </p>
          <Link href="/contato" className="inline-block bg-primary hover:bg-white text-dark hover:text-dark font-black py-5 px-12 text-sm uppercase tracking-[0.2em] transition-colors border-2 border-primary hover:border-white shadow-[8px_8px_0px_#111]">
            Solicitar Auditoria Base
          </Link>
        </div>
      </section>
    </div>
  );
}
