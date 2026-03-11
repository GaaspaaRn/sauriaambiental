'use client';

import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const messageText = formData.get('message') as string;

        const whatsappText = `Olá, vim pelo site da Sáuria e gostaria de solicitar um orçamento/vistoria:\n\n*Nome/Empresa:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Detalhes:* ${messageText}`;
        const encodedText = encodeURIComponent(whatsappText);
        const url = `https://wa.me/5547988693054?text=${encodedText}`;

        setTimeout(() => {
            window.open(url, '_blank');
            setStatus('success');
            setMessage('Iniciando redirecionamento para o nosso WhatsApp, aguarde...');
            form.reset();
        }, 800);
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo / Empresa</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Profissional</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Detalhes do Projeto / Dúvida Ambiental</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="Descreva brevemente o seu empreendimento e o serviço necessário (ex: Licenciamento, EIA/RIMA, PRAD)."></textarea>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-2"><Bot size={14} /> Este site é protegido por medidas anti-spam e criptografia.</p>
            <div>
                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-md shadow-md text-base font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 transition-colors"
                >
                    {status === 'submitting' ? 'Processando Solicitação...' : <>Solicitar Orçamento <Send size={18} /></>}
                </button>
            </div>
            {message && (
                <div className={`p-4 rounded-md text-sm font-medium ${status === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                    {message}
                </div>
            )}
        </form>
    );
}
