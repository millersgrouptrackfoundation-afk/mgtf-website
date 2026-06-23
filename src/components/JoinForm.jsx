import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function JoinForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  const WHATSAPP_NUMBER = '917354687210'

  return (
    <section
      id="join"
      ref={ref}
      className="bg-[#F9F7F3] py-24 px-8 md:px-20"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — pitch */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs uppercase mb-4">
            Join the Movement
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1A3B2E] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Become a Mile Club Member.
          </h2>
          <p className="text-[#1A3B2E]/60 text-base leading-relaxed mb-8">
            You run. You grow. And with every kilometre, you fund a real athlete 
            chasing an Olympic dream. Membership starts at ₹499/month.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              'Structured weekly running plan',
              'WhatsApp accountability group',
              'Monthly virtual race entry',
              "Your name on athlete's jersey",
              'Direct athlete updates',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#1A3B2E]/80 text-sm">
                <span className="text-[#E76F51] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Shivam!%20I%20want%20to%20join%20the%20Mile%20Club.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white 
                       font-semibold rounded-full hover:bg-[#1ebe57] transition-all 
                       duration-300 hover:scale-105 transform text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat with us on WhatsApp
          </a>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
            >
              <span className="text-6xl block mb-6">🏃‍♀️</span>
              <h3
                className="text-3xl font-bold text-[#1A3B2E] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                You're in the race!
              </h3>
              <p className="text-[#1A3B2E]/60">
                Shivam will reach out on WhatsApp within 24 hours. 
                Welcome to the Mile Club.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-[#1A3B2E]/5 border border-[#1A3B2E]/5"
            >
              <h3
                className="text-2xl font-bold text-[#1A3B2E] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Request to Join
              </h3>

              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#1A3B2E]/50 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-[#1A3B2E]/10 bg-[#F9F7F3] text-[#1A3B2E] placeholder-[#1A3B2E]/30 focus:outline-none focus:border-[#E76F51] transition-colors"
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#1A3B2E]/50 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#1A3B2E]/10 bg-[#F9F7F3] text-[#1A3B2E] placeholder-[#1A3B2E]/30 focus:outline-none focus:border-[#E76F51] transition-colors"
                />
              </div>

              <div className="mb-8">
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#1A3B2E]/50 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#1A3B2E]/10 bg-[#F9F7F3] text-[#1A3B2E] placeholder-[#1A3B2E]/30 focus:outline-none focus:border-[#E76F51] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A3B2E] text-[#F9F7F3] font-semibold 
                           rounded-xl hover:bg-[#E76F51] transition-all duration-300
                           hover:scale-[1.02] transform tracking-wide"
              >
                Join the Mile Club →
              </button>

              <p className="text-center text-[#1A3B2E]/30 text-xs mt-4">
                No spam. No pressure. Just running and real impact.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}