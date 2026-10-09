"use client";

import { motion } from "framer-motion";
import { Building2, LandPlot, ChartLine, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const riseVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-neutral-100 pb-16 overflow-hidden">
      <div className="shell section-pad">
        <div className="max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={riseVariants}>
            <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-primary/10 text-primary">
              Our Services
            </span>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={riseVariants}>
            <h2 id="services-heading" className="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight text-balance">
              <span className="text-accent-gradient block">
                Smart opportunities for developers, builders, and investors
              </span>
            </h2>
          </motion.div>
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          From land planning to sustainable growth, we help you find the right path in Dholera's evolving market.
        </p>

        <div className="mt-8 grid items-stretch gap-4 lg:mt-10 lg:grid-cols-12 lg:gap-5">

          {/* 1. Developer Services Card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={riseVariants}
            className="lg:col-span-5 flex"
          >
            <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#8D0102] ring-[#8D0102]/40 hover:ring-white/60 focus-within:ring-2 focus-within:ring-white">

              {/* Image Container with z-0 */}
              <div className="relative z-0 w-full h-52 sm:h-64 lg:h-72 shrink-0 overflow-hidden bg-black/10">
                <Image
                  src="/images/developer.jpeg"
                  alt="Developer Services"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Text Content Container with z-10 */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-5 lg:p-6 bg-gradient-to-b from-[#8D0102] to-[#6e0102]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                      <Building2 className="size-5" />
                    </span>
                    <h3 className="font-display font-bold text-xl text-white sm:text-2xl">
                      <Link className="transition-colors after:absolute after:inset-0 after:content-[''] focus-visible:outline-none" href="/services/developer">
                        Developer Services
                      </Link>
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
            </article>
          </motion.div>

          {/* Right Grid Column */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">

            {/* 2. Builder Services Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={riseVariants} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-white ring-black/5 hover:ring-primary/30">
                <div className="relative z-0 w-full h-44 sm:h-48 overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/builder.jpeg"
                    alt="Builder Services"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <LandPlot className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        <Link className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary focus-visible:outline-none" href="/services/builder">
                          Builder Services
                        </Link>
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Joint development, approval tracking and execution support for builders working in Dholera.
                    </p>
                  </div>
                  <span aria-hidden="true" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-black/15 text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </motion.div>

            {/* 3. Investor Services Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={riseVariants} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-white ring-black/5 hover:ring-primary/30">
                <div className="relative z-0 w-full h-44 sm:h-48 overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/invester.jpeg"
                    alt="Investor Services"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ChartLine className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        <Link className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary focus-visible:outline-none" href="/services/investor">
                          Investor Services
                        </Link>
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Plots in Dholera SIR with clear documents, transparent pricing and an exit plan from the start.
                    </p>
                  </div>
                  <span aria-hidden="true" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-black/15 text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </motion.div>

            {/* 4. Services For All Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={riseVariants} className="flex sm:col-span-2">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl shadow-sm ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl bg-white ring-black/5 hover:ring-primary/30 sm:flex-row">
                <div className="relative z-0 w-full sm:w-[45%] h-48 sm:h-auto shrink-0 overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/for_all.jpeg"
                    alt="Services For All"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 35vw"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between p-5 lg:p-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="size-5" />
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        <Link className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary focus-visible:outline-none" href="/services/all">
                          Services For All
                        </Link>
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      First-time buyers, NRIs and families guided step by step in simple language.
                    </p>
                  </div>
                  <span aria-hidden="true" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors border-black/15 text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </motion.div>

          </div>
        </div>

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