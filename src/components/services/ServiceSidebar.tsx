"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

interface ServiceSidebarProps {
  currentService: "all" | "investor" | "builder" | "developer";
}

const servicesList = [
  { key: "all", name: "Services For All", href: "/services/all" },
  { key: "investor", name: "Investor Services", href: "/services/investor" },
  { key: "builder", name: "Builder Services", href: "/services/builder" },
  { key: "developer", name: "Developers Services", href: "/services/developer" },
];

export default function ServiceSidebar({ currentService }: ServiceSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* 1. More Services Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-slate-200/90">
        <h3 className="text-xl font-bold text-slate-900 mb-4">More Services</h3>
        <div className="flex flex-col space-y-1.5">
          {servicesList.map((svc) => {
            const isActive = svc.key === currentService;
            return isActive ? (
              <div
                key={svc.key}
                className="bg-[#8D0102] text-white rounded-xl px-5 py-3.5 font-bold text-sm flex items-center justify-between shadow-md"
              >
                <span>{svc.name}</span>
                <ChevronRight className="size-4 text-white" />
              </div>
            ) : (
              <Link
                key={svc.key}
                href={svc.href}
                className="text-slate-700 hover:text-[#8D0102] py-3.5 px-3 font-semibold text-sm flex items-center justify-between border-b border-slate-100 hover:bg-slate-50/70 rounded-lg transition-colors group"
              >
                <span>{svc.name}</span>
                <ChevronRight className="size-4 text-slate-300 group-hover:text-[#8D0102] group-hover:translate-x-0.5 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Any Questions? Let's talk Card */}
      <div className="rounded-3xl overflow-hidden relative p-8 text-center text-white shadow-xl bg-slate-950 border border-slate-800">
        {/* Architectural backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-xs"
          style={{ backgroundImage: "url('/images/agent_call.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Red Layered Cube Icon */}
          <div className="size-12 mb-3 bg-[#8D0102] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-950/50">
            <svg
              className="size-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.12 6.4-6.05-4.06a4.97 4.97 0 0 0-6.14 0L2.88 6.4a2.97 2.97 0 0 0-1.38 2.52v6.16c0 1.05.54 2.01 1.38 2.52l6.05 4.06a4.97 4.97 0 0 0 6.14 0l6.05-4.06c.84-.51 1.38-1.47 1.38-2.52V8.92c0-1.05-.54-2.01-1.38-2.52z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-white/90">
            Any Questions? Let&apos;s talk
          </p>

          <a
            href="tel:+919818581518"
            className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight hover:text-rose-300 transition-colors block"
          >
            +91 98185 81518
          </a>

          <Link
            href="/contact#callback"
            className="inline-flex items-center gap-2.5 bg-white text-slate-950 rounded-full px-5 py-2.5 font-bold text-xs sm:text-sm shadow-xl hover:bg-slate-100 transition-all duration-200 mt-5 group"
          >
            <span>Get A Call Back</span>
            <span className="size-6 rounded-full bg-[#8D0102] text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
              <ArrowRight className="size-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
