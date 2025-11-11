import React from 'react';
import { ShieldCheckIcon, HandshakeIcon, ChatBubbleLeftRightIcon, BuildingLibraryIcon } from './icons/FeatureIcons';

const About: React.FC = () => {
  const features = [
    { icon: <HandshakeIcon />, text: 'Atendimento personalizado e confidencial' },
    { icon: <BuildingLibraryIcon />, text: 'Experiência comprovada em causas de consumo e civis' },
    { icon: <ChatBubbleLeftRightIcon />, text: 'Respostas rápidas e linguagem acessível' },
    { icon: <ShieldCheckIcon />, text: 'Ética e transparência em todos os processos' },
  ];

  return (
    <section id="sobre" className="py-20 bg-branco-quente">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <img src="https://i.postimg.cc/YqpLK4Kj/premium-photo-1698084059560-9a53de7b816b.jpg" alt="Escritório de advocacia" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo mb-6">
              Excelência e transparência em cada atendimento.
            </h2>
            <p className="text-lg text-cinza-grafite/90 mb-4">
              Atuamos com dedicação em cada caso, buscando sempre a melhor solução para nossos clientes. Nosso compromisso é com a justiça, a ética e o respeito.
            </p>
            <p className="text-lg text-cinza-grafite/90 mb-8">
              Com uma equipe experiente em Direito do Consumidor e Direito Civil, oferecemos atendimento humanizado, análise individual de cada situação e estratégias jurídicas seguras.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-dourado-suave/20 text-dourado-suave rounded-full p-2 mr-4">
                    {feature.icon}
                  </div>
                  <span className="text-md text-cinza-grafite font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;