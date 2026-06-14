"use client"
import { useState } from 'react';

export default function Navbar() {
  // Interruptor da Barra de Navegação estilo Hambúrguer para telas pequenas
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0c10]/90 backdrop-blur-md border-b border-gray-800/50 font-sans">
        {/* Detalhe da linha dourada superior inspirada no print da IOI */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO (Vibe IOI) */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-5 h-5 border border-[#d4af37] rotate-45 transition-transform duration-500 group-hover:rotate-180 bg-transparent"></div>
            <span className="text-white font-black tracking-widest text-sm transition-colors duration-300 group-hover:text-[#d4af37]">
              A.A<span className="text-[#d4af37]"></span>
            </span>
          </div>

          {/* Links de Navegação Centrais (Só aparecem no PC) */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide text-gray-300">
            <a href="#home" className="hover:text-white transition-colors duration-200 uppercase text-xs tracking-widest">Home</a>
            <a href="#sobre" className="hover:text-white transition-colors duration-200 uppercase text-xs tracking-widest">Sobre</a>
            <a href="#projetos" className="hover:text-white transition-colors duration-200 uppercase text-xs tracking-widest">Projetos</a>
            <a href="#contato" className="hover:text-white transition-colors duration-200 uppercase text-xs tracking-widest">Contato</a>
          </div>

          {/* Área da Direita: Apenas o Hambúrguer no Mobile */}
          <div className="flex items-center">
            {/* Botão Hambúrguer: aparece no mobile, some no PC */}
            <button 
              className="block md:hidden flex flex-col justify-between h-4 w-6 group cursor-pointer z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* TELA PRETA DO MENU MOBILE (Só renderiza se isOpen for true) */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#050507]/98 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-[0.2em] text-gray-400 hover:text-[#d4af37] transition-colors">
            Home
          </a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-[0.2em] text-gray-400 hover:text-[#d4af37] transition-colors">
            Sobre
          </a>
          <a href="#projetos" onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-[0.2em] text-gray-400 hover:text-[#d4af37] transition-colors">
            Projetos
          </a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-[0.2em] text-gray-400 hover:text-[#d4af37] transition-colors">
            Contato
          </a>
        </div>
      )}
    </>
  );
}