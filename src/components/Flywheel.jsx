import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="7" r="3" stroke="#E76F51" strokeWidth="1.5"/>
        <circle cx="20" cy="7" r="3" stroke="#E76F51" strokeWidth="1.5"/>
        <path d="M4 22c0-4 3-6 6-6h8c3 0 6 2 6 6" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Community Joins',
    sub: '30 members × ₹1,000/month = one athlete fully funded.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20c0 0 3-6 8-8s10-1 13 2l1 3H6l-2 3z" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 23h18a1.5 1.5 0 000-3H6" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Athletes Funded',
    sub: 'Nutrition, gear, coaching, and travel to nationals.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#E76F51" strokeWidth="1.5"/>
        <path d="M9 10l-4 8h18l-4-8" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 15v6" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Proof Created',
    sub: 'Medals, race results, athlete stories. Real trust.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="12" width="20" height="13" rx="1" stroke="#E76F51" strokeWidth="1.5"/>
        <path d="M2 14L14 6l12 8" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="11" y="18" width="6" height="7" rx="0.5" stroke="#E76F51" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'Schools Attracted',
    sub: 'KhelSakha sold to schools. Revenue funds more athletes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="#E76F51" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="9" stroke="#E76F51" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M18 10l4-4m0 0h-3m3 0v3" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Talent Discovered',
    sub: 'Schools become scouting grounds. New athletes enter.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 22V10" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 14l4-4 4 4" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 22h16" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 18c0 0-2-4 0-8" stroke="#E76F51" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M20 18c0 0 2-4 0-8" stroke="#E76F51" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    title: 'System Grows',
    sub: 'More members → More athletes → More proof → More schools.',
  },
]

function ArrowRight() {
  return (
    <div className="hidden md:flex items-center justify-center px-1 flex-shrink-0">
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
        <path d="M0 8h20M16 3l5 5-5 5" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

function ArrowDown() {
  return (
    <div className="flex md:hidden items-center justify-center py-2">
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path d="M8 0v20M3 16l5 5 5-5" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default function Flywheel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#1A3B2E] py-24 px-8 md:px-20 overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          The System
        </p>
        <h2
          className="text-4xl md:text-6xl font-bold text-[#F9F7F3] leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Flywheel Effect.
        </h2>
        <p className="text-[#F9F7F3]/40 mt-4 max-w-md mx-auto text-sm">
          Two engines that power each other in a self-sustaining loop.
        </p>
      </motion.div>

      {/* Desktop: horizontal row. Mobile: vertical stack */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">

            {/* Step card */}
            <motion.div
              className="flex flex-col items-center text-center p-4 md:p-3 w-full md:w-36 lg:w-40 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#0D2318] border border-[#E76F51]/30 flex items-center justify-center mb-3 flex-shrink-0">
                {step.icon}
              </div>

              {/* Step number */}
              <p className="text-[#E76F51]/50 text-[10px] font-bold tracking-widest uppercase mb-1">
                0{i + 1}
              </p>

              {/* Title */}
              <p
                className="text-[#F9F7F3] font-bold text-sm leading-snug mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {step.title}
              </p>

              {/* Sub */}
              <p className="text-[#F9F7F3]/40 text-xs leading-relaxed">
                {step.sub}
              </p>
            </motion.div>

            {/* Arrow between steps (not after last) */}
            {i < steps.length - 1 && (
              <>
                <ArrowRight />
                <ArrowDown />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Loop back label */}
      <motion.div
        className="flex flex-col items-center mt-10 gap-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none" className="hidden md:block">
          <path d="M110 16 Q60 -8 10 16" stroke="#E76F51" strokeWidth="1" strokeDasharray="4 3" fill="none" strokeLinecap="round"/>
          <path d="M10 12l-4 4 4 4" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="text-[#E76F51]/60 text-xs tracking-widest uppercase italic">
          Self-sustaining loop.
        </p>
      </motion.div>

    </section>
  )
}