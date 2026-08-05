import { useState, useEffect, useRef, Fragment } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

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

const athletes = [
  {
    id: '001',
    name: 'Maneesha',
    photos: ['/maneesha-1.jpg', '/maneesha-2.jpg', '/maneesha-3.jpg'],
    stats: [
      { value: '3000m', label: 'Steeplechase' },
      { value: 'MP', label: 'State' },
      { value: '#001', label: 'MGTF Pick', accent: true },
    ],
    headline: `"She ran barefoot on a mud track. Now she's running for India."`,
    bio: [
      'Maneesha was training on a broken cinder track in rural Madhya Pradesh with no spikes, no coach, and no support system — just raw, undeniable speed that stopped everyone who saw her run.',
      'MGTF spotted her at a district meet. Within 30 days, she had a professional coach, a nutrition plan, proper gear, and the full backing of the Mile Club community behind her.',
      'She is Athlete #001. The first of many.',
    ],
    competedText: 'Competed at Indian Athletics Series 12, Surat — 3000m Steeplechase — 11:43.51.',
  },
  {
    id: '002',
    name: 'Lajo Saroj',
    photos: ['/Lajo saroj.jpeg'],
    stats: [
      { value: '5000m', label: 'Primary Event' },
      { value: '10,000m', label: 'Secondary Event' },
      { value: '#002', label: 'MGTF Pick', accent: true },
    ],
    headline: '5000m — 17:17.09',
    competedText: 'Competed at the 24th National Junior U-20 Federation Athletics Competition 2026, 26 April 2026.',
  },
]

function PhotoCarousel({ photos, name, id }) {
  const [current, setCurrent] = useState(0)
  const [hinted, setHinted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef(null)

  // Desktop: auto-cycle on hover
  useEffect(() => {
    if (isHovering) {
      setHinted(true)
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % photos.length)
      }, 1800)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isHovering, photos.length])

  // Mobile: tap to advance
  function handleTap() {
    setHinted(true)
    setCurrent(prev => (prev + 1) % photos.length)
  }

  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#1A3B2E] cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleTap}
    >
      {/* Photo layers */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={photos[current]}
          alt={`${name} photo ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#E76F51] z-10" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#E76F51] z-10" />

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {photos.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: i === current ? '#E76F51' : 'rgba(249,247,243,0.3)' }}
          />
        ))}
      </div>

      {/* Hint text — fades after first interaction */}
      <motion.div
        className="absolute bottom-28 right-4 z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: hinted ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#F9F7F3]/50 text-[10px] tracking-widest uppercase md:hidden">
          Tap to see more
        </p>
        <p className="text-[#F9F7F3]/50 text-[10px] tracking-widest uppercase hidden md:block">
          Hover to explore
        </p>
      </motion.div>

      {/* Name badge */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0D2318] to-transparent z-10">
        <p
          className="text-3xl font-bold text-[#F9F7F3]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {name}
        </p>
        <p className="text-[#E76F51] text-sm font-semibold tracking-widest uppercase mt-1">
          MGTF Athlete #{id}
        </p>
      </div>
    </motion.div>
  )
}

function AthleteStats({ stats }) {
  return (
    <div className="flex gap-8 mb-10">
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && <div className="w-px bg-[#1A3B2E]/20" />}
          <div>
            <p
              className={`text-4xl font-bold ${stat.accent ? 'text-[#E76F51]' : 'text-[#1A3B2E]'}`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {stat.value}
            </p>
            <p className="text-[#1A3B2E]/50 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

function AthleteBlock({ athlete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">
      <FadeUp delay={0.2}>
        <PhotoCarousel photos={athlete.photos} name={athlete.name} id={athlete.id} />
      </FadeUp>

      <div className="flex flex-col justify-center">
        <FadeUp delay={0.3}>
          <AthleteStats stats={athlete.stats} />
        </FadeUp>

        <FadeUp delay={0.4}>
          <h3
            className="text-2xl md:text-3xl font-bold text-[#1A3B2E] mb-6 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {athlete.headline}
          </h3>
        </FadeUp>

        <FadeUp delay={0.5}>
          {athlete.bio?.map((paragraph, i) => (
            <p key={i} className="text-[#1A3B2E]/70 text-base leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
          <p className="text-[#E76F51] text-sm italic leading-relaxed">
            {athlete.competedText}
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#1A3B2E]/20" />
            <p className="text-[#1A3B2E]/40 text-xs tracking-widest uppercase">
              Sponsored by Mile Club Members
            </p>
            <div className="h-px flex-1 bg-[#1A3B2E]/20" />
          </div>
        </FadeUp>
      </div>
    </div>
  )
}

export default function Athlete() {
  return (
    <section className="bg-[#F9F7F3] py-24 px-8 md:px-20 overflow-hidden">
      <FadeUp>
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          The Athlete
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2
          className="text-4xl md:text-6xl font-bold text-[#1A3B2E] leading-tight mb-16 max-w-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet our champions.
        </h2>
      </FadeUp>

      <div className="flex flex-col gap-24">
        {athletes.map(athlete => (
          <AthleteBlock key={athlete.id} athlete={athlete} />
        ))}
      </div>
    </section>
  )
}
