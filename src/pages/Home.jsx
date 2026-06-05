import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IntroOverlay from '../components/IntroOverlay'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'

function Home() {
  return (
    <div className="site-shell bg-rr-black text-white">
      <IntroOverlay />
      <div className="mesh-bg" />
      <div className="noise" />
      <div className="content-layer">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
