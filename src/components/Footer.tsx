"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Share2, Play, Globe } from "lucide-react";

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

  // Auto slide interval (Har 5 seconds me animation ke sath change hoga)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ctaSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = ctaSlides[currentSlide];

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Big Watermark Text */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[11vw] font-black uppercase tracking-tighter text-white/[0.03]">
        INVESTOR SPACE
      </div>

      <div className="shell section-pad !pb-0 relative z-10">
        {/* Animated CTA Banner */}
        <div className="relative border-b border-white/10 pb-12 pt-10 min-h-[420px] flex items-center">
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
                    className="inline-flex min-h-11 items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:bg-primary-dark active:scale-95 shadow-lg shadow-primary/20"
                  >
                    Schedule a Free Consultation
                  </Link>
                  <a
                    href="tel:+9198185811518"
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
                  <Image
                    src={slide.image}
                    alt="Investor Space Character"
                    fill
                    className="object-contain object-bottom"
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
        <div className="grid gap-12 border-b border-white/10 py-12 sm:py-14 lg:grid-cols-[1.1fr_2fr] lg:gap-10">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" className="inline-block rounded-md">
              <Image src="/logo.png" alt="Investor Space" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-white/60">Stay Informed</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
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
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/60"
                />
                <button type="submit" aria-label="Subscribe" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark active:scale-95">
                  <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
            <p className="mt-3 text-xs text-white/60">We use your email only to send these updates.</p>
          </div>

          {/* Nav grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {/* Explore */}
            <nav aria-labelledby="footer-explore">
              <p id="footer-explore" className="text-sm font-semibold uppercase tracking-widest text-white/60">Explore</p>
              <ul className="mt-3 space-y-1 text-sm font-semibold uppercase tracking-wide text-white/75">
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
              <p id="footer-services" className="text-sm font-semibold uppercase tracking-widest text-white/60">Services</p>
              <ul className="mt-3 space-y-1 text-sm font-semibold uppercase tracking-wide text-white/75">
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
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Reach Us</p>
              <ul className="mt-3 space-y-3 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 shrink-0 mt-0.5 text-primary" />
                  R2 LG 34, M3M Corner Walk, Sector-74, Gurgaon - 122004
                </li>
                <li>
                  <a href="tel:+9198185811518" className="flex items-center gap-2 transition-colors hover:text-white">
                    <Phone className="size-4 shrink-0 text-primary" />
                    +91 98185811518
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
                {[
                  { href: "#", icon: Share2, label: "Instagram" },
                  { href: "#", icon: Play, label: "YouTube" },
                  { href: "#", icon: Globe, label: "LinkedIn" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} aria-label={label} className="grid size-9 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-primary hover:bg-primary hover:text-white">
                    <Icon className="size-4" />
                  </a>
                ))}
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