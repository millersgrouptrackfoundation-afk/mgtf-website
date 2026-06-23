import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function InitialsAvatar({ name, accent = '#E76F51' }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 border-2"
      style={{ backgroundColor: '#1A3B2E', color: accent, borderColor: accent + '40', fontFamily: "'Playfair Display', serif" }}
    >
      {initials}
    </div>
  )
}

const founders = [
  {
    name: 'Dr. Dilip Tirkey',
    role: 'President',
    profession: 'Professor, LNIPE Gwalior',
    note: 'The moral compass from Day 1.',
    accent: '#4CAF7D',
  },
  {
    name: 'Shakti Raj Sharma',
    role: 'Vice President',
    profession: 'Political associate',
    note: 'Consistent financial supporter.',
    accent: '#E76F51',
  },
  {
    name: 'Shivam Singh Bhadoriya',
    role: 'Founder & Secretary',
    profession: 'Athletics coach',
    note: 'The engine.',
    accent: '#E76F51',
  },
  {
    name: 'Mayank Barua',
    role: 'Treasurer',
    profession: 'Private bank employee',
    note: 'Childhood friend. Trusted with every rupee.',
    accent: '#4CAF7D',
  },
  {
    name: 'Dr. Dinesh Prasad',
    role: 'Medical Advisor',
    profession: 'Orthopedic surgeon',
    note: 'Provided free medical support to athletes.',
    accent: '#4CAF7D',
  },
  {
    name: 'Inspector Bhupendra Singh',
    role: 'Technical Advisor',
    profession: 'BSF Coach — World Athletics Level 2',
    note: 'Brought elite coaching methodology to the team.',
    accent: '#E76F51',
  },
  {
    name: 'Ved Prakash Rajawat',
    role: 'Outreach Coordinator',
    profession: 'Government teacher',
    note: 'Connected MGTF to communities and athletes.',
    accent: '#4CAF7D',
  },
]

const laterMembers = [
  {
    name: 'Nitesh Rai Choudhary',
    role: 'Member',
    profession: 'Indian Railways',
    note: 'Joined the mission and contributed to early operations.',
    accent: '#E76F51',
  },
  {
    name: 'Inspector Vijay Kumar Dubey',
    role: 'Member',
    profession: 'MP Police',
    note: 'Brought discipline and institutional support.',
    accent: '#4CAF7D',
  },
]

const achievements = [
  {
    icon: '🏟️',
    title: 'District Athletics Meets',
    desc: 'Hosted district-level athletics meets in collaboration with the District Sports Department, Gwalior.',
  },
  {
    icon: '☀️',
    title: 'Summer Athletics Camps',
    desc: 'Organized summer athletics camps in partnership with the District Education Department and DSYW Gwalior.',
  },
  {
    icon: '🏃',
    title: 'Marathons & Cross-Country',
    desc: 'Conducted marathons and cross-country events as technical partner with the Amateur Athletics Association Gwalior Corporation.',
  },
  {
    icon: '🪖',
    title: 'BSF Collaboration',
    desc: 'Collaborated with the Border Security Force under Prahari Bal Vikas Yojna (PBVY) to provide competitive platforms for athletes.',
  },
  {
    icon: '🥇',
    title: 'West Zone National Medals',
    desc: 'Athletes like Aryan Prakash (Decathlon) and Riya (80m Hurdles) won West Zone National medals representing MGTF.',
  },
  {
    icon: '🎖️',
    title: 'Defence Placements',
    desc: 'Trained 15+ defence aspirants who secured jobs in the Army, Navy, and Police.',
  },
  {
    icon: '🤝',
    title: 'Coach Network',
    desc: 'Built a network of coaches and officials that still supports MGTF today.',
  },
]

export default function OurJourney() {
  return (
    <div className="bg-[#F9F7F3] min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Back link */}
      <div className="px-8 md:px-20 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#1A3B2E]/50 text-sm hover:text-[#E76F51] transition-colors"
        >
          ← Back to MGTF Home
        </Link>
      </div>

      {/* Section 1: Title */}
      <section className="px-8 md:px-20 py-16 max-w-4xl">
        <FadeUp>
          <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
            The Archive
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1
            className="text-5xl md:text-7xl font-bold text-[#1A3B2E] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where We Began.
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-[#1A3B2E]/60 text-lg md:text-xl leading-relaxed max-w-2xl">
            Before the social enterprise, there was a small NGO. Seven people.
            A borrowed ground. And a belief that talent should never be invisible.
          </p>
        </FadeUp>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-20">
        <div className="h-px bg-[#1A3B2E]/10 max-w-5xl" />
      </div>

      {/* Section 2: Original Founders */}
      <section className="px-8 md:px-20 py-20">
        <FadeUp>
          <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-3">
            2023
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A3B2E] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The First Believers.
          </h2>
          <p className="text-[#1A3B2E]/50 mb-12 max-w-xl">
            Seven people who showed up before there was anything to show for it.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl">
          {founders.map((f, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-white rounded-2xl p-6 border border-[#1A3B2E]/6 shadow-sm hover:shadow-md transition-shadow">
                <InitialsAvatar name={f.name} accent={f.accent} />
                <p
                  className="text-base font-bold text-[#1A3B2E] text-center mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {f.name}
                </p>
                <p
                  className="text-xs font-bold tracking-widest uppercase text-center mb-2"
                  style={{ color: f.accent }}
                >
                  {f.role}
                </p>
                <p className="text-[#1A3B2E]/50 text-xs text-center mb-3">
                  {f.profession}
                </p>
                <div className="h-px bg-[#1A3B2E]/8 mb-3" />
                <p className="text-[#1A3B2E]/60 text-xs italic text-center leading-relaxed">
                  "{f.note}"
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Section 3: Later Additions */}
      <section className="px-8 md:px-20 pb-20">
        <FadeUp>
          <h2
            className="text-2xl md:text-4xl font-bold text-[#1A3B2E] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            They Joined the Mission.
          </h2>
          <p className="text-[#1A3B2E]/50 mb-10 max-w-xl text-sm">
            Two more who believed before it was easy to.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {laterMembers.map((m, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 border border-[#1A3B2E]/6 shadow-sm">
                <InitialsAvatar name={m.name} accent={m.accent} />
                <p
                  className="text-base font-bold text-[#1A3B2E] text-center mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.name}
                </p>
                <p
                  className="text-xs font-bold tracking-widest uppercase text-center mb-2"
                  style={{ color: m.accent }}
                >
                  {m.role}
                </p>
                <p className="text-[#1A3B2E]/50 text-xs text-center mb-3">
                  {m.profession}
                </p>
                <div className="h-px bg-[#1A3B2E]/8 mb-3" />
                <p className="text-[#1A3B2E]/60 text-xs italic text-center">
                  "{m.note}"
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-20">
        <div className="h-px bg-[#1A3B2E]/10 max-w-5xl" />
      </div>

      {/* Section 4: Achievements */}
      <section className="px-8 md:px-20 py-20">
        <FadeUp>
          <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-3">
            2023 – 2024
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A3B2E] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Built With Almost Nothing.
          </h2>
          <p className="text-[#1A3B2E]/50 mb-12 max-w-xl">
            No office. No budget. No guarantee. Just work.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
          {achievements.map((a, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-white rounded-2xl p-6 border border-[#1A3B2E]/6 shadow-sm h-full">
                <div className="text-3xl mb-4">{a.icon}</div>
                <p
                  className="font-bold text-[#1A3B2E] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {a.title}
                </p>
                <p className="text-[#1A3B2E]/60 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-20">
        <div className="h-px bg-[#1A3B2E]/10 max-w-5xl" />
      </div>

      {/* Section 5: The Pause */}
      <section className="px-8 md:px-20 py-20 max-w-4xl">
        <FadeUp>
          <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-3">
            Late 2023 – Early 2026
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A3B2E] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why We Paused.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#1A3B2E]/70 text-base md:text-lg leading-relaxed border-l-2 border-[#E76F51] pl-6">
            In late 2023, the funding ran out. The original model — dependent on a
            handful of contributors — was not sustainable. The hostel dream was paused.
            The foundation went quiet. But the mission was never abandoned. The founder
            spent those two years learning, rebuilding, and designing a model that could
            never be broken by the departure of any single person. In 2026, MGTF returned
            — not as a donation-dependent NGO, but as a self-sustaining social enterprise.
          </p>
        </FadeUp>
      </section>

      {/* Section 6: The Return */}
      <section className="px-8 md:px-20 pb-20 max-w-4xl">
        <FadeUp>
          <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-3">
            2026
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#1A3B2E] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Comeback.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#1A3B2E]/70 text-base md:text-lg leading-relaxed border-l-2 border-[#1A3B2E]/20 pl-6">
            With two self-sustaining engines — the Miller's Mile Club and KhelSakha —
            MGTF is now built to last. The mission is the same. The structure is stronger.
            The journey continues.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3B2E] text-[#F9F7F3] rounded-full text-sm font-semibold hover:bg-[#E76F51] transition-all duration-300"
            >
              See Where We're Going →
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <div className="border-t border-[#1A3B2E]/10 px-8 md:px-20 py-8 flex justify-between items-center">
        <Link
          to="/"
          className="text-[#1A3B2E]/40 text-sm hover:text-[#E76F51] transition-colors"
        >
          ← Back to MGTF Home
        </Link>
        <p className="text-[#1A3B2E]/30 text-xs">
          © 2026 Miller's Group Track Foundation
        </p>
      </div>

    </div>
  )
}