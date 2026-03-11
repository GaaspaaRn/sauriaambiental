import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { ArrowRight, Globe, Shield, Activity, Code } from 'lucide-react';

export default function Home() {
  const featuredServices = servicesData.slice(0, 6);

  // GEO & AEO Schema Injection
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sáuria Consultoria Ambiental",
        "image": "https://sauriaconsultoria.com.br/logo.png",
        "@id": "https://sauriaconsultoria.com.br",
        "url": "https://sauriaconsultoria.com.br",
        "telephone": "+554700000000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Exemplo, 123",
          "addressLocality": "Joinville",
          "addressRegion": "SC",
          "postalCode": "89200-000",
          "addressCountry": "BR"
        },
        "description": "Consultoria Ambiental, Cultural e Arqueológica em Joinville/SC especializada em licenciamento de alta complexidade."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é Licenciamento Ambiental?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "É o procedimento administrativo pelo qual o órgão ambiental competente licencia a localização, instalação, ampliação e a operação de empreendimentos e atividades utilizadoras de recursos ambientais."
            }
          },
          {
            "@type": "Question",
            "name": "Atendem apenas Joinville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. A Sáuria atua em Joinville e em toda a região do estado de Santa Catarina, atendendo indústrias, loteamentos e infraestrutura."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-light relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Radical Asymmetry & Brutalism */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 z-20">
              <div className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] py-2 px-4 mb-8 border-l-4 border-dark">
                SC • Engenharia & Arqueologia
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-dark tracking-tighter leading-[0.9] mb-8 uppercase">
                Aprovação <br/>
                <span className="text-primary block mt-2">Ambiental</span>
                <span className="text-gray-300">Acelerada.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed mb-12 border-l-2 border-gray-200 pl-6">
                Consultoria de alta performance em <strong>Joinville e Santa Catarina</strong>. Destravamos empreendimentos complexos através de rigor técnico e inteligência regulatória junto ao IMA, IBAMA e IPHAN.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contato" className="group bg-dark hover:bg-black text-white px-8 py-5 text-lg font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-between border border-dark">
                  Falar com Engenheiro
                  <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/servicos" className="group bg-white hover:bg-gray-50 text-dark px-8 py-5 text-lg font-bold uppercase tracking-wide transition-all border border-gray-300 flex items-center justify-between">
                  Escopo Técnico
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 relative hidden lg:block h-full">
              <div className="absolute inset-0 bg-primary translate-x-8 translate-y-8 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&q=80&w=1200"
                alt="Sauria Ambiental - Consultoria Especializada" 
                className="relative z-10 object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute bottom-10 -left-24 z-30 bg-white p-6 border-l-4 border-primary shadow-2xl">
                 <div className="text-4xl font-black text-dark tracking-tighter">15+</div>
                 <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Anos de Validação</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Manifesto / Authority - Typographic Focus, No Bento Grids */}
      <section className="py-32 bg-dark text-white border-t-8 border-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6 font-mono uppercase tracking-widest">
              [ O Dossiê Sáuria ]
            </h2>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-16 text-gray-300">
              Licenciamento não é despachante. É <strong className="text-white font-bold block mt-2">Engenharia de Risco.</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16 border-t border-gray-800 pt-16 mt-8">
            <div>
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Blindagem Jurídica</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Estudos de Impacto (EIA/RIMA) blindados contra contestações do Ministério Público. Fundamentação científica irrefutável.
              </p>
            </div>
            <div>
              <Activity className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Diligência Tática</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Aprovação de loteamentos, EIVs e licenciamento industrial no IMA de Santa Catarina sem vai_e_vem burocrático.
              </p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Gestão Plena</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                De inventários de fauna a resgates arqueológicos, absorvemos a totalidade do plano de controle ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hub - Sharp Geometric Layout */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-gray-200 pb-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-display text-dark uppercase tracking-tighter">
                Matriz de<br/>
                <span className="text-primary leading-[0.8] inline-block mt-2">Serviços</span>
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
               <Link href="/servicos" className="text-lg font-bold border-b-2 border-dark pb-1 hover:text-primary hover:border-primary transition-colors uppercase tracking-wider">
                 Catálogo Técnico Completo ↘
               </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <div key={service.id} className="group bg-white border border-gray-200 p-10 hover:border-primary transition-all duration-300 flex flex-col justify-between h-[380px] hover:shadow-2xl">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    <span className="text-gray-300 font-mono text-sm leading-none">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-4 text-balance">
                    {service.shortDescription}
                  </p>
                </div>
                <Link href={`/servicos/${service.slug}`} className="mt-auto mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-dark group-hover:text-primary transition-colors">
                  Acessar Documentação <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Portfolio CTA - Monochromatic */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl border-4 border-dark p-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8">
            <Code className="w-12 h-12 text-dark" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-dark mb-8 tracking-tighter mt-4">
            Auditoria & Casos
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light text-balance leading-relaxed">
            Consulte nossos memoriais técnicos. Projetos industriais, energia renovável e resgate do patrimônio validados por órgãos reguladores.
          </p>
          <div className="flex justify-center">
             <Link href="/portfolio" className="bg-primary hover:bg-dark text-white px-10 py-5 font-bold uppercase tracking-widest transition-all text-sm">
               Analisar Repositório
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
