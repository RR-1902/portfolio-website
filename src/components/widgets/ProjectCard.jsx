import { Code2, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="glass group relative overflow-hidden rounded-[8px] p-6"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: project.accent }} />
      <div className="flex min-h-[360px] flex-col">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em]" style={{ color: project.accent }}>{project.tagline}</p>
        <h3 className="mt-4 font-display text-4xl uppercase leading-none md:text-5xl">{project.title}</h3>
        <p className="mt-5 flex-1 text-base leading-7 text-rr-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => <span className="skill-pill text-xs" key={tech}>{tech}</span>)}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="ghost-button inline-flex px-4 py-3 text-sm" href={project.github} target="_blank" rel="noreferrer">
            <Code2 size={17} /> GitHub
          </a>
          <button className="ghost-button inline-flex px-4 py-3 text-sm" type="button">
            <ExternalLink size={17} /> Live Demo
          </button>
          <Link className="neo-button inline-flex px-4 py-3 text-sm" to={`/projects/${project.id}`}>
            Case Study
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
