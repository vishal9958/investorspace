"use client";

import { motion } from "framer-motion";
import { Quote, Star, Pause, Play } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "We were skeptical at first, but Investor Space verified every document before we paid. The team was transparent throughout.",
    name: "Aarav Sharma",
    role: "Developer · Ahmedabad",
    rating: 5,
    avatar: "AS",
  },
  {
    quote: "Got my plot registered within 30 days. No hidden charges, no delays. Highly recommend Investor Space for Dholera investments.",
    name: "Priya Shah",
    role: "NRI Investor · Dubai",
    rating: 5,
    avatar: "PS",
  },
  {
    quote: "The resale support they provided was exceptional. Got 28% returns in 2.5 years. Truly government-approved plots.",
    name: "Suresh Patel",
    role: "Retired Professional · Surat",
    rating: 5,
    avatar: "SP",
  },
  {
    quote: "Clear pricing. One rate card with every charge listed upfront. The site visit was very helpful to understand the TP zones.",
    name: "Rakesh Mehta",
    role: "Investor · Mumbai",
    rating: 5,
    avatar: "RM",
  },
  {
    quote: "Their team guided me through the entire buying process step-by-step. Never felt pressured to buy.",
    name: "Kavya Desai",
    role: "First-time Buyer · Pune",
    rating: 5,
    avatar: "KD",
  }
];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);
  const sv = { hidden: { opacity: 0, y: 28, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } } };

  return (
    <section data-paused={paused} aria-labelledby="testimonials-heading" className="partners-section section-pad relative overflow-hidden bg-background">
      <style>{`
        @keyframes partners-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .partners-track { 
          display: flex; width: max-content;
          animation: partners-left 35s linear infinite;
        }
        .partners-section[data-paused="true"] .partners-track { animation-play-state: paused; }
        .partners-row:hover .partners-track { animation-play-state: paused; }
      `}</style>
      
      <div className="shell flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
            <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-primary/10 text-primary">Testimonials</span>
            <h2 id="testimonials-heading" className="mt-4 text-balance break-words font-bold sm:mt-5 text-3xl sm:text-4xl lg:text-5xl text-primary">What Our Clients Say</h2>
            <p className="mt-4 text-base leading-relaxed sm:mt-5 md:text-lg text-muted-foreground">Feedback from developers, builders, investors and first-time buyers who worked with Investor Space.</p>
          </motion.div>
        </div>
        <button type="button" aria-label="Pause scrolling" onClick={() => setPaused(!paused)} className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-white text-primary transition-colors hover:bg-primary hover:text-white">
          {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>
      </div>

      <div className="relative mt-10 flex flex-col gap-4 sm:mt-14 sm:gap-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-32"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-32"></div>
        
        <div className="partners-row overflow-hidden">
          <div className="partners-track">
            {/* Double the list for infinite scroll */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="shrink-0 px-2 sm:px-2.5">
                <figure className="flex h-52 w-72 flex-col rounded-2xl p-5 sm:h-56 sm:w-80 sm:p-6 bg-primary text-white shadow-lg shadow-primary/25">
                  <figcaption className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold bg-white/20 text-white">{t.avatar}</span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold sm:text-base">{t.name}</p>
                        <p className="truncate text-xs sm:text-sm text-white/85">{t.role}</p>
                      </div>
                    </div>
                    <Quote className="size-5 shrink-0 text-white/85" aria-hidden />
                  </figcaption>
                  <div role="img" aria-label={`Rated ${t.rating} out of 5`} className="mt-3 flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="size-4 fill-white text-white" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-2 min-h-0 flex-1">
                    <p className="line-clamp-4 text-sm leading-relaxed sm:text-base text-white/95">"{t.quote}"</p>
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
