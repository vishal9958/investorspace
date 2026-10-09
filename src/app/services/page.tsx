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
  CheckCircle2,
  Sparkles,
  ChevronRight,
  FileCheck,
  BadgeCheck,
  MapPin,
  Compass,
  FileText,
  Layers,
} from "lucide-react";

export default function ServicesPage() {
  // Hero Background Carousel Images
  const heroImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541888086925-0c1bb6789c26?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
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
        "End-to-end mega parcel sourcing, TP layout sanctions, NA/NOC verification, and legal infrastructure roadmap for top real estate developers.",
      features: [
        "Town Planning (TP 1 to TP 6) Sanctions & Clearances",
        "5 to 100+ Acre Single-Owner Mega Sourcing",
        "Complete Non-Agricultural (NA) & Title Direct Search",
        "Industrial & Logistics Corridor Alignment",
      ],
      details: {
        parcelSize: "5 - 150+ Acres",
        target: "Mega Builders & Infrastructure Firms",
        approvals: "DSIRDA & Town Planning Dept",
        primeZones: "Activation Area, TP2 East & Expressway",
      },
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      icon: Building2,
    },
    {
      id: "builder",
      slug: "/services/builder",
      badge: "JOINT VENTURE & PLOT LAYOUTS",
      title: "Builder Services",
      shortDesc:
        "Structured Joint Development (JD) models, layout approvals, sub-plot mapping, and construction clearance tracking for residential & commercial builders.",
      features: [
        "Verified Joint Development (JD / JDA) Matchmaking",
        "Sub-Plot Demarcation & Layout Approval",
        "Utility, Drainage & Access Road Connectivity Verification",
        "RERA & Local Authority File Processing Support",
      ],
      details: {
        parcelSize: "1 - 10 Acres Sub-Plots",
        target: "Commercial & Residential Developers",
        approvals: "RERA Gujarat & GIDC / DSIRDA",
        primeZones: "High Density Residential & Commercial Hubs",
      },
      image:
        "https://images.unsplash.com/photo-1541888086925-0c1bb6789c26?q=80&w=1000&auto=format&fit=crop",
      icon: HardHat,
    },
    {
      id: "investor",
      slug: "/services/investor",
      badge: "HIGH YIELD LAND PORTFOLIOS",
      title: "Investor Advisory",
      shortDesc:
        "Data-driven land acquisition along the 10-Lane Expressway, Dholera International Airport, and Solar Park corridors with ROI projections.",
      features: [
        "10-Lane Expressway & Airport Corridor Sourcing",
        "10-Year Appreciation Yield & Exit Horizon Modeling",
        "Full Title Verification & Legal Clearance Certificate",
        "Hassle-Free Resale & Secondary Market Management",
      ],
      details: {
        parcelSize: "500 Sq. Yards to 5+ Acres",
        target: "HNIs, NRI Investors & Wealth Funds",
        approvals: "100% Freehold & Direct Title",
        primeZones: "Expressway Frontage & TP1 Core",
      },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      icon: TrendingUp,
    },
    {
      id: "service-for-all",
      slug: "/services/all",
      badge: "100% TITLE CLEAR SUB-PLOTS",
      title: "Service for All",
      shortDesc:
        "Safe, transparent, and completely verified plot purchasing and advisory experience for every buyer, site tours, registry support, and immediate possession handover.",
      features: [
        "100% Govt Approved Sub-Plots in Prime TP Zones",
        "End-to-End Legal Paperwork & Sub-Registrar Filing",
        "Guided On-Site Dholera Infrastructure Tours",
        "Transparent Direct Landowner Pricing (No Hidden Fees)",
      ],
      details: {
        parcelSize: "200 to 1000 Sq. Yards",
        target: "Individual Home Builders & Plot Buyers",
        approvals: "NA Residentially Sanctioned",
        primeZones: "Smart City City Center & TP2 Sector A",
      },
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
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
      <main className="pt-20 bg-white font-sans text-slate-900 overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden border-b border-slate-200/80 px-6 sm:px-10 lg:px-16 bg-slate-50">
          <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
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

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white"></div>
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
                  className="inline-flex items-center gap-2.5 rounded-full border border-rose-200 bg-rose-50/90 px-4 py-2 text-xs font-bold text-[#8D0102] shadow-xs backdrop-blur-md"
                >
                  <Sparkles className="size-4 text-[#8D0102] animate-pulse" />
                  <span>Dholera SIR Land Advisory Services</span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-950 tracking-tight leading-[1.08]"
                >
                  Four Tracks. <br />
                  One <span className="text-[#8D0102]">Verification</span> Standard.
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
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

                <motion.div
                  variants={fadeInUp}
                  className="mt-12 pt-8 border-t border-slate-200/90 grid grid-cols-3 gap-6"
                >
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Title Clear</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#8D0102]">4 Tracks</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Specialized</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900">Govt</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Approved</p>
                  </div>
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

                      <div className="absolute top-4 right-4 flex gap-1.5 bg-white/80 p-2 rounded-full backdrop-blur-md shadow-xs">
                        {heroImages.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? "w-6 bg-[#8D0102]" : "w-1.5 bg-slate-300"
                              }`}
                          />
                        ))}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-[#8D0102] flex items-center justify-center text-white shrink-0 shadow-md">
                            <ShieldCheck className="size-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                              <span>Dholera SIR Master Plan</span>
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

        {/* ================= 4 SERVICE TRACKS CARDS ================= */}
        <section id="service-tracks" className="py-24 px-6 sm:px-10 lg:px-16 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
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

            <div className="mt-16 space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={service.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-[#8D0102]/30 hover:shadow-2xl transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Image Box - Clickable Link */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <Link href={service.slug} className="block group">
                        <div className="relative h-[300px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md">
                          <motion.img
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.6 }}
                            src={service.image}
                            alt={service.title}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                          <div className="absolute top-4 left-4">
                            <span className="bg-white/95 backdrop-blur-md text-[#8D0102] text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-xs">
                              {service.badge}
                            </span>
                          </div>

                          <div className="absolute bottom-4 left-4 size-14 rounded-2xl bg-[#8D0102] text-white flex items-center justify-center shadow-lg">
                            <Icon className="size-7" />
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center gap-2 text-[#8D0102] text-xs font-bold uppercase tracking-wider">
                          <Layers className="size-4" />
                          <span>Track 0{index + 1}</span>
                        </div>

                        {/* Title Link */}
                        <Link href={service.slug} className="hover:text-[#8D0102] transition-colors">
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1.5 tracking-tight">
                            {service.title}
                          </h3>
                        </Link>

                        <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                          {service.shortDesc}
                        </p>

                        {/* Light Detail Spec Grid */}
                        <div className="mt-6 grid grid-cols-2 gap-3 p-4 rounded-xl bg-white border border-slate-200/80 text-xs shadow-xs">
                          <div className="flex items-start gap-2">
                            <MapPin className="size-4 text-[#8D0102] shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] uppercase font-bold text-slate-400">Prime Locations</p>
                              <p className="font-semibold text-slate-800">{service.details.primeZones}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <FileText className="size-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] uppercase font-bold text-slate-400">Approvals</p>
                              <p className="font-semibold text-slate-800">{service.details.approvals}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Compass className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] uppercase font-bold text-slate-400">Parcel Scope</p>
                              <p className="font-semibold text-slate-800">{service.details.parcelSize}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <ShieldCheck className="size-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] uppercase font-bold text-slate-400">Target Segment</p>
                              <p className="font-semibold text-slate-800">{service.details.target}</p>
                            </div>
                          </div>
                        </div>

                        {/* Feature Checklist */}
                        <div className="mt-6 space-y-2">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables:</p>
                          {service.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2.5">
                              <CheckCircle2 className="size-4 text-[#8D0102] shrink-0" />
                              <span className="text-xs sm:text-sm font-medium text-slate-700">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Bar */}
                      <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400">Direct Consultancy Available</span>

                        {/* Direct Button Link */}
                        <Link
                          href={service.slug}
                          className="inline-flex items-center gap-2 rounded-full bg-[#8D0102] hover:bg-rose-800 px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span>Explore Track Details</span>
                          <ArrowUpRight className="size-4" />
                        </Link>
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
