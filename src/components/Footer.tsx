"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Share2, Copy, Check, X } from "lucide-react";

// CTA Slide Data (Text + Image + Layout)
const ctaSlides = [
  {
    badge: "YOUR NEXT MOVE",
    title: (
      <>
        Own land that is <span className="text-primary underline underline-offset-8">approved</span>,{" "}
        <span className="text-primary">clear</span> and built to appreciate.
      </>
    ),
    desc: "Talk to our advisors, review the title documents yourself, and walk the plot before you invest a rupee.",
    image: "/characters/agent_idea.png", // Apni image ka path lagayein
    imagePosition: "left",
  },
  {
    badge: "SMART INVESTMENT",
    title: (
      <>
        Invest with confidence in <span className="text-primary">land</span> designed to{" "}
        <span className="text-primary underline underline-offset-8">grow</span> with you.
      </>
    ),
    desc: "Verified plots with 100% legal clarity and high growth corridors across prime locations.",
    image: "/characters/agent_house.png", // Dusri image ka path lagayein
    imagePosition: "right",
  },
];

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/company", label: "Company Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "All Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services/developer", label: "Developer Services" },
  { href: "/services/builder", label: "Builder Services" },
  { href: "/services/investor", label: "Investor Services" },
  { href: "/services/all", label: "Services For All" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  const siteUrl = "https://www.investorspace.co";

  const handleCopy = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Close share popup on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Auto slide interval (Har 5 seconds me animation ke sath change hoga)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ctaSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = ctaSlides[currentSlide];

  return (
    <footer className="relative overflow-hidden bg-[#0f1623] text-white">
      {/* Background Big Watermark Text */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[11vw] font-black uppercase tracking-tighter text-white/[0.03]">
        INVESTOR SPACE
      </div>

      <div className="shell section-pad !pb-0 relative z-10">
        {/* Animated CTA Banner */}
        <div className="relative border-b border-white/8 pb-12 pt-10 min-h-[420px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`flex w-full flex-col gap-10 items-center lg:gap-12 ${slide.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white/80"
                >
                  {slide.badge}
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6"
                >
                  <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                    {slide.title}
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto mt-5 max-w-xl text-base text-white/75 lg:mx-0"
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
                >
                  <Link
                    href="/contact#callback"
                    className="btn-shimmer relative inline-flex min-h-11 items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:scale-105 hover:shadow-[0_0_30px_rgba(141,1,2,0.45)] active:scale-95 shadow-lg shadow-primary/20"
                  >
                    Schedule a Free Consultation
                  </Link>
                  <a
                    href="tel:+919818581518"
                    className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Call an Advisor
                  </a>
                </motion.div>
              </div>

              {/* Animated Character Image */}
              <div className="relative w-full max-w-sm lg:max-w-md flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[280px] sm:h-[340px] w-full"
                >
                  {/* Glow behind character */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
                  <Image
                    src={slide.image}
                    alt="Investor Space Character"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {ctaSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-6 bg-primary" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-12 border-b border-white/8 py-12 sm:py-14 lg:grid-cols-[1.1fr_2fr] lg:gap-10">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" className="inline-block rounded-md">
              <Image src="/logo.png" alt="Investor Space" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-white/80">Stay Informed</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
              Get new project launches, price updates, and legal insights straight to your inbox.
            </p>
            <div className="mt-5 max-w-sm">
              <form className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 p-1.5 focus-within:border-white/50" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/65"
                />
                <button type="submit" aria-label="Subscribe" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark active:scale-95">
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
            <p className="mt-3 text-xs text-white/65">We use your email only to send these updates.</p>
          </div>

          {/* Nav grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {/* Explore */}
            <nav aria-labelledby="footer-explore">
              <p id="footer-explore" className="text-sm font-semibold uppercase tracking-widest text-white/80">Explore</p>
              <ul className="mt-3 space-y-1 text-sm font-semibold uppercase tracking-wide text-white/85">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex min-h-9 items-center transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-labelledby="footer-services">
              <p id="footer-services" className="text-sm font-semibold uppercase tracking-widest text-white/80">Services</p>
              <ul className="mt-3 space-y-1 text-sm font-semibold uppercase tracking-wide text-white/85">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex min-h-9 items-center transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Reach Us */}
            <div className="xl:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Reach Us</p>
              <ul className="mt-3 space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 shrink-0 mt-0.5 text-primary" />
                  R2 LG 34, M3M Corner Walk, Sector-74, Gurgaon - 122004
                </li>
                <li>
                  <a href="tel:+919818581518" className="flex items-center gap-2 transition-colors hover:text-white">
                    <Phone className="size-4 shrink-0 text-primary" />
                    +91 98185 81518
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@investorspace.co" className="flex items-center gap-2 transition-colors hover:text-white">
                    <Mail className="size-4 shrink-0 text-primary" />
                    sales@investorspace.co
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://whatsapp.com/channel/0029VbDcjMXBvvshK9uaGq1Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pardeep-kaushik-032292305?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61590127456755"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/investorspace.co?exln=MTdmZWg1bjgxZjA0Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-[#E1306C] hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] hover:text-white"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                {/* Share Button */}
                <div className="relative" ref={shareRef}>
                  <button
                    onClick={() => setShareOpen((v) => !v)}
                    aria-label="Share"
                    className="grid size-9 place-items-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Share2 className="size-4" />
                  </button>

                  <AnimatePresence>
                    {shareOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                        className="absolute bottom-12 right-0 z-50 w-56 rounded-2xl border border-white/8 bg-[#1a1a1a] p-2 shadow-2xl"
                      >
                        <p className="px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-white/40">Share via</p>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/?text=Check%20out%20Investor%20Space%20-%20Government%20approved%20plots%20in%20Dholera%20SIR%3A%20${encodeURIComponent(siteUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <svg className="size-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                          </svg>
                          WhatsApp
                        </a>

                        {/* Copy Link */}
                        <button
                          onClick={handleCopy}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {copied ? (
                            <Check className="size-4 text-green-400" />
                          ) : (
                            <Copy className="size-4 text-white/50" />
                          )}
                          {copied ? "Link Copied!" : "Copy Link"}
                        </button>

                        {/* Close */}
                        <button
                          onClick={() => setShareOpen(false)}
                          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/40 transition-colors hover:bg-white/5 hover:text-white/65"
                        >
                          <X className="size-4" />
                          Close
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/40">© {year} Investor Space. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/40 transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 transition-colors hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
