"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Pause,
  Play,
  PhoneCall,
  Sparkles,
  MapPin,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

// Cinematic high-contrast hero backgrounds
const heroImages = [
  { src: "/images/header1.jpg", alt: "Dholera Smart City Highway" },
  { src: "/images/header2.png", alt: "Smart City Infrastructure" },
  { src: "/images/header3.png", alt: "Modern Planned Layout" },
  { src: "/images/header4.png", alt: "Prime Investment Land" },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  // 0 = Project (Kesar Green Flora) first, 1 = Investment Advisory second
  const [heroTab, setHeroTab] = useState<0 | 1>(0);

  // Background photo slideshow (every 7s)
  const nextBg = useCallback(() => setSlide((s) => (s + 1) % heroImages.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(nextBg, 7000);
    return () => clearInterval(id);
  }, [paused, nextBg]);

  // Main Hero Tab auto-transition: Kesar Project first, then Investment (smooth 7s cycle)
  useEffect(() => {
    const tabTimer = setInterval(() => {
      setHeroTab((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(tabTimer);
  }, []);

  return (
    <section id="top" className="relative -mt-20 flex min-h-[100svh] sm:min-h-[92svh] items-start sm:items-center overflow-hidden" aria-label="Introduction">
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
        {/* Balanced dark gradient overlay so text remains razor sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {/* Breathing glow orb */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="shell relative w-full pb-20 pt-44 text-white sm:pb-20 sm:pt-32">
        <div className="grid items-end gap-10 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14">
          {/* Left content area: Exactly identical height & structure for zero layout jumping */}
          <div className="min-w-0 min-h-[440px] sm:min-h-[480px] flex flex-col justify-start sm:justify-center">
            <AnimatePresence mode="wait">
              {heroTab === 0 ? (
                /* ================= SLIDE 1: KESAR GREEN FLORA (PROJECT FIRST) ================= */
                <motion.div
                  key="slide-project"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <span className="pill-badge border-primary/50 text-white backdrop-blur-md bg-black/40 text-[0.65rem] sm:text-[0.7rem]">
                      <Sparkles className="size-3.5 text-primary" aria-hidden /> ONGOING MEGA PROJECT &bull; DHOLERA SIR
                    </span>
                  </div>

                  {/* Headline: Clean 2-Lines, Brand Red Accent */}
                  <h1 className="mt-4 max-w-3xl font-display text-[clamp(1.85rem,4.4vw,3.8rem)] font-bold leading-[1.12] tracking-[-0.03em] sm:mt-6">
                    <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      Kesar Green Flora:
                    </span>
                    <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      Plots in Dholera SIR on the <span className="text-primary font-bold">6-Lane Highway.</span>
                    </span>
                  </h1>

                  {/* Description: Exactly 2 lines */}
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    100% Govt. Approved, All NA &amp; NOC certified residential plots in Dholera Smart City. Just 10 minutes from the upcoming International Airport.
                  </p>

                  {/* Standard Height Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
                    <Link
                      href="/projects/kesar-green-flora"
                      className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:scale-105 hover:shadow-[0_0_25px_rgba(141,1,2,0.5)] active:scale-95 sm:px-7 sm:py-4"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Kesar Green Flora
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </Link>
                    <Link
                      href="/contact#callback"
                      className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md bg-black/20 transition-all hover:bg-white/15 hover:border-white/60 hover:scale-105 active:scale-95 sm:px-7 sm:py-4"
                    >
                      Book a Site Visit
                    </Link>
                  </div>

                  {/* Rich Details Box (Sleek Glassmorphic 4-Chip Card) */}
                  <Link
                    href="/projects/kesar-green-flora"
                    className="group mt-6 block max-w-xl rounded-2xl border border-white/20 bg-black/50 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:bg-black/65 hover:shadow-[0_0_24px_rgba(141,1,2,0.3)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary border border-primary/40">
                          <MapPin className="size-4" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="font-display text-sm font-bold text-white group-hover:text-primary transition-colors">
                              Kesar Green Flora
                            </span>
                            <span className="shrink-0 whitespace-nowrap rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                              Ongoing Project
                            </span>
                          </div>
                          <p className="truncate text-xs text-white/75 mt-0.5">
                            Ahmedabad-Dholera Expressway &amp; Airport Corridor
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        Details <ChevronRight className="size-3.5" />
                      </span>
                      <ChevronRight className="sm:hidden size-4 shrink-0 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/15 pt-2.5 sm:grid-cols-4">
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Location</span>
                        <span className="block text-xs font-bold text-white mt-0.5">6-Lane Highway</span>
                      </div>
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Airport</span>
                        <span className="block text-xs font-bold text-white mt-0.5">10 Min Drive</span>
                      </div>
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Legality</span>
                        <span className="block text-xs font-bold text-white mt-0.5">100% NA &amp; NOC</span>
                      </div>
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Plot Sizes</span>
                        <span className="block text-xs font-bold text-white mt-0.5">From 100 Sq Yd</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ) : (
                /* ================= SLIDE 2: INVESTMENT IN PROPERTIES (SECOND) ================= */
                <motion.div
                  key="slide-investment"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <span className="pill-badge border-primary/50 text-white backdrop-blur-md bg-black/40 text-[0.65rem] sm:text-[0.7rem]">
                      <ShieldCheck className="size-3.5 text-primary" aria-hidden /> VERIFIED REAL ESTATE ADVISORY
                    </span>
                  </div>

                  {/* Headline: Clean 2-Lines, Brand Red Accent, Identical Dimensions */}
                  <h1 className="mt-4 max-w-3xl font-display text-[clamp(1.85rem,4.4vw,3.8rem)] font-bold leading-[1.12] tracking-[-0.03em] sm:mt-6">
                    <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      Invest in Clear Land:
                    </span>
                    <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      Plots that are legally <span className="text-primary font-bold">verified &amp; built to grow.</span>
                    </span>
                  </h1>

                  {/* Description: Exactly 2 lines */}
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Every plot we promote is government-approved, title-verified and priced without hidden margins, so you can hold, build or exit with total peace of mind.
                  </p>

                  {/* Standard Height Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
                    <Link
                      href="/contact#callback"
                      className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:scale-105 hover:shadow-[0_0_25px_rgba(141,1,2,0.5)] active:scale-95 sm:px-7 sm:py-4"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get the Investment Kit
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md bg-black/20 transition-all hover:bg-white/15 hover:border-white/60 hover:scale-105 active:scale-95 sm:px-7 sm:py-4"
                    >
                      Explore Live Projects
                    </Link>
                  </div>

                  {/* Rich Details Box (Identically Sized 4-Chip Card for Absolute Visual Symmetry) */}
                  <Link
                    href="/company"
                    className="group mt-6 block max-w-xl rounded-2xl border border-white/20 bg-black/50 p-3.5 sm:p-4 backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:bg-black/65 hover:shadow-[0_0_24px_rgba(141,1,2,0.3)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary border border-primary/40">
                          <CheckCircle2 className="size-4" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="font-display text-sm font-bold text-white group-hover:text-primary transition-colors">
                              Investor Space Advisory
                            </span>
                            <span className="shrink-0 whitespace-nowrap rounded-full bg-primary/25 px-2 py-0.5 text-[10px] font-bold text-primary-light border border-primary/40">
                              Verified Quality
                            </span>
                          </div>
                          <p className="truncate text-xs text-white/75 mt-0.5">
                            Rigorous Legal Audit &bull; Zero Hidden Margins Guarantee
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        Learn More <ChevronRight className="size-3.5" />
                      </span>
                      <ChevronRight className="sm:hidden size-4 shrink-0 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/15 pt-2.5 sm:grid-cols-4">
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Verification</span>
                        <span className="block text-xs font-bold text-white mt-0.5">100% Clear Title</span>
                      </div>
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Audit</span>
                        <span className="block text-xs font-bold text-white mt-0.5">5-Point Check</span>
                      </div>
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Pricing</span>
                        <span className="block text-xs font-bold text-white mt-0.5">Zero Margins</span>
                      </div>
                      <div className="rounded-lg bg-white/5 px-2.5 py-1.5 border border-white/10 text-center">
                        <span className="block text-[10px] uppercase tracking-wider text-white/60">Exit Support</span>
                        <span className="block text-xs font-bold text-white mt-0.5">Resale Help</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Controls: Slide Dots & Background Photo Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHeroTab(0)}
                  aria-label="Kesar Green Flora Project"
                  className={`h-1.5 rounded-full transition-all duration-500 ${heroTab === 0 ? "w-8 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setHeroTab(1)}
                  aria-label="Investment Advisory"
                  className={`h-1.5 rounded-full transition-all duration-500 ${heroTab === 1 ? "w-8 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                />
              </div>

              {/* Photo slideshow controls */}
              <div role="group" aria-label="Hero photo controls" className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label={paused ? "Play photo slideshow" : "Pause photo slideshow"}
                  onClick={() => setPaused((p) => !p)}
                  className="grid size-7 place-items-center rounded-full text-white/70 transition-colors hover:text-white"
                >
                  {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
                </button>
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show photo ${i + 1} of ${heroImages.length}`}
                    aria-current={i === slide}
                    onClick={() => {
                      setSlide(i);
                      setPaused(true);
                    }}
                    className="group grid h-6 min-w-5 place-items-center"
                  >
                    <span
                      className={`h-1 rounded-full transition-all duration-500 ${i === slide ? "w-5 bg-white" : "w-2 bg-white/30 group-hover:bg-white/60"
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Lead form with original curtain reveal animation & aligned with horizontal line */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0% round 16px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 16px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden w-full rounded-2xl border border-white/20 bg-black/75 p-5 shadow-2xl shadow-black/60 backdrop-blur-2xl xl:block xl:mb-[46px]"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                <PhoneCall className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">Talk to an expert</p>
                <p className="text-xs text-white/75">Free consultation, callback within a day</p>
              </div>
            </div>

            <form className="mt-3.5 flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <div aria-hidden="true" className="hidden">
                <input readOnly disabled name="website" />
              </div>

              {[
                { label: "Your name", type: "text", autoComplete: "name", placeholder: "e.g. Rakesh Mehta", name: "name", inputMode: undefined },
                { label: "Phone number", type: "tel", autoComplete: "tel", placeholder: "+91 98185 81518", name: "phone", inputMode: "tel" as const },
                { label: "Email address", type: "email", autoComplete: "email", placeholder: "you@example.com", name: "email", inputMode: undefined },
              ].map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-0.5 block text-[11px] font-medium text-white/90">{field.label}</span>
                  <input
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    placeholder={field.placeholder}
                    name={field.name}
                    {...(field.inputMode ? { inputMode: field.inputMode } : {})}
                    className="w-full rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-xs text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </label>
              ))}

              <button
                type="submit"
                className="mt-1 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/30"
              >
                Request Callback <ArrowRight className="size-3.5" aria-hidden />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}