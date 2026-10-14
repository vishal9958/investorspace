"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, BadgeCheck, Pause, Play, PhoneCall } from "lucide-react";

const heroImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80", alt: "Aerial view of Dholera SIR planned development" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", alt: "Modern plot layout" },
  { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80", alt: "Investment property" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", alt: "Smart city development" },
];

const words = ["Invest", "in", "properties", "that", "are", "legally"];
const words2 = ["verified", "and", "built", "to", "grow."];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setSlide((s) => (s + 1) % heroImages.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const blurUp = { hidden: { opacity: 0, filter: "blur(10px)", y: "0.6em" }, visible: { opacity: 1, filter: "blur(0px)", y: 0 } };

  return (
    <section id="top" className="relative -mt-20 flex min-h-[92svh] items-center overflow-hidden" aria-label="Introduction">
      {/* Background slider */}
      <div className="absolute inset-x-0 -top-[10%] h-[115%]">
        {heroImages.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 size-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === slide ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
        {/* Rich layered overlay — stronger left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        {/* Breathing glow orb */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/25 blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="shell relative w-full pb-20 pt-32 text-white sm:pb-24">
        <div className="grid items-end gap-10 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14">
          {/* Left content */}
          <motion.div
            className="min-w-0"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
          >
            <motion.span variants={fadeUp} transition={{ duration: 0.6 }} className="pill-badge border-white/40 text-white/90">
              <ShieldCheck className="size-3.5" aria-hidden /> Verified Real Estate Advisory
            </motion.span>

            <h1 className="sr-only">Invest in plots that are legally clear and built to grow.</h1>

            <div aria-hidden="true" className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold leading-[1.0] tracking-[-0.03em] sm:mt-7">
              <motion.span
                className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } } }}
              >
                {words.map((word, i) => (
                  <motion.span key={i} variants={blurUp} transition={{ duration: 0.6 }} className="inline-block mr-[0.25em]">
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="block text-white"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.9 } } }}
              >
                {words2.map((word, i) => (
                  <motion.span key={i} variants={blurUp} transition={{ duration: 0.6 }}
                    className={`inline-block mr-[0.25em] ${i === 0 || i === 4 ? "text-accent-gradient" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            <motion.p variants={fadeUp} transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white sm:mt-6 sm:text-lg drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
            >
              Every plot we promote is government-approved, title-verified and priced without hidden margins, so you can hold, build or exit with complete confidence.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
            >
              <Link href="/contact#callback" className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:scale-105 hover:shadow-[0_0_30px_rgba(141,1,2,0.5)] active:scale-95 sm:px-7 sm:py-4">
                <span className="relative z-10 flex items-center gap-2">
                  Get the Investment Kit
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link href="/projects" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/60 hover:scale-105 active:scale-95 sm:px-7 sm:py-4">
                Explore Live Projects
              </Link>
            </motion.div>

            <motion.ul variants={fadeUp} transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80 sm:mt-14 sm:gap-x-10"
            >
              {[
                { text: "100% title-verified", gold: false },
                { text: "Zero hidden charges", gold: true },
                { text: "Resale & rental assistance", gold: false },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <BadgeCheck className={`size-4 shrink-0 ${item.gold ? "text-yellow-400" : "text-primary"}`} aria-hidden />
                  <span className={item.gold ? "text-gold-gradient font-semibold" : ""}>{item.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* Slide controls */}
            <div role="group" aria-label="Hero photo controls" className="mt-8 flex items-center gap-1 sm:mt-10">
              <button type="button" aria-label={paused ? "Play photo slideshow" : "Pause photo slideshow"}
                onClick={() => setPaused((p) => !p)}
                className="grid size-8 place-items-center rounded-full text-white/80 transition-colors hover:text-white"
              >
                {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
              </button>
              {heroImages.map((_, i) => (
                <button key={i} type="button" aria-label={`Show photo ${i + 1} of ${heroImages.length}`} aria-current={i === slide}
                  onClick={() => { setSlide(i); setPaused(true); }}
                  className="group grid h-8 min-w-6 place-items-center"
                >
                  <span className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-7 bg-primary" : "w-2.5 bg-white/40 group-hover:bg-white/70"}`} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Lead form */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0% round 16px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 16px)" }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden w-full rounded-2xl border border-white/25 bg-black/70 p-6 shadow-2xl shadow-black/60 backdrop-blur-2xl xl:block"
          >
            <motion.div
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                <PhoneCall className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">Talk to an expert</p>
                <p className="text-xs text-white/80">Free consultation, callback within a working day</p>
              </div>
            </motion.div>

            <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div aria-hidden="true" className="hidden">
                <input readOnly disabled name="website" />
              </div>

              {[
                { label: "Your name", type: "text", autoComplete: "name", placeholder: "e.g. Rakesh Mehta", name: "name", inputMode: undefined },
                { label: "Phone number", type: "tel", autoComplete: "tel", placeholder: "+91 98185 81518", name: "phone", inputMode: "tel" as const },
                { label: "Email address", type: "email", autoComplete: "email", placeholder: "you@example.com", name: "email", inputMode: undefined },
              ].map((field, i) => (
                <motion.label
                  key={field.name}
                  className="block"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 1.7 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="mb-1 block text-xs font-medium text-white/80">{field.label}</span>
                  <input
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    placeholder={field.placeholder}
                    name={field.name}
                    {...(field.inputMode ? { inputMode: field.inputMode } : {})}
                    className="w-full rounded-full border border-white/30 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-white/60 transition-all duration-200"
                  />
                </motion.label>
              ))}

              <motion.button
                type="submit"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 2.05, ease: [0.34, 1.56, 0.64, 1] }}
                className="mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/30"
              >
                Request Callback <ArrowRight className="size-4" aria-hidden />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}