import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left text-lg font-semibold text-cinza-grafite focus:outline-none"
      >
        <span className="font-merriweather">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-5 pr-4 text-cinza-grafite/90">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-branco-quente">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQItem question="O que fazer quando sofro uma cobrança indevida?">
            <p>Guarde os comprovantes e entre em contato conosco. Avaliamos o caso e buscamos a devolução do valor e indenização, se cabível.</p>
          </FAQItem>
          <FAQItem question="Como funciona a consulta inicial?">
            <p>A consulta pode ser presencial ou online. Nosso objetivo é compreender o caso e orientar juridicamente de forma clara.</p>
          </FAQItem>
          <FAQItem question="Posso enviar meus documentos pelo site?">
            <p>Sim, todos os dados são tratados com segurança e confidencialidade conforme a LGPD.</p>
          </FAQItem>
          <FAQItem question="Atendem fora de Manaus?">
            <p>Sim, realizamos atendimentos online em todo o Brasil.</p>
          </FAQItem>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
