import React from 'react';
import { ConsultationIcon, PlanningIcon, ActionIcon, ResultsIcon } from './icons/ProcessIcons';
import { ShieldCheckIcon } from './icons/FeatureIcons';

const ProcessStep: React.FC<{
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ step, title, description, icon }) => (
  <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-dourado-suave h-full">
    <div className="relative z-10">
        <div className="flex items-center mb-4">
            <div className="bg-dourado-suave/10 text-dourado-suave rounded-full p-3 mr-4">
                {icon}
            </div>
            <div>
                 <p className="text-sm font-bold text-dourado-suave">PASSO {step}</p>
                 <h3 className="font-merriweather text-xl font-bold text-azul-petroleo">{title}</h3>
            </div>
        </div>
      <p className="text-cinza-grafite/90 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Process: React.FC = () => {
    const steps = [
        { step: '01', title: 'Consulta Inicial', icon: <ConsultationIcon />, description: 'Você explica seu caso e nossos advogados analisam a melhor estratégia jurídica para a sua situação.' },
        { step: '02', title: 'Análise e Planejamento', icon: <PlanningIcon />, description: 'Revisamos documentos, identificamos os riscos e traçamos o plano de ação ideal para o seu caso.' },
        { step: '03', title: 'Ação Jurídica', icon: <ActionIcon />, description: 'Elaboramos e protocolamos toda a documentação necessária, representando você com segurança e eficiência.' },
        { step: '04', title: 'Acompanhamento e Resultados', icon: <ResultsIcon />, description: 'Mantemos você informado sobre cada etapa do processo até a resolução final.' },
    ];
  return (
    <section id="processo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo mb-4">
          Como Funciona o Nosso Processo
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-cinza-grafite/90 mb-12">
          Transparência e simplicidade em cada etapa do seu caso.
        </p>
        
        <div className="relative">
            {/* Desktop progress line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                 <div className="w-5/6 h-0.5 bg-dourado-suave/30 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((item) => (
                    <ProcessStep key={item.step} {...item} />
                ))}
            </div>
        </div>

        <div className="mt-16">
            <a href="#contato" className="bg-azul-petroleo text-branco-quente font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-azul-petroleo/90 transition-all transform hover:scale-105 inline-block">
                Agendar uma Consulta
            </a>
            <div className="mt-6 flex justify-center items-center text-cinza-grafite/80">
                <ShieldCheckIcon />
                <span className="ml-2 font-semibold">Atendimento personalizado garantido</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;