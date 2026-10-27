"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/home/Testimonials";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  HardHat,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  FileCheck,
  BadgeCheck,
  Compass,
} from "lucide-react";

export default function ServicesPage() {
  const heroImages = [
    "/images/developer.jpeg",
    "/images/builder.jpeg",
    "/images/invester.jpeg",
    "/images/for_all.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const services = [
    {
      id: "developer",
      slug: "/services/developer",
      badge: "TP SANCTION & MEGA LAND",
      title: "Developer Services",
      shortDesc:
        "Building a real estate development is a complicated task requiring both deep understanding...",
      image: "/images/developer.jpeg",
      icon: Building2,
    },
    {
      id: "builder",
      slug: "/services/builder",
      badge: "JOINT VENTURE & PLOT LAYOUTS",
      title: "Builder Services",
      shortDesc:
        "We believe good architecture is a crucial foundation that influences the overall performance of a real estate...",
      image: "/images/builder.jpeg",
      icon: HardHat,
    },
    {
      id: "investor",
      slug: "/services/investor",
      badge: "HIGH YIELD LAND PORTFOLIOS",
      title: "Investor Services",
      shortDesc:
        "From design to operations, we love to solve complex challenges and exceed expectations.",
      image: "/images/invester.jpeg",
      icon: TrendingUp,
    },
    {
      id: "service-for-all",
      slug: "/services/all",
      badge: "100% TITLE CLEAR SUB-PLOTS",
      title: "Service for All",
      shortDesc:
        "Safe, transparent, and completely verified plot purchasing and advisory experience for every buyer.",
      image: "/images/for_all.jpeg",
      icon: UserCheck,
    },
  ];

  const faqs = [
    {
      q: "What does Developer Services cover in Dholera SIR?",
      a: "Land sourcing, TP (Town Planning) layout approval, NA/NOC verification, and launch planning for commercial and residential developments.",
    },
    {
      q: "Are all land parcels legally verified before recommendation?",
      a: "Yes. Every land parcel undergoes a strict 4-point verification check: Govt Approved, All NA Certified, Title Clear, and Zone Verified.",
    },
    {
      q: "How does Joint Development (JD) work for Builders?",
      a: "We connect builders directly with vetted land owners in Dholera SIR, structure legal JD agreements, and assist in sanctioning layout approvals.",
    },
  ];

  return (
    <>
      <PageTitle title="Services" />
      <main className="pt-28 bg-white dark:bg-[#0A0607] font-sans text-slate-900 dark:text-white overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden border-b border-slate-200/80 dark:border-white/5 px-6 sm:px-10 lg:px-16 bg-slate-50 dark:bg-[#0A0607]">
          <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100 dark:bg-[#0A0607]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex]}
                alt="Dholera Smart City Infrastructure"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.18, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 dark:from-[#0A0607] dark:via-[#0A0607]/90 dark:to-[#0A0607]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-[#0A0607]/60 dark:via-transparent dark:to-[#0A0607]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2.5 rounded-full border border-rose-200 dark:border-primary/40 bg-rose-50/90 dark:bg-primary/20 px-4 py-2 text-xs font-bold text-[#8D0102] dark:text-[#FF6B6B] shadow-xs backdrop-blur-md"
                >
                  <Sparkles className="size-4 text-[#8D0102] dark:text-[#FF4D4F] animate-pulse" />
                  <span> Land Advisory Services</span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.08]"
                >
                  Four Tracks. <br />
                  One <span className="text-[#8D0102] dark:text-[#FF4D4F]">Verification</span> Standard.
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
                >
                  Developers, builders, investors, and first-time buyers have unique requirements. We provide end-to-end verified certainty across every land transaction in Dholera SIR.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#8D0102] px-8 py-4 text-xs sm:text-sm font-bold text-white shadow-xl shadow-rose-900/20 hover:bg-rose-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#service-tracks"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                  >
                    <span>Explore Tracks</span>
                    <ChevronRight className="size-4 text-slate-400" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative rounded-3xl bg-white p-3 shadow-xl border border-slate-200/90">
                    <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden rounded-2xl bg-slate-100">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={heroImages[currentImageIndex]}
                          alt="Dholera Master Plan Construction"
                          initial={{ opacity: 0, scale: 1.08 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                          className="h-full w-full object-cover"
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-[#14090B]/95 backdrop-blur-md border border-slate-100 dark:border-white/10 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-[#8D0102] flex items-center justify-center text-white shrink-0 shadow-md">
                            <ShieldCheck className="size-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <span>Masterplan Advisory</span>
                              <BadgeCheck className="size-3.5 text-[#8D0102]" />
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              Verified Layouts & High-Growth Corridors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= 2x2 GRID SERVICE TRACKS (EXACT DESIGN MATCH) ================= */}
        <section id="service-tracks" className="py-24 px-6 sm:px-10 lg:px-16 bg-white dark:bg-[#0A0607] relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-rose-50 text-[#8D0102] border border-rose-100">
                <Compass className="size-3.5" /> CHOOSE YOUR SPECIALIZED TRACK
              </span>
              <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                Tailored Real Estate <span className="text-[#8D0102]">Solutions</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Each service track is backed by rigorous legal checks, verified documentation packs, and specialized execution strategies for Dholera SIR.
              </p>
            </motion.div>

            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {services.map((service) => {
                return (
                  <motion.div
                    key={service.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-[2.5rem] bg-white dark:bg-[#14090B] border border-slate-200/80 dark:border-white/8 hover:border-[#8D0102]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between p-6 sm:p-7 shadow-xs"
                  >
                    <div>
                      {/* Clickable Image Box */}
                      <Link href={service.slug} className="block relative">
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-[2rem] bg-slate-100">
                          {/* Image with smooth zoom */}
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover"
                          />

                          {/* Badge Pill Top-Left */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-white/95 backdrop-blur-md text-[#8D0102] text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
                              {service.badge}
                            </span>
                          </div>

                          {/* EXACT SMOOTH INVERTED CURVED CORNER NOTCH AT BOTTOM RIGHT */}
                          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white dark:bg-[#14090B] pointer-events-none rounded-tl-[2rem]">
                            {/* Inner smooth inverted SVG curves for natural cut effect */}
                            <svg className="absolute -top-6 right-0 size-6 text-white dark:text-[#14090B] fill-current pointer-events-none" viewBox="0 0 24 24">
                              <path d="M24 24C24 10.7452 13.2548 0 0 0H24V24Z" />
                            </svg>
                            <svg className="absolute bottom-0 -left-6 size-6 text-white dark:text-[#14090B] fill-current pointer-events-none" viewBox="0 0 24 24">
                              <path d="M24 24C24 10.7452 13.2548 0 0 0H24V24Z" />
                            </svg>
                          </div>

                          {/* FLOATING RED CIRCLE BUTTON WITH DIRECTIONAL LOOPING ARROW */}
                          <div className="absolute bottom-2 right-2 size-14 rounded-full bg-[#8D0102] group-hover:bg-slate-950 text-white flex items-center justify-center shadow-lg transition-colors duration-300 z-20 overflow-hidden">
                            <div className="relative size-6 overflow-hidden">
                              {/* Arrow 1 (Moving out to Top-Right) */}
                              <ArrowUpRight className="size-6 absolute inset-0 transition-transform duration-500 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
                              {/* Arrow 2 (Coming in from Bottom-Left) */}
                              <ArrowUpRight className="size-6 absolute inset-0 transition-transform duration-500 ease-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Content Section */}
                      <div className="mt-7">
                        <Link href={service.slug} className="group-hover:text-[#8D0102] transition-colors">
                          <h3 className="text-3xl font-black text-slate-950 tracking-tight leading-tight">
                            {service.title}
                          </h3>
                        </Link>

                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FAQS & CONSULTATION ================= */}
        <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50 text-slate-900 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mb-10"
            >
              <span className="inline-flex rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-rose-50 text-[#8D0102] border border-rose-100">
                SERVICE FAQS
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">
                Frequently Asked <span className="text-[#8D0102]">Questions</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#8D0102]/30 transition"
                  >
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2.5">
                      <FileCheck className="size-4 text-[#8D0102] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-[#8D0102] to-rose-900 p-8 rounded-3xl text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 size-40 bg-white/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-rose-200 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    <ShieldCheck className="size-3.5" /> Direct Support
                  </span>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-black text-white leading-tight">
                    Ready to start your land acquisition?
                  </h3>
                  <p className="mt-3 text-xs text-white/85 leading-relaxed font-normal">
                    Speak directly with our land advisory team in Dholera SIR for title verification, TP approvals, and site visits.
                  </p>
                </div>

                <div className="mt-8 relative z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-white px-6 py-4 text-xs font-bold text-slate-950 shadow-lg hover:bg-rose-50 transition-colors"
                  >
                    <span>Get Consultation</span>
                    <ArrowRight className="size-4 text-[#8D0102]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}