import { HeroSection } from "./components/HeroSection"
import { PersonalitySection } from "./components/PersonalitySection"
import { JourneySection } from "./components/JourneySection"
import { ExperienceSection } from "./components/ExperienceSection"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <PersonalitySection />
      <JourneySection />
      <ExperienceSection />
    </main>
  )
}

export default App
