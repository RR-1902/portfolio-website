import { Code, Link2, Network, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { sectionMotion } from '../hooks/useScrollAnimation'

const links = [
  ['GitHub', 'https://github.com/RR-1902', Code],
  ['LinkedIn', 'https://www.linkedin.com/in/rohith-rajan-v', Network],
  ['LeetCode', 'https://leetcode.com/u/TheGuywithScar/', Trophy],
  ['Codolio', 'https://codolio.com/profile/TheGuywithScar', Link2],
]

function Contact() {
  return (
    <motion.section id="contact" className="section-pad" {...sectionMotion}>
      <div className="section-inner">
        <div className="max-w-3xl">
          <h2 className="section-title">Let's Build Something.</h2>
          <p className="mt-8 text-xl font-semibold leading-8 text-rr-muted">Open to internships, collaborations, and good tech conversations.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {links.map(([label, href, Icon]) => (
            <a className="glass group rounded-[8px] p-6 transition duration-200 hover:-translate-y-2 hover:border-rr-purple/60 hover:shadow-[0_18px_70px_rgba(108,71,255,0.22)]" href={href} key={label} target="_blank" rel="noreferrer">
              <div className="mb-12 grid h-12 w-12 place-items-center border-2 border-black bg-rr-purple text-white shadow-[4px_4px_0_#000]">
                <Icon size={22} />
              </div>
              <p className="font-display text-2xl uppercase">{label}</p>
              <p className="mt-2 text-sm font-semibold text-rr-muted">Connect</p>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
