import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { Award, Target, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section - SEO Optimized */}
      <section 
        className="relative h-[80vh] min-h-[550px] flex items-center justify-center text-white text-center bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto mt-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/80 text-sm font-semibold tracking-wider mb-4 border border-white/20">
            ESPECIALISTAS EM MEIO AMBIENTE
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight leading-tight">
            Consultoria Ambiental em Joinville e Santa Catarina
          </h1>
          <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto text-gray-200">
            Aprovamos seu licenciamento ambiental com agilidade técnica, segurança jurídica e estratégias para construtoras, indústrias e loteadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-xl transform hover:-translate-y-1">
              Falar com um Consultor
            </Link>
            <Link href="/servicos" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Authority Section (SEO Content) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold font-display text-dark mb-6">
                 Agilidade e Segurança no Licenciamento Ambiental
               </h2>
               <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                 Para empreendimentos em Santa Catarina, atrasos no licenciamento significam perda de dinheiro. A Sáuria atua diretamente com os órgãos ambientais (IMA, IBAMA, IPHAN) elaborando <strong>Estudos de Impacto (EIA/RIMA)</strong>, <strong>EIV</strong> e o <strong>licenciamento ambiental para a indústria</strong> com rigor técnico.
               </p>
               <ul className="space-y-3 mb-8">
                 {[
                   'Aprovação Rápida de Projetos Imobiliários e Industriais',
                   'Conformidade Legal com Órgãos Ambientais de SC',
                   'Prevenção de Multas e Passivos Ambientais',
                   'Equipe Multidisciplinar (Biólogos, Engenheiros e Arqueólogos)'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                     <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="md:w-1/2">
               <img 
                 src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Equipe técnica da Sáuria discutindo plano de gestão de resíduos" 
                 className="rounded-2xl shadow-xl border border-gray-100"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-dark">Soluções Ambientais</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Seja para obter a sua Licença Prévia ou realizar o resgate de fauna, nós temos o estudo ambiental ideal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-green-100 group">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-green-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-gray-800 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed h-20">{service.shortDescription}</p>
                <Link href={`/servicos/${service.slug}`} className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors duration-300">
                  Ver Detalhes do Serviço <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/servicos" className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-primary hover:text-white transition duration-300">
              Visualizar Todos os {servicesData.length} Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Regional Content Section */}
      <section className="py-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold font-display mb-4 text-green-400">Joinville e Região Sul</h2>
              <p className="text-gray-300 leading-relaxed">
                Nossa matriz em Joinville - Santa Catarina permite atendimento logístico rápido a obras de infraestrutura, agronegócio e loteamentos no sul do Brasil. Conhecemos a fundo as legislações locais do IMA/SC.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Target className="text-green-400 w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Visão Estratégica</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Não somos apenas executores. Mapeamos os riscos ambientais para garantir que sua obra não seja paralisada por embargo.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Users className="text-green-400 w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Consultoria Especializada</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Uma equipe multidisciplinar com biólogos, engenheiros, geógrafos e arqueólogos, garantindo que nenhum estudo de conformidade ambiental seja terceirizado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-gray-800">Resultados Técnicos Comprovados</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed text-balance">
            Do resgate de fauna em indústrias ao licenciamento de complexos eólicos, nosso portfólio demonstra a capacidade de aprovação nos órgãos mais rigorosos do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/portfolio" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-xl transform hover:scale-105">
               Analisar Projetos (Case Studies)
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
