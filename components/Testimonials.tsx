import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
    <div className="bg-azul-petroleo/80 p-6 rounded-lg shadow-lg backdrop-blur-sm">
        <p className="text-lg italic text-branco-quente/95">“{quote}”</p>
        <p className="text-right mt-4 font-bold text-dourado-suave">— {author}</p>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-azul-petroleo bg-fixed" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/clean-textile.png')"}}>
      <div className="absolute inset-0 bg-azul-petroleo/90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-branco-quente drop-shadow-md">
            O que dizem nossos clientes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard 
            quote="Excelente atendimento, resolveram meu problema com rapidez e transparência." 
            author="Maria T. – Manaus/AM" 
          />
          <TestimonialCard 
            quote="Profissional ético, me explicou cada passo do processo. Recomendo totalmente." 
            author="Carlos F. – Morro da Liberdade" 
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
