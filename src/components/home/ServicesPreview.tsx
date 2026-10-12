"use client";

import { motion } from "framer-motion";
import { Building2, LandPlot, ChartLine, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const card = {
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
      <div className="shell section-pad">
        <div className="max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={labelAnim}>
            <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-primary/10 text-primary">
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
          From land planning to sustainable growth, we help you find the right path in Dholera's evolving market.
        </p>

        <motion.div
          className="mt-8 grid items-stretch gap-4 lg:mt-10 lg:grid-cols-12 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >

          {/* 1. Developer Services Card */}
          <motion.div variants={card} className="lg:col-span-5 flex">
            <Link href="/services/developer" className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-card">

              {/* Image Box */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <img
                  src="/images/developer.jpeg"
                  alt="Developer Services"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-1 flex-col justify-between p-5 lg:p-6 bg-[#8D0102]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                      <Building2 className="size-5" />
                    </span>
                    <h3 className="font-display font-bold text-xl text-white sm:text-2xl transition-colors focus-visible:outline-none">
                      Developer Services
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Land sourcing, approval support and launch planning for development projects in Dholera SIR.
                  </p>
                </div>

                <span aria-hidden="true" className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-white/50 text-white group-hover:bg-white group-hover:text-[#8D0102]">
                  Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">

            {/* 2. Builder Services Card */}
            <motion.div variants={card} className="flex">
              <Link href="/services/builder" className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-card ring-border hover:ring-primary/30">
                <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                  <img
                    src="/images/builder.jpeg"
                    alt="Builder Services"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <LandPlot className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground transition-colors group-hover:text-primary focus-visible:outline-none">
                        Builder Services
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Joint development, approval tracking and execution support for builders working in Dholera.
                    </p>
                  </div>
                  <span aria-hidden="true" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-border text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* 3. Investor Services Card */}
            <motion.div variants={card} className="flex">
              <Link href="/services/investor" className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-card ring-border hover:ring-primary/30">
                <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                  <img
                    src="/images/invester.jpeg"
                    alt="Investor Services"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ChartLine className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground transition-colors group-hover:text-primary focus-visible:outline-none">
                        Investor Services
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Plots in Dholera SIR with clear documents, transparent pricing and an exit plan from the start.
                    </p>
                  </div>
                  <span aria-hidden="true" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-border text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* 4. Services For All Card */}
            <motion.div variants={card} className="flex sm:col-span-2">
              <Link href="/services/all" className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-card ring-border hover:ring-primary/30 sm:flex-row">
                <div className="relative w-full sm:w-[45%] h-48 sm:h-auto shrink-0 overflow-hidden">
                  <img
                    src="/images/for_all.jpeg"
                    alt="Services For All"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground transition-colors group-hover:text-primary focus-visible:outline-none">
                        Services For All
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      First-time buyers, NRIs and families guided step by step in simple language.
                    </p>
                  </div>
                  <span aria-hidden="true" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-border text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
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