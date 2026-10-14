"use client";

import { motion } from "framer-motion";
import { ScrollText, ShieldCheck, Check, Landmark, Handshake, FileCheck, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WhyInvest() {
  const sv = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-investor-space" aria-labelledby="why-heading" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <span className="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider bg-red-100/80 text-primary">
              Why Investor Space
            </span>
            <h2 id="why-heading" className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Why Buy With <span className="text-primary">Investor Space</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed">
              Documents first, clear pricing and one point of contact, from your first call to registration.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Top Layer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Top Left - Transparency */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sv}
            className="lg:col-span-7 flex flex-col sm:flex-row items-end justify-between border-b border-slate-200/80 pb-6 sm:pb-0 relative min-h-[300px]"
          >
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-start shrink-0">
              <img
                src="/images/Documents.png"
                alt="Documents checklist character"
                className="h-64 sm:h-72 object-contain object-bottom"
              />
            </div>

            <div className="w-full sm:w-1/2 flex flex-col justify-center gap-3 py-6 sm:py-8 sm:pl-4">
              <span className="grid place-items-center rounded-full bg-primary text-white size-10 shadow-md shadow-primary/20">
                <ScrollText className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold tracking-wider text-primary uppercase">Transparency</p>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900 leading-snug">Documents First, Always</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We share title, approval and layout documents before you pay, so you and your lawyer can verify them.
                </p>
              </div>
              <Link href="/#how-we-work-section" className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary shadow-sm">
                See How We Work <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </motion.article>

          {/* Top Right - Verification Floating Card */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sv}
            className="lg:col-span-5 rounded-3xl bg-white p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <span className="grid place-items-center rounded-full bg-primary text-white size-10 shadow-md shadow-primary/20">
                <ShieldCheck className="size-5" />
              </span>
              <div className="mt-4">
                <p className="text-[11px] font-extrabold tracking-wider text-primary uppercase">Verification</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">Checks You Can Verify Yourself</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500">Ask for these documents for any plot in Dholera SIR:</p>
              </div>

              <ul className="mt-4 space-y-2">
                {[
                  "Government approvals verified",
                  "Title and mutation records",
                  "NA order and layout sanction",
                  "Authority scheme status",
                  "Encumbrance certificate"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <Check className="size-4 shrink-0 text-emerald-600 stroke-[3]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 mb-3">Have your own lawyer review them before you pay.</p>
              <Link href="/contact" className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary shadow-sm">
                Ask For The Documents <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </motion.article>

        </div>

        {/* Bento Grid Middle Layer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Middle Left - Red 2018 Map Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sv}
            className="group lg:col-span-5 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#b90b0b] to-[#800000] p-6 sm:p-8 text-white shadow-xl shadow-primary/20 min-h-[280px]"
          >
            {/* Background Map Image Container */}
            <div className="absolute top-1/2 right-2 -translate-y-1/2 w-3/5 sm:w-1/2 h-4/5 pointer-events-none transition-all duration-500 ease-in-out group-hover:scale-105">
              <img
                src="/images/India Map.png" // Tera India Map Image Path
                alt="India Map"
                className="w-full h-full object-contain 
                 /* Normal State: Black & White / Light White Look */
                 grayscale brightness-200 opacity-30
                 /* Hover State: Real color Effect + Slight Glow */
                 group-hover:grayscale-0 group-hover:opacity-90 group-hover:brightness-100 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
                 transition-all duration-500 ease-in-out"
              />
            </div>

            <span className="text-xs font-extrabold tracking-widest uppercase text-white/80 z-10">Since</span>

            <div className="relative z-10 mt-12">
              <p className="font-extrabold text-6xl sm:text-7xl tracking-tight leading-none text-white">2018</p>
              <p className="mt-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white/90 max-w-[200px]">
                Guiding buyers across India
              </p>
            </div>
          </motion.div>

          {/* Middle Right - Infrastructure & Aftercare */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sv}
            className="lg:col-span-7 flex flex-col sm:flex-row items-end justify-between border-b border-slate-200/80 pb-6 sm:pb-0 relative min-h-[280px]"
          >
            <div className="w-full sm:w-7/12 flex flex-col gap-6 py-6 sm:py-8">
              <article className="flex flex-col gap-2">
                <span className="grid place-items-center rounded-full bg-primary text-white size-9 shadow-md shadow-primary/20">
                  <Landmark className="size-4" />
                </span>
                <div>
                  <p className="text-[11px] font-extrabold tracking-wider text-primary uppercase">Market Context</p>
                  <h3 className="mt-0.5 text-lg font-bold text-slate-900">Infrastructure, Explained</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    We explain how the Expressway, the airport and the Tata semiconductor fab can affect a location, with sources.
                  </p>
                </div>
              </article>

              <article className="flex flex-col gap-2">
                <span className="grid place-items-center rounded-full bg-primary text-white size-9 shadow-md shadow-primary/20">
                  <Handshake className="size-4" />
                </span>
                <div>
                  <p className="text-[11px] font-extrabold tracking-wider text-primary uppercase">Aftercare</p>
                  <h3 className="mt-0.5 text-lg font-bold text-slate-900">One Point of Contact</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    The same advisor from the first call to registration, and after possession.
                  </p>
                </div>
              </article>
            </div>

            <div className="w-full sm:w-5/12 flex justify-center sm:justify-end shrink-0">
              <img
                src="/characters/agent_call.png"
                alt="Advisor character"
                className="h-60 sm:h-64 object-contain object-bottom"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom 3 Pills Grid */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
        >
          {[
            { icon: FileCheck, title: "Clear Pricing", desc: "One rate card with every charge listed upfront, so the final amount matches the quote." },
            { icon: MapPin, title: "Site Visits With Our Team", desc: "Visit the plot with an advisor who knows Dholera SIR and its TP zones." },
            { icon: TrendingUp, title: "Resale Guidance", desc: "Valuation guidance and resale help when you choose to sell." },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
              className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200/80 flex items-start gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="grid shrink-0 place-items-center rounded-full bg-primary text-white size-10 shadow-sm">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}