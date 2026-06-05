import { BrainCircuit, Code2, Database, Dock, Layers, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionMotion } from '../hooks/useScrollAnimation'
import SkillBadge from './widgets/SkillBadge'

const groups = [
  ['Languages', Code2, ['C++', 'JavaScript', 'TypeScript', 'Python']],
  ['Frontend', Layers, ['React', 'Next.js', 'Tailwind CSS']],
  ['Backend', Database, ['Node.js', 'Express', 'FastAPI', 'MongoDB']],
  ['AI/ML', BrainCircuit, ['Whisper', 'LangChain', 'NLTK', 'Scikit-learn']],
  ['Tools', Wrench, ['Docker', 'Git', 'Postman']],
]

const rings = [
  ['React', 88],
  ['FastAPI', 82],
  ['Python', 86],
  ['DSA', 78],
]

function Skills() {
  return (
    <motion.section id="skills" className="section-pad" {...sectionMotion}>
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <div className="grid gap-5">
            {groups.map(([title, Icon, skills], groupIndex) => (
              <motion.div className="glass rounded-[8px] p-5" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: groupIndex * 0.08 }}>
                <div className="mb-4 flex items-center gap-3 text-white">
                  <Icon className="text-rr-lavender" size={20} />
                  <h3 className="font-display text-2xl uppercase">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => <SkillBadge index={index} key={skill} label={skill} />)}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="glass rounded-[8px] p-6">
            <div className="mb-6 flex items-center gap-3">
              <Dock className="text-rr-pink" />
              <h3 className="font-display text-3xl uppercase">Top Stack Signals</h3>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {rings.map(([label, value]) => (
                <div className="grid place-items-center rounded-[8px] border border-white/10 bg-black/35 p-4" key={label}>
                  <div className="grid h-28 w-28 place-items-center rounded-full" style={{ background: `conic-gradient(#6C47FF ${value * 3.6}deg, rgba(255,255,255,0.08) 0deg)` }}>
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-rr-black">
                      <span className="font-mono text-lg font-black">{value}%</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-black uppercase text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
