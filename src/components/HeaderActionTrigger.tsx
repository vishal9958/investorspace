"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, X, Calendar, KeyRound, Sparkles, ChevronRight } from "lucide-react";
import ResalePropertyModal from "@/components/ResalePropertyModal";

export default function HeaderActionTrigger() {
    const [isOpen, setIsOpen] = useState(false);
    const [isResaleModalOpen, setIsResaleModalOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOpenResale = () => {
        setIsOpen(false);
        setIsResaleModalOpen(true);
    };

    return (
        <>
            <div ref={containerRef} className="relative inline-flex items-center">
                {/* 360-Degree Animated Interactive Trigger Button (Home Icon) */}
                <motion.button
                    type="button"
                    onClick={toggleOpen}
                    aria-label={isOpen ? "Close quick options" : "Open quick options"}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    className={`relative size-10 sm:size-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer border ${
                        isOpen
                            ? "bg-red-600 text-white border-red-500 shadow-red-600/30 ring-4 ring-red-500/20"
                            : "bg-slate-900 text-white hover:bg-red-600 border-slate-800 shadow-slate-900/20"
                    }`}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 360 : 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center justify-center"
                    >
                        {isOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Home className="size-5" />
                        )}
                    </motion.div>

                    {/* Subtle Pulsing Beacon when Closed */}
                    {!isOpen && (
                        <span className="absolute -top-0.5 -right-0.5 flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-red-600 border-2 border-white"></span>
                        </span>
                    )}
                </motion.button>

                {/* Pop-Out Badges (2 Sleek Slide-Out Options) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.92, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 10, scale: 0.94, filter: "blur(4px)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 28 }}
                            className="absolute right-0 top-full mt-3 w-72 sm:w-80 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl p-3 shadow-2xl border border-slate-200/90 z-50 overflow-hidden"
                        >
                            <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                    Quick Actions
                                </span>
                                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                                    <Sparkles className="size-2.5" /> Instant Desk
                                </span>
                            </div>

                            <div className="mt-2 space-y-2">
                                {/* Option 1: Book a Site Visit */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, delay: 0.05 }}
                                >
                                    <Link
                                        href="/contact#callback"
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-red-50/80 border border-slate-100 hover:border-red-200 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 group-hover:scale-110 transition-transform">
                                                <Calendar className="size-5" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-red-700 transition-colors">
                                                    Book a Site Visit
                                                </div>
                                                <div className="text-[11px] text-slate-500 font-medium">
                                                    Guided Tour & Cab Assistance
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight className="size-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </motion.div>

                                {/* Option 2: Resale Property / Sell Land */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, delay: 0.12 }}
                                >
                                    <button
                                        type="button"
                                        onClick={handleOpenResale}
                                        className="w-full group flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-rose-50/80 border border-slate-100 hover:border-red-200 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-slate-900 group-hover:bg-red-600 text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-sm">
                                                <KeyRound className="size-5" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-red-700 transition-colors">
                                                    Resale Property / Sell Land
                                                </div>
                                                <div className="text-[11px] text-slate-500 font-medium">
                                                    Direct Valuation & 2-Step Listing
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight className="size-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Glassmorphic 3D Animated Resale Modal Form */}
            <ResalePropertyModal
                isOpen={isResaleModalOpen}
                onClose={() => setIsResaleModalOpen(false)}
            />
        </>
    );
}
