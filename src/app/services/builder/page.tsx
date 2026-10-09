"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Testimonials from "@/components/home/Testimonials";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Building2,
    FileText,
    Check,
    X,
    PhoneCall,
    Sparkles,
    Layers,
    MapPin,
    ArrowUpRight,
    ChevronRight,
    Compass,
    HardHat,
    Ruler,
    TrendingUp,
    LayoutGrid,
} from "lucide-react";

export default function BuilderServicesPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const [activeService, setActiveService] = useState(0);

    // Hero Background Slides for Builder Services
    const heroSlides = [
        "https://images.unsplash.com/photo-1541888086925-0c1bb6789c26?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const featuresBreakdown = [
        {
            id: 0,
            title: "Land Acquisition & Plotting",
            desc: "Prime land parcels verified for residential, commercial, or plotting project developments in Dholera SIR.",
            icon: MapPin,
            badge: "TP Scheme Approved",
            details: ["High Road Connectivity", "Clear Demarcation", "Demarcated Boundary"],
        },
        {
            id: 1,
            title: "Layout Plan & DSIRDA Sanctions",
            desc: "Complete assistance in getting layout designs, NA permission, and DSIRDA single window approvals.",
            icon: Ruler,
            badge: "N.A. & Clear Title",
            details: ["TP Plan Alignment", "Architect Plan Vetting", "DSIRDA Single Window"],
        },
        {
            id: 2,
            title: "Infrastructure Execution Support",
            desc: "Local vendor coordination, internal road planning, drainage, and utility line connectivity guidance.",
            icon: HardHat,
            badge: "On-Site Support",
            details: ["Water & Electricity Lines", "Internal Road Approvals", "Drainage Access Points"],
        },
        {
            id: 3,
            title: "Project Marketing & Investor Tie-ups",
            desc: "Connecting your plotting/builder project with our investor network for faster sales velocity.",
            icon: TrendingUp,
            badge: "Sales Acceleration",
            details: ["Investor Network Access", "Channel Partner Network", "Launch Campaign Support"],
        },
    ];

    const steps = [
        {
            num: "01",
            title: "Land Selection",
            subtitle: "Feasibility & Zoning",
            desc: "Identifying land suitable for plotting or construction with clear TP Scheme approvals.",
            tag: "Phase 01",
        },
        {
            num: "02",
            title: "Legal & Sanctions",
            subtitle: "NA & Layout Approval",
            desc: "Complete document audit, NA status, and layout clearance from authority.",
            tag: "Phase 02",
        },
        {
            num: "03",
            title: "Infrastructure Setup",
            subtitle: "Roads & Utilities",
            desc: "Laying out internal infrastructure plan, utilities, and site preparation.",
            tag: "Phase 03",
        },
        {
            num: "04",
            title: "Launch & Sales",
            subtitle: "Market Exposure",
            desc: "Strategic project positioning, channel partner onboarding, and fast plot bookings.",
            tag: "Phase 04",
        },
    ];

    const otherServices = [
        {
            id: 0,
            title: "Developer Services",
            tagline: "Land Sourcing & Large Scale Project Advisory",
            desc: "Strategic land sourcing, title checks, and government liasioning for mega real estate developers.",
            link: "/services/developer",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
            highlights: ["Contiguous Land Parcels", "DSIRDA Approval Liasion", "Comprehensive Title Verification"],
        },
        {
            id: 1,
            title: "Investor Services",
            tagline: "High Growth Strategic Land Assets",
            desc: "Land can be a steady asset when the paperwork is clean. We share the documents so you can verify them yourself.",
            link: "/services/investor",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            highlights: ["High Appreciation Zones", "Complete Paperwork", "Exit Strategy Assistance"],
        },
        {
            id: 2,
            title: "Services For All",
            tagline: "Transparent Land Buying Guidance",
            desc: "You do not need to be an expert to buy land safely. We explain every single step with zero jargon.",
            link: "/services/all",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
            highlights: ["Step-by-step Guidance", "Legal Assistance", "Direct Owner Connection"],
        },
    ];

    const comparisonRows = [
        { name: "Land Sourcing for Plotting", investorSpace: true, broker: true, direct: false },
        { name: "DSIRDA & Layout Approvals", investorSpace: true, broker: false, direct: false },
        { name: "On-Site Infrastructure Setup Support", investorSpace: true, broker: false, direct: false },
        { name: "Investor Tie-ups & Marketing Support", investorSpace: true, broker: false, direct: false },
    ];

    return (
        <>
            <main className="bg-white font-sans text-slate-900 overflow-hidden">

                {/* ================= 1. SCREEN-FIT HERO SECTION WITH MULTI-IMAGE SLIDER ================= */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.08 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute inset-0 z-0"
                        >
                            <img
                                src={heroSlides[currentSlide]}
                                alt="Builder Services Dholera SIR"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20">
                        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }} className="max-w-3xl">
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/60 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-rose-300">
                                <Sparkles className="size-3.5 text-rose-400" />
                                <span>BUILDER & PLOTTING SOLUTIONS</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06]">
                                Builder <span className="text-[#E02424] drop-shadow-md">Services</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                                Infrastructure & layout permissions require accuracy. We assist builders with verified land acquisition, layout sanctions, and project execution in Dholera SIR.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#8D0102] px-8 py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:bg-rose-700 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <span>Discuss Builder Services</span>
                                    <ArrowRight className="size-4" />
                                </a>

                                <a
                                    href="#service-breakdown"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition-all"
                                >
                                    <span>See what's included</span>
                                    <ArrowRight className="size-4 text-slate-300" />
                                </a>
                            </motion.div>

                            <div className="mt-12 flex items-center gap-2">
                                {heroSlides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-8 bg-[#8D0102]" : "w-2 bg-white/30"
                                            }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* ================= 2. OUR PROMISE BANNER ================= */}
                <section className="py-10 px-6 sm:px-10 lg:px-16 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="rounded-2xl bg-rose-50/70 border border-rose-100 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-xs"
                        >
                            <div className="size-12 rounded-xl bg-[#8D0102] text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-900/20">
                                <LayoutGrid className="size-6" />
                            </div>

                            <div>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8D0102]">OUR PROMISE</span>
                                <p className="mt-1 text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                    From selecting layout-ready land parcels to obtaining DSIRDA sanctions and infrastructure rollout, we stay on the ground until your builder project is fully live.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* ================= 3. THE SERVICE, BROKEN DOWN ================= */}
                <section id="service-breakdown" className="py-24 px-6 sm:px-10 lg:px-16 bg-slate-50/50">
                    <div className="max-w-7xl mx-auto">

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">WHAT'S INCLUDED</span>
                            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                The service, <span className="text-[#8D0102]">broken down</span>
                            </h2>
                        </motion.div>

                        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            {/* Left Side: Modern Asymmetrical Glass Cards */}
                            <div className="lg:col-span-6 space-y-4">
                                {featuresBreakdown.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeTab === index;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            onClick={() => setActiveTab(index)}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden border ${isActive
                                                    ? "bg-white border-[#8D0102] shadow-2xl ring-2 ring-[#8D0102]/20 scale-[1.01]"
                                                    : "bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white"
                                                }`}
                                        >
                                            {isActive && (
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8D0102] via-rose-500 to-[#8D0102]"></div>
                                            )}

                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`size-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                                                            ? "bg-[#8D0102] text-white shadow-md shadow-rose-900/30"
                                                            : "bg-rose-50 text-[#8D0102] group-hover:bg-[#8D0102] group-hover:text-white"
                                                        }`}
                                                >
                                                    <Icon className="size-5" />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                                                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                                            {item.badge}
                                                        </span>
                                                    </div>

                                                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>

                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2"
                                                        >
                                                            {item.details.map((detail, dIdx) => (
                                                                <div key={dIdx} className="flex items-center gap-2">
                                                                    <CheckCircle2 className="size-3.5 text-[#8D0102] shrink-0" />
                                                                    <span className="text-xs font-semibold text-slate-700">{detail}</span>
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Right Side: Comparison Card */}
                            <div className="lg:col-span-6">
                                <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                                    <div className="absolute top-0 right-0 -mr-20 -mt-20 size-60 bg-[#8D0102]/20 rounded-full blur-3xl pointer-events-none"></div>

                                    <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            <Layers className="size-5 text-[#E02424]" />
                                            <span>How we compare with other options</span>
                                        </h3>
                                    </div>

                                    <div className="mt-6 overflow-x-auto">
                                        <table className="w-full text-left text-xs sm:text-sm">
                                            <thead>
                                                <tr className="border-b border-slate-800 text-slate-400">
                                                    <th className="pb-4 font-bold">Feature</th>
                                                    <th className="pb-4 font-bold text-center bg-[#8D0102] text-white rounded-t-xl px-3 py-2">Investor Space</th>
                                                    <th className="pb-4 font-bold text-center px-2">Local Broker</th>
                                                    <th className="pb-4 font-bold text-center px-2">Going Direct</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800/60">
                                                {comparisonRows.map((row, rIdx) => (
                                                    <tr key={rIdx} className="hover:bg-slate-900/50 transition-colors">
                                                        <td className="py-4 font-medium text-slate-200 pr-2">{row.name}</td>
                                                        <td className="py-4 text-center bg-[#8D0102]/20 border-x border-[#8D0102]/30 px-3">
                                                            <Check className="size-5 text-emerald-400 mx-auto" />
                                                        </td>
                                                        <td className="py-4 text-center">
                                                            {row.broker ? (
                                                                <Check className="size-4 text-slate-400 mx-auto" />
                                                            ) : (
                                                                <X className="size-4 text-slate-600 mx-auto" />
                                                            )}
                                                        </td>
                                                        <td className="py-4 text-center">
                                                            {row.direct ? (
                                                                <Check className="size-4 text-slate-400 mx-auto" />
                                                            ) : (
                                                                <X className="size-4 text-slate-600 mx-auto" />
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                                        <span>Complete Layout Execution Support</span>
                                        <span className="font-bold text-rose-400">Zero Legal Delays</span>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                {/* ================= 4. FOUR STEPS (HORIZONTAL PIPELINE / NODE CONNECTOR FLOW) ================= */}
                <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-y border-slate-200/80 overflow-hidden">
                    <div className="max-w-7xl mx-auto">

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">HOW IT WORKS</span>
                            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                Four steps, <span className="text-[#8D0102]">no surprises</span>
                            </h2>
                            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">Hover over the timeline nodes to activate process stages</p>
                        </motion.div>

                        {/* PIPELINE CONNECTOR FLOW CONTAINER */}
                        <div className="mt-20 relative">

                            {/* Connected Track Bar (Desktop) */}
                            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 z-0">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#8D0102] via-rose-600 to-[#8D0102] transition-all duration-500"
                                    style={{
                                        width: hoveredStep !== null ? `${((hoveredStep + 1) / steps.length) * 100}%` : "25%",
                                    }}
                                ></motion.div>
                            </div>

                            {/* Steps Nodes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {steps.map((step, idx) => {
                                    const isHovered = hoveredStep === idx;
                                    const isPast = hoveredStep !== null && idx <= hoveredStep;

                                    return (
                                        <motion.div
                                            key={idx}
                                            onMouseEnter={() => setHoveredStep(idx)}
                                            onMouseLeave={() => setHoveredStep(null)}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer"
                                        >
                                            {/* Node Circle */}
                                            <div className="relative mb-6">
                                                <div
                                                    className={`size-14 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 border-2 ${isHovered || isPast
                                                            ? "bg-[#8D0102] text-white border-[#8D0102] shadow-xl shadow-rose-900/30 scale-110"
                                                            : "bg-slate-100 text-slate-400 border-slate-300"
                                                        }`}
                                                >
                                                    {step.num}
                                                </div>

                                                {/* Animated Ripple ring on hover */}
                                                {isHovered && (
                                                    <motion.div
                                                        layoutId="node-glow"
                                                        className="absolute -inset-2 rounded-full border-2 border-rose-500/50 animate-ping pointer-events-none"
                                                    ></motion.div>
                                                )}
                                            </div>

                                            {/* Content Card Panel */}
                                            <div
                                                className={`w-full rounded-2xl p-6 transition-all duration-500 border ${isHovered
                                                        ? "bg-slate-950 text-white border-slate-800 shadow-2xl -translate-y-2"
                                                        : "bg-slate-50 text-slate-900 border-slate-200/80 hover:border-slate-300"
                                                    }`}
                                            >
                                                <span
                                                    className={`text-[10px] font-extrabold uppercase tracking-widest ${isHovered ? "text-rose-400" : "text-[#8D0102]"
                                                        }`}
                                                >
                                                    {step.tag}
                                                </span>

                                                <h3 className="mt-1 text-base font-black tracking-tight">{step.title}</h3>
                                                <p className={`text-xs font-bold mt-0.5 ${isHovered ? "text-slate-400" : "text-slate-400"}`}>
                                                    {step.subtitle}
                                                </p>

                                                <p className={`mt-3 text-xs leading-relaxed ${isHovered ? "text-slate-300" : "text-slate-600"}`}>
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>

                    </div>
                </section>


                {/* ================= 5. DISCUSS BUILDER SERVICES (LEAD FORM SECTION) ================= */}
                <section id="contact-form" className="py-24 px-6 sm:px-10 lg:px-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            {/* Left Column */}
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">GET STARTED</span>
                                    <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                        Discuss Builder <span className="text-[#8D0102]">Services</span>
                                    </h2>
                                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                        Looking to launch a plotting scheme or residential venture in Dholera SIR? Connect with our project advisors for end-to-end guidance.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">HELPFUL TO KEEP READY</p>
                                    <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Project Land Area (Sq Yd / Acres)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Preferred TP Scheme Zone</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Target Launch Timeline</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Planned Infrastructure Setup</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Direct Contact Red Box */}
                                <div className="rounded-3xl bg-gradient-to-br from-[#8D0102] to-rose-950 p-7 text-white shadow-xl relative overflow-hidden">
                                    <h3 className="text-lg font-extrabold text-white">Prefer to talk directly?</h3>
                                    <p className="mt-1 text-xs text-rose-100 font-medium">
                                        Call or write to us and we'll connect you with our Builder Services lead immediately.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black text-slate-950 shadow-md hover:bg-rose-50 transition-colors"
                                    >
                                        <PhoneCall className="size-3.5 text-[#8D0102]" />
                                        <span>Open Contact Page</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8D0102]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8D0102]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8D0102]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">I'm interested in...</label>
                                            <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8D0102]">
                                                <option>Residential Plotting Land Acquisition</option>
                                                <option>DSIRDA Layout & NA Approvals</option>
                                                <option>On-Site Infrastructure Setup Support</option>
                                                <option>Investor Tie-ups & Marketing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Tell us what you're looking for</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Share your plotting / builder requirement details..."
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8D0102]"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-full bg-[#8D0102] py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:bg-rose-800 transition-colors"
                                    >
                                        Request a Call Back
                                    </button>

                                    <p className="text-[11px] text-center text-slate-400 mt-2">
                                        We reply within one working day. Your details are never shared with third parties.
                                    </p>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>


                {/* ================= 6. EXPLORE ANOTHER SERVICE (INTERACTIVE EXPANDABLE ACCORDION SLIDER) ================= */}
                <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-200/80">
                    <div className="max-w-7xl mx-auto">

                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">MORE SERVICES</span>
                                <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                    Explore another <span className="text-[#8D0102]">service</span>
                                </h2>
                            </div>
                            <p className="text-xs text-slate-500 font-medium max-w-sm">
                                Select a service tab to preview tailored solutions and ecosystem offerings.
                            </p>
                        </div>

                        {/* EXPANDABLE INTERACTIVE PANEL */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                            {/* Left Selector Tabs */}
                            <div className="lg:col-span-4 space-y-3">
                                {otherServices.map((service, sIdx) => {
                                    const isSelected = activeService === sIdx;

                                    return (
                                        <div
                                            key={service.id}
                                            onClick={() => setActiveService(sIdx)}
                                            className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${isSelected
                                                    ? "bg-[#8D0102] text-white border-[#8D0102] shadow-xl shadow-rose-900/20"
                                                    : "bg-slate-50 text-slate-800 border-slate-200/80 hover:bg-slate-100"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-base">{service.title}</h3>
                                                <ChevronRight className={`size-4 transition-transform ${isSelected ? "rotate-90 text-white" : "text-slate-400"}`} />
                                            </div>
                                            <p className={`text-xs mt-1 font-medium ${isSelected ? "text-rose-100" : "text-slate-500"}`}>
                                                {service.tagline}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Hero Preview Card */}
                            <div className="lg:col-span-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeService}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-end p-8 text-white border border-slate-800 shadow-2xl bg-slate-950"
                                    >
                                        {/* Background Image */}
                                        <img
                                            src={otherServices[activeService].image}
                                            alt={otherServices[activeService].title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

                                        {/* Content Layer */}
                                        <div className="relative z-10 max-w-xl">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-rose-300 border border-white/20 mb-3">
                                                <Compass className="size-3" />
                                                <span>Recommended Service</span>
                                            </span>

                                            <h3 className="text-2xl sm:text-3xl font-black text-white">{otherServices[activeService].title}</h3>
                                            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                                                {otherServices[activeService].desc}
                                            </p>

                                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                                {otherServices[activeService].highlights.map((hl, hIdx) => (
                                                    <div key={hIdx} className="inline-flex items-center gap-1.5 text-xs text-rose-200 bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-800/40">
                                                        <CheckCircle2 className="size-3 text-rose-400" />
                                                        <span>{hl}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Link
                                                href={otherServices[activeService].link}
                                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8D0102] px-6 py-3 text-xs font-extrabold text-white shadow-lg hover:bg-rose-700 transition-colors"
                                            >
                                                <span>View Service Details</span>
                                                <ArrowUpRight className="size-4" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
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