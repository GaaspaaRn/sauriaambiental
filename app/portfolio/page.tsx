import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio de Projetos | Sáuria Consultoria Ambiental',
  description: 'Conheça nossos cases de sucesso em licenciamento ambiental, arqueologia, EIA/RIMA e PRAD elaborados para empresas em Santa Catarina.',
};

export default function Portfolio() {
  return (
    <div className="bg-light animate-fade-in-up">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Portfólio de Projetos</h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Resultados técnicos comprovados. Veja como resolvemos passivos ambientais e aprovamos licenciamentos complexos em Santa Catarina.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {portfolioData.map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-4">
                    <span className="bg-gray-100 text-gray-700 py-1 px-3 rounded-md">{project.clientSector}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold font-display text-dark mb-6">{project.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold uppercase text-gray-400 mb-2 tracking-wider">O Projeto</h3>
                      <p className="text-gray-700 leading-relaxed text-justify">{project.description}</p>
                    </div>
                    
                    <div className="p-5 bg-red-50 rounded-xl border border-red-100">
                      <h3 className="text-sm font-bold uppercase text-red-600 mb-2 tracking-wider">O Desafio</h3>
                      <p className="text-red-900 leading-relaxed text-sm">{project.challenge}</p>
                    </div>

                    <div className="p-5 bg-green-50 rounded-xl border border-green-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full -mr-8 -mt-8"></div>
                      <h3 className="text-sm font-bold uppercase text-primary mb-2 tracking-wider">A Solução Sáuria</h3>
                      <p className="text-gray-800 leading-relaxed text-sm">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-white p-12 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold font-display mb-4 text-dark">Seu projeto necessita de aprovação técnica?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Traga os desafios do seu empreendimento.ossa equipe fará a análise prévia de viabilidade de risco e indicará os estudos mais assertivos para rápida aprovação legal.
            </p>
            <Link href="/contato" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-xl transform hover:-translate-y-1">
              Agendar Reunião Técnica
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
