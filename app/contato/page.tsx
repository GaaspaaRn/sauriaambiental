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
      <div className="container mx-auto px-6 py-16">
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
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Matriz Joinville</span>
                    <span>Rua Walter Eichholz, 545 - Petrópolis<br />Joinville - Santa Catarina, 89208-620</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">E-mail Institucional</span>
                    <a href="mailto:contato@sauriaambiental.com.br" className="hover:text-primary transition-colors">contato@sauriaambiental.com.br</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Telefone Principal</span>
                    <a href="tel:+554734299271" className="hover:text-primary transition-colors">(47) 3429-9271</a>
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
                <a href="https://wa.me/554734299271" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md">
                  <Bot size={20} /> WhatsApp
                </a>
                <a href="tel:+554734299271" className="flex-1 flex items-center justify-center gap-2 bg-dark hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md">
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

        {/* Map Section */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.653428255018!2d-48.8378875!3d-26.3697963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf7a58406797%3A0x44619a911a3b11d0!2sR.%20Walter%20Eichholz%2C%20545%20-%20Petr%C3%B3polis%2C%20Joinville%20-%20SC%2C%2089208-620!5e0!3m2!1spt-BR!2sbr!4v1622557889151!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sede da Sáuria Consultoria Ambiental em Joinville, SC"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
