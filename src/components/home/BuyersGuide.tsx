"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const checks = [
  { num: "01", title: "Government Approvals", desc: "Verify all authority sanctions, layout approvals, and government clearances for the project." },
  { num: "02", title: "Title & Ownership Records", desc: "The ownership chain and mutation records, reviewed by your own lawyer before you proceed." },
  { num: "03", title: "NA Order & Layout Sanction", desc: "Proof that the land is legally converted and the layout plan has been officially approved." },
  { num: "04", title: "Zone & Authority Status", desc: "Confirm which development zone the plot falls under and verify its current approval status." },
  { num: "05", title: "Encumbrance Certificate", desc: "Shows any loans or legal claims on the land — ensure it is free of all liabilities." },
];

export default function BuyersGuide() {
  const scrollRef = useRef<HTMLOListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const sv = { hidden: { opacity: 0, y: 28, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } } };

  return (
    <section aria-labelledby="guide-heading" className="relative isolate overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          className="absolute inset-0 size-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      <div className="shell flex min-h-[40rem] flex-col justify-between gap-10 py-14 sm:min-h-[44rem] sm:gap-12 sm:py-16 lg:min-h-[48rem] lg:py-20">
        <div className="flex flex-col gap-6 sm:gap-7">
          <div className="pr-12 sm:pr-14 lg:pr-0">
            <div className="max-w-none">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-white/10 text-white">Buyer's Guide</span>
                <h2 id="guide-heading" className="mt-4 text-balance break-words font-bold sm:mt-5 text-2xl sm:text-3xl lg:text-4xl md:whitespace-nowrap text-white">
                  <span className="text-primary">Plot Buying Checklist</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed sm:mt-5 md:text-lg max-w-2xl text-white/75">
                  Five documents to verify before you pay. Check each one yourself or with your own lawyer.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
            <div role="group" aria-label="Move between checks" className="flex gap-2">
              <button type="button" aria-label="Previous check" onClick={() => scroll("left")} className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#FF8A8A] hover:bg-white/20 hover:text-[#FF8A8A]">
                <ArrowLeft className="size-4" />
              </button>
              <button type="button" aria-label="Next check" onClick={() => scroll("right")} className="grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:border-[#FF8A8A] hover:bg-white/20 hover:text-[#FF8A8A]">
                <ArrowRight className="size-4" />
              </button>
            </div>
            <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-white underline-offset-4 transition-colors hover:text-[#FF8A8A] hover:underline">
              View Verified Projects <ArrowRight className="size-4" />
            </Link>
            <Link href="/services" className="inline-flex min-h-11 items-center text-base font-semibold text-white/85 underline-offset-4 transition-colors hover:text-[#FF8A8A] hover:underline">
              See Our Service Tracks
            </Link>
          </div>
        </div>

        <ol ref={scrollRef} aria-label="Plot buying checklist" className="relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pt-2 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pt-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {checks.map((check, i) => (
            <motion.li key={check.num} initial={{ opacity: 0, y: 28, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="min-w-[76%] snap-center sm:min-w-[44%] lg:min-w-0">
              <div className="group relative flex h-full min-h-[12.5rem] flex-col gap-3 overflow-hidden rounded-xl bg-white p-4 ring-1 transition-all duration-300 sm:min-h-[13rem] sm:p-5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] ring-black/5 hover:shadow-[0_26px_55px_-16px_rgba(178,2,2,0.6)] hover:ring-white/20">
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#B20202] to-[#8D0102] transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
                <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-3/5 [background-size:10px_10px] [mask-image:linear-gradient(to_left,black,transparent)] transition-opacity duration-300 [background-image:radial-gradient(rgba(178,2,2,0.45)_1.2px,transparent_1.6px)] group-hover:[background-image:radial-gradient(rgba(255,255,255,0.4)_1.2px,transparent_1.6px)] opacity-25 group-hover:opacity-60"></span>
                
                <div className="relative flex items-center justify-between gap-2">
                  <span className="font-display text-4xl leading-none font-bold tabular-nums transition-colors duration-300 sm:text-5xl text-neutral-300 group-hover:text-white">
                    {check.num}
                  </span>
                  <span aria-hidden className="inline-flex shrink-0 items-center gap-1.5 rounded-full py-1 pr-2.5 pl-1 text-[11px] font-semibold ring-1 transition-colors duration-500 bg-neutral-100 text-neutral-500 ring-neutral-200 group-hover:bg-white/15 group-hover:text-white/85 group-hover:ring-white/30">
                    To verify
                  </span>
                </div>
                
                <h3 className="relative text-base leading-tight font-bold capitalize transition-colors duration-300 sm:text-lg lg:min-h-[2.6em] text-foreground group-hover:text-white">
                  {check.title}
                </h3>
                <p className="relative text-[13px] leading-relaxed transition-colors duration-300 text-muted-foreground group-hover:text-white/90">
                  {check.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
