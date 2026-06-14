export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-[#f5f5f7] flex flex-col justify-center items-center p-6">
      <div className="text-center space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
          Project: Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight cursor-default">
          CAIUS <span className="text-[#d4af37]">DEV</span>
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto tracking-wide">
          Engenheiro de Software focado em construir aplicações web modernas, fluidas e de alta performance.
        </p>
        <div className="pt-4">
          <button className="px-6 py-3 border border-[#d4af37] text-[#d4af37] uppercase text-xs font-bold tracking-widest hover:bg-[#d4af37] hover:text-[#0b0c10] transition-all duration-300">
            Ver Projetos
          </button>
        </div>
      </div>
    </main>
  )
}