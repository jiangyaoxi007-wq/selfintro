import { HeroSection } from "./components/HeroSection"
import { PersonalitySection } from "./components/PersonalitySection"
import { JourneySection } from "./components/JourneySection"
import { ExperienceSection } from "./components/ExperienceSection"
import { ClosingSection } from "./components/ClosingSection"

function App() {
  return (
    <main className="snap-container bg-background text-foreground font-sans">
      <HeroSection />
      <PersonalitySection />
      <JourneySection />
      <ExperienceSection />
      <ClosingSection />
    </main>
  )
}

export default App
