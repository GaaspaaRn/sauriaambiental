import React from 'react';
import { ShieldCheck, Lightbulb, Users, FileCheck2, MapPin, GraduationCap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Dossiê: Autoridade e Capacidade | Sáuria Joinville',
  description: 'Conheça o corpo técnico da Sáuria Consultoria Ambiental. Especialistas em Engenharia Ambiental, EIA/RIMA, fauna, flora e arqueologia em SC.',
};

export default function About() {
  
  // E-E-A-T Schema Injection (Organization / AboutPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Sáuria Consultoria Ambiental",
        "url": "https://sauriaconsultoria.com.br",
        "logo": "https://sauriaconsultoria.com.br/logo.png",
        "foundingDate": "2010-01-01",
        "founders": [
          {
            "@type": "Person",
            "name": "Corpo de Engenharia Diretiva"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Joinville",
          "addressRegion": "SC",
          "addressCountry": "BR"
        }
      },
      {
        "@type": "AboutPage",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sauriaconsultoria.com.br/sobre"
        },
        "author": {
          "@type": "Organization",
          "name": "Equipe Técnica Multidisciplinar Sáuria"
        },
        "dateModified": new Date().toISOString()
      }
    ]
  };

  return (
    <div className="bg-light pt-24 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Dossiê - Brutalist Block */}
      <section className="container mx-auto px-6 mb-24 mt-12">
        <div className="bg-dark text-white border-l-8 border-primary p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale saturate-0"></div>
          <div className="relative z-10 max-w-2xl">
            <span className="text-primary font-mono text-sm uppercase tracking-[0.3em] font-bold block mb-4">Registro Público</span>
            <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-8 leading-none">
              O Dossiê<br/> <span className="text-gray-400">Técnico.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light border-l border-gray-600 pl-6 leading-relaxed">
              Engenharia, biologia e inteligência geográfica a serviço da aprovação de empreendimentos complexos em Santa Catarina.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric History/Competence (Overlapping Layers, breaking 50/50 safe harbor) */}
      <section className="container mx-auto px-6 pb-32">
        <div className="relative">
          {/* Main Text Block */}
          <div className="bg-white border-4 border-dark p-10 md:p-16 lg:w-2/3 relative z-10 lg:translate-x-12">
            <h2 className="text-3xl md:text-5xl font-black font-display text-dark mb-10 uppercase tracking-tight">Estatuto de<br/> Conformidade Legal</h2>
            
            <div className="space-y-6 text-lg text-gray-700 font-light text-justify leading-relaxed">
              <p>
                Sediada estrategicamente em <strong>Joinville - Santa Catarina</strong>, a Sáuria atua preventivamente para evitar embargos, suspensões ou multas do IMA e IBAMA. Nascemos da necessidade da indústria civil e do agronegócio por um licenciamento que fosse célere, porém com fundamentação metodológica inquestionável.
              </p>
              <p>
                A nossa assinatura técnica garante que o <em>EIA/RIMA</em> civil ou a emissão de <em>LP/LI/LO</em> não sejam obstáculos, mas atestados de blindagem jurídica perante fiscalizações do Ministério Público.
              </p>
              <div className="mt-10 p-6 bg-dark text-white border-l-4 border-primary">
                 <div className="flex items-start gap-4">
                   <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                   <p className="font-mono text-sm leading-relaxed text-gray-300">
                     O rigor não é opcional. Assinamos ARTs para projetos que demandam alta complexidade técnica e capacidade operacional.
                   </p>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Overlapping Image Block */}
          <div className="hidden lg:block absolute top-24 right-0 w-5/12 h-[110%] z-0 border border-gray-200 bg-gray-100 pb-10 pr-10">
            <img 
              src="https://images.pexels.com/photos/7745564/pexels-photo-7745564.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Mesa técnica com plantas e estudo ambiental Sáuria" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl translate-x-10 translate-y-10" 
            />
          </div>
        </div>
      </section>
      
      {/* Competence Matrix - Grid 3 cols brutalist */}
      <section className="bg-gray-100 py-32 border-t border-gray-300">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-display text-dark uppercase tracking-tighter">Matriz de Excelência</h2>
            <div className="w-24 h-2 bg-primary mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-dark bg-dark">
            
            {/* Cell 1 */}
            <div className="p-12 bg-white border-b md:border-b-0 md:border-r border-gray-300 hover:bg-gray-50 transition-colors group">
              <GraduationCap className="w-12 h-12 text-dark mb-8 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="text-2xl font-black font-display mb-4 text-dark uppercase tracking-wide leading-tight">Carga Técnica Multidisciplinar</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Biologia de conservação, Arqueologia resguardada e Engenharia mapeada. Absorvemos a responsabilidade do início ao fim, sem subcontratações paralelas que fragmentam o risco.
              </p>
            </div>
            
            {/* Cell 2 */}
            <div className="p-12 bg-white border-b md:border-b-0 md:border-r border-gray-300 hover:bg-gray-50 transition-colors group">
              <FileCheck2 className="w-12 h-12 text-dark mb-8 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="text-2xl font-black font-display mb-4 text-dark uppercase tracking-wide leading-tight">Rigor Normativo Conama</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Nossos memoriais descritivos, RAPs e estudos populacionais são formatados com base estrita nos regulamentos ativos do IMA/SC, eliminando retrabalhos documentais.
              </p>
            </div>
            
            {/* Cell 3 */}
            <div className="p-12 bg-white hover:bg-gray-50 transition-colors group">
              <Lightbulb className="w-12 h-12 text-dark mb-8 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="text-2xl font-black font-display mb-4 text-dark uppercase tracking-wide leading-tight">Topografia Sistemática</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Ferramentas de Sistemas de Informação Geográfica (SIG) atestam os polígonos de supressão e APPs com margem de erro milimétrica, parametrizando o cadastro oficial.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
