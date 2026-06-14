'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// 1. Configuração das Skills: Raio (distância do centro) e Ângulo (posição na órbita)
const skillsData = [
  { name: "HTML", radius: 110, angle: 200 },
  { name: "CSS", radius: 90, angle: 70 },
  { name: "JavaScript", radius: 150, angle: 330 },
  { name: "Python", radius: 130, angle: 270 },
  { name: "...", radius: 210, angle: 140 },
  { name: "...", radius: 270, angle: 320 },
  { name: "Figma", radius: 190, angle: 90 },
  { name: "...", radius: 250, angle: 180 },
  { name: "...", radius: 270, angle: 230 },
  { name: "...", radius: 170, angle: 30 },
  { name: "Web Design", radius: 230, angle: 0 },
];

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(1200); // Default seguro

  // Monitora a largura da tela para recalcular os raios no mobile
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determina o multiplicador de encolhimento com base na tela do usuário
  const getScaleFactor = () => {
    if (windowWidth < 480) return 0.52; // Telas muito pequenas (celular antigo)
    if (windowWidth < 768) return 0.65; // Celulares modernos e tablets verticais
    if (windowWidth < 1024) return 0.85; // Tablets horizontais / laptops pequenos
    return 1.0; // Desktop normal / full size
  };

  const scaleFactor = getScaleFactor();

  // Função matemática adaptada com o fator multiplicador responsivo
  const getCoordinates = (radius, angle) => {
    const adjustedRadius = radius * scaleFactor;
    const radians = (angle * Math.PI) / 180;
    return {
      x: adjustedRadius * Math.cos(radians),
      y: adjustedRadius * Math.sin(radians),
    };
  };

  // Variantes de animação para as órbitas circulares ao fundo
  const orbitVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (customRadius) => ({
      scale: 1,
      opacity: 0.12,
      transition: { type: "spring", stiffness: 40, delay: customRadius * 0.002 }
    })
  };

  // Variantes de animação para as palavras (nascem no centro e expandem)
  const itemVariants = {
    hidden: { x: 0, y: 0, opacity: 0, scale: 0 },
    visible: (coords) => ({
      x: coords.x,
      y: coords.y,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 13, delay: 0.3 }
    })
  };

  // Pegamos os raios únicos para as linhas do background
  const uniqueRadii = [...new Set(skillsData.map(s => s.radius))].sort((a, b) => a - b);

  return (
    <section id="skills" className="w-full min-h-screen bg-[#050507] text-white py-20 px-4 font-sans overflow-hidden flex flex-col items-center justify-center">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          <span className="text-[#d4af37]">Skills</span>
        </h2>
      </div>

      {/* O UNIVERSO DAS SKILLS */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-4xl aspect-square flex items-center justify-center mx-auto"
      >
        
        {/* LINEART: Linhas circulares das órbitas adaptadas pela escala */}
        {uniqueRadii.map((radius, index) => {
          const scaledRadius = radius * scaleFactor;
          return (
            <motion.div
              key={index}
              custom={radius}
              variants={orbitVariants}
              style={{
                width: scaledRadius * 2,
                height: scaledRadius * 2,
              }}
              className="absolute border border-gray-400 rounded-full pointer-events-none z-0"
            />
          );
        })}

        {/* CENTRO DO UNIVERSO: A palavra "Web" */}
        <motion.div 
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1, transition: { type: "spring", duration: 0.6 } }
          }}
          className="relative z-20 bg-white text-black font-black px-6 py-3 md:px-8 md:py-4 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm md:text-lg uppercase tracking-wider"
        >
          Web
        </motion.div>

        {/* AS PALAVRAS EM ÓRBITA */}
        {skillsData.map((skill, index) => {
          const coords = getCoordinates(skill.radius, skill.angle);
          
          return (
            <motion.div
              key={index}
              custom={coords}
              variants={itemVariants}
              // Ajustado preenchimento (padding) e tamanho das fontes dinamicamente para dispositivos mobile
              className="absolute z-10 bg-white text-black font-bold text-[10px] md:text-xs px-2.5 py-1.5 md:px-4 md:py-2 rounded-full shadow-md whitespace-nowrap cursor-default hover:bg-[#d4af37] hover:text-black transition-colors duration-200 select-none"
            >
              {skill.name}
            </motion.div>
          );
        })}

      </motion.div>
    </section>
  );
}