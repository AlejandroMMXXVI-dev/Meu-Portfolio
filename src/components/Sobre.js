export default function Sobre() {
  return (
    <section id="sobre" className="w-full min-h-screen bg-[#050507] text-white py-20 px-6 font-sans scroll-mt-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TÍTULO PRINCIPAL DA SEÇÃO */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Sobre <span className="text-[#d4af37]">Mim</span>
          </h2>
        </div>

        {/* GRID DE 3 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Caixa 1: Biografia com Glow ao passar o mouse */}
          {/* Adicionamos background, border sutil, rounded, transition, hover border glow e 'group' */}
          <div className="border border-[#d4af37]/20 bg-[#0b0c10]/40 backdrop-blur-sm p-6 rounded-xl flex flex-col gap-4 text-gray-300 text-sm leading-relaxed transition-all duration-300 hover:border-[#d4af37]/60 group">
            <p className="transition-transform duration-300 group-hover:translate-x-1">
              Tenho 18 anos e sou estudante de Engenharia de Software em Brasília, atualmente no segundo semestre da graduação. Meu principal foco está no desenvolvimento Front-End, área na qual busco unir tecnologia, design e experiência para criar interfaces intuitivas, funcionais e visualmente marcantes.
            </p> 
            <p className="transition-transform duration-300 group-hover:translate-x-1">
              Atualmente estudo HTML, CSS, JavaScript e Python, dedicando grande parte do meu tempo ao estudo do desenvolvimento web, UX e UI Design. Sou motivado pela ideia de transformar conceitos em produtos digitais que gerem valor real para as pessoas, sempre explorando novas formas de inovação, personalização e interação.
            </p> 
            <p className="transition-transform duration-300 group-hover:translate-x-1">
              Além da tecnologia, encontro inspiração em filmes, séries, música e jogos, experiências que ampliam minha visão criativa e influenciam minha forma de pensar. Estou em constante evolução, construindo conhecimento, desenvolvendo projetos e buscando oportunidades para crescer profissionalmente.
            </p>
          </div>
          
          {/* Caixa 2: Moldura da Foto com Efeito Glassmorphism Vertical AAA */}
          <div className="border-none p-0 text-center flex justify-center items-center">
            {/* O CONTAINER DO CARD (Ajustado para alongar) */}
            <div className="relative group p-4 w-72 mx-auto">
              
              {/* Camada 1: A "Sombra Suave" e Flutuante (Efeito 3D) */}
              <div className="absolute -inset-1 bg-[#d4af37]/5 rounded-[30px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Camada 2: O CARD DE VIDRO EM SI (Alongado verticalmente) */}
              <div className="relative z-10 bg-black/30 backdrop-blur-xl border border-[#d4af37]/30 rounded-[26px] p-0.5 shadow-[0_8px_32px_0_rgba(212,175,55,0.15)] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Camada 3: Reflexo de Luz Interno no Vidro (Sutil) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none"></div>

                {/* Camada 4: A FOTO DENTRO DO CARD (Alongada) */}
                <img 
                  src="/images/augusto-profile.jpg"
                  alt="Augusto Alejandro, Desenvolvedor AAA" 
                  className="w-full h-[400px] object-cover rounded-[20px] relative z-10 border border-black/50"
                />
              </div>

            </div>
          </div>

          {/* Caixa 3: Estatísticas / Números feitos na mão */}
          <div className="flex flex-col gap-6 justify-center">
            
            {/* BLOCO 1: Projetos */}
            <div className="border border-[#d4af37]/20 bg-[#0b0c10]/40 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:border-[#d4af37]/60 group">
              <span className="block text-4xl font-black text-[#d4af37] tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                6M+
              </span>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                Estudando Desenvolvimento Web
              </span>
            </div>

            {/* BLOCO 2: Tecnologias */}
            <div className="border border-[#d4af37]/20 bg-[#0b0c10]/40 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:border-[#d4af37]/60 group">
              <span className="block text-4xl font-black text-[#d4af37] tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                4
              </span>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                Tecnologias em Estudo
              </span>
            </div>

            {/* BLOCO 3: Faculdade */}
            <div className="border border-[#d4af37]/20 bg-[#0b0c10]/40 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:border-[#d4af37]/60 group">
              <span className="block text-4xl font-black text-[#d4af37] tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                2º Sem
              </span>
              <span className="block text-xs uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                Engenharia de Software (UniCEUB)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}