import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Journey', 'journey'],
  ['Contact', 'contact'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-38% 0px -56% 0px', threshold: 0 },
    )
    links.forEach(([, id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-black/55 shadow-2xl shadow-black/30 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5">
        <button className="font-display text-3xl font-black text-rr-purple drop-shadow-[0_0_18px_rgba(108,71,255,0.65)]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} type="button">
          RR
        </button>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, id]) => (
            <button className={`nav-link ${active === id ? 'active' : ''}`} key={id} onClick={() => jumpTo(id)} type="button">
              {label}
            </button>
          ))}
        </div>
        <a className="neo-button hidden lg:inline-flex" href="/resume/Rohith_Rajan_V_Resume.pdf" download="Rohith_Rajan_V_Resume.pdf">
          Download Resume
        </a>
        <button className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-white lg:hidden" onClick={() => setOpen((value) => !value)} type="button" aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-black/85 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-4">
            {links.map(([label, id]) => (
              <button className="text-left text-sm font-black uppercase text-white" key={id} onClick={() => jumpTo(id)} type="button">
                {label}
              </button>
            ))}
            <a className="neo-button inline-flex w-fit" href="/resume/Rohith_Rajan_V_Resume.pdf" download="Rohith_Rajan_V_Resume.pdf">Download Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar


