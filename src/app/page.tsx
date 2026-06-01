'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  ArrowRight,
  Camera,
  Sparkles,
  PenTool,
  Instagram,
  Twitter,
  Trophy,
  ArrowUpRight,
  Menu,
  X,
  Linkedin,
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

/* ─── Animation Variants ─── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 } as const,
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerParent = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.08 },
  },
  viewport: { once: true, amount: 0.1 } as const,
};

const staggerItem = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
};

/* ─── Data ─── */
const navLinks = ['PROJECTS', 'SERVICES', 'ABOUT', 'CONTACT'];

const projects = [
  { name: 'Chroma Shift', category: 'Editorial', image: '/images/project-chroma.png' },
  { name: 'Soft Signal', category: 'Campaign', image: '/images/project-soft.png' },
  { name: 'Ground Zero', category: 'Lookbook', image: '/images/project-ground.png' },
  { name: 'Neon Armour', category: 'Editorial', image: '/images/project-neon.png' },
  { name: 'Second Skin', category: 'Brand Identity', image: '/images/project-second.png' },
];

const services = [
  { name: 'Brand Identity', icon: Plus, number: '01' },
  { name: 'Art Direction', icon: ArrowRight, number: '02' },
  { name: 'Photography', icon: Camera, number: '03' },
  { name: 'Creative Strategy', icon: Sparkles, number: '04' },
  { name: 'Design', icon: PenTool, number: '05' },
];

const partners = [
  '45 Degrees®',
  'Acme Corp',
  'Codecraft_',
  'Convergence',
  'CoreOS',
  'ennLabs',
];

/* ─── Page ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-[var(--font-inter),_Inter,_-apple-system,_sans-serif]">
      {/* ═══════ HEADER ═══════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
          <a href="#" className="text-base md:text-lg font-bold tracking-[0.2em] text-white">
            OVERLINE
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-[11px] font-medium tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
            <a
              href="#"
              className="ml-4 text-[11px] font-medium tracking-[0.15em] text-white border border-white/30 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/[0.06] bg-black"
            >
              <nav className="flex flex-col px-5 py-6 gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11px] font-medium tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#"
                  className="mt-2 text-[11px] font-medium tracking-[0.15em] text-white border border-white/30 px-5 py-2.5 text-center hover:bg-white hover:text-black transition-all duration-300 w-fit"
                >
                  GET IN TOUCH
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full pt-16 md:pt-[72px] overflow-hidden">
        <div className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-end">
          {/* Main hero image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-main.png"
              alt="Fashion editorial"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>

          {/* Inset image - top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block absolute top-24 right-10 lg:right-20 z-10 w-36 lg:w-44 aspect-[3/4] border border-white/10"
          >
            <Image
              src="/images/hero-inset.png"
              alt="Fashion editorial detail"
              fill
              className="object-cover"
              sizes="200px"
            />
          </motion.div>

          {/* Hero text */}
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 pb-16 md:pb-24 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white"
            >
              BRANDS THAT
              <br />
              MEAN IT.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 md:mt-8"
            >
              <p className="text-base md:text-lg text-white/70 font-light">
                Overline is a creative studio
              </p>
              <p className="text-base md:text-lg text-white/70 font-light mt-1">
                We partner with ambitious companies
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-10"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                START A PROJECT
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ PROBLEM STATEMENT ═══════ */}
      <section className="w-full py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] text-white/90">
              Most companies know they need a better brand. What they don&apos;t know is where to start.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-8 md:mt-10 max-w-2xl"
          >
            <p className="text-sm md:text-base leading-[1.7] text-white/50">
              Your company has evolved but your identity hasn&apos;t kept up. The logo feels dated,
              the website tells the wrong story, and every touchpoint looks like it was made by a
              different team. You know something needs to change, but between running the business
              and serving clients, the rebrand keeps getting pushed to next quarter.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8 md:mt-10 max-w-2xl"
          >
            <p className="text-sm md:text-base leading-[1.7] text-white/80">
              We help companies like yours close that gap with a brand that reflects where
              you&apos;re headed, not where you&apos;ve been.
            </p>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.2em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-300"
            >
              START A PROJECT
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FEATURED WORKS ═══════ */}
      <section className="w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-14 md:mb-20"
          >
            FEATURED WORKS
          </motion.h2>

          <motion.div
            {...staggerParent}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
          >
            {projects.map((project) => (
              <motion.div key={project.name} {...staggerItem}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-12 md:mt-16 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              SEE ALL
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-14 md:mb-20"
          >
            SERVICES
          </motion.h2>

          <motion.div {...staggerParent} className="max-w-3xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  {...staggerItem}
                  transition={{ ...staggerItem.transition, delay: i * 0.06 }}
                >
                  <motion.div
                    whileHover={{ paddingLeft: '1.5rem', backgroundColor: 'rgba(255,255,255,0.03)' }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between py-6 md:py-7 border-b border-white/[0.08] cursor-pointer group"
                  >
                    <div className="flex items-center gap-5 md:gap-8">
                      <span className="text-xs text-white/20 font-mono tabular-nums">
                        {service.number}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                        {service.name}
                      </span>
                    </div>
                    <Icon
                      size={18}
                      className="text-white/20 group-hover:text-white/60 group-hover:rotate-45 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════ PARTNERS ═══════ */}
      <section className="w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14"
          >
            Our partners
          </motion.h2>
          <motion.div
            {...staggerParent}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5"
          >
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                {...staggerItem}
                transition={{ ...staggerItem.transition, delay: i * 0.05 }}
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.3)' }}
                className="flex items-center justify-center px-4 py-4 md:py-5 border border-white/[0.08] text-xs md:text-sm text-white/40 hover:text-white/80 transition-colors duration-300 cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section className="w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Text */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                About us
              </h2>
              <p className="text-sm md:text-base leading-[1.7] text-white/50 max-w-lg">
                We believe the best brands are built on decisions, not decoration. We work closely
                with founders who care about how they show up and we don&apos;t stop until it feels
                right.
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-8 text-[11px] tracking-[0.2em] uppercase font-medium text-white/50 hover:text-white transition-colors duration-300"
              >
                MORE ABOUT THE STUDIO
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

            {/* Right: Image + Stats */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <Image
                  src="/images/about-team.png"
                  alt="Overline Studio team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex gap-12 md:gap-16">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
                    Since
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-white">
                    2019
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
                    Team of
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-white">7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="w-full py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                START A
                <br />
                PROJECT
              </h2>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <p className="text-sm md:text-base leading-[1.7] text-white/50 max-w-md">
                We take on a handful of projects each quarter to give every client the attention
                they deserve. If that sounds like what you&apos;re looking for, let&apos;s talk.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 mt-8 md:mt-10 px-8 py-4 bg-white text-black text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-white/90 transition-colors duration-300"
              >
                Contact
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="mt-auto w-full border-t border-white/[0.06] bg-black">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            {/* Column 1 — Studio */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] text-white mb-5">
                OVERLINE STUDIO
              </h4>
              <nav className="flex flex-col gap-3">
                {['ABOUT', 'WORKS', 'SERVICES', 'CONTACT'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] text-white mb-5">
                NAVIGATION
              </h4>
              <nav className="flex flex-col gap-3">
                {['HOME', 'PROJECTS', 'SERVICES', 'ABOUT', 'NEWS'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3 — Socials */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] text-white mb-5">
                SOCIALS
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { name: 'INSTAGRAM', icon: Instagram },
                  { name: 'TWITTER', icon: Twitter },
                  { name: 'LINKEDIN', icon: Linkedin },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-300 group"
                  >
                    <social.icon
                      size={13}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[10px] tracking-[0.15em] text-white/20 uppercase">
              COPYRIGHT 2026 ALL RIGHTS RESERVED
            </span>
            <a href="#" className="text-[10px] tracking-[0.15em] text-white/20 hover:text-white/50 uppercase transition-colors duration-300">
              NEWS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
