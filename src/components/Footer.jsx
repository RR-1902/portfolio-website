function Footer() {
  return (
    <footer className="border-t border-rr-purple/30 px-5 py-8">
      <div className="section-inner flex flex-col items-center justify-between gap-4 text-center text-sm font-bold text-rr-muted md:flex-row">
        <p>Rohith Rajan V - 2026</p>
        <p>Built with React - Deployed on Vercel</p>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
