import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import { Metadata } from 'next';
import { CheckCircle2, ShieldCheck, FileCheck2, Building2 } from 'lucide-react';
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
    title: `${service.title} em Joinville | Sáuria Consultoria Ambiental`,
    description: `Precisando de ${service.title}? Atendemos em Santa Catarina com agilidade, expertise técnica e conformidade legal nos órgãos ambientais.`,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug);
  
  if (!service) return notFound();

  // Dynamic Content Generators based on the service data.
  const isHighImpact = ['eia-rima', 'eiv', 'licenciamento-ambiental'].includes(service.slug);
  const isFaunaFlora = ['inventario-de-fauna', 'inventario-florestal', 'sinaflor', 'emissao-de-dof'].includes(service.slug);
  
  const applicableSectors = isHighImpact 
      ? ['Indústrias de Alta Complexidade', 'Usinas de Energia Renováveis', 'Macro Loteamentos Residenciais', 'Obras de Infraestrutura Rodoviária', 'Complexos Logísticos']
      : isFaunaFlora
      ? ['Desmatamentos e Supressão Vegetal', 'Implantação de Parques Energéticos', 'Agronegócio e Áreas de Reflorestamento', 'Obras Públicas', 'Condomínios em Áreas Nativas']
      : ['Indústrias de Transformação', 'Construtoras Civis', 'Comércio de Grande Porte', 'Postos de Combustíveis', 'Setor Agrícola', 'Loteadoras'];

  return (
    <div className="bg-white animate-fade-in-up">
      {/* SEO Optimized Hero Component */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-green-400 mb-6 font-bold uppercase tracking-widest text-sm">
                <service.icon size={20} /> Experiência Técnica Sáuria
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              {service.title} em Joinville e Santa Catarina
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
              {service.shortDescription} Elaboramos todos os estudos técnicos e análises de viabilidade com nossa equipe multidisciplinar especializada para garantir a sua aprovação.
            </p>
          </div>
        </div>
      </section>

      {/* Main Structural Content (Rich SEO Content 800+ Words logic structured via rich paragraphs) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              
              {/* Sec 1: O Que é */}
              <article>
                <div className="flex items-center gap-3 mb-6">
                   <div className="bg-green-50 p-3 rounded-xl"><FileCheck2 className="text-primary w-6 h-6" /></div>
                   <h2 className="text-3xl font-bold font-display text-dark">O que é o {service.title} e sua Importância</h2>
                </div>
                <div className="prose prose-lg text-gray-700 leading-relaxed text-justify max-w-none">
                  <p>
                    O(a) <strong>{service.title}</strong> é uma etapa técnica obrigatória, regida pelo processo de análise de órgãos de controle e proteção do meio ambiente, cujo objetivo primordial é atestar o alinhamento das atividades industriais e da construção civil em face à legislação brasileira. Operações produtivas causam alterações inevitáveis; este serviço garante que as intervenções ocorram com total mitigação, protegendo os bens imateriais, a biodiversidade da Mata Atlântica e a organização socioespacial urbana.
                  </p>
                  <p>
                    Trata-se de um arcabouço metodológico avançado que inclui relatórios em campo, processamento analítico com softwares de ponta em geoprocessamento, preenchimento das exigências operacionais nos sistemas oficiais e a consolidação de relatórios técnicos robustos para auditoria governamental e fiscal.
                  </p>
                </div>
              </article>

              {/* Sec 2: Quando é Necessário */}
              <article>
                <div className="flex items-center gap-3 mb-6">
                   <div className="bg-red-50 p-3 rounded-xl"><ShieldCheck className="text-red-500 w-6 h-6" /></div>
                   <h2 className="text-3xl font-bold font-display text-dark">Quando este estudo técnico é exigido legalmente?</h2>
                </div>
                <div className="prose prose-lg text-gray-700 leading-relaxed text-justify max-w-none">
                  <p>
                    A elaboração do {service.title} torna-se indispensável em transições cruciais do seu negócio, como: <strong>concepção inicial</strong> para avaliação de viabilidade do terreno, <strong>expansão de área construída ou fabril</strong> que configure aumento da capacidade poluidora, e durante os processos de renovação de licenças de operação (LO).
                  </p>
                  <p>
                    Ignorar a necessidade desse trâmite resulta em notificações de órgãos como o <strong>Instituto do Meio Ambiente (IMA)</strong> de Santa Catarina, <strong>Polícia Militar Ambiental</strong> e Secretarias Municipais. Além da infração aplicável em pecúnia (multas altíssimas), a falta do laudo sujeita a empresa a embargos da obra, bloqueio de recursos financeiros e responsabilização pessoal dos diretores por crimes ambientais, conforme a Lei 9.605/98.
                  </p>
                </div>
              </article>

              {/* Sec 3: Como funciona o processo */}
              <article>
                <h2 className="text-3xl font-bold font-display text-dark mb-8">Etapas Executivas: Como nosso time conduz o processo</h2>
                <div className="space-y-6">
                  {[
                    { title: "Diagnóstico e Viabilidade", desc: "Varredura inicial nos Planos Diretores Municipais, zoneamentos e legislações vigentes. Emissão da viabilidade locacional sem sobressaltos jurídicos." },
                    { title: "Elaboração Multidisciplinar Própria", desc: `Utilização de engenheiros, biólogos, e analistas cartográficos da nossa equipe para coleta de dados primários e modelagem preditiva de impactos voltada exclusivamente para o(a) ${service.title}.` },
                    { title: "Protocolo e Transparência de Dados", desc: "Abertura dos processos diretamente nas plataformas digitais dos órgãos, entregando os estudos acompanhados das Anotações de Responsabilidade Técnica (ARTs)." },
                    { title: "Acompanhamento no Órgão Emissor", desc: "Interface diária com os analistas técnicos do governo para defesa de teses, ajustes do plano mitigatório e agilidade histórica no deferimento da portaria." },
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                       <div className="bg-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                         {idx + 1}
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                         <p className="text-gray-600">{step.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Sec 4: Por que a Sauria */}
              <article className="bg-green-50 p-10 rounded-3xl border border-green-100">
                <h2 className="text-3xl font-bold font-display text-primary mb-6">Por que escolher a Sáuria Consultoria?</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  Diferente de escritórios genéricos que terceirizam a execução das campanhas de campo para o {service.title}, a Sáuria possui equipe multidisciplinar alocada em nossa sede em <strong>Joinville - Região Norte de Santa Catarina</strong>, garantindo atuação orgânica nos vetores industriais, litorâneos e de serra.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Especialistas no IMA / IBAMA',
                    'Acompanhamento de TAC',
                    'Engenharia Preventiva',
                    'Zero Terceirização Técnica',
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-bold bg-white p-4 rounded-xl shadow-sm">
                      <CheckCircle2 className="text-primary w-5 h-5" /> {benefit}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Target Audience Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                    <Building2 className="text-primary w-8 h-8"/>
                    <h3 className="text-xl font-bold font-display text-dark">Para quem destinamos este serviço?</h3>
                  </div>
                  <ul className="space-y-4">
                    {applicableSectors.map((sector, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-gray-600">
                         <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                         <span className="font-medium text-sm leading-tight">{sector}</span>
                       </li>
                    ))}
                  </ul>
                </div>

                {/* Conversion CTA Card */}
                <div className="bg-dark rounded-3xl p-8 shadow-2xl text-white text-center">
                   <h3 className="text-2xl font-bold mb-4">Atrase seu Concorrente, não a sua Obra.</h3>
                   <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                     Processos de licenciamento em Santa Catarina demoram meses caso haja pendências técnicas nos anexos. Solicite o termo de referência detalhado da Sáuria e emita a portaria o mais rápido possível.
                   </p>
                   <Link href="/contato" className="block w-full bg-primary hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300 shadow-md">
                     Falar com Especialista Agora
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
