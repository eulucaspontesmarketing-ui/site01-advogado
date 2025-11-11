import React from 'react';
import { MapPinIcon, ClockIcon } from './icons/InfoIcons';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo">
            Encontre-nos
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-cinza-grafite/90">
            Nosso escritório está localizado em uma área de fácil acesso. Atendemos com horário marcado para oferecer um atendimento personalizado e tranquilo.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
             <div className="flex items-start mb-6">
                <MapPinIcon />
                <div>
                    <h3 className="font-bold text-lg text-cinza-grafite">Endereço</h3>
                    <p className="text-cinza-grafite/90">Rua Walter Orion, 23 – Morro da Liberdade</p>
                </div>
             </div>
             <div className="flex items-start">
                <ClockIcon />
                <div>
                    <h3 className="font-bold text-lg text-cinza-grafite">Horário</h3>
                    <p className="text-cinza-grafite/90">Segunda a Sexta, das 8h às 18h</p>
                </div>
             </div>
          </div>
          <div className="lg:w-2/3 h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps?q=Rua+Walter+Orion+23+Morro+da+Liberdade&output=embed"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Localização do Escritório"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
