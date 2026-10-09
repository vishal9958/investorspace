"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, Clock, X } from "lucide-react";
import Footer from "@/components/Footer";

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Why Dholera SIR is India's Next Mega Investment Hub",
        excerpt: "An inside look into the infrastructure projects driving land value in Dholera.",
        content: "Dholera Special Investment Region (SIR) is slated to be larger than Singapore. With the upcoming international airport, expressway, and the massive Tata semiconductor plant, property values are projected to soar. Investors securing clear-title land now are positioned for exceptional long-term ROI. In this article, we break down the key drivers of Dholera's growth engine and how retail investors can safely participate.",
        author: "Aditya Tiwari",
        date: "Oct 12, 2026",
        readTime: "5 min read",
        category: "Investment",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "5 Documents You Must Check Before Buying Land",
        excerpt: "Don't get scammed. Follow this legal checklist before you pay a single rupee.",
        content: "Title clearance, NA (Non-Agricultural) order, layout sanction, encumbrance certificate, and RERA registration are the fundamental pillars of a safe land purchase. We explore what each document means, where to procure them, and how to verify their authenticity. Trusting verbal promises is the biggest mistake you can make in real estate.",
        author: "Kunal Varma",
        date: "Oct 05, 2026",
        readTime: "7 min read",
        category: "Legal",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Residential vs Commercial Plots in Dholera",
        excerpt: "Which property type yields better returns over a 10-year horizon?",
        content: "While commercial plots offer higher rental yields and exponential appreciation near transport hubs, residential plots provide stability and steady growth. Depending on your risk appetite and investment duration, we analyze both segments in the context of Dholera's master plan.",
        author: "Khushi Sharma",
        date: "Sep 28, 2026",
        readTime: "4 min read",
        category: "Real Estate",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Understanding Town Planning (TP) Schemes",
        excerpt: "How government zoning affects your plot's future value and utility.",
        content: "TP schemes dictate land use, FSI (Floor Space Index), and infrastructure development. Investing in a plot without understanding its TP zone is a gamble. We simplify the zoning laws of Dholera SIR and highlight the most lucrative sectors.",
        author: "Satyam Singh",
        date: "Sep 15, 2026",
        readTime: "6 min read",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "The Impact of Tata Semiconductor Fab",
        excerpt: "How the ₹91,000 Cr ecosystem is reshaping Dholera's real estate.",
        content: "The Tata group's massive investment is expected to create over 100,000 direct and indirect jobs. This massive influx of talent will require housing, commercial spaces, and recreational facilities, driving an unprecedented boom in land demand.",
        author: "Kunal Varma",
        date: "Sep 02, 2026",
        readTime: "5 min read",
        category: "Economy",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "NRI Guide to Investing in Indian Land",
        excerpt: "FEMA regulations, repatriation of funds, and tax implications simplified.",
        content: "NRIs have a unique set of advantages and regulatory hurdles when buying agricultural or non-agricultural land in India. We provide a step-by-step compliance guide for a seamless cross-border investment experience.",
        author: "Aditya Tiwari",
        date: "Aug 20, 2026",
        readTime: "8 min read",
        category: "NRI Advice",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
    }
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
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    viewport={{ once: true }}
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
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
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