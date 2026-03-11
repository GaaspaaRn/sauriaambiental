import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import { Metadata } from 'next';
import { CheckSquare, ShieldAlert, FileCheck2, Building2 } from 'lucide-react';
import Link from 'next/link';

// Static Params for Full SSG output
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData.find(s => s.slug === params.slug);
  if (!service) return { title: 'Serviço Não Encontrado' };

  return {
    title: `${service.title} em SC | Escopo Técnico Sáuria Ambiental`,
    description: `Memorial descritivo e viabilidade técnica para ${service.title}. Aprovamos empreendimentos complexos no IMA/SC (Joinville e região).`,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug);
  
  if (!service) return notFound();

  // Dynamic Content Generators based on the service data.
  const isHighImpact = ['eia-rima', 'eiv', 'licenciamento-ambiental'].includes(service.slug);
  const isFaunaFlora = ['inventario-de-fauna', 'inventario-florestal', 'sinaflor', 'emissao-de-dof'].includes(service.slug);
  
  const applicableSectors = isHighImpact 
      ? ['Instalações Industriais de Classe Avançada', 'Complexos Loteadores', 'Usinas e Linhas de Transmissão', 'Obras de Infraestrutura Modal']
      : isFaunaFlora
      ? ['Supressão de Massa Vegetal Nativa', 'Corredores Ecológicos', 'Atividades Agrícolas Extensivas', 'Obras Várias Governamentais']
      : ['Manufatura Leve e Pesada', 'Postos de Combustíveis e Revendas', 'Comércio Supermercadista', 'Clínicas e Hospitais'];

  // GEO Schema Injection: Article + FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": `${service.title} em Santa Catarina`,
        "description": service.shortDescription,
        "author": {
          "@type": "Organization",
          "name": "Diretoria Técnica Sáuria Ambiental"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sáuria Consultoria Ambiental",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sauriaconsultoria.com.br/logo.png"
          }
        },
        "datePublished": "2024-01-01T08:00:00+08:00",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `O que é ${service.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Procedimento administrativo obrigatório para mitigar os impactos de atividades industriais e da construção civil perante os órgãos de controle, como o IMA e IBAMA.`
            }
          },
          {
            "@type": "Question",
            "name": `A Sáuria emite ART para este serviço?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. A Sáuria Consultoria Ambiental fornece toda a estrutura documental balizada pela emissão de Anotação de Responsabilidade Técnica (ART) por sua equipe própria."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Component - Brutalist Tech */}
      <section className="bg-dark text-white pt-32 pb-20 relative border-b-8 border-primary">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 bg-cover bg-center mix-blend-screen grayscale"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary mb-8 font-mono uppercase tracking-[0.3em] text-xs font-bold border-l-2 border-primary pl-4">
                <service.icon size={16} /> Documento Operacional Padrão
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display mb-8 uppercase tracking-tighter leading-[0.9]">
              {service.title}.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Sharp Layout */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-20">
              
              {/* Sec 1: Definição Técnica */}
              <article>
                <div className="border-l-4 border-dark pl-6 mb-8">
                   <h2 className="text-3xl font-black font-display text-dark uppercase tracking-wide">Escopo e Base Legal</h2>
                </div>
                <div className="prose prose-lg text-gray-700 font-light text-justify max-w-none">
                  <p className="lead text-xl text-dark font-medium mb-6" dangerouslySetInnerHTML={{ __html: service.content?.whatIs || '' }} />
                </div>
              </article>

              {/* Sec 2: Gatilho Penal */}
              <article className="bg-white border-2 border-red-900 p-10 relative">
                <div className="absolute top-0 right-0 bg-red-900 text-white font-mono text-xs uppercase tracking-widest px-4 py-1">Aviso de Risco Legal</div>
                <h2 className="text-2xl font-black font-display text-red-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                  <ShieldAlert className="w-8 h-8" /> Exigibilidade e Infrações
                </h2>
                <div className="text-red-950 font-light leading-relaxed text-justify space-y-4">
                  <p dangerouslySetInnerHTML={{ __html: service.content?.whenNeeded || '' }} />
                </div>
              </article>

              {/* Sec 3: Metodologia de Execução */}
              <article>
                 <h2 className="text-3xl font-black font-display text-dark mb-10 uppercase tracking-wide border-b-2 border-dark pb-4">
                   Deployment do Processo
                 </h2>
                <div className="space-y-4">
                  {(service.content?.steps || []).map((step, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-6 p-8 bg-white border border-gray-200 hover:border-dark transition-colors">
                       <div className="font-mono text-4xl text-gray-200 font-bold leading-none">
                         {String(idx + 1).padStart(2, '0')}
                       </div>
                       <div>
                         <h3 className="text-lg font-black text-dark uppercase tracking-widest mb-2">{step.title}</h3>
                         <p className="text-gray-600 font-light text-sm">{step.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </article>

            </div>

            {/* Sticky Sidebar - High Conversion Tech Spec */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Specs Box */}
                <div className="bg-white border-2 border-dark p-8 shadow-[8px_8px_0px_#111]">
                  <div className="flex items-center gap-3 mb-8 border-b border-dark pb-4">
                    <Building2 className="text-dark w-8 h-8"/>
                    <h3 className="text-lg font-black text-dark uppercase tracking-tight">Perfis de Aplicação</h3>
                  </div>
                  <ul className="space-y-3 font-mono text-xs uppercase tracking-wide text-gray-600">
                    {applicableSectors.map((sector, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <span className="text-primary mt-0.5">■</span>
                         <span className="leading-tight">{sector}</span>
                       </li>
                    ))}
                  </ul>
                </div>

                {/* Hard CTA */}
                <div className="bg-primary p-8 border-4 border-dark text-white">
                   <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">O Relógio da Obra não Espera.</h3>
                   <p className="text-dark font-medium text-sm mb-8 leading-relaxed">
                     Cada semana sem homologação corrói sua margem de lucro operacional. Convoque nossa diretoria para estabelecer o roteiro da legalização hoje.
                   </p>
                   <Link href="/contato" className="block w-full bg-dark hover:bg-white text-white hover:text-dark border-2 border-dark text-center font-black py-4 text-xs uppercase tracking-widest transition-colors shadow-lg">
                     Reunião Tática Imediata
                   </Link>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
