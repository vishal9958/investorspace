"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const checks = [
  {
    num: "01",
    title: "Government Approvals & Sanctions",
    category: "Authority Clearance",
    desc: "Verify all regional authority sanctions and official masterplan compliance certificates before committing.",
  },
  {
    num: "02",
    title: "Title & Ownership Chain",
    category: "Legal Audit",
    desc: "30-year ownership history and clear mutation records, audited directly by certified legal experts.",
  },
  {
    num: "03",
    title: "NA Order(CLU)",
    category: "Zoning",
    desc: "Change of Land Use (CLU) official government order proving legal land status and sub-plot allocation clearance.",
  },
  {
    num: "04",
    title: "Layout Sanction",
    category: "Masterplan",
    desc: "Approved TP scheme alignment, masterplan compliance, and precise infrastructure corridor buffer zones.",
  },
  {
    num: "05",
    title: "Zone & Authority Clearance",
    category: "Liability Free",
    desc: "Official government document certifying the land is completely free from active loans or disputes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, x: -30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function BuyersGuide() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#FBFBFA] dark:bg-[#0A0607] text-[#121212] dark:text-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1D24]/10 text-[#8B1D24] text-xs font-bold uppercase tracking-widest mb-4">
              Due Diligence Protocol
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-[#121212]">
              The 5-Point <br />
              <span className="text-[#8B1D24]">Verification Standard.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              We eliminate guesswork. Every land parcel is listed only after strict legal verification and complete document transparency.
            </p>
          </motion.div>
        </div>

        {/* Pure Light Theme Staggered Cards Grid with Primary Color Border */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {checks.map((item, idx) => {
            const isActive = hoveredIndex === idx;

            return (
              <motion.div
                key={item.num}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-3xl p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[360px] overflow-hidden bg-white text-[#121212] ${
                  isActive
                    ? "border-2 border-[#8B1D24] shadow-[0_20px_45px_-10px_rgba(139,29,36,0.15)] -translate-y-2.5 scale-[1.02]"
                    : "border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[#8B1D24]/50"
                }`}
              >
                {/* Top Number & Tag */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`font-display text-4xl font-light tracking-tighter transition-all duration-300 ${
                        isActive ? "text-[#8B1D24] font-normal scale-105" : "text-slate-300"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full transition-colors ${
                        isActive
                          ? "bg-[#8B1D24]/10 text-[#8B1D24] border border-[#8B1D24]/20"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-lg font-bold leading-snug tracking-tight transition-colors ${
                      isActive ? "text-[#8B1D24]" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div className="relative z-10 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                  <span className={isActive ? "text-[#8B1D24]" : "text-slate-400"}>
                    {isActive ? "Audit Verified" : "Document Protocol"}
                  </span>
                  <span
                    className={`size-2.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#8B1D24] scale-125 ring-4 ring-[#8B1D24]/15" : "bg-slate-300"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Minimal Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Would you like to cross-verify all documents with your personal lawyer?
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              We provide 7/12 extracts, title reports, and government sanctions immediately upon request.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-[#8B1D24] px-8 py-4 text-xs font-bold text-white shadow-md hover:bg-[#6e161c] transition-all shrink-0"
          >
            Explore Verified Land Parcels
          </Link>
        </motion.div>

      </div>
    </section>
  );
}