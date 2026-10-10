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

const words = ["Invest", "in", "Dholera", "SIR", "plots", "that", "are", "legally"];
const words2 = ["clear", "and", "built", "to", "grow."];

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/30" />
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
              <ShieldCheck className="size-3.5" aria-hidden /> Dholera SIR Land Advisory
            </motion.span>

            <h1 className="sr-only">Invest in Dholera SIR plots that are legally clear and built to grow.</h1>

            <div aria-hidden="true" className="mt-6 max-w-4xl font-display text-[clamp(2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight sm:mt-7">
              <motion.span
                className="block text-white"
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
              className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg"
            >
              Every plot we promote is government-approved, title-verified and priced without hidden margins, so you can hold, build or exit with complete confidence.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
            >
              <Link href="/contact#callback" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-95 sm:px-7 sm:py-4">
                Get the Investment Kit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link href="/projects" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 active:scale-95 sm:px-7 sm:py-4">
                Explore Live Projects
              </Link>
            </motion.div>

            <motion.ul variants={fadeUp} transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80 sm:mt-14 sm:gap-x-10"
            >
              {["100% title-verified", "Zero hidden charges", "Resale & rental assistance"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <BadgeCheck className="size-4 shrink-0 text-primary" aria-hidden /> {item}
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
            className="hidden w-full rounded-3xl border border-white/25 bg-black/45 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl xl:block"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                <PhoneCall className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">Talk to an expert</p>
                <p className="text-xs text-white/80">Free consultation, callback within a working day</p>
              </div>
            </div>
            <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              {/* Honeypot Fixed: tabIndex removed */}
              <div aria-hidden="true" className="hidden">
                <input readOnly disabled name="website" />
              </div>
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-white/80">Your name</span>
                <input type="text" autoComplete="name" required minLength={2} maxLength={100} placeholder="e.g. Rakesh Mehta" name="name"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-white/60" />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-white/80">Phone number</span>
                <input type="tel" inputMode="tel" autoComplete="tel" required placeholder="+91 98765 43210" name="phone"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-white/60" />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-white/80">Email address</span>
                <input type="email" autoComplete="email" required maxLength={200} placeholder="you@example.com" name="email"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-white/60" />
              </label>
              <button type="submit"
                className="mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-95 disabled:opacity-60"
              >
                Request Callback <ArrowRight className="size-4" aria-hidden />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}