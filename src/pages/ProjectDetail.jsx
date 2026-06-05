import { ArrowLeft, Code2, ExternalLink, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center bg-rr-black px-6 text-white">
        <div className="max-w-xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-rr-pink">Project missing</p>
          <h1 className="mt-4 font-display text-5xl">This build is not in the reel.</h1>
          <Link className="neo-button mt-8 inline-flex" to="/">Back Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-rr-black px-5 py-8 text-white">
      <div className="mesh-bg" />
      <div className="noise" />
      <motion.div
        className="content-layer mx-auto w-full max-w-5xl"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <Link className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase text-rr-muted hover:text-white" to="/">
          <ArrowLeft size={18} /> Back to portfolio
        </Link>
        <section className="glass overflow-hidden rounded-[8px]">
          <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <p className="font-mono text-sm font-bold uppercase tracking-[0.22em]" style={{ color: project.accent }}>
                Featured project
              </p>
              <h1 className="mt-4 font-display text-5xl uppercase leading-none md:text-7xl">{project.title}</h1>
              <p className="mt-4 text-xl font-semibold text-white">{project.tagline}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-rr-muted">{project.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span className="skill-pill text-sm" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a className="neo-button inline-flex" href={project.github} target="_blank" rel="noreferrer">
                  <Code2 size={18} /> GitHub
                </a>
                <button className="ghost-button inline-flex" type="button">
                  <ExternalLink size={18} /> Live Demo Soon
                </button>
              </div>
            </div>
            <div className="rounded-[8px] border border-white/10 bg-black/45 p-5">
              <div className="aspect-square rounded-[8px] border border-white/10 p-5" style={{ background: `radial-gradient(circle, ${project.accent}44, transparent 58%), #050505` }}>
                <div className="flex h-full flex-col justify-between">
                  <Sparkles style={{ color: project.accent }} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-rr-muted">Breakdown</p>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map((highlight) => (
                        <li className="border-l-2 pl-3 text-sm font-semibold text-white/90" style={{ borderColor: project.accent }} key={highlight}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  )
}

export default ProjectDetail
