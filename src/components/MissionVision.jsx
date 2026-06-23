import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function MissionVision() {
  return (
    <section id="mission" className="bg-[#F9F7F3] py-24 px-8 md:px-20 relative overflow-hidden">

      <FadeUp>
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          Who We Are
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2
          className="text-4xl md:text-6xl font-bold text-[#1A3B2E] leading-tight mb-16 max-w-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We exist for the athlete the world forgot.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">

        {/* Mission */}
        <FadeUp delay={0.2}>
          <div className="border-t-2 border-[#E76F51] pt-8">
            <p className="text-[#E76F51] text-xs font-bold tracking-[0.25em] uppercase mb-2">
              Today
            </p>
            <h3
              className="text-2xl font-bold text-[#1A3B2E] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Mission
            </h3>
            <p className="text-[#1A3B2E]/70 text-base md:text-lg leading-relaxed">
              To identify, sponsor, and develop elite track athletes from
              underserved communities in India — providing coaching, nutrition,
              equipment, and competitive exposure so they can perform on the
              national and international stage.
            </p>
          </div>
        </FadeUp>

        {/* Vision */}
        <FadeUp delay={0.3}>
          <div className="border-t-2 border-[#1A3B2E] pt-8">
            <p className="text-[#1A3B2E] text-xs font-bold tracking-[0.25em] uppercase mb-2">
              Tomorrow
            </p>
            <h3
              className="text-2xl font-bold text-[#1A3B2E] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Vision
            </h3>
            <p className="text-[#1A3B2E]/70 text-base md:text-lg leading-relaxed">
              A future where no Indian athlete is stopped by poverty. Where
              the next Olympic medalist from India can come from any village,
              any dusty track — because a system exists to find them and back
              them fully.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Pull Quote */}
      <FadeUp delay={0.4}>
        <blockquote className="mt-20 max-w-3xl">
          <p
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A' }}
          >
            "Talent is everywhere. Opportunity is not. We are the bridge."
          </p>
          <cite className="block mt-4 text-sm text-[#E76F51] font-semibold tracking-widest uppercase not-italic">
            — Shivam, Founder, MGTF
          </cite>
          <p className="mt-3 text-sm text-[#1A3B2E]/50 italic">
            Mentored by Tim RowBerry, Olympic coach of Sifan Hassan (6 Olympic medals).
          </p>
        </blockquote>
      </FadeUp>

    </section>
  )
}