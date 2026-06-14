export default function Sobre() {
  return (
    <section id="sobre" className="w-full min-h-screen bg-[#050507] text-white py-20 px-6 font-sans scroll-mt-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TÍTULO PRINCIPAL DA SEÇÃO */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight ">
            Sobre <span className="text-[#d4af37]">Mim</span>
          </h2>
        </div>

        {/*GRID DE 3 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Caixa 1: Biografia */}
          <div className="border border-red-500/30 p-4 flex flex-col gap-4">
            <p> Tenho 18 anos e sou estudante de Engenharia de Software em Brasília, atualmente no segundo semestre da graduação. Meu principal foco está no desenvolvimento Front-End, área na qual busco unir tecnologia, design e experiência do usuário para criar interfaces intuitivas, funcionais e visualmente marcantes.</p> <p>Atualmente estudo HTML, CSS, JavaScript e Python, dedicando grande parte do meu tempo ao aprimoramento das minhas habilidades em desenvolvimento web, UX e UI Design. Sou motivado pela ideia de transformar conceitos em produtos digitais que gerem valor real para as pessoas, sempre explorando novas formas de inovação, personalização e interação.</p> <p>Além da tecnologia, encontro inspiração em filmes, séries, música e jogos, experiências que ampliam minha visão criativa e influenciam minha forma de pensar soluções digitais. Estou em constante evolução, construindo conhecimento, desenvolvendo projetos e buscando oportunidades para crescer profissionalmente enquanto transformo minha paixão por tecnologia em carreira.</p>
        </div>

        

          {/* Caixa 3: Estatísticas / Números */}
          <div className="border border-green-500/30 p-4">
            <p>Aqui vão entrar os seus números estatísticos...</p>
          </div>

        </div>

      </div>
    </section>
  )
}