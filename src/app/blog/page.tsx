"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, Clock, X } from "lucide-react";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Why Dholera SIR is India's First Smart City Investment Jackpot",
        excerpt: "An inside look into how DSIRDA planning, 4-tier infrastructure, and plug-and-play land models are creating massive ROI opportunities.",
        content: `Dholera Special Investment Region (SIR) isn't just another land development—it is India's largest greenfield smart city, spanning 920 sq km (larger than Singapore). Managed by DSIRDA, Dholera features plug-and-play infrastructure, underground utility ducts, and ICT-enabled governance.

For real estate investors, buying title-clear land in High-Access Zones (like Activation Zone TP1 & TP2) offers high liquidity and steady appreciation. As roads, power grids, and water treatment plants go operational, early-stage investors are locking in ground-level entry prices before full commercial expansion.`,
        author: "Aditya Tiwari",
        date: "Oct 12, 2026",
        readTime: "5 min read",
        category: "Investment",
        image: "/images/invesment.png"
    },
    {
        id: 2,
        title: "The ₹91,000 Cr Tata Semiconductor Plant: What It Means for Land Prices",
        excerpt: "How massive industrial investments in Dholera SIR are driving exponential housing and commercial plot demand.",
        content: `The approval of Tata's mega semiconductor fabrication plant in Dholera SIR (with an investment exceeding ₹91,000 Crores) marks a pivotal shift in Gujarat's industrial landscape. The fab unit alone is projected to create over 100,000 direct and indirect high-skilled jobs.

This influx of engineers, corporate executives, and ancillary supply-chain vendors creates an urgent demand for residential layouts, commercial complexes, and rental housing. Strategic plots near the industrial hub and expressway corridors are poised for rapid capital appreciation over the next 3 to 5 years.`,
        author: "Kunal Varma",
        date: "Oct 05, 2026",
        readTime: "6 min read",
        category: "Economy & Jobs",
        image: "/images/economy&job.png"
    },
    {
        id: 3,
        title: "Dholera International Airport & Expressways: Connectivity Masterclass",
        excerpt: "Key transport corridors connecting Ahmedabad to Dholera and how proximity to major transit routes multiplies plot value.",
        content: `Seamless transport infrastructure is the backbone of real estate growth. Dholera SIR is anchored by three massive connectivity catalysts:

Dholera International Airport (Navagam): Designed to handle both cargo and passenger traffic, easing international trade.

Ahmedabad-Dholera 4-Lane Expressway: Reducing travel time between Ahmedabad and Dholera to under 1 hour.

Monorail & Freight Corridors: Connecting Dholera directly to industrial centers across India.

Plots positioned along TP roads connecting directly to the expressway or airport corridor enjoy maximum commercial viability and resale speed.`,
        author: "Satyam Singh",
        date: "Sep 28, 2026",
        readTime: "5 min read",
        category: "Infrastructure",
        image: "/images/infrastructure.png"
    },
    {
        id: 4,
        title: "5 Documents You Must Verify Before Buying Any Plot in Dholera",
        excerpt: "Protect your capital with this non-negotiable legal checklist for title-clear and DSIRDA-compliant land purchases.",
        content: `Land investments carry maximum safety when legal due diligence is thorough. Before paying a booking token for any plot, insist on verifying:

7/12 Extract & 8A (Pahani Patrak): Confirms absolute land ownership and revenue records.

N.A. (Non-Agricultural) Order: Verifies that agricultural land has been legally converted for residential or commercial use.

Title Clearance & Search Report: A 30-year search report issued by an advocate confirming zero pending litigations or mortgages.

Layout Sanction Plan: Approval from local planning authorities (DSIRDA / Collector).

Zone Verification Certificate: Ensures the land falls within approved development zones and not restricted/green belts.`,
        author: "Kunal Varma",
        date: "Sep 15, 2026",
        readTime: "7 min read",
        category: "Legal & Compliance",
        image: "/images/leagal.png"
    },
    {
        id: 5,
        title: "Town Planning (TP) Schemes Demystified: Zone Differences Explained",
        excerpt: "Understanding TP1, TP2, FSI limits, and zoning laws so you invest in the right land category.",
        content: `Dholera SIR is divided into structured Town Planning (TP) schemes to prevent unplanned urban sprawl. Understanding where your plot lies determines its utility and yield:

Residential Zones: Ideal for plotted housing, villas, and low-rise apartments.

Commercial & High-Density Zones: Located along primary arterial roads; allows higher FSI for retail, offices, and hotels.

Industrial & Logistics Zones: Targeted at manufacturing, warehousing, and tech hubs.

Knowledge & IT Zones: Designed for universities, R&D centers, and tech parks.

Investing in TP1 and TP2 guarantees immediate proximity to early infrastructure rollouts and primary trunk roads.`,
        author: "Aditya Tiwari",
        date: "Sep 02, 2026",
        readTime: "6 min read",
        category: "Town Planning",
        image: "/images/town planing.png"
    },
    {
        id: 6,
        title: "Why Commercial Plots Deliver Higher Yields for Developers & Builders",
        excerpt: "How commercial and multi-use land layouts in Dholera cater to developers building retail spaces and workforce accommodation.",
        content: `For builders and institutional investors, Dholera SIR provides a blank canvas with pre-cleared zoning and high FSI allocations. Commercial plots situated near main TP sector roads are optimized for:

Multi-story retail centers and supermarkets serving incoming tech workers.

Serviced apartments and corporate guest houses.

Warehousing and light industrial parks along logistics corridors.

By partnering with trusted advisory firms like Investor Space, developers get access to vetted, title-clear land parcels without administrative friction.`,
        author: "Khushi Sharma",
        date: "Aug 20, 2026",
        readTime: "5 min read",
        category: "B2B Investment",
        image: "/images/b2b.png"
    },
    {
        id: 7,
        title: "The NRI Guide to Buying Land in Dholera SIR: FEMA & Taxation Made Simple",
        excerpt: "A complete step-by-step guide for Non-Resident Indians purchasing residential and commercial plots in India.",
        content: `For NRIs looking to tap into India's infrastructure growth, Dholera SIR is one of the most structured land markets. Key rules under RBI & FEMA regulations include:

Eligible Land: NRIs can freely purchase residential and commercial land. (Agricultural land requires special approvals/status).

Payment Channels: Transactions must be routed through NRE/NRO banking channels or inward remittances.

Power of Attorney (PoA): Overseas investors can register plots remotely by appointing a trusted PoA in India.

Capital Gains & Repatriation: Sale proceeds can be smoothly repatriated back to your country of residence subject to standard Indian tax compliance (TDS & Capital Gains).`,
        author: "Aditya Tiwari",
        date: "Aug 10, 2026",
        readTime: "8 min read",
        category: "NRI Advice",
        image: "/images/nri advice.png"
    },
    {
        id: 8,
        title: "Residential vs Commercial Plots: How to Pick the Right Segment for 5-Year Holding",
        excerpt: "Comparing capital appreciation, liquidity, and holding costs to align land purchases with your financial goals.",
        content: `Choosing between residential and commercial plots depends on your budget and exit timeline:

Residential Plots — Entry Capital: Moderate / Accessible | Target Exit: End-users, homebuilders, rental | Appreciation Engine: Housing demand & township growth | Best Holding Term: 3–5 Years

Commercial Plots — Entry Capital: Higher initial ticket size | Target Exit: Developers, corporate leases, retail | Appreciation Engine: Road traffic, industrial hubs & footfall | Best Holding Term: 5–7 Years

For first-time investors with a 3–5 year horizon, residential plots in Dholera's TP1 activation zone offer the best balance of entry cost and appreciation potential. For developers with larger capital and longer holds, commercial plots near the expressway corridor deliver superior yield and lease income.`,
        author: "Kunal Varma",
        date: "Jul 28, 2026",
        readTime: "6 min read",
        category: "Strategy",
        image: "/images/startegy.png"
    },
];

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState<any>(null);

    // Standard CSS scroll lock when modal is open
    useEffect(() => {
        if (selectedPost) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [selectedPost]);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden">
            <PageTitle title="Blog" />
            <main className="pb-16 pt-20 sm:pt-28 md:pt-32">

                {/* HERO SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-red-600 font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 shadow-sm inline-block mb-4">
                            Insights & News
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                            The Investor Space <span className="text-red-600">Blog</span>
                        </h1>
                        <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                            Stay updated with the latest market trends, legal checklists, and exclusive insights on Dholera SIR and the broader real estate ecosystem.
                        </p>
                    </div>
                </motion.section>

                {/* BLOG GRID SECTION */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {blogPosts.map((post, idx) => {
                            return (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 36, scale: 0.96 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    onClick={() => setSelectedPost(post)}
                                    className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative group cursor-pointer transition-all duration-300 flex flex-col ${selectedPost?.id === post.id ? "opacity-0" : "hover:shadow-xl hover:border-red-200"
                                        }`}
                                    whileHover={{ scale: selectedPost?.id === post.id ? 1 : 1.02 }}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur text-red-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 flex-1 flex flex-col bg-white relative">
                                        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="size-3 text-red-500" />
                                                {post.date}
                                            </div>
                                            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="size-3 text-red-500" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-red-600 transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 flex items-center justify-between">
                                            <span className="text-red-600 font-bold text-xs sm:text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                                Read Article <ArrowRight className="size-4" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </section>

                {/* NEWSLETTER SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="bg-red-600 rounded-[32px] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-3xl font-bold mb-3">Never Miss An Update</h2>
                            <p className="text-red-100 text-sm">
                                Get exclusive insights, legal tips, and priority access to Dholera SIR project launches directly in your inbox.
                            </p>
                        </div>

                        <div className="relative z-10 w-full md:max-w-md">
                            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => {
                                e.preventDefault();
                                const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value || "";
                                const waText = encodeURIComponent(`New Newsletter Subscription\nEmail: ${email}`);
                                window.open(`https://wa.me/919818581518?text=${waText}`, "_blank");
                            }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                                    required
                                />
                                <button type="submit" className="bg-white text-red-600 font-bold px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors shadow-lg active:scale-95 text-sm shrink-0">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.section>

                {/* MODAL OVERLAY */}
                <AnimatePresence>
                    {selectedPost && (
                        <div
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-black/70 backdrop-blur-md"
                                onClick={() => setSelectedPost(null)}
                            />

                            {/* Modal Box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="bg-white w-full max-w-3xl my-auto max-h-[85vh] overflow-y-auto rounded-[28px] shadow-2xl relative z-10 flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="sticky top-4 right-4 ml-auto mr-4 z-30 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur transition-colors shadow-lg"
                                    aria-label="Close modal"
                                >
                                    <X className="size-5" />
                                </button>

                                <div className="relative h-64 sm:h-80 -mt-12 shrink-0">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-16 left-6">
                                        <span className="bg-white/90 backdrop-blur text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                                            {selectedPost.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>

                                <div className="p-6 sm:p-10 flex-1">
                                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-500 mb-6">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="size-4 text-red-500" />
                                            {selectedPost.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="size-4 text-red-500" />
                                            {selectedPost.readTime}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User className="size-4 text-red-500" />
                                            By {selectedPost.author}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                                        {selectedPost.title}
                                    </h2>

                                    <div className="prose prose-slate max-w-none text-slate-700">
                                        <p className="font-semibold text-lg sm:text-xl text-slate-800 mb-6 leading-relaxed">
                                            {selectedPost.excerpt}
                                        </p>
                                        <p className="whitespace-pre-line leading-relaxed text-base">
                                            {selectedPost.content}
                                        </p>
                                    </div>

                                    <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                                        <button
                                            onClick={() => setSelectedPost(null)}
                                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-full text-sm transition-colors"
                                        >
                                            Close Article
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </main>

            <Footer />
        </div>
    );
}
