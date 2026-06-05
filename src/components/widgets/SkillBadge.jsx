import { motion } from 'framer-motion'

function SkillBadge({ index, label }) {
  return (
    <motion.span
      className="skill-pill inline-flex"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
    >
      {label}
    </motion.span>
  )
}

export default SkillBadge
