"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2,
    Calendar,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    ShieldCheck,
    FileCheck,
    Users,
    Compass,
    FileText,
    DollarSign,
    Map,
    UserCheck,
    TrendingUp,
    ChevronDown,
    PhoneCall,
} from "lucide-react";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";

// ─── SCROLL-LOCKED HISTORY TIMELINE ───────────────────────────────────────────
const milestones = [
    {
        year: "2015",
        title: "Title-First Investment Mandate",
        desc: "Founded Investor Space Real Estate Promoters with a strict rule: 100% Government Approved, All NA (Non-Agricultural), NOC Certified, and Title Clear land listings only.",
        badge: "ORIGIN",
    },
    {
        year: "2018",
        title: "Strategic Corridor Acquisition",
        desc: "Focused on high-growth corridors along the Main 6-Lane Highway and TP 1A / TP 1B linear developments parallel to the Ahmedabad-Dholera Expressway.",
        badge: "DHOLERA SIR FOCUS",
    },
    {
        year: "2021",
        title: "Anchor Infra Alignment",
        desc: "Positioned projects within 2 to 10 minutes from major growth drivers: TATA Semiconductor Fab (₹91,000 Cr), International Airport Circle, and Metro links.",
        badge: "INFRASTRUCTURE",
    },
    {
        year: "2024",
        title: "Kesar Green Flora Landmark",
        desc: "Launched flagship residential plot development 'Kesar Green Flora' in Dholera SIR offering plot sizes starting from 100 sq. yards onwards.",
        badge: "PROJECT LAUNCH",
    },
    {
        year: "2026",
        title: "Nationwide Investor Network",
        desc: "Guiding investors across 12 major cities in unlocking value in India's first greenfield smart industrial city (920 sq. km DSIR).",
        badge: "SCALE & TRUST",
    },
];

function HistoryTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrolling = useRef(false);
    const activeRef = useRef(0);

    // keep ref in sync with state
    useEffect(() => { activeRef.current = activeIndex; }, [activeIndex]);

    const goTo = (i: number) => {
        const next = Math.max(0, Math.min(milestones.length - 1, i));
        setActiveIndex(next);
        activeRef.current = next;
    };

    // Attach wheel listener directly on the container div (non-passive)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            const cur = activeRef.current;
            const goingDown = e.deltaY > 0;
            const goingUp = e.deltaY < 0;

            // At edges — let page scroll
            if (cur === 0 && goingUp) return;
            if (cur === milestones.length - 1 && goingDown) return;

            // Middle milestones — eat the scroll
            e.preventDefault();
            e.stopPropagation();

            if (scrolling.current) return;
            scrolling.current = true;
            setTimeout(() => { scrolling.current = false; }, 700);

            goTo(cur + (goingDown ? 1 : -1));
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    const ITEM_H = 160;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-100/80 hover:shadow-xl transition-all duration-300">
                <span className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                    OUR HISTORY
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-1">
                    Guiding Dholera SIR Buyers Since 2018
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                    Only milestones we can prove appear here.
                </p>

                {/* This div catches wheel events */}
                <div ref={containerRef} className="flex gap-6 sm:gap-10" style={{ height: ITEM_H }}>
                    {/* Left: red line + dots */}
                    <div className="relative flex flex-col items-center" style={{ minWidth: 20, height: ITEM_H }}>
                        <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-0.5 bg-red-100 rounded-full" />
                        <motion.div
                            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-red-600 rounded-full origin-top"
                            animate={{ height: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                        <div className="relative z-10 flex flex-col justify-between h-full py-1">
                            {milestones.map((_, i) => (
                                <button key={i} onClick={() => goTo(i)} className="focus:outline-none flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: i === activeIndex ? 1.6 : 1,
                                            backgroundColor: i <= activeIndex ? "#dc2626" : "#fecaca",
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="w-2.5 h-2.5 rounded-full border-2 border-white shadow"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: animated content */}
                    <div className="flex-1 overflow-hidden" style={{ height: ITEM_H }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                style={{ height: ITEM_H }}
                                className="flex flex-col justify-center"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-red-600 font-black text-2xl sm:text-3xl">{milestones[activeIndex].year}</span>
                                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-red-400 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                                        {milestones[activeIndex].badge}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{milestones[activeIndex].title}</h3>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">{milestones[activeIndex].desc}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
// ──────────────────────────────────────────────────────────────────────────────

export default function CompanyPage() {
    const [openDocIndex, setOpenDocIndex] = useState<number | null>(0);

    // 1. Stats Data
    const stats = [
        {
            number: "2018",
            title: "Founded",
            desc: "Year we began guiding plot buyers in Dholera SIR",
            icon: Calendar,
        },
        {
            number: "4",
            title: "Core Services",
            desc: "Services for developers, builders, investors and first-time buyers",
            icon: Building2,
        },
        {
            number: "6",
            title: "Commitments",
            desc: "Commitments we apply to every plot we show",
            icon: ShieldCheck,
        },
        {
            number: "5",
            title: "Document Checks",
            desc: "Document checks we ask for before you pay",
            icon: FileCheck,
        },
    ];

    // 2. Services Data
    const services = [
        {
            tag: "Dholera land advisory",
            title: "Developer Services",
            href: "/services/developer",
            desc: "Land sourcing, approval support and launch planning for development projects in Dholera SIR.",
            icon: Compass,
        },
        {
            tag: "Joint Development in Dholera",
            title: "Builder Services",
            href: "/services/builder",
            desc: "Joint development, approval tracking and execution support for builders working in Dholera.",
            icon: Building2,
        },
        {
            tag: "Dholera plot investment",
            title: "Investor Services",
            href: "/services/investor",
            desc: "Plots in Dholera SIR with clear documents, transparent pricing and an exit plan from the start.",
            icon: TrendingUp,
        },
        {
            tag: "Plots for every buyer",
            title: "Services For All",
            href: "/services/all",
            desc: "First-time buyers, NRIs and families guided step-by-step in simple language.",
            icon: Users,
        },
    ];

    // 3. Compliance Documents Data
    const documents = [
        {
            title: "RERA Registration",
            desc: "Ask for the project's RERA number and check it on the Gujarat RERA website.",
        },
        {
            title: "Title and Mutation Records",
            desc: "The 7/12 extract and the ownership chain, reviewed by your own lawyer.",
        },
        {
            title: "NA Order and Layout Sanction",
            desc: "Proof that the land is non-agricultural and the layout plan is approved.",
        },
        {
            title: "TP Scheme and DSIRDA Status",
            desc: "Confirm which TP scheme the plot falls under and its approval status.",
        },
        {
            title: "Encumbrance Certificate",
            desc: "Shows loans or legal claims on the plot.",
        },
    ];

    // 4. Why Choose Us Features Data
    const whyUsFeatures = [
        {
            title: "Documents Before Booking",
            desc: "We share title, approval and layout documents before you pay so you and your lawyer can verify.",
            icon: FileText,
        },
        {
            title: "Clear Pricing",
            desc: "One rate card with every charge listed upfront, so the final amount matches the quote.",
            icon: DollarSign,
        },
        {
            title: "Site Visits With Our Team",
            desc: "Walk the plot with an adviser who knows Dholera SIR and its TP schemes.",
            icon: Map,
        },
        {
            title: "Infrastructure, Explained",
            desc: "We explain how the Expressway, Airport, and Semiconductor hub impact plot value.",
            icon: Building2,
        },
        {
            title: "One Point of Contact",
            desc: "The same adviser from the first call to registration and possession.",
            icon: UserCheck,
        },
        {
            title: "Resale Guidance",
            desc: "Realistic guidance and exit planning when you decide to sell.",
            icon: TrendingUp,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden">
            <PageTitle title="Company" />
            <main className="pb-16 pt-20 sm:pt-28 md:pt-32">
                {/* 1. HERO & AT A GLANCE SECTION */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 flex flex-col justify-center">
                            <motion.span 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full w-fit mb-4 border border-red-100 shadow-sm"
                            >
                                COMPANY OVERVIEW
                            </motion.span>
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight"
                            >
                                Real Estate Promoters <br />
                                in <span className="text-red-600 underline decoration-red-200 underline-offset-4">Dholera SIR</span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl"
                            >
                                Investor Space has guided plot buyers, investors, developers and
                                builders in Dholera SIR, Gujarat, since 2018. We share the
                                documents first, so you and your lawyer can verify before you pay.
                            </motion.p>
                            <div className="flex flex-wrap items-center gap-4">
                                <a href="tel:+919818581518" className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base cursor-pointer">
                                    Talk to An Adviser <ArrowRight className="size-4" />
                                </a>
                                <a href="/services" className="bg-white hover:bg-slate-100 active:scale-95 text-slate-800 border border-slate-200 font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base shadow-sm cursor-pointer">
                                    See Our Services
                                </a>
                            </div>
                        </div>

                        {/* Right Card: Investor Space At A Glance */}
                        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/80 relative overflow-hidden group hover:shadow-2xl hover:border-red-100 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-36 h-36 bg-red-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

                            <h2 className="text-xl font-bold text-slate-900 mb-1">
                                Investor Space At A Glance
                            </h2>
                            <p className="text-xs text-slate-500 mb-6 font-medium">
                                Real Estate Promoters, Dholera
                            </p>

                            <div className="space-y-3.5 text-sm text-slate-700">
                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 group-hover:bg-slate-50 transition-colors">
                                    <Calendar className="size-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">
                                            Founded
                                        </span>
                                        <span className="font-semibold text-slate-800">2018</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 group-hover:bg-slate-50 transition-colors">
                                    <MapPin className="size-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">
                                            Area Focus
                                        </span>
                                        <span className="font-semibold text-slate-800">
                                            Plots in Dholera SIR, Gujarat
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 group-hover:bg-slate-50 transition-colors">
                                    <Building2 className="size-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs text-slate-400 font-medium block">
                                            Headquarters
                                        </span>
                                        <span className="font-semibold text-slate-800">
                                            R2-LG 34, M3M Corner Walk, Sector-74, Gurgaon - 122004
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <a
                                        href="tel:+919818581518"
                                        className="flex items-center gap-2 p-3 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 transition-all duration-300 font-medium text-xs sm:text-sm hover:scale-[1.02]"
                                    >
                                        <Phone className="size-4 text-red-600" />
                                        <span>+91 9818581518</span>
                                    </a>
                                    <a
                                        href="mailto:sales@investorspace.co"
                                        className="flex items-center gap-2 p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all duration-300 font-medium text-xs sm:text-sm overflow-hidden text-ellipsis hover:scale-[1.02]"
                                    >
                                        <Mail className="size-4 text-slate-600 shrink-0" />
                                        <span className="truncate">sales@investorspace.co</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. KEY STATS CARDS WITH ANIMATION */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
                    >
                        {stats.map((stat, idx) => {
                            const IconComp = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={{ hidden: { opacity: 0, y: 32, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                                    className="bg-white rounded-3xl p-6 shadow-md border border-slate-100/90 hover:border-red-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/15 transition-all"></div>
                                    <div className="flex items-center justify-between mb-4 relative z-10">
                                        <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                                            {stat.number}
                                        </span>
                                        <div className="p-3 rounded-2xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                            <IconComp className="size-5" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-slate-900">
                                        {stat.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                                        {stat.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* 3. OUR HISTORY SECTION - SCROLL-LOCKED TIMELINE */}
                <HistoryTimeline />

                {/* 4. SERVICES FOR EVERY BUYER */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <span className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                            WHO WE WORK WITH
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
                            Services For Every Dholera SIR Buyer
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base">
                            Developers, builders, investors and first-time buyers each get a clear process.
                        </p>
                    </div>

                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {services.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={{ hidden: { opacity: 0, y: 36, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                                    className="bg-white rounded-3xl p-6 shadow-md border border-slate-100/90 hover:border-red-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                                >
                                    <div>
                                        <div className="p-3.5 rounded-2xl bg-red-50 text-red-600 w-fit mb-4 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                            <Icon className="size-6" />
                                        </div>
                                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide block mb-1">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <Link
                                        href={item.href}
                                        className="text-red-600 font-bold text-xs sm:text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                                    >
                                        Learn more <ArrowRight className="size-4" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* 5. COMPLIANCE & ACCORDION */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-100">
                        <span className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                            COMPLIANCE
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
                            Documents We Check On Every Dholera SIR Plot
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mb-6">
                            We ask for the same documents on every plot, and we share them before you pay.
                        </p>

                        <div className="bg-red-50/80 border border-red-100 rounded-2xl p-4 mb-8 flex items-center gap-3 text-red-800 text-xs sm:text-sm font-semibold shadow-sm">
                            <ShieldCheck className="size-5 text-red-600 shrink-0" />
                            <span>Have your own lawyer review them before you pay.</span>
                        </div>

                        <div className="space-y-3">
                            {documents.map((doc, index) => {
                                const isOpen = openDocIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                                                ? "border-red-200 shadow-md bg-red-50/10"
                                                : "border-slate-200 hover:border-slate-300"
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenDocIndex(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-slate-50/80 transition cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FileCheck className={`size-5 transition-colors ${isOpen ? "text-red-600" : "text-slate-400"}`} />
                                                <span className="font-bold text-slate-900 text-sm sm:text-base">
                                                    {doc.title}
                                                </span>
                                            </div>
                                            <ChevronDown
                                                className={`size-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-600" : ""
                                                    }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5 pt-1 bg-slate-50/50 text-slate-600 text-xs sm:text-sm border-t border-slate-100">
                                                {doc.desc}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.section>

                {/* 6. WHY BUYERS CHOOSE US */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <span className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
                            WHY INVESTOR SPACE
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
                            Why Buyers Choose Us For Dholera SIR Plots
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base">
                            Documents first, clear pricing and one point of contact, from your first call to registration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUsFeatures.map((feat, idx) => {
                            const Icon = feat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-3xl p-6 shadow-md border border-slate-100/90 hover:border-red-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="p-3 rounded-2xl bg-red-50 text-red-600 w-fit mb-4 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                                        {feat.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                        {feat.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* 7. READY TO SEE DOCUMENTS BANNER */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all duration-300">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                                Ready To See The Documents First?
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
                                Share your budget and what you are looking for. We will send the project documents and answer your questions about Dholera SIR plots.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <a href="/contact#callback" className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-md shadow-red-600/20 hover:-translate-y-0.5 cursor-pointer">
                                Send An Enquiry
                            </a>
                            <a
                                href="tel:+919818581518"
                                className="bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 font-bold px-5 py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
                            >
                                <PhoneCall className="size-4 text-red-600" />
                                <span>+91 9818581518</span>
                            </a>
                        </div>
                    </div>
                </motion.section>

                {/* 8. BOTTOM HERO CTA WITH CHARACTER */}
                <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="max-w-2xl relative z-10">
                            <span className="text-red-500 font-bold text-xs uppercase tracking-widest block mb-2">
                                YOUR NEXT MOVE
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                                Invest with confidence in land designed to{" "}
                                <span className="text-red-500">grow with you.</span>
                            </h2>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                                Talk to our advisers, review the title documents yourself, and walk the plot before you invest a rupee.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a href="/contact#callback" className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-red-600/40 hover:-translate-y-0.5 cursor-pointer">
                                    Schedule A Free Consultation
                                </a>
                                <a href="tel:+919818581518" className="bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-bold px-5 py-3.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer">
                                    Call an Adviser
                                </a>
                                <a href="https://wa.me/919818581518" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-bold px-5 py-3.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer">
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                        {/* Right Agent Character */}
                        <div className="relative z-10 shrink-0 w-48 sm:w-64 lg:w-72 flex items-center justify-center">
                            <img
                                src="/characters/agent_key.png"
                                alt="Real Estate Agent"
                                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.section>
            </main>

            {/* Footer added seamlessly */}
            <Footer />
        </div>
    );
}

