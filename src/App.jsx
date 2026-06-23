/*
 * Pretoria Auto Electrical & Air-conditioning — Landing Page
 * -----------------------------------------------------------
 * Positioning angle: "We find what others miss" — the workshop
 *   Pretoria drivers find after someone else got it wrong.
 *   Emotional resolution before technical capability.
 *
 * Top trust signals: RMI 5-Star approved, MIWA member,
 *   3-month guarantee on all work, 24-hour service and
 *   field callouts, Land Rover & Jaguar specialists,
 *   referral-driven customer base (~55 Google reviews, 4.4/5)
 *
 * Primary CTA rationale: "Call us now" tel: link in amber
 *   drives immediate phone conversion — the lowest-friction
 *   action for a stressed vehicle owner. WhatsApp as secondary.
 *
 * Font pairing: Space Grotesk for headings — structural,
 *   slightly technical, confident without being cold. Pairs
 *   industrial precision with human warmth. DM Sans for body —
 *   highly readable at 18px for the older-skewing demographic.
 *
 * Accent colour #F5A623 warm amber — CTAs, quote marks, section
 *   labels, trust bar highlights, hover states. Never as
 *   large-area background fill. Warm, trustworthy, independent.
 */

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SalesBar from './components/SalesBar'
import './index.css'

const img = p => import.meta.env.BASE_URL + p.replace(/^\//, '')

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const StarIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
)

// ── Navigation ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#1C1C1E]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-8 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex flex-col leading-none group shrink-0" aria-label="Pretoria Auto Electrical home">
            <span
              className="text-white text-lg font-bold tracking-tight group-hover:text-[#F5A623] transition-colors duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pretoria Auto Electrical
            </span>
            <span className="text-white/60 text-[9px] font-medium tracking-[0.18em] uppercase leading-none mt-0.5">
              & Air-conditioning
            </span>
          </a>

          <nav className="hidden nav:flex items-center gap-7" aria-label="Main navigation">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 text-sm font-medium tracking-wide hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0829676245"
              className="inline-flex items-center justify-center min-h-[44px] bg-[#F5A623] text-[#1C1C1E] text-xs font-bold tracking-[0.18em] uppercase px-6 hover:bg-[#e09518] transition-colors duration-150"
            >
              Call Now
            </a>
          </nav>

          <button
            className="nav:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px] text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="w-6 h-0.5 bg-current block" />
            <span className="w-6 h-0.5 bg-current block" />
            <span className="w-4 h-0.5 bg-current block self-start" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#1C1C1E] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 flex items-center justify-center w-11 h-11 text-white"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" aria-hidden="true">
                <path d="M3 3l14 14M17 3L3 17" />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-10 px-8 w-full" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-white text-4xl hover:text-[#F5A623] transition-colors duration-150"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:0829676245"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="text-[#F5A623] text-2xl font-bold"
                onClick={() => setOpen(false)}
              >
                082 967 6245
              </motion.a>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center justify-center min-h-[56px] bg-[#F5A623] text-[#1C1C1E] text-sm font-bold tracking-[0.18em] uppercase px-10 w-full max-w-xs"
                onClick={() => setOpen(false)}
              >
                Get In Touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    let mounted = true
    async function initVanta() {
      try {
        const [THREE, { default: NET }] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.net.min'),
        ])
        if (!mounted || !vantaRef.current) return
        vantaEffect.current = NET({
          el: vantaRef.current,
          THREE,
          color: 0xF5A623,
          backgroundColor: 0x1C1C1E,
          points: 8,
          maxDistance: 22,
          spacing: 18,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          speed: 0.4,
        })
      } catch (e) {
        // Vanta fallback: solid background remains
      }
    }
    initVanta()
    return () => {
      mounted = false
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  return (
    <section
      ref={vantaRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: '#1C1C1E' }}
      aria-labelledby="hero-heading"
    >
      {/* Clip-path diagonal bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-[#F9F8F6] z-10"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-8 lg:px-8 py-40 md:py-52">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-8"
        >
          RMI 5-Star Approved Workshop, Mayville
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-white leading-[1.05] tracking-tight max-w-[820px] mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          We find what others miss.
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '3rem', opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="h-px bg-[#F5A623] mb-8"
          aria-hidden="true"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-white/70 text-lg md:text-xl leading-relaxed max-w-[580px] mb-12"
        >
          We test first, explain what we found, and only then do we fix it. That is why most of our customers were sent here by someone who has been through what you are going through now.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.42, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <a
            href="tel:0829676245"
            className="inline-flex items-center justify-center min-h-[52px] bg-[#F5A623] text-[#1C1C1E] font-bold text-sm tracking-[0.18em] uppercase px-8 hover:bg-[#e09518] transition-colors duration-150"
          >
            Call Us Now
          </a>
          <a
            href="https://wa.me/27829676245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[52px] border border-white/25 text-white font-medium text-sm tracking-wide px-8 hover:border-white/60 hover:bg-white/5 transition-all duration-150"
          >
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.54, duration: 0.7 }}
          className="flex items-center gap-3 mt-16"
          aria-label="Google rating: 4.4 out of 5, 55 reviews"
        >
          <div className="flex gap-0.5" aria-hidden="true">
            {[1, 2, 3, 4].map(i => (
              <StarIcon key={i} className="w-4 h-4 text-[#F5A623]" />
            ))}
            <svg className="w-4 h-4 text-[#F5A623]" viewBox="0 0 20 20" aria-hidden="true">
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#555" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half-star)"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <p className="text-white/50 text-sm">
            <span className="text-white/90 font-semibold">4.4 / 5</span> on Google&nbsp;&nbsp;·&nbsp;&nbsp;55+ reviews
          </p>
        </motion.div>

        {/* RMI 5-Star badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute bottom-32 md:bottom-36 right-8 lg:right-12 hidden md:flex flex-col items-center justify-center w-28 h-28 rounded-full border-2 border-[#F5A623]/30 bg-[#1C1C1E]/80 backdrop-blur-sm"
        >
          <span className="text-[#F5A623] text-[10px] font-bold tracking-[0.2em] uppercase">RMI</span>
          <span className="text-white text-xl font-bold leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>5-Star</span>
          <span className="text-white/50 text-[9px] font-medium tracking-wider uppercase mt-0.5">Approved</span>
        </motion.div>
      </div>
    </section>
  )
}

// ── Trust Bar ─────────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    'RMI 5-Star Approved',
    'MIWA Member',
    '3-Month Guarantee',
    '24-Hour Service',
    'Land Rover & Jaguar Specialists',
    'Warranty Claims Welcome',
  ]

  return (
    <section className="bg-[#F9F8F6] border-b border-[#e8e6e2]" aria-label="Trust indicators">
      <div className="max-w-[1180px] mx-auto px-8 py-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {items.map(item => (
            <motion.div key={item} variants={fadeUp} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0" aria-hidden="true" />
              <span className="text-[#1C1C1E] text-sm font-medium tracking-wide whitespace-nowrap">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── Problem-First Intro ──────────────────────────────────────────────────────

function Intro() {
  return (
    <section className="bg-[#F9F8F6] py-28 md:py-36" aria-labelledby="intro-heading">
      <div className="max-w-[680px] mx-auto px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-6">
            Honest Diagnostics Since Day One
          </motion.p>

          <motion.h2
            id="intro-heading"
            variants={fadeUp}
            className="text-[#1C1C1E] leading-tight mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            You have probably already been let down.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#3a3a3a] text-lg leading-relaxed mb-6">
            Your car has a fault. You took it somewhere. They replaced a part, charged you, and the same problem is still there. Now you need a workshop that actually tests before it touches, explains what it found in plain language, and only fixes what needs fixing.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#3a3a3a] text-lg leading-relaxed mb-6">
            That is exactly why Pretoria Auto Electrical & Air-conditioning exists. This is the workshop other customers send their friends to. Not because of advertising, but because the work gets done right, the price is honest, and the problem gets solved the first time.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#3a3a3a] text-lg leading-relaxed">
            RMI 5-Star approved and MIWA member. Independent, owner-operated, and answerable to you directly. Every repair carries a 3-month guarantee.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICE_CARDS = [
  {
    num: '01',
    symptom: "Your car won't start",
    title: 'Auto Electrical Diagnostics & Repair',
    desc: 'Alternators, starters, wiring faults, ECU box repair, engine management lights. We diagnose accurately, explain clearly, and fix it properly. All makes and models.',
  },
  {
    num: '02',
    symptom: "Your aircon isn't cold",
    title: 'Vehicle Air-conditioning',
    desc: 'R134 re-gassing, vacuum testing, leak detection, compressor repair, and custom pipe manufacturing. Your cabin comfortable again, without guesswork on the bill.',
  },
  {
    num: '03',
    symptom: 'A warning light has come on',
    title: 'Fault Finding & ECU Repair',
    desc: 'Advanced diagnostics for warning lights, intermittent faults, and problems other workshops could not solve. We test independently and only proceed when we know the answer.',
  },
  {
    num: '04',
    symptom: 'Your engine needs serious work',
    title: 'Mechanical Workshop',
    desc: 'Engine overhauls, gearbox rebuilds, general servicing. 24-hour callouts and on-site field service for breakdowns and fleet vehicles that cannot move.',
  },
]

function Services() {
  return (
    <section
      id="services"
      className="bg-[#1C1C1E] py-28 md:py-36 relative"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1180px] mx-auto px-8 pb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-5">What We Fix</p>
          <h2
            id="services-heading"
            className="text-white leading-tight max-w-[680px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Tell us the symptom. We will find the cause.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICE_CARDS.map(s => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="bg-[#262628] border border-white/[0.06] p-8 md:p-10 group"
            >
              <p className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-4">{s.num}</p>
              <p
                className="text-white/40 text-sm font-medium tracking-wide uppercase mb-3"
              >
                {s.symptom}
              </p>
              <h3
                className="text-white text-xl md:text-2xl mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
              >
                {s.title}
              </h3>
              <p className="text-[#b0b0b0] text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="tel:0829676245"
            className="inline-flex items-center justify-center min-h-[52px] bg-[#F5A623] text-[#1C1C1E] font-bold text-sm tracking-[0.18em] uppercase px-10 hover:bg-[#e09518] transition-colors duration-150"
          >
            Call 082 967 6245
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Reviews ───────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    quote: 'Morne and his team is absolutely amazing. They definitely know their stuff. Professional service with good prices. Definitely won\'t be using anyone else ever again.',
    author: 'JM Brandt',
    stars: 5,
  },
  {
    quote: 'I have seldom seen this good service! Staff helpful and went beyond their duty. Thanks for prompt and efficient help from Gerrard!',
    author: 'Susan Wiegand',
    stars: 5,
  },
  {
    quote: 'This is the best fastest service I have ever received from anyone. Henry is professional, the problem was quickly diagnosed and sorted out, without any hassle, in record time. At a fair price. I can definitely recommend the young man.',
    author: 'Lionel Hotlzhausen',
    stars: 5,
  },
]

function Reviews() {
  return (
    <section id="reviews" className="bg-[#F9F8F6] py-28 md:py-36" aria-labelledby="reviews-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-5">What Customers Say</p>
          <h2
            id="reviews-heading"
            className="text-[#1C1C1E] leading-tight max-w-[580px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Referred by someone who has been where you are.
          </h2>
          <p className="text-[#6b7280] text-base mt-4">
            4.4 / 5 on Google&nbsp;&nbsp;·&nbsp;&nbsp;55+ reviews&nbsp;&nbsp;·&nbsp;&nbsp;
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pretoria+Auto+Electrical+%26+Air-conditioning+254+Fred+Nicholson+Street+Mayville+Pretoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5A623] font-semibold hover:text-[#1C1C1E] transition-colors duration-200"
            >
              Read all reviews on Google
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {REVIEWS.map((r, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="bg-white border border-[#e8e6e2] p-8 flex flex-col gap-4"
            >
              <div className="flex gap-1" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: r.stars }).map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-[#F5A623]" />
                ))}
              </div>
              <span
                className="text-[#F5A623] font-black leading-none"
                aria-hidden="true"
                style={{ fontFamily: 'Georgia, serif', fontSize: '3.5rem', lineHeight: '0.65' }}
              >
                &ldquo;
              </span>
              <p className="text-[#3a3a3a] text-base leading-relaxed flex-1">{r.quote}</p>
              <p className="text-[#6b7280] text-sm font-medium">{r.author}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── About / Why Us ────────────────────────────────────────────────────────────

function About() {
  const credentials = [
    { label: 'RMI 5-Star Approved', detail: 'Independently audited workshop quality standard' },
    { label: 'MIWA Member', detail: 'Motor Industry Workshop Association' },
    { label: '3-Month Guarantee', detail: 'On all work completed' },
    { label: '24-Hour Callouts', detail: 'Breakdowns and on-site field service' },
  ]

  return (
    <section
      id="about"
      className="bg-[#1C1C1E] py-28 md:py-36 relative"
      style={{ clipPath: 'polygon(0 6%, 100% 0, 100% 100%, 0 100%)' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1180px] mx-auto px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-5">
              About the Workshop
            </motion.p>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="text-white leading-tight mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              Independent. Owner-operated. Answerable to you.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#c0c0c0] text-lg leading-relaxed mb-6">
              Pretoria Auto Electrical & Air-conditioning is an independent workshop in Mayville where your car gets seen by experienced technicians, not routed through a corporate process. Every diagnosis is honest, every explanation is in plain language, and every quote reflects only the work that needs doing.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#c0c0c0] text-lg leading-relaxed mb-12">
              From ECU box repair and advanced fault finding to aircon re-gassing and full engine overhauls, the team handles work that larger chains send away. Land Rover and Jaguar owners trust us specifically, and warranty claims are always welcome.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-5">
              {credentials.map(c => (
                <motion.div key={c.label} variants={fadeUp} className="flex gap-4 items-start">
                  <span
                    className="bg-[#F5A623] shrink-0 mt-1"
                    style={{ width: '2px', minHeight: '22px', display: 'block' }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white text-sm font-bold tracking-wide">{c.label}</p>
                    <p className="text-[#888] text-sm mt-0.5">{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src={img('images/hero.webp')}
                alt="Pretoria Auto Electrical workshop, Mayville"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F5A623]" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Contact & Find Us ─────────────────────────────────────────────────────────

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'bg-white border border-[#e0ddd8] text-[#1C1C1E] text-base px-4 h-12 focus:outline-none focus:border-[#F5A623] transition-colors duration-200 placeholder:text-[#aaa] w-full'

  return (
    <section id="contact" className="bg-[#F9F8F6] py-28 md:py-36" aria-labelledby="contact-heading">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-5">Get In Touch</p>
          <h2
            id="contact-heading"
            className="text-[#1C1C1E] leading-tight max-w-[680px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Ready when you are.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[#6b7280] text-xs font-bold tracking-[0.22em] uppercase mb-3">Call</p>
              <a
                href="tel:0829676245"
                className="text-[#1C1C1E] font-bold hover:text-[#F5A623] transition-colors duration-200 block"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
              >
                082 967 6245
              </a>
              <a
                href="tel:0123351006"
                className="text-[#6b7280] text-lg font-medium hover:text-[#F5A623] transition-colors duration-200 block mt-1"
              >
                012 335 1006
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[#6b7280] text-xs font-bold tracking-[0.22em] uppercase mb-3">WhatsApp</p>
              <a
                href="https://wa.me/27829676245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1C1E] text-lg font-semibold hover:text-[#F5A623] transition-colors duration-200"
              >
                Message us on WhatsApp
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[#6b7280] text-xs font-bold tracking-[0.22em] uppercase mb-3">Email</p>
              <a
                href="mailto:autoelec@netactive.co.za"
                className="text-[#1C1C1E] text-lg font-semibold hover:text-[#F5A623] transition-colors duration-200"
              >
                autoelec@netactive.co.za
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[#6b7280] text-xs font-bold tracking-[0.22em] uppercase mb-3">Trading Hours</p>
              <p className="text-[#1C1C1E] text-lg font-semibold">Monday to Friday</p>
              <p className="text-[#6b7280] text-base">07:30 to 16:30</p>
              <p className="text-[#999] text-sm mt-1">24-hour callouts for emergencies</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-[#6b7280] text-xs font-bold tracking-[0.22em] uppercase mb-3">Address</p>
              <address className="not-italic">
                <p className="text-[#1C1C1E] text-lg font-semibold">254 Fred Nicholson Street</p>
                <p className="text-[#6b7280] text-base">Mayville, Pretoria, 0084</p>
              </address>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=254+Fred+Nicholson+Street+Mayville+Pretoria+0084"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#F5A623] text-sm font-bold tracking-wide hover:text-[#1C1C1E] transition-colors duration-200"
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full h-52 overflow-hidden">
              <iframe
                title="Pretoria Auto Electrical location map"
                src="https://maps.google.com/maps?q=254+Fred+Nicholson+Street+Mayville+Pretoria+0084&output=embed&z=15"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="flex flex-col gap-5 h-full justify-center py-16">
                <p className="text-[#F5A623] text-xs font-bold tracking-[0.22em] uppercase">Message Sent</p>
                <p
                  className="text-[#1C1C1E]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '2rem' }}
                >
                  We will get back to you shortly.
                </p>
                <p className="text-[#6b7280] text-base leading-relaxed">
                  For urgent matters, call directly on{' '}
                  <a href="tel:0829676245" className="text-[#1C1C1E] font-semibold hover:text-[#F5A623] transition-colors">
                    082 967 6245
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Enquiry form">
                <p className="text-[#6b7280] text-xs font-bold tracking-[0.22em] uppercase mb-1">
                  Not sure what is wrong? Tell us what your car is doing.
                </p>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[#1C1C1E] text-sm font-medium">Your Name</label>
                  <input id="name" type="text" required value={form.name} onChange={set('name')} className={inputClass} placeholder="Name Surname" autoComplete="name" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[#1C1C1E] text-sm font-medium">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="you@email.com" autoComplete="email" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[#1C1C1E] text-sm font-medium">Describe the Problem</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={set('message')}
                    className="bg-white border border-[#e0ddd8] text-[#1C1C1E] text-base px-4 py-3 focus:outline-none focus:border-[#F5A623] transition-colors duration-200 placeholder:text-[#aaa] resize-none w-full"
                    placeholder="e.g. Car won't start, aircon blowing warm, warning light on the dashboard..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-h-[52px] bg-[#F5A623] text-[#1C1C1E] font-bold text-sm tracking-[0.18em] uppercase px-8 hover:bg-[#e09518] transition-colors duration-150 mt-2"
                >
                  Send Message
                </button>
                <p className="text-[#999] text-xs">No obligation. We will point you in the right direction.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'Do you come to me, or do I have to bring my car in?',
    a: 'Both. You can bring your vehicle to our Mayville workshop at 254 Fred Nicholson Street, or we come to you. We offer 24-hour callouts and on-site field service for breakdowns, fleet vehicles, and situations where moving the car is not practical.',
  },
  {
    q: 'My car was already diagnosed somewhere else. Can you check their work?',
    a: 'Yes, and we do this regularly. A significant number of our customers arrive after being misdiagnosed by another workshop or chain store. We test independently, explain what we find in plain language, and only proceed with repairs once you understand and approve the work.',
  },
  {
    q: 'How long does a typical auto electrical repair take?',
    a: 'Most standard auto electrical repairs, including alternator and starter work, are completed the same day. More complex jobs like ECU box repair or full wiring harness work may take longer. We will give you an honest time estimate before any work begins.',
  },
  {
    q: 'Do you work on all makes and models, including Land Rover and Jaguar?',
    a: 'Yes. We service all makes and models, and we specialise in Land Rover and Jaguar. We also welcome warranty claims and hold RMI 5-Star approval and MIWA membership.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-white py-28 md:py-36" aria-labelledby="faq-heading">
      <div className="max-w-[780px] mx-auto px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#F5A623] text-xs font-bold tracking-[0.28em] uppercase mb-5">Questions</p>
          <h2
            id="faq-heading"
            className="text-[#1C1C1E] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Common questions, straight answers.
          </h2>
        </motion.div>

        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col divide-y divide-[#e8e6e2]"
        >
          {FAQS.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <dt>
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 focus:outline-none group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[#1C1C1E] text-base md:text-lg font-semibold leading-snug group-hover:text-[#F5A623] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#F5A623] shrink-0 mt-1 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd id={`faq-answer-${i}`}>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#4a4a4a] text-base leading-relaxed pb-6 max-w-[680px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

// ── WhatsApp FAB ──────────────────────────────────────────────────────────────

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/27829676245"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 md:right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors duration-150"
    >
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#1C1C1E] pt-20 pb-12" aria-label="Site footer">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-[#F5A623] text-[10px] font-bold tracking-[0.22em] uppercase mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              <a href="tel:0829676245" className="text-[#e0e0e0] text-sm hover:text-white transition-colors">
                082 967 6245
              </a>
              <a href="tel:0123351006" className="text-[#e0e0e0] text-sm hover:text-white transition-colors">
                012 335 1006
              </a>
              <a href="mailto:autoelec@netactive.co.za" className="text-[#e0e0e0] text-sm hover:text-white transition-colors">
                autoelec@netactive.co.za
              </a>
              <address className="not-italic text-[#999] text-sm leading-relaxed mt-1">
                254 Fred Nicholson St<br />
                Mayville, Pretoria<br />
                0084
              </address>
            </div>
          </div>

          <div>
            <p className="text-[#F5A623] text-[10px] font-bold tracking-[0.22em] uppercase mb-6">Hours</p>
            <div className="flex flex-col gap-1 mb-8">
              <p className="text-[#e0e0e0] text-sm">Monday to Friday</p>
              <p className="text-[#e0e0e0] text-sm">07:30 to 16:30</p>
              <p className="text-[#999] text-sm mt-1">24-hour emergency callouts</p>
            </div>
            <p className="text-[#F5A623] text-[10px] font-bold tracking-[0.22em] uppercase mb-4">Find Us</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=254+Fred+Nicholson+Street+Mayville+Pretoria+0084"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999] text-sm hover:text-white transition-colors"
            >
              Google Maps
            </a>
          </div>

          <div>
            <p
              className="text-white text-2xl font-bold mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Pretoria Auto Electrical
            </p>
            <p className="text-[#F5A623] text-[10px] font-bold tracking-[0.22em] uppercase mb-6">
              & Air-conditioning
            </p>
            <p className="text-[#999] text-sm leading-relaxed max-w-[340px] mb-6">
              Independent, owner-operated auto electrical workshop in Mayville. RMI 5-Star approved, MIWA member, trusted by Pretoria drivers for honest diagnostics and quality repairs.
            </p>
            <div className="flex items-center gap-2" aria-label="Google rating: 4.4 out of 5">
              <div className="flex gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4].map(i => (
                  <StarIcon key={i} className="w-3.5 h-3.5 text-[#F5A623]" />
                ))}
              </div>
              <p className="text-[#888] text-xs">4.4 / 5 on Google · 55+ reviews</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-5">
          <p className="text-[#555] text-xs text-center md:text-left">
            RMI 5-Star Approved · MIWA Member · 254 Fred Nicholson St, Mayville, 0084 · {new Date().getFullYear()} Pretoria Auto Electrical & Air-conditioning
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCredit() {
  return (
    <div className="bg-[#141414] py-4 border-t border-white/[0.04]">
      <p className="text-center text-[#3a3a3a] text-xs">
        Website design by{' '}
        <a
          href="https://flintandfuel.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          Flint and Fuel Creative
        </a>
      </p>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <div className="pb-24">
        <Nav />
        <main>
          <Hero />
          <TrustBar />
          <Intro />
          <Services />
          <Reviews />
          <About />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        <FooterCredit />
      </div>
      <WhatsAppFAB />
      <SalesBar />
    </>
  )
}
