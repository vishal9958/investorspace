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
    ShieldCheck,
    Check,
    X,
    PhoneCall,
    Sparkles,
    Layers,
    ArrowUpRight,
    ChevronRight,
    Compass,
    HardHat,
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
        "/images/build.png",
        "/images/build1.png",
        "/images/build2.png",
    ];

    // Fast 3000ms Slide Transition Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const featuresBreakdown = [
        {
            id: 0,
            title: "Branding",
            desc: "We help you establish a distinct brand identity for your projects — from logo design and digital presence to storytelling that connects emotionally with your audience.",
            icon: Sparkles,
            badge: "Brand Identity",
            details: ["Logo & Visual Design", "Digital Presence", "Emotional Storytelling"],
        },
        {
            id: 1,
            title: "Promotion",
            desc: "Our promotional campaigns span both digital and offline platforms, ensuring maximum visibility through strategic ad placements, social media campaigns, and event marketing.",
            icon: TrendingUp,
            badge: "Digital + Offline",
            details: ["Ad Placements", "Social Media Campaigns", "Event Marketing"],
        },
        {
            id: 2,
            title: "Marketing Strategy Support",
            desc: "We develop customized marketing strategies that reflect your brand's strengths and market opportunities — ensuring each project reaches its full sales potential.",
            icon: ShieldCheck,
            badge: "Custom Strategy",
            details: ["Brand Positioning", "Market Opportunity Mapping", "Full Sales Potential"],
        },
        {
            id: 3,
            title: "Sales Enablement",
            desc: "Our sales experts provide end-to-end support — from lead generation and buyer engagement to negotiation and deal closure — helping you achieve faster, more profitable outcomes.",
            icon: HardHat,
            badge: "End-to-End Sales",
            details: ["Lead Generation", "Buyer Engagement", "Deal Closure Support"],
        },
    ];

    const steps = [
        {
            num: "01",
            title: "Expertise",
            subtitle: "Tailored Builder Solutions",
            desc: "Our team has worked closely with leading builders, offering tailored solutions that build trust, recognition, and consistent sales performance in a competitive market.",
            tag: "Why Us",
        },
        {
            num: "02",
            title: "Collaboration",
            subtitle: "Aligned Goals & Outcomes",
            desc: "We work collaboratively with your marketing and sales teams to align project goals, streamline communication, and ensure measurable outcomes.",
            tag: "Why Us",
        },
        {
            num: "03",
            title: "Innovation",
            subtitle: "Creativity + Data",
            desc: "From digital storytelling to on-ground promotions, we combine creativity and data to deliver impactful campaigns that make your projects memorable.",
            tag: "Why Us",
        },
        {
            num: "04",
            title: "Commitment to Excellence",
            subtitle: "Transparency & Growth",
            desc: "Our transparent approach, consistent reporting, and strategic insights ensure your brand maintains credibility while achieving sustainable growth.",
            tag: "Why Us",
        },
    ];

    const otherServices = [
        {
            id: 0,
            title: "Developer Services",
            tagline: "Land Sourcing & Large Scale Project Advisory",
            desc: "Strategic land sourcing, title checks, and government liasioning for mega real estate developers.",
            link: "/services/developer",
            image: "/images/developer.jpeg",
            highlights: ["Contiguous Land Parcels", "DSIRDA Approval Liasion", "Comprehensive Title Verification"],
        },
        {
            id: 1,
            title: "Investor Services",
            tagline: "High Growth Strategic Land Assets",
            desc: "Land can be a steady asset when the paperwork is clean. We share the documents so you can verify them yourself.",
            link: "/services/investor",
            image: "/images/invester.jpeg",
            highlights: ["High Appreciation Zones", "Complete Paperwork", "Exit Strategy Assistance"],
        },
        {
            id: 2,
            title: "Services For All",
            tagline: "Transparent Land Buying Guidance",
            desc: "You do not need to be an expert to buy land safely. We explain every single step with zero jargon.",
            link: "/services/all",
            image: "/images/for_all.jpeg",
            highlights: ["Step-by-step Guidance", "Legal Assistance", "Direct Owner Connection"],
        },
    ];

    const comparisonRows = [
        { name: "Distinct Brand Identity Creation", investorSpace: true, broker: false, direct: false },
        { name: "Digital & Offline Promotional Campaigns", investorSpace: true, broker: true, direct: false },
        { name: "Customized Marketing Strategy", investorSpace: true, broker: false, direct: false },
        { name: "End-to-End Sales Enablement", investorSpace: true, broker: false, direct: false },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
        const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
        const interest = (form.elements.namedItem("interest") as HTMLSelectElement)?.value || "";
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
        const waText = encodeURIComponent(`New Builder Enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}\nMessage: ${message}`);
        window.open(`https://wa.me/919818581518?text=${waText}`, "_blank");
    };

    return (
        <>
            <PageTitle title="Builder Services" />
            <main className="bg-white font-sans text-slate-900 overflow-hidden">

                {/* ================= 1. BRIGHT HERO SECTION WITH BLURRED BACKGROUND SLIDES ================= */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.08 }}
                            animate={{ opacity: 1, scale: 1.05 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 z-0"
                        >
                            <img
                                src={heroSlides[currentSlide]}
                                alt="Builder Services Enterprise"
                                className="w-full h-full object-cover filter blur-sm brightness-[0.75] contrast-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-black/40 backdrop-blur-md px-5 py-2 text-xs sm:text-sm font-extrabold text-white shadow-md">
                                <Sparkles className="size-4 text-rose-300" />
                                <span className="tracking-wider">BUILDER & PLOTTING SOLUTIONS</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02] drop-shadow-lg">
                                Builder <span className="text-[#E02424] drop-shadow-md">Services</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed font-normal max-w-2xl drop-shadow">
                                At InvestorSpace, we help builders create a strong presence in the real estate market — turning projects into trusted, recognizable brands through branding, promotion, marketing strategy, and sales execution.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-5">
                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center gap-2.5 rounded-full bg-[#8D0102] px-9 py-4.5 text-sm sm:text-base font-extrabold text-white shadow-2xl hover:bg-rose-700 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                                >
                                    <span>Discuss Builder Services</span>
                                    <ArrowRight className="size-5" />
                                </a>

                                <a
                                    href="#service-breakdown"
                                    className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/20 backdrop-blur-md px-8 py-4.5 text-sm sm:text-base font-bold text-white hover:bg-white/30 transition-all active:scale-95"
                                >
                                    <span>See what's included</span>
                                    <ArrowRight className="size-5 text-white" />
                                </a>
                            </motion.div>

                            <div className="mt-14 flex items-center gap-2.5">
                                {heroSlides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-10 bg-[#8D0102]" : "w-3 bg-white/60 hover:bg-white"}`}
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
                                    We go beyond conventional marketing — managing your brand perception, generating high-quality leads, and maximizing your return on investment.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ================= 3. THE SERVICE, BROKEN DOWN (Brand Red Accent & Interactive Panel) ================= */}
                <section id="service-breakdown" className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">WHAT'S INCLUDED</span>
                            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                The service, <span className="text-[#8D0102]">broken down</span>
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 font-medium">Select a core service pillar to examine deliverables and execution strategy.</p>
                        </motion.div>

                        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                            {/* Left Side: Brand Color Selector */}
                            <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                                {featuresBreakdown.map((item, index) => {
                                    const Icon = item.icon;
                                    const isActive = activeTab === index;

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => setActiveTab(index)}
                                            className={`group cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex items-center justify-between ${
                                                isActive
                                                    ? "bg-[#8D0102] text-white border-[#8D0102] shadow-xl scale-[1.01]"
                                                    : "bg-white text-slate-900 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/60"
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                                    isActive ? "bg-white text-[#8D0102]" : "bg-rose-50 text-[#8D0102]"
                                                }`}>
                                                    <Icon className="size-5" />
                                                </div>
                                                <div>
                                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-rose-200" : "text-slate-400"}`}>
                                                        {item.badge}
                                                    </span>
                                                    <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
                                                </div>
                                            </div>
                                            <ChevronRight className={`size-5 transition-transform duration-300 ${isActive ? "text-white translate-x-1" : "text-slate-300"}`} />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Side: Active Service Showcase Panel */}
                            <div className="lg:col-span-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -15 }}
                                        transition={{ duration: 0.25 }}
                                        className="h-full rounded-3xl bg-slate-50 p-8 sm:p-10 border border-slate-200/80 shadow-md flex flex-col justify-between relative overflow-hidden"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#8D0102] text-xs font-extrabold uppercase tracking-widest border border-rose-200">
                                                    {featuresBreakdown[activeTab].badge}
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">0{activeTab + 1} / 04</span>
                                            </div>

                                            <h3 className="mt-6 text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                                                {featuresBreakdown[activeTab].title}
                                            </h3>

                                            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                                                {featuresBreakdown[activeTab].desc}
                                            </p>

                                            <div className="mt-8 pt-6 border-t border-slate-200/80">
                                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Key Deliverables</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {featuresBreakdown[activeTab].details.map((detail, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-2.5">
                                                            <div className="size-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                                                <Check className="size-3" />
                                                            </div>
                                                            <span className="text-xs sm:text-sm font-semibold text-slate-800">{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-10 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                                            <span className="text-xs font-medium text-slate-500">Execution Timeline: On-Demand</span>
                                            <a href="#contact-form" className="text-xs font-extrabold text-[#8D0102] hover:underline inline-flex items-center gap-1">
                                                Inquire Service <ArrowRight className="size-3.5" />
                                            </a>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* ================= ANIMATED COMPARISON MATRIX BOX ================= */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-16 rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-rose-200/50 transition-colors duration-700"></div>

                            <div className="flex items-center justify-between pb-6 border-b border-slate-200/90 relative z-10">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                                    <div className="size-8 rounded-lg bg-rose-100 text-[#8D0102] flex items-center justify-center">
                                        <Layers className="size-4" />
                                    </div>
                                    <span>How we compare with other options</span>
                                </h3>
                                <span className="hidden sm:inline-block text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                    Verified Market Advantage
                                </span>
                            </div>

                            <div className="mt-6 overflow-x-auto relative z-10">
                                <table className="w-full text-left text-xs sm:text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 text-slate-500">
                                            <th className="pb-4 font-bold">Feature</th>
                                            <th className="pb-4 font-bold text-center bg-[#8D0102] text-white rounded-t-2xl px-4 py-3 shadow-md relative overflow-hidden">
                                                <span className="relative z-10">Investor Space</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]"></div>
                                            </th>
                                            <th className="pb-4 font-bold text-center px-3">Local Broker</th>
                                            <th className="pb-4 font-bold text-center px-3">Going Direct</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200/80">
                                        {comparisonRows.map((row, rIdx) => (
                                            <motion.tr
                                                key={rIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: rIdx * 0.08 }}
                                                className="hover:bg-rose-50/40 transition-all duration-200"
                                            >
                                                <td className="py-4 font-semibold text-slate-800 pr-2">{row.name}</td>
                                                <td className="py-4 text-center bg-rose-50/80 border-x border-rose-100/90 px-4 font-bold">
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ type: "spring", stiffness: 300, delay: 0.1 + rIdx * 0.1 }}
                                                    >
                                                        <Check className="size-5 text-[#8D0102] mx-auto stroke-[2.5]" />
                                                    </motion.div>
                                                </td>
                                                <td className="py-4 text-center">
                                                    {row.broker ? (
                                                        <Check className="size-4 text-slate-500 mx-auto" />
                                                    ) : (
                                                        <X className="size-4 text-slate-300 mx-auto" />
                                                    )}
                                                </td>
                                                <td className="py-4 text-center">
                                                    {row.direct ? (
                                                        <Check className="size-4 text-slate-500 mx-auto" />
                                                    ) : (
                                                        <X className="size-4 text-slate-300 mx-auto" />
                                                    )}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between relative z-10">
                                <span>Complete Layout Execution Support</span>
                                <span className="font-extrabold text-[#8D0102] flex items-center gap-1">
                                    <ShieldCheck className="size-3.5" /> Zero Legal Delays
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ================= 4. FOUR STEPS (Light Clean Card View) ================= */}
                <section className="py-24 px-6 sm:px-10 lg:px-16 bg-slate-50/80 border-y border-slate-200/80 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">HOW IT WORKS</span>
                            <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                Four steps, <span className="text-[#8D0102]">no surprises</span>
                            </h2>
                            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">Hover over the timeline nodes to activate process stages</p>
                        </motion.div>

                        <div className="mt-20 relative">
                            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[3px] bg-slate-200 z-0">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#8D0102] via-rose-600 to-[#8D0102] transition-all duration-300"
                                    style={{
                                        width: hoveredStep !== null ? `${((hoveredStep + 1) / steps.length) * 100}%` : "25%",
                                    }}
                                ></motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {steps.map((step, idx) => {
                                    const isHovered = hoveredStep === idx;
                                    const isPast = hoveredStep !== null && idx <= hoveredStep;

                                    return (
                                        <motion.div
                                            key={idx}
                                            onMouseEnter={() => setHoveredStep(idx)}
                                            onMouseLeave={() => setHoveredStep(null)}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.08 }}
                                            className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer"
                                        >
                                            <div className="relative mb-6">
                                                <div
                                                    className={`size-14 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 border-2 ${
                                                        isHovered || isPast
                                                            ? "bg-[#8D0102] text-white border-[#8D0102] shadow-lg scale-105"
                                                            : "bg-white text-slate-400 border-slate-300 shadow-sm"
                                                    }`}
                                                >
                                                    {step.num}
                                                </div>
                                            </div>

                                            <div
                                                className={`w-full rounded-2xl p-6 transition-all duration-300 border ${
                                                    isHovered
                                                        ? "bg-white border-[#8D0102] shadow-xl ring-2 ring-[#8D0102]/20 -translate-y-1"
                                                        : "bg-white text-slate-900 border-slate-200/90 shadow-sm"
                                                }`}
                                            >
                                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8D0102]">
                                                    {step.tag}
                                                </span>
                                                <h3 className="mt-1 text-base font-black tracking-tight">{step.title}</h3>
                                                <p className="text-xs font-bold mt-0.5 text-slate-400">
                                                    {step.subtitle}
                                                </p>
                                                <p className="mt-3 text-xs leading-relaxed text-slate-600">
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
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">GET STARTED</span>
                                    <h2 className="mt-2 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                        Discuss Builder <span className="text-[#8D0102]">Services</span>
                                    </h2>
                                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                        Looking to launch your project or scale sales in Dholera SIR? Connect with our project advisors today.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">HELPFUL TO KEEP READY</p>
                                    <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Project Scale & Scope</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Target Launch Timeline</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Marketing Requirements</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="size-4 text-[#8D0102]" />
                                            <span>Sales Enablement Goals</span>
                                        </div>
                                    </div>
                                </div>

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

                            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 98765 43210"
                                                required
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Message</label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            placeholder="Tell us about your project requirements..."
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-xs sm:text-sm text-slate-900 focus:border-[#8D0102] focus:bg-white focus:outline-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-full bg-[#8D0102] py-4 text-xs sm:text-sm font-extrabold text-white shadow-xl hover:bg-rose-800 transition-colors"
                                    >
                                        Submit Builder Consultation Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= 6. EXPLORE ANOTHER SERVICE ================= */}
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

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                            <div className="lg:col-span-4 space-y-3">
                                {otherServices.map((service, sIdx) => {
                                    const isSelected = activeService === sIdx;
                                    return (
                                        <div
                                            key={service.id}
                                            onClick={() => setActiveService(sIdx)}
                                            className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                                                isSelected
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
                                        <img
                                            src={otherServices[activeService].image}
                                            alt={otherServices[activeService].title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

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

                <Testimonials />
            </main>
            <Footer />
        </>
    );
}