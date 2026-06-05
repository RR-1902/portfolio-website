import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { sectionMotion } from '../hooks/useScrollAnimation'
import ProjectCard from './widgets/ProjectCard'

function Projects() {
  return (
    <motion.section id="projects" className="section-pad" {...sectionMotion}>
      <div className="section-inner">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="section-title">Projects</h2>
          <p className="max-w-md text-sm font-semibold uppercase text-rr-muted">AI apps, campus tooling, and product-minded full-stack builds.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
