"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    label: "Free Consultation",
    title: "Discovery Call",
    subtitle: "We listen before we recommend",
    desc: "Tell us your budget, your timeline and what you want from land in Dholera. It is a conversation, not a sales pitch.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80",
    alt: "Advisor on a phone call with a client",
    tag: "Step 01",
  },
  {
    num: "02",
    label: "Document Check",
    title: "Site Verification",
    subtitle: "Title, RERA & approvals first",
    desc: "We check the title, RERA status and approvals against official records and share the findings before you commit.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80",
    alt: "Document verification and legal check",
    tag: "Step 02",
  },
  {
    num: "03",
    label: "On Site",
    title: "Site Visit",
    subtitle: "See it before you sign it",
    desc: "Visit Dholera SIR with us and see the plot, the access roads and the surroundings yourself. Pickup can be arranged.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    alt: "Clients visiting a plot site",
    tag: "Step 03",
  },
  {
    num: "04",
    label: "Paperwork",
    title: "Booking & Paperwork",
    subtitle: "Clause by clause, no surprises",
    desc: "The allotment letter, payment schedule and sale agreement are explained clause by clause before you sign.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=900&q=80",
    alt: "Signing agreement paperwork",
    tag: "Step 04",
  },
  {
    num: "05",
    label: "Post-Sale",
    title: "Post-Sale Support",
    subtitle: "One advisor, start to finish",
    desc: "Help with registration follow-up and ownership questions after the deal closes. We stay with you after the keys.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
    alt: "Advisor providing post-sale support",
    tag: "Step 05",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="how-we-work-section"
      aria-labelledby="how-we-work-heading"
      className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="inline-flex rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] bg-primary/8 text-primary border border-primary/15">
              How We Work
            </span>
            <h2
              id="how-we-work-heading"
              className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight"
            >
              Five clear steps to buy your
              <span className="text-primary"> plot in Dholera SIR</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            Talk to our team <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>

        {/* ── Desktop: Horizontal accordion ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex h-[480px] gap-2.5"
        >
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={step.num}
                layout
                onClick={() => setActive(i)}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                style={{ flex: isActive ? "3.5 1 0%" : "0.62 1 0%" }}
                className={`relative overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary border transition-colors duration-500 ${
                  isActive
                    ? "border-primary/20 shadow-xl shadow-primary/10 cursor-default"
                    : "border-slate-200 shadow-sm hover:border-slate-300 cursor-pointer bg-slate-50 hover:bg-slate-100/70"
                }`}
                aria-expanded={isActive}
              >
                {/* Bg image — only in active card */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="h-full w-full object-cover"
                  />
                  {/* dark gradient so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-900/20" />
                </motion.div>

                {/* ── COLLAPSED content ─────────────────── */}
                <AnimatePresence initial={false}>
                  {!isActive && (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-6 px-0"
                    >
                      {/* Step number */}
                      <span className="font-display text-base font-bold text-primary">
                        {step.num}
                      </span>

                      {/* Vertical label */}
                      <span
                        className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-500 select-none"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {step.label}
                      </span>

                      {/* Arrow */}
                      <ArrowRight className="size-3.5 text-slate-400" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── EXPANDED content ──────────────────── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.38, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 p-7"
                    >
                      {/* Num + tag */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-display text-5xl font-bold leading-none text-white">
                          {step.num}
                        </span>
                        <span className="rounded-full bg-primary/80 backdrop-blur-sm px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-white border border-white/20">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-primary/80 uppercase tracking-wide">
                        — {step.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/80 max-w-[360px]">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Mobile/Tablet: Vertical accordion ─────────── */}
        <div className="flex flex-col gap-2.5 lg:hidden">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isActive ? "border-primary/25 shadow-md shadow-primary/8" : "border-slate-200"
                }`}
              >
                {/* Row header */}
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className={`flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-200 ${
                    isActive ? "bg-slate-950" : "bg-white hover:bg-slate-50"
                  }`}
                  aria-expanded={isActive}
                >
                  <span className={`font-display text-2xl font-bold shrink-0 w-10 ${isActive ? "text-primary" : "text-slate-300"}`}>
                    {step.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[0.6rem] font-bold uppercase tracking-widest ${isActive ? "text-primary/70" : "text-slate-400"}`}>
                      {step.tag}
                    </p>
                    <p className={`font-display text-base font-bold truncate ${isActive ? "text-white" : "text-slate-900"}`}>
                      {step.title}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className={isActive ? "text-primary" : "text-slate-400"}
                  >
                    <ArrowRight className="size-4" />
                  </motion.span>
                </button>

                {/* Expandable body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden bg-slate-950"
                    >
                      <div className="px-5 pb-6">
                        <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
                          <img
                            src={step.image}
                            alt={step.alt}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                        </div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                          — {step.subtitle}
                        </p>
                        <p className="text-sm leading-relaxed text-white/75">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Step dots ──────────────────────────────────── */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Step ${i + 1}`}
              className={`rounded-full transition-all duration-350 ${
                i === active
                  ? "w-8 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
