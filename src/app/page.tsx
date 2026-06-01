'use client';

import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { useState } from 'react';

/* ─── Animation helpers ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, amount: 0.15 },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

/* ─── Data ─── */
const navLinks = ['PROJECTS', 'SERVICES', 'ABOUT', 'CONTACT'];

const projects = [
  { name: 'Chroma Shift', category: 'Editorial' },
  { name: 'Ground Zero', category: 'Lookbook' },
  { name: 'Soft Signal', category: 'Campaign' },
  { name: 'Second Skin', category: 'Brand Identity' },
];

const services = [
  { name: 'Brand Identity', icon: Plus },
  { name: 'Art Direction', icon: ArrowRight },
  { name: 'Photography', icon: Camera },
  { name: 'Creative Strategy', icon: Sparkles },
  { name: 'Design', icon: PenTool },
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
    <div className="min-h-screen flex flex-col bg-white font-[var(--font-inter),_Inter,_-apple-system,_sans-serif]">
      {/* ═══════ HEADER ═══════ */}
      <header className="w-full border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          <span className="text-lg md:text-xl font-bold tracking-widest text-[#111]">
            OVERLINE
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-xs font-medium tracking-[0.15em] text-[#5A5A5A] hover:text-[#111] transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#111]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#e5e5e5] bg-white"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs font-medium tracking-[0.15em] text-[#5A5A5A] hover:text-[#111] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="w-full pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.h1
            {...fadeUp}
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-[#111]"
          >
            BRANDS THAT
            <br />
            MEAN IT.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 md:mt-8 text-xl md:text-2xl font-light text-[#5A5A5A]"
          >
            Overline is a creative studio
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 md:mt-14 max-w-2xl space-y-6"
          >
            <p className="text-base md:text-lg leading-[1.5] text-[#111]">
              Most companies know they need a better brand. What they don&apos;t
              know is where to start.
            </p>
            <p className="text-base md:text-lg leading-[1.5] text-[#5A5A5A]">
              Your company has evolved but your identity hasn&apos;t kept up. The
              logo feels dated, the website tells the wrong story, and every
              touchpoint looks like it was made by a different team. You know
              something needs to change, but between running the business and
              serving clients, the rebrand keeps getting pushed to next quarter.
            </p>
            <p className="text-base md:text-lg leading-[1.5] text-[#111]">
              We help companies like yours close that gap with a brand that
              reflects where you&apos;re headed, not where you&apos;ve been.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROJECTS GRID ═══════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                {...staggerChild}
                transition={{ ...staggerChild.transition, delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="cursor-pointer group"
                >
                  <div className="aspect-[4/3] bg-[#f0f0f0] rounded-sm overflow-hidden mb-5">
                    <div className="w-full h-full bg-gradient-to-br from-[#e8e8e8] to-[#d4d4d4] group-hover:from-[#ddd] group-hover:to-[#c8c8c8] transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111] group-hover:text-[#333] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs tracking-[0.2em] uppercase text-[#5A5A5A]">
                    {project.category}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ DECORATIVE ELEMENT ═══════ */}
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.div
            {...fadeUp}
            className="flex justify-between items-center w-full"
          >
            <span
              className="font-mono text-2xl md:text-4xl tracking-[0.5rem] opacity-40 select-none whitespace-pre"
              aria-hidden="true"
            >
              C      =u      )
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══════ STRATEGY SECTION ═══════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-5xl font-medium leading-[1.1] text-[#111]"
          >
            Strategy through execution.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg leading-[1.5] text-[#5A5A5A]"
          >
            We help companies build brands that work across every surface, from
            pitch decks to product screens.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 md:mt-14 w-full h-px bg-[#e5e5e5]"
          />
        </div>
      </section>

      {/* ═══════ SERVICES SECTION ═══════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.p
            {...fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-[#5A5A5A] mb-10 md:mb-14"
          >
            SERVICE
          </motion.p>

          <motion.div {...staggerContainer} className="flex flex-col">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  {...staggerChild}
                  transition={{ ...staggerChild.transition, delay: i * 0.08 }}
                >
                  <motion.div
                    whileHover={{
                      paddingLeft: '1rem',
                      backgroundColor: 'rgba(0,0,0,0.02)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between py-5 md:py-6 border-b border-[#e5e5e5] cursor-pointer group -ml-0 pl-0"
                  >
                    <span className="text-lg md:text-2xl font-medium text-[#111] group-hover:text-[#333] transition-colors duration-300">
                      {service.name}
                    </span>
                    <Icon
                      size={20}
                      className="text-[#999] group-hover:text-[#111] group-hover:rotate-45 transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════ OUR PARTNERS ═══════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.h2
            {...fadeUp}
            className="text-2xl md:text-3xl font-bold text-[#111] mb-8 md:mb-12"
          >
            Our partners
          </motion.h2>
          <motion.div
            {...staggerContainer}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            {partners.map((partner, i) => (
              <motion.span
                key={partner}
                {...staggerChild}
                transition={{ ...staggerChild.transition, delay: i * 0.06 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: '#111',
                }}
                className="inline-block px-4 py-2 md:px-5 md:py-2.5 border border-[#e5e5e5] rounded-sm text-sm md:text-base text-[#5A5A5A] hover:text-[#111] transition-colors duration-300 cursor-default"
              >
                {partner}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ ABOUT + STATS ═══════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-6">
                About us
              </h2>
              <p className="text-base md:text-lg leading-[1.5] text-[#5A5A5A] max-w-xl">
                We believe the best brands are built on decisions, not
                decoration. We work closely with founders who care about how they
                show up and we don&apos;t stop until it feels right.
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.2em] uppercase font-medium text-[#111] hover:text-[#5A5A5A] transition-colors duration-300 group"
              >
                MORE ABOUT THE STUDIO
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </motion.a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="flex items-start gap-12 md:gap-10"
            >
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Since
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#111]">
                  2020
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Team of
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[#111]">8</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#111]">
              HAVE A PROJECT
              <br />
              IN MIND?
            </h2>
            <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg leading-[1.5] text-[#5A5A5A]">
              We take on a handful of projects each quarter to give every client
              the attention they deserve. If that sounds like what you&apos;re
              looking for, let&apos;s talk.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-8 md:mt-10 px-8 py-4 bg-[#111] text-white text-sm tracking-[0.1em] uppercase font-medium rounded-sm hover:bg-[#333] transition-colors duration-300"
            >
              Contact
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="mt-auto w-full border-t border-[#e5e5e5] bg-[#fafafa]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            {/* Column 1 — Studio */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-[#111] mb-5">
                OVERLINE STUDIO
              </h4>
              <nav className="flex flex-col gap-3">
                {['ABOUT', 'WORKS', 'SERVICES', 'CONTACT'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs tracking-[0.15em] text-[#5A5A5A] hover:text-[#111] transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-[#111] mb-5">
                NAVIGATION
              </h4>
              <nav className="flex flex-col gap-3">
                {['HOME', 'PROJECTS', 'SERVICES', 'ABOUT'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs tracking-[0.15em] text-[#5A5A5A] hover:text-[#111] transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3 — Socials */}
            <div>
              <h4 className="text-sm font-bold tracking-widest text-[#111] mb-5">
                SOCIALS
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { name: 'INSTAGRAM', icon: Instagram },
                  { name: 'X (TWITTER)', icon: Twitter },
                  { name: 'AWWWARDS', icon: Trophy },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#5A5A5A] hover:text-[#111] transition-colors duration-300 group"
                  >
                    <social.icon
                      size={14}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-[11px] tracking-[0.15em] text-[#999]">
              COPYRIGHT 2026 ALL RIGHTS RESERVED
            </span>
            <span className="text-[11px] tracking-[0.15em] text-[#999]">
              NEWS
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
