export default function Hero() {
  return (
    <main id="home" className="relative pt-16 flex flex-col justify-center items-center min-h-screen p-6 overflow-hidden bg-[#050507]"
    className="relative pt-16 flex flex-col justify-center items-center min-h-screen p-6 overflow-hidden bg-[#050507]">
      {/* Efeito de luz de fundo sutil */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center space-y-6 max-w-3xl relative z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-bold">
          [ System Status: Active ]
        </p>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
          Augusto Alejandro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f4d068]">DEV</span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
          Desenvolvedor Front-End em formação e estudante de Engenharia de Software.
        </p>

        <div className="pt-6">
          <button className="group relative px-8 py-3 bg-transparent text-white border border-[#d4af37] uppercase text-xs font-bold tracking-widest overflow-hidden transition-all duration-300 hover:text-black">
            <div className="absolute top-0 left-0 w-full h-full bg-[#d4af37] -translate-x-full group-hover:translate-x-0 transition-transform duration-650 ease-out z-[-1]"></div>
            Explorar Projetos
          </button>
        </div>
      </div>
    </main>
  )
}