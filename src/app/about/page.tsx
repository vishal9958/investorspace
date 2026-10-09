"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Target,
  Compass,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Globe,
  Users,
  Award,
  TrendingUp,
  Building,
  CheckCircle,
  Sparkles,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  const sv = {
    hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
  };

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const cities = [
    "Ahmedabad", "Dholera SIR", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Mumbai",
    "Pune", "Delhi NCR", "Gurugram", "Bengaluru", "Hyderabad", "Jaipur"
  ];

  const journeyMilestones = [
    {
      year: "2015",
      badge: "ORIGIN",
      title: "Title-First Investment Mandate",
      desc: "Founded Investor Space Real Estate Promoters with a strict rule: 100% Government Approved, All NA (Non-Agricultural), NOC Certified, and Title Clear land listings only.",
      stat: "100%",
      statLabel: "Title Clear Legal Guarantee",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2018",
      badge: "DHOLERA SIR FOCUS",
      title: "Strategic Corridor Acquisition",
      desc: "Focused on high-growth corridors along the Main 6-Lane Highway and TP 1A / TP 1B linear developments parallel to the Ahmedabad-Dholera Expressway.",
      stat: "6-Lane",
      statLabel: "Highway Touch Corridor Focus",
      icon: Award,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2021",
      badge: "INFRASTRUCTURE",
      title: "Anchor Infra Alignment",
      desc: "Positioned projects within 2 to 10 minutes from major growth drivers: TATA Semiconductor Fab (₹91,000 Cr), International Airport Circle, and Metro links.",
      stat: "2-10 Min",
      statLabel: "Proximity to Mega Infra",
      icon: Building,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2024",
      badge: "PROJECT LAUNCH",
      title: "Kesar Green Flora Landmark",
      desc: "Launched flagship residential plot development 'Kesar Green Flora' in Dholera SIR offering plot sizes starting from 100 sq. yards onwards.",
      stat: "100+",
      statLabel: "Sq. Yards Plot Size Options",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2026",
      badge: "SCALE & TRUST",
      title: "Nationwide Investor Network",
      desc: "Guiding investors across 12 major cities in unlocking value in India's first greenfield smart industrial city (920 sq. km DSIR).",
      stat: "920 Sq Km",
      statLabel: "Dholera SIR Planned Region",
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      q: "Is Kesar Green Flora 100% government approved?",
      a: "Yes. All plots in Kesar Green Flora are 100% Government Approved, All NA (Non-Agricultural), NOC Certified, and carry a 100% Title Clear guarantee.",
    },
    {
      q: "What is the location advantage of Investor Space projects?",
      a: "Our developments are directly on the Main 6-Lane Highway and within 2 to 10 minutes drive from Dholera International Airport, 10-Lane Expressway, TATA Residential Flats, Medical University, and Indo-Arabian Industrial Park.",
    },
    {
      q: "What documents do I receive upon plot purchase?",
      a: "You receive verified Title Deeds, NA Conversion Certificates, Sanctioned Sub-Plot Layout Plans, NOCs, and clear registration documents.",
    },
    {
      q: "What plot sizes are available in Kesar Green Flora?",
      a: "Residential plots start from 100 sq. yards, with multiple layout size options available (100, 150, 300, 600 sq. yards).",
    },
    {
      q: "How do I get in touch with Investor Space Promoters?",
      a: "You can reach our team at +91 9818-581-518 or visit our official platform at www.investorspace.co.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Every document in Kesar Green Flora was 100% NA and clear title before we booked. The location right on the 6-lane highway gave us complete peace of mind.",
      name: "Ritika Sharma",
      role: "Plot Buyer, Ahmedabad",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
      personImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Investing in Dholera SIR remotely felt daunting, but Investor Space provided digitized layout plans and 100% government approvals before booking.",
      name: "Arjun Mehta",
      role: "Investor, Dholera SIR",
      bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop",
      personImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Khushi Sharma",
      role: "Client Relationship Manager",
      desc: "Guides buyers through site visits, paperwork, and after-sale support—from the first call to registry handover.",
      img: "/characters/team_member1.png",
    },
    {
      name: "Kunal Varma",
      role: "Founder & Managing Director",
      desc: "Over a decade steering strategic land acquisitions, government compliance, and investor relations in Gujarat and Delhi NCR.",
      img: "/characters/team_member3.png",
    },
    {
      name: "Satyam Singh",
      role: "Property Consultant",
      desc: "Matches buyers to high-yield plots in Dholera SIR based on budget, timeline, and growth corridors.",
      img: "/characters/team_member3.png",
    },
    {
      name: "Aditya Tiwari",
      role: "Investment Advisor",
      desc: "Advises investors on capital appreciation, infrastructure timelines, and ROI for Dholera SIR residential portfolios.",
      img: "/characters/team_member4.png",
    },
  ];

  const currentJourney = journeyMilestones[activeJourneyIndex];

  return (
    <>
      <main className="pt-20 font-sans text-slate-900 bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative">
            <div className="relative h-[40vh] overflow-hidden bg-white sm:h-[60vh]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentHeroImage}
                  src={heroImages[currentHeroImage]}
                  alt="Investor Space Team"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 size-full object-cover"
                  style={{ filter: "blur(2px)" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex items-center px-6 pb-10 pt-10 sm:px-10 lg:px-16">
              <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14">

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur mb-3"
                  >
                    <Sparkles className="size-3.5 text-red-500" />
                    INVESTOR SPACE REAL ESTATE PROMOTERS
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-display text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-white"
                  >
                    <span className="block">
                      Building today for the
                    </span>

                    <span className="block text-red-600">
                      cities of tomorrow.
                    </span>
                  </motion.h1>
                </div>

                <div className="lg:max-w-md lg:justify-self-end">

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="text-sm leading-relaxed text-white/85"
                  >
                    "Truth Is Our Ornament." Investor Space was founded to eliminate
                    land speculation with 100% government-approved, title-clear
                    investments in high-growth infrastructure hubs like Dholera SIR.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-5 flex flex-wrap items-center gap-3"
                  >
                    <a
                      href="tel:+919818581518"
                      className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white transition hover:bg-red-700"
                    >
                      <Phone className="size-3.5" />
                      Call: +91 9818-581-518
                      <ArrowRight className="size-4" />
                    </a>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Documentation Section */}
        <section className="bg-slate-50/60 py-12 px-6 sm:px-10 lg:px-16 border-b border-slate-100">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
              <span className="size-2 rounded-full bg-red-600 inline-block"></span> OUR 4-POINT LEGAL GUARANTEE
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative flex h-56 flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100 overflow-hidden">
                <div className="relative z-10 w-2/3">
                  <h3 className="font-display text-xl font-bold text-slate-900">100% Govt Approved</h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium">Sanctioned town planning layout</p>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold uppercase tracking-wider text-red-600">
                    VERIFIED STATUS <ShieldCheck className="size-4" />
                  </span>
                </div>
                <img src="/characters/agent_verified.png" alt="Govt Approved" className="absolute -right-4 -bottom-4 h-4/5 w-auto object-contain opacity-90 drop-shadow-xl" />
              </div>

              <div className="relative flex h-56 flex-col justify-between rounded-2xl bg-red-700 p-6 text-white shadow-md overflow-hidden">
                <div className="relative z-10 w-2/3">
                  <h3 className="font-display text-xl font-bold">All NA (Non-Agri)</h3>
                  <p className="mt-1 text-xs text-white/80 font-medium">100% Converted residential plots</p>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                    CONVERTED LAND <CheckCircle className="size-4" />
                  </span>
                </div>
                <img src="/characters/agent_agiment.png" alt="Non-Agri" className="absolute -right-2 -bottom-2 h-4/5 w-auto object-contain opacity-95 drop-shadow-2xl" />
              </div>

              <div className="relative flex h-56 flex-col justify-between rounded-2xl bg-slate-950 p-6 text-white shadow-md overflow-hidden">
                <div className="relative z-10 w-2/3">
                  <h3 className="font-display text-xl font-bold">NOC Certified</h3>
                  <p className="mt-1 text-xs text-slate-400 font-medium">All authority clearances ready</p>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold uppercase tracking-wider text-slate-300">
                    CLEARANCES IN HAND <Award className="size-4" />
                  </span>
                </div>
                <img src="/characters/agent_idea.png" alt="NOC Certified" className="absolute -right-4 -bottom-0 h-[85%] w-auto object-contain opacity-90 drop-shadow-2xl" />
              </div>

              <div className="relative flex h-56 flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100 overflow-hidden">
                <div className="relative z-10 w-2/3">
                  <h3 className="font-display text-xl font-bold text-slate-900">Title Clear</h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium">Zero litigation, clear chain</p>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <span className="inline-flex items-center gap-1 text-[0.68rem] font-bold uppercase tracking-wider text-emerald-600">
                    100% TITLE CLEAR <CheckCircle className="size-4" />
                  </span>
                </div>
                <img src="/characters/agent_consult.png" alt="Title Clear" className="absolute -right-2 -bottom-4 h-4/5 w-auto object-contain opacity-90 drop-shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="overflow-hidden bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="grid gap-6 sm:grid-cols-[1.3fr_1fr] sm:gap-10 lg:gap-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-red-600">
                  PROMOTER VISION
                </span>
                <h2 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-slate-950">
                  Truth is our ornament,<br />
                  <span className="text-red-600">clarity is our promise.</span>
                </h2>
              </motion.div>
              <motion.div className="flex flex-col justify-center gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sv}>
                <p className="text-sm font-bold text-slate-900">
                  Focused on <span className="text-red-600">Dholera SIR Mega Smart City</span>
                </p>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  At Investor Space, we don't sell speculations. We connect visionary investors to India's fastest-growing smart industrial corridor—Dholera SIR—backed by mega anchors like TATA Semiconductor Fab (₹91,000 Cr) and International Transport Hubs.
                </p>
              </motion.div>
            </div>

            <div className="mt-8 grid items-stretch gap-4 sm:mt-10 sm:grid-cols-[1.7fr_0.9fr] sm:gap-5">
              {/* Left column */}
              <div className="flex flex-col gap-4 sm:h-[440px] lg:h-[500px]">
                <div className="h-48 overflow-hidden rounded-2xl shadow-sm sm:h-auto sm:flex-[7]">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop" className="size-full object-cover" alt="Discussion" />
                </div>
                <div className="flex flex-col gap-4 sm:h-auto sm:flex-[3] sm:flex-row">
                  <div className="flex h-28 flex-col justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-white shadow-sm sm:h-auto sm:flex-[3]">
                    <div className="flex items-center gap-2">
                      <Target className="size-4 text-white/80" />
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/80">Our Mission</p>
                    </div>
                    <h3 className="font-display text-sm font-bold leading-snug sm:text-base">Provide high-yield, 100% legal plot investments near major infrastructure.</h3>
                  </div>
                  <div className="flex h-28 flex-col justify-center gap-2 rounded-2xl bg-slate-100 px-6 py-4 shadow-sm sm:h-auto sm:flex-[2]">
                    <div className="flex items-center gap-2">
                      <Compass className="size-4 text-red-600" />
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-red-600">Our Vision</p>
                    </div>
                    <h3 className="font-display text-sm font-bold leading-snug text-slate-900 sm:text-base">A property market where clarity and trust are standard.</h3>
                  </div>
                </div>
              </div>

              {/* Right column — Dholera image fills full height */}
              <div className="relative self-stretch overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/images/Dholera SIR.png"
                  alt="Dholera SIR"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 scale-[1.15]"
                  style={{ objectPosition: "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    Dholera SIR Growth Engine
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    A 920 sq. km planned smart city with 422 sq. km town planning, 5-way
                    multi-modal connectivity, and ₹91,000 Cr TATA semiconductor anchor
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Since Founding & Our Reach */}
        <section className="bg-[#0b0b0b] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div>
              <span className="inline-block rounded-full bg-red-950/80 border border-red-800/40 px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-red-500">
                DHOLERA SIR AT A GLANCE
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Infrastructure first, <br />
                <span className="text-red-600">value follows.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xs sm:text-sm text-slate-400 leading-relaxed">
                Every plot we promote is backed by 100% verified documentation and a growing community of investors who chose clarity over guesswork.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-b border-white/10 pb-16 sm:grid-cols-4">
              <div>
                <p className="text-xs text-slate-400 font-medium">Total DSIR Area</p>
                <p className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">920 <span className="text-sm font-normal text-slate-400">sq km</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Town Planning Area</p>
                <p className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">422 <span className="text-sm font-normal text-slate-400">sq km</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">TATA Fab Investment</p>
                <p className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">₹91k <span className="text-sm font-normal text-slate-400">Cr</span></p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Airport Drive Time</p>
                <p className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">10-12 <span className="text-sm font-normal text-slate-400">Mins</span></p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block rounded-full bg-red-950/80 border border-red-800/40 px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-red-500">
                  OUR REACH
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold sm:text-4xl text-white">
                  A growing network across <span className="text-red-600">12 Indian cities.</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
                  Investor Space works with investors across 12 major cities, connecting a growing network of buyers to government-approved land in Dholera SIR.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-200 transition-colors hover:border-red-600/50 hover:bg-red-600/10"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md p-4 group cursor-pointer">
                  <img
                    src="/characters/agent_map.png"
                    alt="India Map"
                    className="w-full h-auto object-contain rounded-2xl opacity-75 grayscale contrast-125 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLY ANIMATED PREMIUM JOURNEY SECTION (LIGHT THEME) */}
        <section className="bg-slate-50/70 py-24 text-slate-900 overflow-hidden relative border-t border-b border-slate-200/80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-red-600">
                  <Sparkles className="size-3 text-red-600" /> OUR EVOLUTION
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl text-slate-950 tracking-tight">
                  A decade of <span className="text-red-600">uncompromising standards.</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Click through our interactive timeline to explore how our transparent land verification model expanded across India.
              </p>
            </div>

            {/* Interactive Timeline Tabs Track */}
            <div className="mt-14 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block"></div>

              <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 -translate-y-1/2 hidden md:block shadow-[0_0_10px_rgba(220,38,38,0.4)]"
                animate={{ width: `${(activeJourneyIndex / (journeyMilestones.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
                {journeyMilestones.map((item, idx) => {
                  const isActive = idx === activeJourneyIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyIndex(idx)}
                      className={`relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 text-center ${isActive
                        ? "bg-red-600 text-white shadow-lg shadow-red-600/20 scale-105"
                        : "bg-white border border-slate-200/80 hover:border-red-300 text-slate-700 hover:bg-slate-100/50"
                        }`}
                    >
                      <span className={`font-display text-2xl font-bold ${isActive ? "text-white" : "text-slate-900"}`}>
                        {item.year}
                      </span>
                      <span className={`text-[0.65rem] font-bold tracking-wider uppercase mt-1 ${isActive ? "text-red-100" : "text-slate-500"}`}>
                        {item.badge}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute -top-2 size-3 rounded-full bg-red-600 ring-4 ring-white shadow-md"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Animated Active Card Display */}
            <div className="mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJourneyIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-xl"
                >
                  <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={currentJourney.image}
                      alt={currentJourney.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10"></div>
                  </div>

                  <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white">
                    <div>
                      <div className="hidden lg:flex items-center justify-between">
                        <span className="text-4xl font-display font-bold text-red-600">
                          {currentJourney.year}
                        </span>
                        <span className="rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-600">
                          {currentJourney.badge}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="size-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                          <currentJourney.icon className="size-5" />
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                          {currentJourney.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm text-slate-600 leading-relaxed sm:text-base">
                        {currentJourney.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-3xl font-bold text-slate-950">
                          {currentJourney.stat}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          {currentJourney.statLabel}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setActiveJourneyIndex((prev) =>
                              prev > 0 ? prev - 1 : journeyMilestones.length - 1
                            )
                          }
                          className="size-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                        >
                          <ChevronLeft className="size-5" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveJourneyIndex((prev) =>
                              prev < journeyMilestones.length - 1 ? prev + 1 : 0
                            )
                          }
                          className="size-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                        >
                          <ChevronRight className="size-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[#FAF8F8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <Users className="size-3.5" /> Team
                </div>
                <h2 className="font-display text-3xl font-bold text-slate-950 sm:text-5xl lg:text-6xl tracking-tight">
                  Meet the team behind <span className="text-red-600">Investor Space</span>
                </h2>
                <div className="mt-5">
                  <a
                    href="tel:+919818581518"
                    className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-red-700 transition"
                  >
                    Get in Touch &rarr;
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-slate-200/80 shadow-2xs">
                  <ShieldCheck className="size-4 text-slate-700" />
                  <div>
                    <p className="text-[0.7rem] font-bold text-slate-900 leading-none">RERA Registered Promoters</p>
                    <p className="text-[0.6rem] text-slate-400 leading-none mt-0.5">Real Estate Regulatory Authority Compliant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {teamMembers.map((member, i) => (
                <div key={i} className="size-10 rounded-full overflow-hidden border-2 border-white shadow-xs bg-slate-100">
                  <img src={member.img} alt={member.name} className="size-full object-cover object-top" />
                </div>
              ))}
              <div className="size-10 rounded-full bg-slate-200/60 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">+</div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-2xs border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-display text-xl font-bold text-slate-900">Investor Space Promoters</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-bold text-slate-600 uppercase tracking-wider">Promoters</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    Dedicated real estate promoters guiding plot buyers with 100% NA, NOC, and Title Clear properties in Dholera SIR and Gujarat growth corridors.
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <p className="text-[0.7rem] text-slate-400 font-medium">Official Platform: www.investorspace.co</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-2xs border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-display text-xl font-bold text-slate-900">20+ Specialists</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-bold text-slate-600 uppercase tracking-wider">Team</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    Sales consultants, legal advisors, and client relationship managers working together to ensure smooth registration and handover.
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <p className="text-[0.7rem] text-slate-400 font-medium">Across advisory, legal search, and site visits.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-stretch rounded-2xl bg-white p-5 shadow-2xs border border-slate-100">
                  <div className="relative flex items-center justify-center sm:w-44 h-48 sm:h-auto rounded-xl overflow-hidden bg-slate-50 shrink-0">
                    <div className="absolute size-32 rounded-full bg-red-600 translate-y-2"></div>
                    <img src={member.img} alt={member.name} className="relative z-10 h-full object-cover" />
                  </div>

                  <div className="mt-4 sm:mt-0 sm:ml-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">{member.name}</h3>
                      <p className="text-xs font-bold text-red-600 mt-0.5">{member.role}</p>
                      <p className="mt-3 text-xs text-slate-500 leading-relaxed">{member.desc}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-slate-400 justify-end">
                      <a href="http://www.investorspace.co" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:text-slate-700 transition"><Globe className="size-4" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative overflow-hidden bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red-600">
              TESTIMONIALS
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Don't take our word for it!<br />
              Hear it from our <span className="text-red-600">partners.</span>
            </h2>
          </div>

          <div className="mt-8 relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="relative h-[480px] sm:h-[580px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
              <img
                src={testimonials[currentTestimonial].bgImage}
                alt="Background"
                className="absolute inset-0 size-full object-cover"
              />

              <div className="absolute right-0 bottom-0 top-0 w-full md:w-2/3 lg:w-1/2 flex items-end justify-end pointer-events-none">
                <img
                  src={testimonials[currentTestimonial].personImage}
                  alt={testimonials[currentTestimonial].name}
                  className="h-[92%] object-contain object-bottom"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-100/80">
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>

                <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-3">
                  <div>
                    <p className="font-display text-xs font-bold text-slate-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-[0.68rem] text-slate-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        setCurrentTestimonial((prev) =>
                          prev > 0 ? prev - 1 : testimonials.length - 1
                        )
                      }
                      className="size-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition"
                    >
                      <ChevronLeft className="size-3.5" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentTestimonial((prev) =>
                          prev < testimonials.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="size-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition"
                    >
                      <ChevronRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Any questions?<br /><span className="text-red-600">We got you.</span>
              </h2>
              <p className="mt-4 text-xs text-slate-500">
                Can't find what you're looking for? Reach out and an advisor will walk you through it directly.
              </p>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between w-full text-left font-bold text-sm sm:text-base py-2"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <Minus className="size-4 text-red-600" /> : <Plus className="size-4 text-red-600" />}
                  </button>
                  {openFaq === i && <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-black py-16 text-white text-center">
          <div className="mx-auto max-w-4xl px-6">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">YOUR NEXT MOVE</span>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-4xl">
              Invest with confidence in land designed to grow with you.
            </h2>
            <a
              href="tel:+919818581518"
              className="mt-6 inline-block rounded-full bg-red-600 px-8 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Book a Free Site Visit (+91 9818-581-518)
            </a>
          </div>
        </section>
      </main >

      <Footer />
    </>
  );
}