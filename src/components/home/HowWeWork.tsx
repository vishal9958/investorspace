"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    label: "Free Consultation",
    title: "Discovery Call",
    desc: "Tell us your budget, your timeline and what you want from land in Dholera. It is a conversation, not a form.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    alt: "Advisor on a phone call with a client",
    tag: "Free Consultation",
  },
  {
    num: "02",
    label: "Document Check",
    title: "Site Verification",
    desc: "We check the title, RERA status and approvals against official records and share the findings before you commit.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    alt: "Document verification and legal check",
    tag: "Document Check",
  },
  {
    num: "03",
    label: "On Site",
    title: "Site Visit",
    desc: "Visit Dholera SIR with us and see the plot, the access roads and the surroundings yourself. Pickup can be arranged.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Clients visiting a plot site",
    tag: "On Site",
  },
  {
    num: "04",
    label: "Paperwork",
    title: "Booking & Paperwork",
    desc: "The allotment letter, payment schedule and sale agreement are explained clause by clause before you sign.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    alt: "Signing agreement paperwork",
    tag: "Paperwork",
  },
  {
    num: "05",
    label: "Ongoing",
    title: "Post-Sale Support",
    desc: "Help with registration follow-up and ownership questions after the deal closes. One advisor, start to finish.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    alt: "Advisor providing post-sale support",
    tag: "Ongoing Support",
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Track karne ke liye Framer Motion ka useScroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Scroll progress (0 to 1) ke basis par active step change hoga
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSteps = steps.length;
    const newStep = Math.min(
      Math.floor(latest * totalSteps),
      totalSteps - 1
    );
    if (newStep !== activeStep && newStep >= 0) {
      setActiveStep(newStep);
    }
  });

  // Step par click karne par direct scroll karne ka function
  const scrollToStep = (index: number) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const stepProgress = index / (steps.length - 1);
    const targetY = sectionTop + sectionHeight * stepProgress;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    /* Outer Section height h-[350vh] rakhi hai taaki sticky scroll ke liye kafi scroll area mile */
    <section
      id="how-we-work-section"
      ref={sectionRef}
      aria-labelledby="how-we-work-heading"
      className="relative bg-background h-[350vh]"
    >
      {/* Inner Content Screen par Sticky rahega jab tak scroll 350vh cross nahi karta */}
      <div className="sticky top-0 flex min-h-screen w-full items-center overflow-hidden py-10">
        <div className="shell w-full">
          {/* Header */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] bg-primary/10 text-primary">
                How We Work
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2
                id="how-we-work-heading"
                className="mt-3 font-bold text-3xl sm:text-4xl lg:text-5xl text-primary"
              >
                Five Clear Steps To Buy Your Plot In Dholera SIR
              </h2>
            </motion.div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We explain every step of your Dholera plot purchase.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 items-center">
            {/* Left: Numbered steps list */}
            <ol
              aria-label="Steps to buy a plot in Dholera SIR"
              className="flex flex-col gap-0 w-full"
            >
              {steps.map((step, i) => (
                <li key={step.num}>
                  <button
                    type="button"
                    onClick={() => scrollToStep(i)}
                    aria-current={i === activeStep ? "step" : undefined}
                    className={`group flex w-full items-center gap-4 border-b border-border py-3.5 text-left transition-all duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary sm:py-4 ${i === activeStep ? "text-primary font-bold" : "text-muted-foreground opacity-60"
                      }`}
                  >
                    <span
                      className={`shrink-0 font-display text-xs sm:text-sm tabular-nums transition-colors duration-300 ${i === activeStep ? "text-primary font-bold" : "text-muted-foreground/60"
                        }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`flex-1 font-display text-base sm:text-lg lg:text-xl transition-colors duration-300 ${i === activeStep ? "text-primary" : "text-foreground/50"
                        }`}
                    >
                      {step.title}
                    </span>
                    {/* Active indicator dot */}
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${i === activeStep ? "bg-primary scale-125 shadow-sm" : "bg-border scale-75"
                        }`}
                    />
                  </button>
                </li>
              ))}

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary active:scale-95"
                >
                  Talk to our team <ArrowRight className="size-4" />
                </Link>
              </div>
            </ol>

            {/* Right: Dynamic Animated Card */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden rounded-3xl bg-foreground text-white shadow-2xl ring-1 ring-black/10"
                >
                  <div className="relative h-60 overflow-hidden sm:h-72 lg:h-80">
                    <img
                      src={steps[activeStep].image}
                      alt={steps[activeStep].alt}
                      className="absolute inset-0 size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Step number overlay */}
                    <span
                      aria-hidden
                      className="absolute left-5 top-4 font-display text-5xl sm:text-6xl font-bold leading-none text-white/90"
                    >
                      {steps[activeStep].num}
                    </span>
                    {/* Tag badge */}
                    <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[0.65rem] font-bold tracking-wide text-primary uppercase shadow-md">
                      {steps[activeStep].tag}
                    </span>
                  </div>

                  <div className="bg-primary p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      {steps[activeStep].title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                      {steps[activeStep].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to step ${i + 1}`}
                    onClick={() => scrollToStep(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeStep ? "w-7 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}