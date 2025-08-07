import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import LogoSection from './components/HeroModels/LogoSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <TechStack />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
