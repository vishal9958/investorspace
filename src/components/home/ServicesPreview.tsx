"use client";

import { motion } from "framer-motion";
import { Building2, LandPlot, ChartLine, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    id: "developer",
    title: "Developer Services",
    shortDesc: "Land sourcing, approval support and launch planning for major development projects.",
    bulletPoints: [
      "Strategic land acquisition & sourcing",
      "Government approval & zoning support",
      "Corridor launch planning & execution"
    ],
    icon: Building2,
    href: "/services/developer",
    image: "/images/developer.jpeg",
  },
  {
    id: "builder",
    title: "Builder Services",
    shortDesc: "Joint development, approval tracking and execution support for builders.",
    bulletPoints: [
      "Joint development structuring",
      "Approval tracking & compliance",
      "Timely execution & site support"
    ],
    icon: LandPlot,
    href: "/services/builder",
    image: "/images/builder.jpeg",
  },
  {
    id: "investor",
    title: "Investor Services",
    shortDesc: "Verified land parcels with clear documentation, transparent pricing and exit plans.",
    bulletPoints: [
      "100% title-cleared land parcels",
      "Transparent pricing & documentation",
      "Optimized exit strategy from day one"
    ],
    icon: ChartLine,
    href: "/services/investor",
    image: "/images/invester.jpeg",
  },
  {
    id: "all",
    title: "Services For All",
    shortDesc: "First-time buyers, NRIs and families guided step by step in simple language.",
    bulletPoints: [
      "Dedicated personal advisory team",
      "Step-by-step guidance for NRIs & families",
      "Simple & transparent documentation"
    ],
    icon: Users,
    href: "/services/all",
    image: "/images/for_all.jpeg",
  },
];

export default function Services() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const labelAnim = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  const headAnim = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-neutral-100 pb-16 overflow-hidden">
      <div className="shell section-pad max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={labelAnim}>
            <span className="inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] bg-primary/10 text-primary">
              Our Services
            </span>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headAnim}>
            <h2 id="services-heading" className="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight text-balance tracking-tight">
              Smart opportunities for <span className="text-primary">developers, builders,</span> and investors
            </h2>
          </motion.div>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          From strategic land planning to sustainable growth, we help you find the right path in the evolving market.
        </p>

        <motion.div
          className="mt-8 grid items-stretch gap-4 lg:mt-10 lg:grid-cols-12 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {/* 1. Developer Services Card (Left Tall Card) */}
          <motion.div variants={cardAnim} className="lg:col-span-5 flex [perspective:900px]">
            <div className="group relative flex w-full flex-col [transform-style:preserve-3d] transition-transform duration-[1500ms] hover:[transform:rotateY(180deg)_rotateZ(180deg)] min-h-[520px] cursor-pointer">
              
              {/* Front Side */}
              <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/10 bg-white flex flex-col justify-between [backface-visibility:hidden]">
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src={servicesData[0].image}
                    alt={servicesData[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 lg:p-6 bg-[#8D0102]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                        <Building2 className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-xl text-white sm:text-2xl">
                        {servicesData[0].title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {servicesData[0].shortDesc}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold border-white/50 text-white">
                    Hover to flip <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#720102] text-white p-6 lg:p-8 shadow-xl flex flex-col justify-between [transform:rotateY(180deg)_rotateZ(180deg)] [backface-visibility:hidden]">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                      <Building2 className="size-5" />
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {servicesData[0].title} Highlights
                    </h3>
                  </div>
                  <ul className="space-y-3.5 text-sm text-white/90">
                    {servicesData[0].bulletPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-rose-300 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-200 uppercase tracking-wider">Investor Space</span>
                  <Link href={servicesData[0].href} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#8D0102] shadow-md">
                    Explore <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">

            {/* 2. Builder Services Card */}
            <motion.div variants={cardAnim} className="flex [perspective:900px]">
              <div className="group relative flex w-full flex-col [transform-style:preserve-3d] transition-transform duration-[1500ms] hover:[transform:rotateY(180deg)_rotateZ(180deg)] min-h-[380px] cursor-pointer">
                
                {/* Front */}
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-border bg-white flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                    <img
                      src={servicesData[1].image}
                      alt={servicesData[1].title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <LandPlot className="size-5" />
                        </span>
                        <h3 className="font-display font-bold text-lg text-slate-900">
                          {servicesData[1].title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {servicesData[1].shortDesc}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold border-border text-foreground">
                      Hover to flip <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900 text-white p-6 shadow-xl flex flex-col justify-between [transform:rotateY(180deg)_rotateZ(180deg)] [backface-visibility:hidden]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                        <LandPlot className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">
                        {servicesData[1].title} Highlights
                      </h3>
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      {servicesData[1].bulletPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-rose-300">
                    <span>Investor Space</span>
                    <Link href={servicesData[1].href} className="text-white underline">Explore →</Link>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* 3. Investor Services Card */}
            <motion.div variants={cardAnim} className="flex [perspective:900px]">
              <div className="group relative flex w-full flex-col [transform-style:preserve-3d] transition-transform duration-[1500ms] hover:[transform:rotateY(180deg)_rotateZ(180deg)] min-h-[380px] cursor-pointer">
                
                {/* Front */}
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-border bg-white flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                    <img
                      src={servicesData[2].image}
                      alt={servicesData[2].title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ChartLine className="size-5" />
                        </span>
                        <h3 className="font-display font-bold text-lg text-slate-900">
                          {servicesData[2].title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {servicesData[2].shortDesc}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold border-border text-foreground">
                      Hover to flip <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900 text-white p-6 shadow-xl flex flex-col justify-between [transform:rotateY(180deg)_rotateZ(180deg)] [backface-visibility:hidden]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                        <ChartLine className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">
                        {servicesData[2].title} Highlights
                      </h3>
                    </div>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      {servicesData[2].bulletPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-rose-300">
                    <span>Investor Space</span>
                    <Link href={servicesData[2].href} className="text-white underline">Explore →</Link>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* 4. Services For All Card (Wide Bottom Card) */}
            <motion.div variants={cardAnim} className="flex sm:col-span-2 [perspective:900px]">
              <div className="group relative flex w-full flex-col [transform-style:preserve-3d] transition-transform duration-[1500ms] hover:[transform:rotateY(180deg)_rotateZ(180deg)] min-h-[260px] sm:flex-row cursor-pointer">
                
                {/* Front */}
                <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-border bg-white flex flex-col sm:flex-row [backface-visibility:hidden]">
                  <div className="relative w-full sm:w-[45%] h-48 sm:h-auto shrink-0 overflow-hidden">
                    <img
                      src={servicesData[3].image}
                      alt={servicesData[3].title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Users className="size-5" />
                        </span>
                        <h3 className="font-display font-bold text-lg text-slate-900">
                          {servicesData[3].title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {servicesData[3].shortDesc}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold border-border text-foreground">
                      Hover to flip <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900 text-white p-6 lg:p-8 shadow-xl flex flex-col justify-between [transform:rotateY(180deg)_rotateZ(180deg)] [backface-visibility:hidden]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                        <Users className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">
                        {servicesData[3].title} Highlights
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {servicesData[3].bulletPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-rose-300">
                    <span>Investor Space</span>
                    <Link href={servicesData[3].href} className="text-white underline">Explore Services →</Link>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary" href="/services">
            Explore all services <ArrowRight className="size-4" />
          </Link>
          <Link className="inline-flex items-center rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary" href="/contact">
            Enquire now
          </Link>
        </div>
      </div>
    </section>
  );
}