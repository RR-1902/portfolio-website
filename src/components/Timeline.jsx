import { motion } from 'framer-motion'
import { sectionMotion } from '../hooks/useScrollAnimation'
import TimelineItem from './widgets/TimelineItem'

const items = [
  {
    year: '2020',
    text: 'Gaming sparked a deep curiosity about computers, technology, and how software is built.',
  },
  {
    year: '2021',
    text: 'Started exploring',
    tech: ['HTML', 'web fundamentals'],
  },
  {
    year: '2022',
    text: 'Learned',
    tech: ['CSS', 'Microsoft Excel', 'Microsoft Office'],
    after: 'and productivity tools.',
  },
  {
    year: '2023',
    text: 'Started programming seriously with',
    tech: ['Python', 'C++', 'Java'],
    after: 'while building a stronger CS and problem-solving foundation.',
  },
  {
    year: '2024',
    text: 'Explored data science and analytics with',
    tech: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    year: '2025',
    text: 'Expanded into AI/ML with',
    tech: ['Scikit-Learn', 'TensorFlow', 'Keras', 'OpenCV', 'NLP'],
    after: 'and built academic plus personal projects to strengthen AI foundations.',
  },
  {
    year: '2026',
    text: 'Focused on modern AI engineering and full-stack systems with',
    tech: ['LangChain', 'LangGraph', 'CrewAI', 'Claude', 'API Systems', 'MERN Stack'],
    after: 'while exploring Flutter, FastAPI, SQLite, Tailwind CSS, shadcn/ui, and OpenRouter.',
    focus: 'Current focus: building AI-powered applications, scalable software systems, and preparing for software engineering opportunities.',
    current: true,
  },
]

function Timeline() {
  return (
    <motion.section id="journey" className="section-pad" {...sectionMotion}>
      <div className="section-inner">
        <h2 className="section-title">Journey</h2>
        <div className="mt-8 max-w-2xl">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-rr-lavender">Learning Evolution</p>
          <p className="mt-3 text-lg font-semibold leading-8 text-rr-muted">
            A year-by-year map of curiosity turning into engineering range, from web fundamentals to AI-powered systems.
          </p>
        </div>
        <div className="relative mt-14 grid gap-6 before:absolute before:left-4 before:top-0 before:hidden before:h-full before:w-px before:bg-rr-purple/30 lg:before:left-1/2 lg:before:block">
          {items.map((item, index) => <TimelineItem index={index} item={item} key={item.year} />)}
        </div>
      </div>
    </motion.section>
  )
}

export default Timeline
