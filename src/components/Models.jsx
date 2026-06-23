import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}

function RunningShoeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 26c0 0 4-8 10-10s14-1 18 2l2 4H8l-4 4z" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 30h26a2 2 0 000-4H8" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 22c2-3 4-5 7-6" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 21c1-2 3-4 5-4" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="28" height="18" rx="1" stroke="#4CAF7D" strokeWidth="1.5"/>
      <path d="M2 18L20 8l18 10" stroke="#4CAF7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="24" width="8" height="10" rx="1" stroke="#4CAF7D" strokeWidth="1.5"/>
      <rect x="9" y="20" width="5" height="5" rx="0.5" stroke="#4CAF7D" strokeWidth="1.2"/>
      <rect x="26" y="20" width="5" height="5" rx="0.5" stroke="#4CAF7D" strokeWidth="1.2"/>
    </svg>
  )
}

function ModelCard({ title, subtitle, description, features, accent, icon, cta, ctaHref, delay }) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        className="relative rounded-3xl p-8 md:p-10 h-full cursor-default overflow-hidden flex flex-col"
        style={{ backgroundColor: accent === "orange" ? "#1A3B2E" : "#0D2318" }}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2 ${accent === "orange" ? "bg-[#E76F51]" : "bg-[#4CAF7D]"}`} />
        <div className="mb-6">{icon}</div>
        <p className={`text-xs font-semibold tracking-[0.3em] uppercase mb-3 ${accent === "orange" ? "text-[#E76F51]" : "text-[#4CAF7D]"}`}>{subtitle}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-[#F9F7F3] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
        <p className="text-[#F9F7F3]/60 text-base leading-relaxed mb-8">{description}</p>
        <ul className="space-y-3 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-[#F9F7F3]/80 text-sm">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent === "orange" ? "bg-[#E76F51]" : "bg-[#4CAF7D]"}`} />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a href={ctaHref} className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:gap-4 ${accent === "orange" ? "text-[#E76F51]" : "text-[#4CAF7D]"}`}>
            {cta}
          </a>
        </div>
      </motion.div>
    </FadeUp>
  )
}

export default function Models() {
  return (
    <section className="bg-[#0D2318] py-24 px-8 md:px-20">
      <FadeUp>
        <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">How We Work</p>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="text-4xl md:text-6xl font-bold text-[#F9F7F3] leading-tight mb-4 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>Two engines. One mission.</h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="text-[#F9F7F3]/50 text-base md:text-lg mb-16 max-w-xl">MGTF runs two interlocking programs that fund and feed each other in a self-sustaining flywheel.</p>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        <ModelCard
          title="Miller's Mile Club"
          subtitle="Engine 01 — Community"
          icon={<RunningShoeIcon />}
          accent="orange"
          delay={0.2}
          description="A community-funded athlete sponsorship program. 30 members x Rs.1,000/month funds one underprivileged athlete's full year — nutrition, gear, coaching, and competition travel."
          features={["Weekly athlete updates (photo + voice note)", "Monthly transparent expense reports", "Quarterly Zoom calls with the founder", "Permanent Patrons Wall recognition", "First access to MGTF events and camps", "100% of contributions go directly to athlete development"]}
          cta="Join the Mile Club"
          ctaHref="#join"
        />
        <ModelCard
          title="KhelSakha"
          subtitle="Engine 02 — Schools"
          icon={<SchoolIcon />}
          accent="green"
          delay={0.3}
          description="A complete school sports ecosystem — structured PE curriculum, a 109-feature digital fitness platform, trained sports mentors, one-click CBSE compliance, and a direct pathway for talented students into MGTF's athlete sponsorship pipeline."
          features={["Structured NEP-aligned PE curriculum (300+ activities)", "Digital platform with student fitness tracking and CBSE reports", "Certified sports mentors placed in partner schools", "FitCard assessments — every child tracked, every parent informed", "Medical safety flags for at-risk students", "Direct talent pipeline into Mile Club sponsorship"]}
          cta="Bring KhelSakha to Your School"
          ctaHref="#join"
        />
      </div>
    </section>
  )
}
