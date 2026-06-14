import { useState, useEffect, useRef } from 'react';

const listaProjetos = [
  {
    id: 1,
    title: "Nome do Projeto ",
    subtitle: "Brasília, Brasil",
    description: "Em breve a descrição do projeto estará aqui.",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    urlProjeto: "https://www.rockstargames.com/VI", // Link para o site real externo
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200"
    ]
  }
];

export default function Projetos() {
  const [projetoAtivo, setProjetoAtivo] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Lógica de Scroll Horizontal por roda do mouse
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleWheel = (e) => {
      e.preventDefault();
      gallery.scrollBy({
        left: e.deltaY * 3.0,
        behavior: 'auto'
      });
    };

    gallery.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      gallery.removeEventListener('wheel', handleWheel);
    };
  }, [projetoAtivo]);

  if (!hasMounted) return null;

  return (
    <section id="projetos" className="w-full min-h-screen bg-[#050507] text-white py-20 px-6 font-sans scroll-mt-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center md:text-left mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Meus <span className="text-[#d4af37]">Projetos</span>
          </h2>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {listaProjetos.map((projeto) => (
            <div key={projeto.id} className="flex flex-col gap-4">
              
              {/* CARD DE IMAGEM: Exclusivo para abrir o Modal Interno */}
              {/* O efeito de "group" agora morre aqui dentro, não afetando o botão de baixo */}
              <div 
                onClick={() => setProjetoAtivo(projeto)}
                className="group relative overflow-hidden rounded-[24px] border border-[#d4af37]/10 bg-[#0b0c10]/40 backdrop-blur-sm p-3 transition-all duration-500 hover:border-[#d4af37]/50 shadow-[0_4px_30px_rgba(0,0,0,0.8)] cursor-pointer"
              >
                
                {/* Overlay Dourado de Revelação (Afeta apenas a área da foto) */}
                <div className="absolute inset-3 rounded-[18px] bg-[#d4af37]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex flex-col items-center justify-center p-6 text-center text-black pointer-events-none">
                    
                    <h4 className="text-4xl font-black uppercase tracking-tighter leading-none mt-1 mb-3">View Gallery</h4>
                    <p className="text-xs leading-relaxed max-w-xs opacity-90 font-medium">Clique para ver os detalhes visuais e artes deste projeto.</p>
                </div>

                {/* Cantinhos Estilizados */}
                <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-40 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-40 transition-transform duration-500 group-hover:scale-110"></div>

                <div className="relative overflow-hidden rounded-[18px] h-72 w-full">
                  <img 
                    src={projeto.thumbnail} 
                    alt={projeto.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1 group-hover:blur-[2px]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:opacity-20 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-black">{projeto.subtitle}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mt-1">{projeto.title}</h3>
                  </div>
                </div>
              </div>

              {/* BOTÃO INDEPENDENTE: Redireciona direto para o Deploy/Site do projeto */}
              {/* Livre de bloqueios ou interferências de animação do card de cima */}
              <a 
                href={projeto.urlProjeto}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-transparent border border-[#d4af37]/30 rounded-xl font-bold uppercase tracking-widest text-xs text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] text-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] block"
              >
                Acessar Site do Projeto 
              </a>

            </div>
          ))}
        </div>
      </div>

      {/* MODAL HORIZONTAL DA GALERIA */}
      {projetoAtivo && (
        <div className="fixed inset-0 z-50 bg-[#050507] flex flex-col md:flex-row overflow-hidden">
          
          <button 
            onClick={() => setProjetoAtivo(null)}
            className="absolute top-6 left-6 z-40 px-5 py-2.5 bg-[#d4af37] text-black font-extrabold uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all flex items-center gap-2"
          >
            ← Back
          </button>

          <div className="w-full md:w-[35%] bg-[#0b0c10] border-r border-[#d4af37]/10 p-8 md:p-16 flex flex-col justify-center relative shrink-0 z-10">
            <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent"></div>
            
            <div className="space-y-6 mt-16 md:mt-0">
              <span className="text-xs md:text-sm uppercase tracking-widest text-[#d4af37] font-black block">
                {projetoAtivo.subtitle}
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none font-sans">
                {projetoAtivo.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                {projetoAtivo.description}
              </p>
            </div>
          </div>

          <div 
            ref={galleryRef}
            className="w-full md:w-[65%] h-full flex items-center p-6 md:p-12 gap-8"
            style={{ overflowX: 'auto', overflowY: 'hidden', overscrollBehaviorX: 'contain' }}
          >
            {projetoAtivo.images.map((imgUrl, index) => (
              <div 
                key={index}
                className="h-[60vh] md:h-[70vh] w-[85vw] md:w-[50vw] shrink-0 rounded-2xl overflow-hidden border border-[#d4af37]/10 bg-neutral-900 shadow-[0_10px_50px_rgba(0,0,0,0.7)] relative group"
              >
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#d4af37]/40 pointer-events-none z-20"></div>
                
                <img 
                  src={imgUrl} 
                  alt={`Slide ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}