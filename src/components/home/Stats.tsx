"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Pause, Play } from "lucide-react";

// Counter Hook + Vertical Slide-Up Component
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
    <li
      tabIndex={0}
      onMouseEnter={() => setHoverKey((prev) => prev + 1)}
      className="group relative min-h-[8.5rem] min-w-0 cursor-default overflow-hidden border-border sm:min-h-[12rem] flex-1 max-sm:[&:nth-child(even)]:border-l max-sm:[&:nth-child(n+3)]:border-t sm:border-l sm:first:border-l-0 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    >
      <div className="absolute inset-0 bg-white transition-colors duration-300" />

      <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
        <img
          src={bgImage}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]" />
      </div>

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="font-display text-[clamp(1.6rem,3vw,2.75rem)] font-bold leading-none tracking-tight tabular-nums transition-colors duration-300 text-foreground group-hover:text-white group-focus-visible:text-white">
          <CountUpNumber key={hoverKey} value={value} suffix={suffix} />
        </p>
        <p className="mt-2 text-sm font-medium transition-colors duration-300 sm:text-base text-muted-foreground group-hover:text-white/90 group-focus-visible:text-white/90">
          {label}
        </p>
        <div className="sr-only sm:not-sr-only sm:grid sm:transition-all sm:duration-300 sm:mt-0 sm:grid-rows-[0fr] sm:opacity-0 group-hover:sm:mt-4 group-hover:sm:grid-rows-[1fr] group-hover:sm:opacity-100 group-focus-visible:sm:mt-4 group-focus-visible:sm:grid-rows-[1fr] group-focus-visible:sm:opacity-100">
          <p className="min-h-0 overflow-hidden text-sm leading-relaxed text-white/90">{desc}</p>
        </div>
      </div>
    </li>
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
    <section ref={sectionRef} className="section-pad bg-white overflow-hidden" aria-labelledby="stats-heading">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-end">
          <div className="flex h-full flex-col justify-center pb-6">
            <div className="max-w-2xl">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-primary/10 text-primary">
                  By The Numbers
                </span>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <h2 id="stats-heading" className="mt-4 font-bold text-balance text-3xl sm:text-4xl lg:text-5xl text-slate-900 sm:mt-5 tracking-tight">
                  Our Track Record In Numbers
                </h2>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
              <div aria-hidden className="mt-8 min-h-[13rem] sm:min-h-[12rem]">
                <motion.div key={activeSlide} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <p className="font-display text-[clamp(2.75rem,7vw,5rem)] font-bold leading-none tracking-tight text-primary tabular-nums">
                    <CountUpNumber key={activeSlide} value={cur.value} suffix={cur.suffix} duration={1200} />
                  </p>
                  <p className="mt-2 font-display text-[clamp(1.375rem,3vw,2rem)] font-bold leading-tight tracking-tight text-foreground">
                    {cur.label}
                  </p>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">{cur.desc}</p>
                </motion.div>
              </div>

              <Link href="/contact" className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
                <ArrowDownRight className="size-4 text-primary transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden />
                Get The Investment Kit
              </Link>

              {/* Slide controls */}
              <div role="group" aria-label="Slideshow controls" className="mt-6 flex items-center">
                <button type="button" aria-label={paused ? "Play" : "Pause"} onClick={() => setPaused((p) => !p)}
                  className="grid size-8 place-items-center rounded-full text-muted-foreground hover:text-primary">
                  {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
                </button>
                {slides.map((_, i) => (
                  <button key={i} type="button" aria-label={`Show slide ${i + 1} of ${slides.length}`} aria-current={i === activeSlide}
                    onClick={() => { setActiveSlide(i); setPaused(true); }}
                    className="group grid h-8 w-6 place-items-center">
                    <span className={`h-1.5 rounded-full transition-all duration-500 ${i === activeSlide ? "w-5 bg-primary" : "w-2 bg-border group-hover:bg-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side Character Container - Bleeds down behind the cards */}
          <motion.div
            initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            className="relative z-0 mx-auto flex h-[22rem] sm:h-[26rem] lg:h-[30rem] w-full max-w-md items-end justify-center lg:mx-0 lg:ml-auto lg:max-w-lg -mb-10 sm:-mb-14 lg:-mb-16"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={rightSideImages[activeSlide % rightSideImages.length]}
                alt="Track record showcase"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="h-full w-auto max-w-full object-contain object-bottom pointer-events-none"
              />
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Stat Cards - Higher z-index so character sits seamlessly behind this block */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 mt-0 grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-white shadow-xl sm:flex"
        >
          {statCards.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}