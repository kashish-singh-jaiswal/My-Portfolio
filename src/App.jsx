import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import LogoSection from './components/HeroModels/LogoSection.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
