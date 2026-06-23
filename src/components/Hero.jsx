import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'

// ── 3D Animated Sphere ──────────────────────────────────────────────
function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#E76F51"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

// ── Hero Section ─────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0D2318]">

      {/* 3D Canvas — fills the right half visually */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#E76F51" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#1A3B2E" />
          <pointLight position={[0, 0, 3]} intensity={1} color="#ffffff" />
          <AnimatedSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
          />
        </Canvas>
      </div>

      {/* Dark gradient overlay so text is readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D2318] via-[#0D2318]/80 to-transparent" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-20 max-w-3xl">

        {/* Foundation label */}
        <motion.p
          className="text-[#E76F51] font-semibold tracking-[0.3em] text-xs md:text-sm uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Miller's Group Track Foundation
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#F9F7F3] leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From Dust<br />
          <span className="text-[#E76F51]">to Podium.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-[#F9F7F3]/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We find raw talent in India's dusty tracks and give them everything 
          they need to reach the world stage — coaching, nutrition, gear, and a 
          community that believes in them.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#join"
            className="px-8 py-4 bg-[#E76F51] text-white font-semibold rounded-full 
                       hover:bg-[#d4603f] transition-all duration-300 text-center
                       hover:scale-105 transform"
          >
            Join the Mile Club
          </a>
          <a
            href="#mission"
            className="px-8 py-4 border border-[#F9F7F3]/30 text-[#F9F7F3] font-semibold 
                       rounded-full hover:border-[#E76F51] hover:text-[#E76F51] 
                       transition-all duration-300 text-center"
          >
            Our Mission ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="text-[#F9F7F3]/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-[#E76F51]/50"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

    </section>
  )
}