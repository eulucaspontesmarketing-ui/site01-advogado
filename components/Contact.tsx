import React from 'react';
import { PhoneIcon, EnvelopeIcon } from './icons/InfoIcons';

const Contact: React.FC = () => {
    
  return (
    <section id="contato" className="py-20 bg-branco-quente">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-azul-petroleo">
            Fale com um Advogado Agora
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-cinza-grafite/90">
            Entre em contato diretamente por um dos canais abaixo para agendar sua consulta e tirar suas dúvidas.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-xl space-y-8">
          
          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <PhoneIcon />
            <div className="ml-4">
                <h3 className="font-bold text-lg text-cinza-grafite">Telefone / WhatsApp</h3>
                <a href="tel:+5592999999999" className="text-azul-petroleo text-xl hover:text-dourado-suave transition-colors">(xx) xxxx-xxxx</a>
            </div>
          </div>
          
          <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <EnvelopeIcon />
            <div className="ml-4">
                <h3 className="font-bold text-lg text-cinza-grafite">E-mail</h3>
                <a href="mailto:contato@seuescritorio.com" className="text-azul-petroleo text-xl hover:text-dourado-suave transition-colors">contato@seuescritorio.com</a>
            </div>
          </div>

          <div className="text-center border-t border-gray-200 pt-8">
            <a 
              href="https://wa.me/5592999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-dourado-suave text-azul-petroleo font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
             <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.85L2.07 21.94L7.33 20.58C8.77 21.39 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.24 20.88 6.78 19.01 4.9L19 4.9C17.13 3.03 14.67 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.91C20.28 16.47 16.65 20.1 12.04 20.1C10.56 20.1 9.14 19.73 7.9 19.04L7.54 18.83L4.44 19.65L5.29 16.63L5.07 16.28C4.31 15.05 3.8 13.53 3.8 11.91C3.8 7.35 7.43 3.67 12.04 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.89 7.61C7.68 7.82 7.17 8.31 7.17 9.26C7.17 10.21 7.9 11.11 8.05 11.27C8.21 11.42 9.53 13.5 11.69 14.38C13.84 15.26 13.84 14.85 14.16 14.82C14.48 14.79 15.42 14.26 15.68 13.68C15.94 13.1 15.94 12.63 15.84 12.53C15.73 12.42 15.58 12.37 15.32 12.21C15.06 12.06 13.89 11.48 13.66 11.39C13.43 11.29 13.28 11.24 13.12 11.45C12.97 11.66 12.49 12.24 12.34 12.4C12.18 12.55 12.03 12.58 11.77 12.42C11.52 12.27 10.74 12.01 9.79 11.16C9.02 10.48 8.53 9.68 8.43 9.53C8.33 9.38 8.44 9.26 8.57 9.13C8.68 9.02 8.82 8.85 8.94 8.71C9.06 8.57 9.11 8.44 9.21 8.24C9.31 8.03 9.26 7.87 9.18 7.72C9.1 7.57 8.68 6.49 8.53 7.33Z"></path></svg>
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;