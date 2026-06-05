import { motion } from 'framer-motion'

function TimelineItem({ index, item }) {
  const left = index % 2 === 0

  return (
    <motion.div
      className={`relative grid gap-4 lg:grid-cols-2 ${left ? '' : 'lg:[&>article]:col-start-2'}`}
      initial={{ opacity: 0, x: left ? -30 : 30, y: 22 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <span className={`absolute left-4 top-8 hidden h-4 w-4 -translate-x-1/2 border-2 border-black shadow-[3px_3px_0_#6C47FF] lg:left-1/2 lg:block ${item.current ? 'bg-rr-purple' : 'bg-rr-pink'}`} />
      <article className={`glass rounded-[8px] p-5 sm:p-6 ${item.current ? 'border-rr-purple/60 shadow-[0_24px_90px_rgba(108,71,255,0.24)]' : ''}`}>
        <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-rr-lavender">{item.year}</p>
        <p className="mt-3 text-base font-semibold leading-7 text-white sm:leading-8 md:text-lg">
          {item.text}
          {item.tech?.length ? ' ' : ''}
          {item.tech?.map((tech, techIndex) => (
            <span key={tech}>
              <span className="font-black text-rr-lavender">{tech}</span>
              {techIndex < item.tech.length - 1 ? ', ' : ''}
            </span>
          ))}
          {item.after ? ` ${item.after}` : ''}
        </p>
        {item.focus && (
          <p className="mt-5 border-l-2 border-rr-purple pl-4 text-sm font-bold leading-7 text-rr-muted">
            <span className="text-white">Current Focus:</span> {item.focus.replace('Current focus: ', '')}
          </p>
        )}
      </article>
    </motion.div>
  )
}

export default TimelineItem
