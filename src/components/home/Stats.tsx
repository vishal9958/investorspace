"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Pause, Play, Sparkles } from "lucide-react";

function CountUpNumber({ value, suffix = "", duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="inline-block tabular-nums"
    >
      {count}{suffix}
    </motion.span>
  );
}

const slides = [
  { value: 12, suffix: "+", label: "Cities We're Active In", desc: "Live investor corridors tracked across Gujarat, from Dholera SIR to Ahmedabad's ring roads." },
  { value: 1850, suffix: "+", label: "Happy Investors", desc: "Buyers who booked through us and received full documentation before paying a rupee." },
  { value: 24, suffix: "%", label: "Avg. Return", desc: "Average appreciation seen by investors who exited through our resale desk in the last 3 years." },
  { value: 100, suffix: "%", label: "Title-Verified", desc: "Every plot we list clears a legal title search and zone-approval check before it goes live." },
];

const rightSideImages = [
  "/characters/agent_growth.png",
  "/characters/agent_home.png",
  "/characters/agent_consult.png",
  "/characters/agent_verified.png",
];

const statCards = [
  {
    value: 12,
    suffix: "+",
    label: "Cities Covered",
    desc: "Live investor corridors tracked across Gujarat, from Dholera SIR to Ahmedabad's ring roads.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
  },
  {
    value: 1850,
    suffix: "+",
    label: "Happy Investors",
    desc: "Buyers who booked through us and received full documentation before paying a rupee.",
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
  },
  {
    value: 24,
    suffix: "%",
    label: "Avg. Return",
    desc: "Average appreciation seen by investors who exited through our resale desk in the last 3 years.",
    bgImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80"
  },
  {
    value: 100,
    suffix: "%",
    label: "Title-Verified",
    desc: "Every plot we list clears a legal title search and zone-approval check before it goes live.",
    bgImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80"
  },
];

function StatCard({ value, suffix, label, desc, bgImage }: { value: number; suffix: string; label: string; desc: string; bgImage: string }) {
  const [hoverKey, setHoverKey] = useState(0);

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHoverKey((prev) => prev + 1)}
      className="group relative flex-1 min-w-[220px] rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(139,29,36,0.15)] hover:border-[#8B1D24]/40 transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top Accent Crimson Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#8B1D24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Floating Image Window Reveal on Hover */}
      <div className="relative h-0 opacity-0 group-hover:h-24 group-hover:opacity-100 group-hover:mb-4 transition-all duration-500 ease-out overflow-hidden rounded-2xl">
        <img
          src={bgImage}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 group-hover:text-[#8B1D24] transition-colors duration-300">
            <CountUpNumber key={hoverKey} value={value} suffix={suffix} />
          </p>
          <Sparkles className="size-4 text-slate-300 group-hover:text-[#8B1D24] transition-colors duration-300" />
        </div>

        <p className="text-base font-bold text-slate-800 tracking-tight mt-1">
          {label}
        </p>

        <p className="text-xs leading-relaxed text-slate-500 mt-2 line-clamp-2 group-hover:text-slate-600 transition-colors">
          {desc}
        </p>
      </div>

      {/* Bottom Status Dot */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#8B1D24] transition-colors">
        <span>Verified Data</span>
        <span className="size-2 rounded-full bg-slate-300 group-hover:bg-[#8B1D24] group-hover:scale-125 transition-all duration-300" />
      </div>
    </div>
  );
}

export default function Stats() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActiveSlide((s) => (s + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  const cur = slides[activeSlide];

  const sv = {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
  };

  return (
    <section ref={sectionRef} className="section-pad bg-[#FBFBFA] overflow-hidden py-20 lg:py-28" aria-labelledby="stats-heading">
      <div className="shell max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-end mb-12">
          
          <div className="flex h-full flex-col justify-center pb-6">
            <div className="max-w-2xl">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <span className="inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest bg-[#8B1D24]/10 text-[#8B1D24]">
                  By The Numbers
                </span>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <h2 id="stats-heading" className="mt-4 font-bold text-balance text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                  Our Track Record In Numbers
                </h2>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
              <div aria-hidden className="mt-8 min-h-[12rem] sm:min-h-[11rem]">
                <motion.div key={activeSlide} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <p className="font-display text-[clamp(2.75rem,7vw,5rem)] font-black leading-none tracking-tight text-[#8B1D24] tabular-nums">
                    <CountUpNumber key={activeSlide} value={cur.value} suffix={cur.suffix} duration={1200} />
                  </p>
                  <p className="mt-2 font-display text-[clamp(1.375rem,3vw,2rem)] font-bold leading-tight tracking-tight text-slate-900">
                    {cur.label}
                  </p>
                  <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">{cur.desc}</p>
                </motion.div>
              </div>

              <Link href="/contact" className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#8B1D24] transition-colors">
                <ArrowDownRight className="size-4 text-[#8B1D24] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden />
                Get The Investment Kit
              </Link>

              {/* Slide controls */}
              <div role="group" aria-label="Slideshow controls" className="mt-6 flex items-center gap-1">
                <button type="button" aria-label={paused ? "Play" : "Pause"} onClick={() => setPaused((p) => !p)}
                  className="grid size-8 place-items-center rounded-full text-slate-500 hover:text-[#8B1D24] transition-colors">
                  {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
                </button>
                {slides.map((_, i) => (
                  <button key={i} type="button" aria-label={`Show slide ${i + 1} of ${slides.length}`} aria-current={i === activeSlide}
                    onClick={() => { setActiveSlide(i); setPaused(true); }}
                    className="group grid h-8 w-6 place-items-center">
                    <span className={`h-1.5 rounded-full transition-all duration-500 ${i === activeSlide ? "w-6 bg-[#8B1D24]" : "w-2 bg-slate-200 group-hover:bg-slate-400"}`} />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side Character Container - Anchor Locked */}
          <motion.div
            initial={{ opacity: 0, y: 26 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.8 }}
            className="relative z-0 mx-auto flex h-[280px] sm:h-[340px] lg:h-[380px] w-full max-w-sm items-end justify-center lg:mx-0 lg:ml-auto lg:max-w-md overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={rightSideImages[activeSlide % rightSideImages.length]}
                alt="Track record showcase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute bottom-0 h-full w-auto max-h-[380px] object-contain object-bottom pointer-events-none select-none"
              />
            </AnimatePresence>
          </motion.div>

        </div>

        {/* 4 Floating Light Cards Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {statCards.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}