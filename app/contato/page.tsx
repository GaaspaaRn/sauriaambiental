import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Bot, PhoneCall } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato | Sáuria Consultoria Ambiental em Joinville',
  description: 'Fale com a Sáuria. Solicite orçamentos para licenciamento ambiental, EIA/RIMA e laudos técnicos em Santa Catarina. Atendimento ágil e especializado.',
};

export default function Contact() {
  return (
    <div className="bg-light animate-fade-in-up">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-dark"><b></b>Entre em Contato</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Estamos prontos para analisar os desafios regulatórios do seu empreendimento e propor soluções ambientais tecnicamente viáveis para Santa Catarina e região Sul.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Informações Corporativas</h2>
              <div className="space-y-5 text-gray-700">

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">E-mail Institucional</span>
                    <a href="mailto:sauriaconsultoria@gmail.com" className="hover:text-primary transition-colors">sauriaconsultoria@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Telefone Principal</span>
                    <a href="tel:+5547988693054" className="hover:text-primary transition-colors">(47) 9 8869-3054</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Horário de Atendimento Técnico</span>
                    <span>Segunda a Sexta, das 08:00 às 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-bold font-display text-primary mb-4">Plantão de Licenciamento</h3>
              <p className="text-sm text-gray-600 mb-6">Em caso de paralisações de obras, autos de infração ou emergências com órgãos ambientais (IMA, IBAMA), utilize nosso contato rápido.</p>
              <div className="flex flex-col xl:flex-row gap-4">
                <a href="https://wa.me/5547988693054" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md">
                  <Bot size={20} /> WhatsApp
                </a>
                <a href="tel:+5547988693054" className="flex-1 flex items-center justify-center gap-2 bg-dark hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md">
                  <PhoneCall size={20} /> Ligar Direto
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold font-display text-dark mb-2">Solicitar Orçamento / Vistoria</h3>
            <p className="text-gray-500 text-sm mb-8">Nossa equipe técnica fará uma triagem preliminar do seu projeto sem custos.</p>
            <ContactForm />
          </div>
        </div>

        {/* Atendimento Digital Info Area */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white p-12 text-center">
             <h3 className="text-2xl font-bold font-display text-dark mb-4">Consultoria Ambiental Digital e Prática</h3>
             <p className="text-gray-600 max-w-2xl mx-auto">Para maior agilidade e transparência, operamos de forma 100% digital com envios e protocolos eletrônicos, alinhados com vistorias in-loco estritamente programadas de acordo com as necessidades do seu empreendimento.</p>
        </div>
      </div>
    </div>
  );
}
