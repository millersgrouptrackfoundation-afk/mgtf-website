import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'

function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, end, duration])

  return count
}

function StatCard({ end, suffix = '', label, sublabel, delay, started }) {
  const count = useCounter(end, 2000, started)

  return (
    <motion.div
      className="flex flex-col items-center text-center p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <p className="text-6xl md:text-8xl font-bold text-[#F9F7F3] leading-none mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </p>
      <p className="text-[#E76F51] font-semibold text-sm tracking-widest uppercase mb-2">{label}</p>
      {sublabel && (
        <p className="text-[#F9F7F3]/40 text-xs max-w-[140px] leading-relaxed">{sublabel}</p>
      )}
    </motion.div>
  )
}

export default function ImpactNumbers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { end: 2, suffix: '', label: 'Athletes Sponsored', sublabel: 'Maneesha & Lajo Saroj' },
    { end: 2, suffix: '+', label: 'Schools Targeted', sublabel: 'KhelSakha Pipeline' },
    { end: 83, suffix: '+', label: 'Coach Network', sublabel: 'Certified coaches scouting talent across MP' },
  ]

  return (
    <section ref={ref} className="bg-[#1A3B2E] py-24 px-8 md:px-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">Our Impact</p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#F9F7F3] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Small numbers.<br />
          <span className="text-[#E76F51]">Enormous meaning.</span>
        </h2>
      </motion.div>

      <div className="w-px h-12 bg-[#E76F51]/30 mx-auto mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y md:divide-y-0 divide-[#F9F7F3]/10 max-w-4xl mx-auto">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} delay={i * 0.15} started={isInView} />
        ))}
      </div>

      <motion.div
        className="text-center mt-16 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-[#F9F7F3]/30 text-xs tracking-widest uppercase">Every number is a real person. Every rupee is tracked.</p>
        <p className="text-[#E76F51] text-xs italic">Athlete #001 — Maneesha — competed at Indian Athletics Series 12, Surat. 3000m Steeplechase. 11:43.51.</p>
        <p className="text-[#E76F51] text-xs italic">Athlete #002 — Lajo Saroj — competed at the 24th National Junior U-20 Federation Athletics Competition 2026. 5000m — 17:17.09.</p>
      </motion.div>
    </section>
  )
}