import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0D2318] py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#F9F7F3]/10">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-bold text-[#F9F7F3] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              MGTF
            </p>
            <p className="text-[#E76F51] text-xs tracking-widest uppercase font-semibold mb-4">
              Miller's Group Track Foundation
            </p>
            <p className="text-[#F9F7F3]/40 text-sm leading-relaxed">
              From Dust to Podium.<br />
              Gwalior, Madhya Pradesh, India.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#F9F7F3]/30 text-xs tracking-widest uppercase font-semibold mb-6">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                ['Our Mission', '#mission'],
                ['Mile Club', '#join'],
                ['KhelSakha', '#join'],
                ['The Athlete', '#'],
                ['Join Now', '#join'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#F9F7F3]/50 text-sm hover:text-[#E76F51] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              {/* Our Journey — internal link to the archive page */}
              <li>
                <Link
                  to="/our-journey"
                  className="text-[#F9F7F3]/50 text-sm hover:text-[#E76F51] transition-colors flex items-center gap-1"
                >
                  📖 Our Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#F9F7F3]/30 text-xs tracking-widest uppercase font-semibold mb-6">
              Get In Touch
            </p>
            <ul className="space-y-3 text-[#F9F7F3]/50 text-sm">
              <li>
                <a
                  href="mailto:millersgrouptrackfoundation@gmail.com"
                  className="hover:text-[#E76F51] transition-colors break-all"
                >
                  millersgrouptrackfoundation@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917354687210"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="text-[#F9F7F3]/30">
                Gwalior, MP — India
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/millersgrouptrackfoundation?igsh=MWdzZ25ibjltdGF3eA==', icon: '📸' },
                { label: 'Facebook', href: 'https://www.fb.com/l/6lp1kJRRR', icon: '📘' },
                { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A3B2E] flex items-center 
                             justify-center text-sm hover:bg-[#E76F51] transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-[#F9F7F3]/20 text-xs">
            © 2026 Miller's Group Track Foundation. All rights reserved.
          </p>
          <p className="text-[#F9F7F3]/20 text-xs">
            Built with purpose. Designed for champions.
          </p>
        </div>
      </div>
    </footer>
  )
}