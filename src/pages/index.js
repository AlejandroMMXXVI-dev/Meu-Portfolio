import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] font-sans antialiased selection:bg-[#d4af37] selection:text-black">
      {/* Aqui a gente só gerencia quem aparece e a ordem de aparição */}
      <Navbar />
      <Hero />
      <Sobre />
    </div>
  )
}