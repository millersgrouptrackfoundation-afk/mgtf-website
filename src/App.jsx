import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import MissionVision from './components/MissionVision'
import Models from './components/Models'
import Athlete from './components/Athlete'
import ImpactNumbers from './components/ImpactNumbers'
import Team from './components/Team'
import FoundingPatrons from './components/FoundingPatrons'
import JoinForm from './components/JoinForm'
import Footer from './components/Footer'
import OurJourney from './components/OurJourney'
function HomePage() {
  return (
    <main className="bg-[#0D2318] antialiased selection:bg-[#E76F51] selection:text-[#F9F7F3]">
      <Hero />
      <MissionVision />
      <Models />
      <Athlete />
      <ImpactNumbers />
      <Team />
      <FoundingPatrons />
      <JoinForm />
      <Footer />
    </main>
  )
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-journey" element={<OurJourney />} />
    </Routes>
  )
}
