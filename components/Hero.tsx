import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center text-center pt-24 pb-12"
    >
      {/* Background Image using the lawyer's photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: "url('https://i.postimg.cc/HnbbGy1H/00040004-MG-5719.jpg')"}}
        aria-hidden="true"
      ></div>
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-azul-petroleo/50" aria-hidden="true"></div>
      
      {/* Content container, centered */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-branco-quente">
            <h1 className="font-merriweather text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              Defesa e orientação jurídica em Direito do Consumidor e Direito Civil
            </h1>
            <p className="mt-6 text-lg md:text-xl font-lato text-branco-quente/90 max-w-2xl mx-auto">
              Protegendo seus direitos com ética, clareza e resultados reais.
            </p>
            <div className="mt-10">
              <a href="#contato" className="cta bg-dourado-suave text-azul-petroleo font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
                Agende sua consulta
              </a>
            </div>
            <p className="mt-6 text-sm text-branco-quente/80">
              “Mais de 10 anos de experiência garantindo segurança jurídica e soluções eficazes para nossos clientes.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;