import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route
            path="*"
            element={
              <main className="grid min-h-screen place-items-center bg-rr-black px-6 text-white">
                <div className="max-w-xl text-center">
                  <p className="font-mono text-sm uppercase tracking-[0.24em] text-rr-purple">404</p>
                  <h1 className="mt-4 font-display text-6xl">Route Not Found</h1>
                  <a className="neo-button mt-8 inline-flex" href="/">Back Home</a>
                </div>
              </main>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
