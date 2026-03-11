import React from 'react';
import { ShieldCheck, Lightbulb, Users, FileCheck2, MapPin, GraduationCap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a Empresa | Sáuria Consultoria Ambiental em Joinville',
  description: 'Conheça a Sáuria Consultoria Ambiental. Equipe multidisciplinar especializada em licenciamento ambiental, EIA/RIMA, fauna, flora e arqueologia em Santa Catarina.',
};

export default function About() {
  return (
    <div className="bg-white animate-fade-in-up">
      {/* Hero Sobre */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Sobre a Sáuria Consultoria Ambiental</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Sólida experiência técnica aprovando projetos imobiliários, indústrias e infraestrutura nos órgãos ambientais de Santa Catarina.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa História</span>
            <h2 className="text-3xl font-bold font-display text-dark mb-6">Compromisso com o Desenvolvimento e a Legislação Legal</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Sediada estrategicamente em <strong>Joinville - Santa Catarina</strong>, a Sáuria Consultoria Ambiental atua em todo o sul do Brasil oferecendo suporte completo para o seu empreendimento. Nascemos da necessidade do mercado por uma consultoria que entende o tempo do empreendedor e a complexidade dos órgãos ambientais, como o IMA, IBAMA e órgãos municipais.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify mb-6">
              Nosso diferencial é a <strong>inteligência preventiva</strong>. Não apenas elaboramos o <em>EIA/RIMA</em>, <em>EIV</em> ou o <em>Licenciamento Ambiental (LP, LI, LO)</em>, mas desenhamos a viabilidade ambiental desde a planta, evitando surpresas, minimizando custos de mitigação e acelerando a emissão das licenças necessárias para construtoras, agronegócio e loteamentos.
            </p>
            
            <div className="flex gap-4 items-center p-4 bg-green-50 rounded-xl border border-green-100">
              <MapPin className="text-primary w-8 h-8 flex-shrink-0" />
              <p className="text-sm text-gray-800 font-medium">Atendimento presencial em Joinville e atuação técnica deferida em todo o território catarinense e região Sul.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <img src="https://images.pexels.com/photos/7745564/pexels-photo-7745564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Engenheiros da Sáuria Consultoria Ambiental realizando avaliação técnica em campo para licenciamento." className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark">Nosso Diferencial Técnico</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Por que grandes empresas confiam o licenciamento de suas obras à Sáuria.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-start mb-6">
                <div className="bg-green-50 p-4 rounded-2xl">
                    <GraduationCap className="w-8 h-8 text-primary"/>
                </div>
            </div>
            <h3 className="text-xl font-bold font-display mb-3 text-gray-800">Equipe Multidisciplinar Própria</h3>
            <p className="text-gray-600 leading-relaxed">Não terceirizamos responsabilidade. Contamos com engenheiros ambientais, biólogos especialistas em fauna e flora, geógrafos e arqueólogos no nosso corpo técnico.</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-start mb-6">
                <div className="bg-green-50 p-4 rounded-2xl">
                    <FileCheck2 className="w-8 h-8 text-primary"/>
                </div>
            </div>
            <h3 className="text-xl font-bold font-display mb-3 text-gray-800">Rigor Regulatório</h3>
            <p className="text-gray-600 leading-relaxed">Nossos relatórios (EIV, EAS, RAP) seguem rigorosamente os Manuais de Orientação do IMA/SC e normas do CONAMA, evitando devoluções e atrasos processuais.</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-start mb-6">
                <div className="bg-green-50 p-4 rounded-2xl">
                    <Lightbulb className="w-8 h-8 text-primary"/>
                </div>
            </div>
            <h3 className="text-xl font-bold font-display mb-3 text-gray-800">Geoprocessamento Avançado</h3>
            <p className="text-gray-600 leading-relaxed">Utilizamos tecnologias de ponta em Inteligência Geográfica para mapeamento de APPs e diagnóstico espacial, dando precisão inquestionável aos seus projetos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
