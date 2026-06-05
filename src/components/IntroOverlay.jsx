import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import gsap from 'gsap'

function IntroOverlay() {
  const overlayRef = useRef(null)
  const logoRef = useRef(null)
  const [show, setShow] = useState(() => sessionStorage.getItem('rr-intro-played') !== 'true')

  useEffect(() => {
    if (!show) return

    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        sessionStorage.setItem('rr-intro-played', 'true')
        setShow(false)
      },
    })

    timeline
      .fromTo(logoRef.current, { opacity: 0, scale: 0.82, filter: 'blur(18px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8 })
      .to(overlayRef.current, { yPercent: -100, duration: 0.75, delay: 1.55 })

    return () => timeline.kill()
  }, [show])

  if (!show) return null

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-black text-center text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        autoPlay
        muted
        playsInline
        preload="auto"
        src="/media/portfolio-video.mp4"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,71,255,0.22),rgba(0,0,0,0.82)_58%,#000_100%)]" />
      <div className="relative z-10">
        <div ref={logoRef} className="font-display text-8xl font-black tracking-normal text-rr-purple drop-shadow-[0_0_38px_rgba(108,71,255,0.82)]">
          RR
        </div>
        <div className="mt-5 min-h-7 font-mono text-sm text-rr-muted md:text-base">
          <TypeAnimation sequence={['Building things that actually matter.', 1000]} speed={45} cursor />
        </div>
      </div>
    </div>
  )
}

export default IntroOverlay

