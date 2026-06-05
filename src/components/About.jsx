import { motion } from 'framer-motion'
import { sectionMotion } from '../hooks/useScrollAnimation'

function About() {
  return (
    <motion.section id="about" className="section-pad" {...sectionMotion}>
      <div className="section-inner">
        <h2 className="section-title">About</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="text-2xl font-semibold leading-10 text-white md:text-3xl">
            I'm a CS undergrad passionate about building at the intersection of AI/ML and full-stack development. I don't just learn technologies, I ship products with them.
          </div>
          <div className="glass rounded-[8px] p-6 font-mono text-sm leading-8 text-rr-muted md:p-8">
            <p className="terminal-line"><span className="text-white">currently_building</span> = "AI-powered web apps"</p>
            <p className="terminal-line"><span className="text-white">grinding</span> = "Striver A2Z DSA (C++)"</p>
            <p className="terminal-line"><span className="text-white">exploring</span> = ["RAG Systems", "Cloud", "System Design"]</p>
            <p className="terminal-line"><span className="text-white">goal</span> = "Placement-ready by Late 2026"</p>
            <p className="terminal-line"><span className="text-white">location</span> = "Chennai, India"</p>
            <span className="cursor" />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
