"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import {
    ShieldCheck,
    Plane,
    Car,
    Train,
    Building2,
    GraduationCap,
    Ruler,
    CheckCircle2,
    Phone,
    Download,
    ChevronRight,
    Building,
    Compass,
    Landmark,
    Sparkles,
} from "lucide-react";

export default function KesarGreenFloraDetailPage() {
    // Working HD Real Estate & Infrastructure Images with Full CDN Links
    const projectImages = [
        {
            src: "/images/kesar1.png",
            title: "Master Sub-Plot Layout Plan & Highway Entrance",
        },
        {
            src: "/images/kesar2.png",
            title: "Kesar Green Flora Residential Plots",
        },
        {
            src: "/images/kesar3.png",
            title: "TATA Semiconductor Fab Hub (₹91,000 Cr)",
        },
        {
            src: "/images/kesar4.png",
            title: "Dholera Greenfield International Airport Corridor",
        },
    ];

    const [activeImage, setActiveImage] = useState("/images/FloraMaster.png",);

    const distances = [
        { time: "2 Min", title: "Upcoming Medical University", desc: "Top tier education & healthcare hub", icon: GraduationCap },
        { time: "3 Min", title: "TATA Residential Flats", desc: "Executive housing ecosystem", icon: Building },
        { time: "5 Min", title: "Indo-Arabian Industrial Park", desc: "Heavy industrial & manufacturing zone", icon: Building2 },
        { time: "10 Min", title: "Dholera Airport Circle", desc: "Greenfield passenger & cargo airport", icon: Plane },
        { time: "10 Min", title: "10-Lane Expressway", desc: "Ahmedabad - Dholera direct corridor", icon: Car },
        { time: "10 Min", title: "Upcoming Metro Station", desc: "High-speed monorail / metro link", icon: Train },
        { time: "10 Min", title: "Lothal Heritage Complex", desc: "World-class maritime heritage hub", icon: Landmark },
    ];

    const nearbyCities = [
        { city: "Dholera SIR Hub", dist: "0 Km", time: "Direct Access", desc: "Inside India's 1st Greenfield Smart City" },
        { city: "Ahmedabad", dist: "~100 Km", time: "45-50 Mins", desc: "Via 10-Lane Expressway Link" },
        { city: "Bhavnagar", dist: "~60 Km", time: "50 Mins", desc: "Major port and trade corridor" },
        { city: "Vadodara", dist: "~130 Km", time: "1.5 Hours", desc: "Connected via upcoming Express Grids" },
    ];

    const plotSizes = ["100 Sq. Yards", "150 Sq. Yards", "300 Sq. Yards", "600 Sq. Yards"];

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <>
            <main className="pt-20 bg-white text-slate-900 font-sans overflow-hidden">
                {/* Breadcrumb Navigation */}
                <div className="bg-slate-50 border-b border-slate-200 py-3 px-6 sm:px-10 lg:px-16">
                    <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
                        <Link href="/" className="hover:text-[#8D0102] transition">Home</Link>
                        <ChevronRight className="size-3" />
                        <Link href="/projects" className="hover:text-[#8D0102] transition">Projects</Link>
                        <ChevronRight className="size-3" />
                        <span className="font-bold text-slate-900">Kesar Green Flora</span>
                    </div>
                </div>

                {/* HERO SECTION WITH VIDEO BACKGROUND */}
                <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-black text-white px-6 sm:px-10 lg:px-16">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
                    >
                        <source src="/images/kesar_green.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40"></div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div
                            className="lg:col-span-7"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur mb-5 shadow-lg"
                            >
                                <ShieldCheck className="size-4 text-emerald-400" /> 100% GOVT. APPROVED & TITLE CLEAR
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-md"
                            >
                                Kesar Green Flora
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="mt-3 text-sm sm:text-base text-rose-300 font-bold uppercase tracking-widest flex items-center gap-2"
                            >
                                <Sparkles className="size-4 text-rose-300 inline" /> "Truth Is Our Ornament" • Investor Space Promoters
                            </motion.p>

                            <motion.p
                                variants={fadeInUp}
                                className="mt-4 text-xs sm:text-base text-white/90 leading-relaxed max-w-2xl drop-shadow"
                            >
                                Premium residential plots in Dholera SIR directly touch main 6-Lane Highway. Positioned right beside mega anchors: TATA Semiconductor Fab (₹91,000 Cr), International Airport, and Expressways.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    href="tel:+919818581518"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#8D0102] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-[#a80203] transition-colors"
                                >
                                    <Phone className="size-4" /> Book Site Visit (+91 9818-581-518)
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-7 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur hover:bg-white/30 transition-colors shadow-lg"
                                >
                                    Download Layout PDF <Download className="size-4" />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ y: -5 }}
                            className="lg:col-span-5 bg-white/95 backdrop-blur-md text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100/80 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h3 className="text-lg font-bold text-slate-900">Project Specs</h3>
                                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                                    100% Govt Approved
                                </span>
                            </div>
                            <ul className="mt-4 space-y-3.5 text-xs">
                                <li className="flex justify-between border-b border-slate-100 pb-2.5">
                                    <span className="text-slate-500 font-medium">Location Touch:</span>
                                    <span className="font-bold text-slate-900">Main 6-Lane Highway</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2.5">
                                    <span className="text-slate-500 font-medium">Legal Status:</span>
                                    <span className="font-bold text-emerald-700">All NA, NOC, Title Clear</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2.5">
                                    <span className="text-slate-500 font-medium">Plot Options:</span>
                                    <span className="font-bold text-slate-900">100, 150, 300, 600 Sq. Yds</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-100 pb-2.5">
                                    <span className="text-slate-500 font-medium">Promoter:</span>
                                    <span className="font-bold text-slate-900">Investor Space Promoters</span>
                                </li>
                                <li className="flex justify-between items-center pt-1">
                                    <span className="text-slate-500 font-medium">Pricing:</span>
                                    <span className="font-black text-[#8D0102] text-base">On Request</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* MEDIA GALLERY SECTION - BALANCED HIGH-IMPACT LAYOUT */}
                <section className="py-14 px-6 sm:px-10 lg:px-16 bg-slate-50 border-b border-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-[#8D0102]">PROJECT MEDIA & LAYOUT MAPS</span>
                            <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-slate-950">
                                Explore Sub-Plot Layouts & Site Media
                            </h2>
                        </motion.div>

                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                            {/* Main Display Box (Big Box) */}
                            <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl min-h-[380px] sm:min-h-[480px] relative group flex flex-col justify-end">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImage}
                                        src={activeImage}
                                        alt="Active Project View"
                                        initial={{ opacity: 0, scale: 1.03 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                                <div className="relative z-10 p-6 sm:p-8">
                                    <span className="inline-block rounded-full bg-[#8D0102] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                                        ACTIVE VIEW
                                    </span>
                                    <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
                                        {projectImages.find((img) => img.src === activeImage)?.title || "Project Overview"}
                                    </h3>
                                </div>
                            </div>

                            {/* Side Cards (Bade Dabba Grid) */}
                            <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
                                {projectImages.map((img, idx) => (
                                    <motion.button
                                        key={idx}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setActiveImage(img.src)}
                                        className={`group relative rounded-2xl overflow-hidden border-2 transition-all min-h-[180px] sm:min-h-[230px] flex flex-col justify-end text-left shadow-sm ${activeImage === img.src
                                            ? "border-[#8D0102] ring-4 ring-[#8D0102]/20 shadow-md"
                                            : "border-slate-200 opacity-90 hover:opacity-100"
                                            }`}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                                        <div className="relative z-10 p-3.5">
                                            <p className="text-xs font-bold text-white leading-snug line-clamp-2 drop-shadow">
                                                {img.title}
                                            </p>
                                            <span className="mt-1 inline-block text-[10px] font-semibold text-rose-300 uppercase tracking-wider">
                                                {activeImage === img.src ? "● Selected" : "Click to view"}
                                            </span>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2 TO 10 MINUTES CONNECTIVITY ADVANTAGE */}
                <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-rose-50 text-[#8D0102]">
                                Key Distances
                            </span>
                            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                                The 2-10 Minute Strategic Distance Advantage
                            </h2>
                            <p className="mt-2 text-xs sm:text-sm text-slate-500">
                                Kesar Green Flora is positioned directly along key infrastructure nodes in Dholera SIR.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {distances.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                        className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-xs hover:shadow-lg hover:border-[#8D0102]/40 hover:bg-white transition-all duration-300 cursor-pointer"
                                    >
                                        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#8D0102] text-white font-black text-xs shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {item.time}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#8D0102] transition-colors">{item.title}</h4>
                                            <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* NEARBY CITIES & CORRIDOR CONNECTIVITY */}
                <section className="py-16 px-6 sm:px-10 lg:px-16 bg-slate-50 border-t border-b border-slate-200/80">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-[#8D0102]">
                                    INTER-CITY & REGIONAL LINKS
                                </span>
                                <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-slate-950">
                                    Surrounding Cities & Travel Timelines
                                </h2>
                            </motion.div>
                            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                                Kesar Green Flora connects seamlessly to major commercial centers across Gujarat via 10-Lane Expressway & Railway grids.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                        >
                            {nearbyCities.map((c, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    whileHover={{ y: -6 }}
                                    className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#8D0102]/30 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-display font-black text-lg text-slate-900">{c.city}</span>
                                        <span className="bg-rose-50 text-[#8D0102] font-extrabold text-xs px-2.5 py-1 rounded-full border border-rose-100">
                                            {c.dist}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                                        <Compass className="size-3.5 text-[#8D0102]" />
                                        <span>Travel Time: {c.time}</span>
                                    </div>
                                    <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">{c.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* PLOT SIZES & STRATEGIC ZONES */}
                <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="lg:col-span-6"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-[#8D0102]">PLOT SIZES & FLEXIBILITY</span>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">
                                Multiple Residential Plot Options (100+ Sq. Yds)
                            </h2>
                            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Choose from sanctioned sub-plots designed for immediate value growth and future residential construction in Dholera SIR.
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {plotSizes.map((size, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.03 }}
                                        className="flex items-center gap-2.5 rounded-2xl bg-rose-50/60 p-3.5 text-xs font-bold text-slate-900 border border-rose-100/80 shadow-xs transition-transform"
                                    >
                                        <Ruler className="size-4 text-[#8D0102] shrink-0" />
                                        <span>{size}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.01 }}
                            className="lg:col-span-6 bg-[#8D0102] p-8 rounded-3xl text-white shadow-2xl transition-transform"
                        >
                            <h3 className="font-bold text-xl mb-4 text-white">Strategic Industrial Corridor Alignment</h3>
                            <ul className="space-y-4 text-xs sm:text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="size-5 shrink-0 text-rose-300 mt-0.5" />
                                    <span><strong>Industrial Zone TP 1A & TP 1B:</strong> Located very close to Linear Development parallel to Expressway (rapidly developed by DSIR).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="size-5 shrink-0 text-rose-300 mt-0.5" />
                                    <span><strong>Activation Area Proximity:</strong> Close to active TP 2A and TP 4A activation areas (22.5 sq. km).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="size-5 shrink-0 text-rose-300 mt-0.5" />
                                    <span><strong>TATA Tech Ecosystem:</strong> Prime residential zone serving executives and engineers of upcoming tech & fab hubs.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}