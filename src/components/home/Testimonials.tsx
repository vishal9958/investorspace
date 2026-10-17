"use client";

import { useState, useEffect } from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Marquee } from "@/components/3d-marquee";

const realEstateTestimonials = [
  {
    name: "Aarav Sharma",
    role: "Developer · Ahmedabad",
    body: "We were skeptical at first, but Investor Space verified every document before we paid. The team was transparent throughout.",
    avatar: "AS",
    tag: "Verified Buyer",
    rating: 5,
  },
  {
    name: "Priya Shah",
    role: "NRI Investor · Dubai",
    body: "Got my plot registered within 30 days. No hidden charges, no delays. Highly recommend Investor Space for Dholera investments.",
    avatar: "PS",
    tag: "NRI Verified",
    rating: 5,
  },
  {
    name: "Suresh Patel",
    role: "Retired Professional · Surat",
    body: "The resale support they provided was exceptional. Got 28% returns in 2.5 years. Truly government-approved plots.",
    avatar: "SP",
    tag: "Plot Investor",
    rating: 5,
  },
  {
    name: "Rakesh Mehta",
    role: "Investor · Mumbai",
    body: "Clear pricing. One rate card with every charge listed upfront. The site visit was very helpful to understand TP zones.",
    avatar: "RM",
    tag: "Commercial",
    rating: 5,
  },
  {
    name: "Kavya Desai",
    role: "First-time Buyer · Pune",
    body: "Their team guided me through the entire buying process step-by-step. Never felt pressured to buy.",
    avatar: "KD",
    tag: "First Buyer",
    rating: 5,
  },
  {
    name: "Vikram Rathore",
    role: "Business Owner · Delhi",
    body: "Top notch legal audit and layout clearance. Best property consultants in the Dholera SIR corridor.",
    avatar: "VR",
    tag: "Verified Land",
    rating: 5,
  },
];

function TestimonialCard({
  name,
  role,
  body,
  avatar,
  tag,
  rating,
}: (typeof realEstateTestimonials)[number]) {
  return (
    <div className="w-64 sm:w-72 rounded-2xl bg-[#8D0102] text-white p-4 sm:p-5 shadow-2xl border border-white/10">
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-3 mb-3">
        <div className="flex items-center gap-2.5">
          <span className="size-9 rounded-full bg-white text-[#8D0102] font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
            {avatar}
          </span>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
              {name}
            </h4>
            <p className="text-[10px] sm:text-xs text-white/80 truncate">{role}</p>
          </div>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-white/20 px-2 py-0.5 rounded-full shrink-0">
          {tag}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-0.5 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-amber-300 text-amber-300" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal italic">
        "{body}"
      </blockquote>

      {/* Footer Stamp */}
      <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-white/80">
        <span className="flex items-center gap-1 text-emerald-300 font-semibold">
          <CheckCircle2 className="size-3" /> Verified Review
        </span>
        <span className="font-mono text-white/70">Investor Space</span>
      </div>
    </div>
  );
}

export default function Testimonials3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white text-slate-900 py-16 sm:py-24">
      {/* Header Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#8D0102]/10 text-[#8D0102] border border-[#8D0102]/20">
          <ShieldCheck className="size-4" /> Client Testimonials
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Trusted by Investors <span className="text-[#8D0102]">Across India</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Real feedback and verified deal experiences from plot buyers, NRI investors, and developers.
        </p>
      </div>

      {/* Exact 3D Perspective Stage */}
      <div className="relative flex h-[520px] w-full items-center justify-center overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          {/* Column 1 - Downwards */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:25s]">
            {realEstateTestimonials.map((review, i) => (
              <TestimonialCard key={i} {...review} />
            ))}
          </Marquee>

          {/* Column 2 - Upwards */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:25s]">
            {realEstateTestimonials.map((review, i) => (
              <TestimonialCard key={`rev-${i}`} {...review} />
            ))}
          </Marquee>

          {/* Column 3 - Downwards */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:25s]">
            {realEstateTestimonials.map((review, i) => (
              <TestimonialCard key={`col3-${i}`} {...review} />
            ))}
          </Marquee>

          {/* Column 4 - Upwards */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:25s]">
            {realEstateTestimonials.map((review, i) => (
              <TestimonialCard key={`col4-${i}`} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Soft Outer Edges Fading into White Background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}