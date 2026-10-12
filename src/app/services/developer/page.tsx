"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import Testimonials from "@/components/home/Testimonials";
import {
    ArrowRight,
    CheckCircle2,
    MapPin,
    Sparkles,
    Layers,
    ArrowUpRight,
    ChevronRight,
    Building2,
    FileCheck,
    TrendingUp,
    ShieldCheck,
    Check,
    X,
    PhoneCall,
    Send,
    Building,
} from "lucide-react";

export default function DeveloperServicesPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        landRequirement: "",
        targetZone: "",
        message: "",
    });

    const heroSlides = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541888086925-0c1bb6789c26?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
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

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const featuresBreakdown = [
        {
            id: 0,
            title: "Strategic Land Assembly & Sourcing",
            desc: "Identifying contiguous, high-potential land parcels tailored for large-scale industrial, commercial, and residential developments in Dholera SIR.",
            icon: MapPin,
            badge: "High Growth Zones",
            details: ["Contiguous Land Parcels", "Strategic TP Scheme Sourcing", "Direct Owner Negotiations"],
        },
        {
            id: 1,
            title: "Title Audit & Legal Clearance",
            desc: "Comprehensive legal vetting including 7/12 extracts, title search reports, zoning compliance, and encumbrance checks.",
            icon: FileCheck,
            badge: "100% Clear Title",
            details: ["Complete Paperwork Audit", "Zone Verification", "Encumbrance Free Certification"],
        },
        {
            id: 2,
            title: "DSIRDA Liasioning & Sanctions",
            desc: "End-to-end guidance in obtaining Non-Agricultural (NA) permissions, layout sanctions, and single-window government clearances.",
            icon: ShieldCheck,
            badge: "Authority Liaison",
            details: ["DSIRDA Layout Approval", "NA Status Acceleration", "Single-Window Clearance"],
        },
        {
            id: 3,
            title: "Joint Venture & Investor Tie-ups",
            desc: "Connecting developers with equity partners, institutional investors, and strategic collaborators for project expansion.",
            icon: TrendingUp,
            badge: "Capital & Growth",
            details: ["JV Structuring", "Investor Matchmaking", "Strategic Market Positioning"],
        },
    ];

    const steps = [
        {
            num: "01",
            title: "Requirement Analysis",
            subtitle: "Land Sourcing & Zoning",
            desc: "Identifying large-scale land parcels matching project requirements, TP Scheme zones, and clear connectivity.",
            tag: "Phase 01",
        },
        {
            num: "02",
            title: "Title & Legal Audit",
            subtitle: "Verification & Compliance",
            desc: "Rigorous 7/12, NA status, title clear checks, and authority liasioning before deal execution.",
            tag: "Phase 02",
        },
        {
            num: "03",
            title: "DSIRDA Liasioning",
            subtitle: "Approvals & Sanctions",
            desc: "Seamless layout planning, government approvals, and single-window sanction coordination.",
            tag: "Phase 03",
        },
        {
            num: "04",
            title: "Project Execution",
            subtitle: "Handover & Infrastructure",
            desc: "On-ground support for road access, site demarcation, and project rollout readiness.",
            tag: "Phase 04",
        },
    ];

    const otherServices = [
        {
            id: 0,
            title: "Builder Services",
            tagline: "Layout Approvals & Plotting Solutions",
            desc: "End-to-end support for layout sanctions, internal road execution, and plot marketing in Dholera.",
            link: "/services/builder",
            image: "https://images.unsplash.com/photo-1541888086925-0c1bb6789c26?q=80&w=1200&auto=format&fit=crop",
            highlights: ["TP Scheme Approved", "DSIRDA Sanction Guidance", "Infrastructure Setup Support"],
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
        { name: "Contiguous Large Land Assemblies", investorSpace: true, broker: false, direct: false },
        { name: "DSIRDA Liasioning & Approvals", investorSpace: true, broker: false, direct: false },
        { name: "In-depth Legal & 7/12 Title Audit", investorSpace: true, broker: true, direct: false },
        { name: "JV Structuring & Equity Matchmaking", investorSpace: true, broker: false, direct: false },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const waText = encodeURIComponent(
            `New Developer Enquiry\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterest: ${formData.interest}\nMessage: ${formData.message}`
        );
        window.open(`https://wa.me/919818581518?text=${waText}`, "_blank");
    };

    return (
        <>
            <PageTitle title="Developer Services" />
            <main className="bg-white font-sans text-slate-900 overflow-hidden">
                {/* ================= 1. SCREEN-FIT HERO SECTION ================= */}
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
                                alt="Developer Services Dholera SIR"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/60 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-rose-300">
                                <Sparkles className="size-3.5 text-rose-400" />
                                <span>ENTERPRISE LAND & DEVELOPER SOLUTIONS</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06]">
                                Developer <span className="text-[#E02424] drop-shadow-md">Services</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                                Empowering real estate developers with large-scale land sourcing, rigorous legal verification, and government liasioning in Dholera SIR.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#8D0102] px-8 py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:bg-rose-700 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <span>Discuss Developer Project</span>
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
                                <Building2 className="size-6" />
                            </div>

                            <div>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8D0102]">OUR PROMISE FOR DEVELOPERS</span>
                                <p className="mt-1 text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                    From large land assembly to title verification and DSIRDA single-window approvals, we ensure seamless land execution for mega projects.
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
                            {/* Left Side: Cards */}
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
                                        <span>End-to-End Developer Support</span>
                                        <span className="font-bold text-rose-400">Zero Approval Delays</span>
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

                {/* ================= 5. DISCUSS DEVELOPER SERVICES (FORM) ================= */}
                <section id="contact-form" className="py-24 px-6 sm:px-10 lg:px-16 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            {/* Left Column */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="lg:col-span-5 space-y-6"
                            >
                                <div>
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">GET STARTED</span>
                                    <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                        Discuss Developer <span className="text-[#8D0102]">Services</span>
                                    </h2>
                                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                        Planning a large-scale project, joint venture, or land acquisition in Dholera SIR? Connect with our developer advisory team today.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">HELPER INFORMATION</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102] shrink-0" />
                                            <span>Acreage / Land Size</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102] shrink-0" />
                                            <span>Target TP Zone</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102] shrink-0" />
                                            <span>Project Category</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102] shrink-0" />
                                            <span>Target Timeline</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-rose-950 text-white space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-rose-900/80 flex items-center justify-center">
                                            <PhoneCall className="size-5 text-rose-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-extrabold">Need Immediate Assistance?</h4>
                                            <p className="text-xs text-rose-200">Speak directly with our land acquisition leads</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Lead Form */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl"
                            >
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8D0102] bg-slate-50/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8D0102] bg-slate-50/50"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Land Requirement (Acres/Bigha)</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. 10 Acres, 50 Bigha"
                                                value={formData.landRequirement}
                                                onChange={(e) => setFormData({ ...formData, landRequirement: e.target.value })}
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8D0102] bg-slate-50/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Target TP Zone</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. TP 1 / Industrial Zone"
                                                value={formData.targetZone}
                                                onChange={(e) => setFormData({ ...formData, targetZone: e.target.value })}
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8D0102] bg-slate-50/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Project Brief / Note</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Share project details (e.g. JV partnership, land acquisition, DSIRDA approvals)..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8D0102] bg-slate-50/50"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#8D0102] py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:bg-rose-700 transition-all duration-300"
                                    >
                                        <span>Submit Developer Consultation Request</span>
                                        <Send className="size-4" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ================= 6. TESTIMONIALS ================= */}
                <Testimonials />

                {/* ================= 7. EXPLORE OTHER SERVICES ================= */}
                <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">RELATED SOLUTIONS</span>
                            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                Explore our <span className="text-[#8D0102]">other services</span>
                            </h2>
                        </motion.div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherServices.map((service, idx) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.12 }}
                                    className="group rounded-3xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="text-[10px] font-extrabold text-rose-300 uppercase tracking-widest">{service.tagline}</span>
                                            <h3 className="text-lg font-black text-white">{service.title}</h3>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-xs text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                                            <div className="mt-4 space-y-2">
                                                {service.highlights.map((item, hIdx) => (
                                                    <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                        <Check className="size-3.5 text-[#8D0102]" />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Link
                                            href={service.link}
                                            className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-extrabold text-[#8D0102] group-hover:text-rose-700"
                                        >
                                            <span>Explore Service</span>
                                            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= 8. FOOTER ================= */}
                <Footer />
            </main>
        </>
    );
}