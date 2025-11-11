import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinza-grafite text-branco-quente/80">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="font-bold text-lg text-branco-quente">
            © 2025 — Rodrigo Rufino | OAB/AM 12.345
          </p>
          <p className="mt-2 text-sm">
            Rua Walter Orion, 23 – Morro da Liberdade
          </p>
          <p className="mt-1 text-sm">
            Telefone: (xx) xxxx-xxxx | <a href="mailto:contato@seuescritorio.com" className="hover:text-dourado-suave transition-colors">contato@seuescritorio.com</a>
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-dourado-suave transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-dourado-suave transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;