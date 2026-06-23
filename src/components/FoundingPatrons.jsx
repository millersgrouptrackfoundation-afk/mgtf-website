import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const FOUNDING_MEMBERS = [
  { name: "Sheersh Gaur", photo: "/sheersh-gaur.jpg" }
]
const TOTAL_SLOTS = 30

function PatronCard({ index, isInView }) {
  const isFilled = index < FOUNDING_MEMBERS.length
  const member = FOUNDING_MEMBERS[index]
  return (
    <motion.div
      className="rounded-2xl flex flex-col items-center justify-center text-center p-4 min-h-[110px]"
      style={{ background: "rgba(249, 247, 243, 0.06)", border: "1px solid rgba(249, 247, 243, 0.12)" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      {isFilled ? (
        <>
          <img src={member.photo} alt={member.name} className="w-10 h-10 rounded-full object-cover mb-2 border border-[#E76F51]/40" />
          <p className="text-[#F9F7F3] text-sm font-semibold leading-snug mb-1">{member.name}</p>
          <p className="text-[#E76F51] text-[10px] italic font-medium tracking-wide">Founding Patron</p>
        </>
      ) : (
        <>
          <p className="text-[#F9F7F3]/20 text-2xl mb-1">?</p>
          <p className="text-[#F9F7F3]/25 text-[10px] tracking-wide">Your Name Here</p>
        </>
      )}
    </motion.div>
  )
}

export default function FoundingPatrons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section ref={ref} className="bg-[#1A3B2E] py-24 px-8 md:px-20 border-t border-[#F9F7F3]/5">
      <motion.div className="max-w-3xl mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">The Founding Patrons</p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#F9F7F3] leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The first 30 people who believed.</h2>
        <p className="text-[#F9F7F3]/50 text-base md:text-lg leading-relaxed max-w-2xl">Every member of the Miles Club is permanently recognized here. These are the people who bet on a mission before the world saw it. Their names will remain on this wall forever. Founding Patrons. Permanent legacy.</p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mb-16">
        {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (<PatronCard key={i} index={i} isInView={isInView} />))}
      </div>
      <motion.div className="text-center mb-12" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
        <p className="text-[#F9F7F3]/30 text-sm"><span className="text-[#E76F51] font-bold text-lg">{TOTAL_SLOTS - FOUNDING_MEMBERS.length}</span> founding patron slots remaining.</p>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}>
        <p className="text-[#F9F7F3]/70 text-lg md:text-xl text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Want your name on this wall forever?</p>
        <a href="#join" className="px-8 py-4 bg-[#E76F51] text-white font-bold rounded-full hover:bg-[#d4603f] transition-all duration-300 hover:scale-105 transform text-sm tracking-wide">Join the Miles Club</a>
        <p className="text-[#F9F7F3]/30 text-xs">Rs.1,000/month. Cancel anytime. Your name stays regardless.</p>
      </motion.div>
    </section>
  )
}
