import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-20 bg-branco-quente">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo mb-10">
          Conheça quem está ao seu lado
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-xl border-l-8 border-dourado-suave">
          <img src="https://i.postimg.cc/zvTTmgY8/00060006-MG-5778.jpg" alt="Advogado Rodrigo Rufino" className="w-40 h-40 rounded-full object-cover shadow-md flex-shrink-0" />
          <div className="text-center sm:text-left">
            <h3 className="font-merriweather text-2xl font-bold text-cinza-grafite">Rodrigo Rufino — OAB/AM 12.345</h3>
            <p className="text-lg text-cinza-grafite/90 mt-2">
              Advogado especialista em Direito do Consumidor e Direito Civil. Pós-graduado em Direito Processual Civil, atua com ética, clareza e foco em resultados.
            </p>
             <div className="mt-6">
                <a href="#contato" className="bg-dourado-suave text-azul-petroleo font-bold py-2 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
                    Entre em contato direto
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;