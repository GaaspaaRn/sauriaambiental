import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços Ambientais | Sáuria Consultoria Ambiental',
  description: 'Conheça nossos serviços de licenciamento ambiental, EIA/RIMA, inventário de fauna, flora, arqueologia e PRAD em Joinville e SC.',
};

export default function Services() {
  return (
    <div className="bg-light animate-fade-in-up">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
             <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Catálogo de Serviços Ambientais</h1>
             <p className="text-lg text-gray-100 mt-4 max-w-3xl mx-auto font-light">
               Soluções integradas e aprovação técnica para os desafios ambientais do seu negócio, cobrindo exigências do IMA, IBAMA e IPHAN.
             </p>
         </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display text-dark">Nossas Especialidades Técnicas</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Nossa equipe multidisciplinar elabora todos os laudos, relatórios e projetos exigidos para a regularidade da sua obra.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <Link 
              href={`/servicos/${service.slug}`}
              key={service.slug} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-green-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-green-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                {service.shortDescription}
              </p>
              <div className="mt-auto text-primary font-bold text-sm flex items-center group-hover:underline">
                Saber Mais <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center bg-dark text-white p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold font-display mb-4 text-green-400">Não sabe qual estudo você precisa?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              O arcabouço legal ambiental brasileiro é complexo. Envie o perfil do seu empreendimento e nossa equipe em Joinville realizará a triagem de termo de referência oficial para o seu setor.
            </p>
            <Link href="/contato" className="inline-block bg-primary hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-xl">
              Solicitar Avaliação Gratuita
            </Link>
        </div>
      </div>
    </div>
  );
}
