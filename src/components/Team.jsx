import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

// Shows initials on coloured background if photo fails
function PhotoWithFallback({ src, alt, initials, accent }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1A3B2E]">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-2"
          style={{ borderColor: accent, color: accent, fontFamily: "'Playfair Display', serif" }}
        >
          {initials}
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  )
}

const team = [
  {
    name: 'Shivam Singh Bhadoriya',
    initials: 'SS',
    role: 'Founder & Head Coach',
    quote: 'Lived the problem. Built the solution.',
    bio: 'First-generation entrepreneur from Gwalior. Built MGTF and KhelSakha solo while working part-time to fund the mission. Secretary, Amateur Athletics Association Gwalior Corporation. Previously HOD Sports at a 2000+ student CBSE school. Mentored by Tim RowBerry, Olympic coach of Sifan Hassan. Son of a mason. Delivered Zomato orders to pay EMIs while building this.',
    photo: '/shivam.jpg',
    accent: '#E76F51',
  },
  {
    name: 'Tim RowBerry',
    initials: 'TR',
    role: 'Mentor to Founder',
    quote: '6 Olympic medals. One mission.',
    bio: 'Olympic coach of Sifan Hassan — 6 medals across Tokyo 2020 and Paris 2024. Former Nike Oregon Project coach. Provides elite coaching methodology, athlete selection guidance, and organizational strategy to MGTF. No other Indian grassroots foundation has access to this level of mentorship.',
    photo: '/tim.jpg',
    accent: '#4CAF7D',
  },
  {
    name: 'Shakti Raj Sharma',
    initials: 'SR',
    role: 'Co-Founder & Director',
    quote: 'The quiet backbone.',
    bio: 'Community leader from Gwalior who funded the initial Section 8 registration and 24-month Phase Zero budget. Son of Sunil Sharma (former MLA candidate, Vidhansabha 15). Distributes food and clothes in Gwalior\'s slums during festivals. The reason this mission exists.',
    photo: '/shakti.jpg',
    accent: '#E76F51',
  },
  {
    name: 'Dr. Dilip Tirkey',
    initials: 'DT',
    role: 'President, MGTF',
    quote: 'The moral compass.',
    bio: 'Professor at Lakshmibai National Institute of Physical Education (LNIPE), Gwalior — India\'s premier physical education institution. Bridges MGTF to academic credibility, institutional partnerships, and government sports networks. A genuine believer from Day 1.',
    photo: '/dilip.jpg',
    accent: '#4CAF7D',
  },
]

function TeamCard({ member, delay }) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        className="group relative rounded-3xl overflow-hidden bg-white border border-[#1A3B2E]/8 shadow-sm flex flex-col h-full"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* MGTF watermark badge */}
        <div className="absolute top-3 right-3 z-20 bg-[#0D2318]/70 rounded-full px-2 py-0.5">
          <span className="text-[#E76F51] text-[9px] font-bold tracking-widest">MGTF</span>
        </div>

        {/* Photo area — ~35% of card */}
        <div className="relative h-48 w-full overflow-hidden bg-[#1A3B2E] shrink-0">
          <PhotoWithFallback
            src={member.photo}
            alt={member.name}
            initials={member.initials}
            accent={member.accent}
          />
          {/* Accent bottom line */}
          <div
            className="absolute bottom-0 left-0 w-full h-1"
            style={{ backgroundColor: member.accent }}
          />
        </div>

        {/* Text content */}
        <div className="p-6 flex flex-col gap-2 flex-1">
          <p
            className="text-lg font-bold text-[#1A3B2E] leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {member.name}
          </p>

          {/* Role with accent underline */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: member.accent }}>
              {member.role}
            </p>
            <div className="mt-1.5 h-px w-10" style={{ backgroundColor: member.accent }} />
          </div>

          {/* Essence quote */}
          <p className="text-sm font-semibold italic mt-1" style={{ color: member.accent }}>
            "{member.quote}"
          </p>

          {/* Bio */}
          <p className="text-[#1A3B2E]/60 text-xs leading-relaxed mt-1">
            {member.bio}
          </p>
        </div>
      </motion.div>
    </FadeUp>
  )
}

export default function Team() {
  return (
    <section className="bg-[#F9F7F3] py-24 px-8 md:px-20">

      <FadeUp>
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          The People
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1A3B2E] leading-tight mb-4 max-w-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Team Built From the Track Up —<br className="hidden md:block" />
          Not the Boardroom Down.
        </h2>
      </FadeUp>

      <FadeUp delay={0.15}>
        <p className="text-[#1A3B2E]/50 text-base md:text-lg mb-16 max-w-xl">
          No bureaucrats. No checkbox hires. Every person chose to be here
          because the mission matters.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {team.map((member, i) => (
          <TeamCard key={i} member={member} delay={i * 0.1} />
        ))}
      </div>

    </section>
  )
}