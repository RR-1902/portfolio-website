import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import StatCard from './widgets/StatCard'

function Hero() {
  const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:pt-32 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 z-[2] hidden lg:block">
        <StatCard
          className="absolute left-[clamp(1.25rem,4vw,5rem)] top-[23vh] rotate-[-4deg] opacity-85"
          label="4 Active"
          value="Projects"
          delay="0s"
        />
        <StatCard
          className="absolute left-[clamp(3rem,7vw,8.5rem)] top-[47vh] rotate-[3deg] opacity-80"
          label="5+ Tech"
          value="Stacks"
          delay="0.8s"
        />
        <StatCard
          className="absolute left-[clamp(1.5rem,5vw,6rem)] bottom-[15vh] rotate-[-2deg] opacity-85"
          label="DSA Grind"
          value="Active"
          delay="1.3s"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <video
          className="absolute right-[-48vw] top-1/2 h-[74vh] min-h-[420px] w-[130vw] -translate-y-1/2 object-cover opacity-24 mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_0%,black_42%,transparent_74%)] sm:right-[-34vw] sm:w-[112vw] md:right-[-18vw] md:w-[92vw] md:opacity-32 lg:right-[-6vw] lg:min-h-[520px] lg:w-[74vw] lg:opacity-38"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/media/portfolio-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rr-black via-rr-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-rr-black via-transparent to-rr-black/50" />
      </div>

      <div className="section-inner relative z-10">
        <motion.div className="relative z-20" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
          <p className="max-w-[16rem] font-mono text-xs font-bold uppercase tracking-[0.18em] text-rr-lavender sm:max-w-none sm:tracking-[0.24em]">Software Engineering Internships</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.35rem,17vw,9rem)] font-black uppercase leading-[0.82] tracking-normal sm:text-[clamp(4.5rem,14vw,9rem)]">
            ROHITH RAJAN V
          </h1>
          <div className="mt-6 min-h-9 max-w-full text-xl font-black text-rr-lavender md:text-3xl">
            <TypeAnimation
              sequence={['AI + Full-Stack Developer_', 1200, 'DSA Grinder_', 1200, 'Building things that actually matter_', 1200, 'Open to Internships_', 1200]}
              speed={45}
              repeat={Infinity}
            />
          </div>
          <p className="mt-5 max-w-2xl text-base font-semibold text-rr-muted sm:text-lg">3rd Year CS @ SRM Ramapuram - Chennai</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button className="neo-button inline-flex w-full sm:w-auto" onClick={() => jumpTo('projects')} type="button">
              View My Work <ArrowRight size={18} />
            </button>
            <button className="ghost-button inline-flex w-full sm:w-auto" onClick={() => jumpTo('contact')} type="button">
              Let's Connect <MessageCircle size={18} />
            </button>
            <a className="neo-button inline-flex w-full sm:w-auto" href="/resume/Rohith_Rajan_V_Resume.pdf" download="Rohith_Rajan_V_Resume.pdf">
              Download Resume
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
            <StatCard className="relative min-w-0 opacity-90" label="4 Active" value="Projects" delay="0s" />
            <StatCard className="relative min-w-0 opacity-90" label="5+ Tech" value="Stacks" delay="0.8s" />
            <StatCard className="relative min-w-0 opacity-90" label="DSA Grind" value="Active" delay="1.3s" />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-rr-muted md:block">
        <ArrowDown />
      </div>
    </section>
  )
}

export default Hero

