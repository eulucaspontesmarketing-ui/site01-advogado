import React from 'react';
import { ShoppingCartIcon, DocumentTextIcon } from './icons/FeatureIcons';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border-t-4 border-dourado-suave">
    <div className="flex items-center mb-4">
      <div className="text-dourado-suave mr-4">{icon}</div>
      <h3 className="font-merriweather text-2xl font-bold text-azul-petroleo">{title}</h3>
    </div>
    <p className="text-cinza-grafite/90 leading-relaxed">
      {children}
    </p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo">
            Nossas Principais Áreas de Atuação
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard icon={<ShoppingCartIcon />} title="Direito do Consumidor">
            Defesa dos direitos de consumidores em casos de cobranças indevidas, produtos com defeito, contratos abusivos e falhas em serviços. Atuamos na busca por indenizações, revisões contratuais e acordos extrajudiciais.
          </ServiceCard>
          <ServiceCard icon={<DocumentTextIcon />} title="Direito Civil">
            Soluções jurídicas em contratos, indenizações, responsabilidade civil, cobranças, locações e disputas entre particulares. Nosso foco é prevenir conflitos e resolver litígios com eficiência.
          </ServiceCard>
        </div>
        <div className="text-center mt-12">
          <a href="#contato" className="bg-azul-petroleo text-branco-quente font-bold py-3 px-8 rounded-lg shadow-md hover:bg-azul-petroleo/90 transition-all transform hover:scale-105">
            Quero entender meus direitos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
