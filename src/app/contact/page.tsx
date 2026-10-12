"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Mail,
  MapPin,
  Check,
  Navigation,
  Clock,
  Sparkles,
  Building2,
} from "lucide-react";

// Hero Carousel Data
const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/Your Next Property Consultation 1.png",
    badge: "Need Property Help?",
    subBadge: "Talk to our expert team",
  },
  {
    id: 2,
    image: "/images/Your Next Property Consultation 2.png",
    badge: "Verified Titles Only",
    subBadge: "100% Legal Check Guaranteed",
  },
  {
    id: 3,
    image: "/images/Your Next Property Consultation 3.png",
    badge: "Best Investment Plots",
    subBadge: "Dholera SIR & Gujarat Corridors",
  },
];

// Feature Slider Data
const FEATURE_SLIDES = [
  {
    id: 1,
    title: "Matched, not sold",
    description:
      "Tell us your budget and timeline once — we filter options against it instead of pushing whatever is in inventory.",
    image: "/images/Your Next Property Consultation 1.png",
    tag: "Verified Documentation",
  },
  {
    id: 2,
    title: "Site visit support",
    description:
      "We coordinate transport and a walkthrough for every shortlisted plot, so you see it before you decide.",
    image: "/images/Your Next Property Consultation 2.png",
    tag: "RERA Approved",
  },
  {
    id: 3,
    title: "Clear title assurance",
    description:
      "Talk to our advisors, review the title documents yourself, and walk the plot before you invest a rupee.",
    image: "/images/Your Next Property Consultation 3.png",
    tag: "Transparent Process",
  },
];

export default function ContactPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    preferredTime: "",
    message: "",
    siteVisit: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % FEATURE_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Our team will contact you within one working day.");
      setFormData({ name: "", phone: "", email: "", budget: "", preferredTime: "", message: "", siteVisit: false });
    }, 800);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <PageTitle title="Contact" />
      <main className="pt-20 bg-white text-slate-900 overflow-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-50/70 py-12 sm:py-16 lg:py-20 text-slate-900 border-b border-slate-200">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="shell grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Contact Us
              </span>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.1] font-bold tracking-tight text-slate-900">
                Your Next Property Starts<br />
                <span className="text-primary">With a Conversation.</span>
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Tell us your budget, timeline and intent. You'll get matched
                options with documentation attached — not a sales script.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#callback"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Book a site visit <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://wa.me/919818581518"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-200 hover:border-primary hover:bg-slate-50 shadow-sm"
                >
                  <MessageCircle className="size-4 text-emerald-600" /> Chat with us
                </a>
              </div>
            </motion.div>

            {/* Hero Image Slider Container */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-xl bg-white border border-slate-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroIndex}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={HERO_SLIDES[heroIndex].image}
                      alt="Consultation"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 p-2.5 px-3.5 rounded-2xl shadow-md border border-slate-200/80 z-10"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs font-semibold text-slate-900">
                          {HERO_SLIDES[heroIndex].badge}
                        </p>
                      </div>
                      {HERO_SLIDES[heroIndex].subBadge && (
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {HERO_SLIDES[heroIndex].subBadge}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-2 z-10">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === heroIndex ? "w-6 bg-primary" : "w-2 bg-white/70"
                        }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
          <div className="shell max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Every Number Holds a <span className="text-primary">Story</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Each figure is a family that bought with clear title, verified paperwork and no surprises.
                </p>
              </div>
              <Link
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-primary py-2.5 pl-6 pr-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90 hover:-translate-y-0.5"
                href="/projects"
              >
                View our projects
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border-t border-slate-200 pt-8">
              {[
                {
                  value: "500+",
                  title: "Verified plots sold",
                  desc: "Across Dholera SIR and Gujarat's growth corridors",
                },
                {
                  value: "12+",
                  title: "Years of advisory",
                  desc: "Guiding investors through titles and documentation",
                },
                {
                  value: "100%",
                  title: "Client satisfaction",
                  desc: "Every deal backed by verified legal paperwork",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary/50 transition-colors shadow-sm"
                >
                  <span className="text-5xl sm:text-6xl font-extrabold text-primary tracking-tight">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-base font-bold text-slate-900">
                    {stat.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 max-w-[200px]">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-16 bg-slate-50/60">
          <div className="shell max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-6">
            <motion.div
              className="grid gap-6 rounded-3xl bg-white p-6 lg:p-8 border border-slate-200 lg:grid-cols-[1.2fr_1fr_1fr] text-slate-900 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col justify-center py-2 relative z-10">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Direct Connect</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                  Have a Property in Mind?
                  <span className="block text-primary mt-1">Call or WhatsApp.</span>
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  Tell us what you're looking for, and we'll help you find it today.
                </p>
              </div>

              <a
                href="tel:+919818581518"
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-white text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-primary border border-slate-200 shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full">Instant Call</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-primary transition-colors">
                    Let's Talk Property
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Have a property in mind? Give us a call now.
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919818581518"
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-50 hover:bg-white text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 border border-slate-200 shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full">Online</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Let's Chat on WhatsApp
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Quick answers. Real options. No pressure.
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 28, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between min-h-[160px] shadow-sm relative overflow-hidden group hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Have a Specific Requirement?</h4>
                  <p className="text-xs text-slate-500 mt-1">Send us your requirements and budget directly.</p>
                </div>
                <a href="#callback" className="text-xs font-bold text-primary group-hover:text-slate-900 flex items-center gap-1.5 mt-4 transition-colors">
                  Fill Callback Form <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.a
                href="#map"
                variants={{ hidden: { opacity: 0, y: 28, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary flex items-center gap-4 transition-all shadow-sm group hover:-translate-y-1 duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Let's Meet in Gurgaon</h4>
                  <p className="text-xs text-slate-500 mt-1">Sector-74, Gurgaon - 122004</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-primary">View Location &rarr;</span>
                </div>
              </motion.a>

              <motion.a
                href="mailto:sales@investorspace.co"
                variants={{ hidden: { opacity: 0, y: 28, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary flex items-center gap-4 transition-all shadow-sm group sm:col-span-2 lg:col-span-1 hover:-translate-y-1 duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Email Us Directly</h4>
                  <p className="text-xs text-slate-500 mt-1">sales@investorspace.co</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-primary">Send Email &rarr;</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Callback Form & Feature Carousel */}
        <section id="callback" className="py-16 bg-white text-slate-900 border-t border-slate-200">
          <div className="shell max-w-7xl mx-auto px-4 sm:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl bg-slate-50/80 p-6 sm:p-8 text-slate-900 shadow-xl border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Request <span className="text-primary">Callback</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Share a few details and an advisor will reach out within one working day.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border-b border-slate-300 py-2.5 text-sm outline-none focus:border-primary transition-colors bg-transparent text-slate-900 placeholder:text-slate-400"
                />
                <div className="flex gap-2">
                  <span className="border-b border-slate-300 py-2.5 text-sm text-slate-500">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full border-b border-slate-300 py-2.5 text-sm outline-none focus:border-primary transition-colors bg-transparent text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address (optional)"
                  className="w-full border-b border-slate-300 py-2.5 text-sm outline-none focus:border-primary transition-colors bg-transparent text-slate-900 placeholder:text-slate-400"
                />

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="border-b border-slate-300 py-2 text-xs text-slate-600 outline-none focus:border-primary bg-transparent"
                  >
                    <option value="">Budget option (optional)</option>
                    <option value="10-25">₹10L - ₹25L</option>
                    <option value="25-50">₹25L - ₹50L</option>
                    <option value="50+">₹50L+</option>
                  </select>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="border-b border-slate-300 py-2 text-xs text-slate-600 outline-none focus:border-primary bg-transparent"
                  >
                    <option value="">Best time to call (optional)</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>

                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything else we should know?"
                  className="w-full border-b border-slate-300 py-2.5 text-sm outline-none focus:border-primary resize-none transition-colors bg-transparent text-slate-900 placeholder:text-slate-400"
                />

                <label className="flex items-center gap-2 pt-2 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    name="siteVisit"
                    checked={formData.siteVisit}
                    onChange={handleChange}
                    className="rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  I'd like to schedule a site visit
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 hover:scale-[1.01] disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Request Callback"}
                </button>
              </form>
            </div>

            {/* Feature Slider */}
            <div className="flex flex-col justify-between h-full py-4">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                  What you get before you
                  <span className="block text-primary">ever sign anything</span>
                </h2>
              </div>

              <div className="mt-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col justify-end p-6"
                  >
                    <Image
                      src={FEATURE_SLIDES[featureIndex].image}
                      alt="Feature Preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="relative z-10">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded-md mb-2">
                        <Check className="h-3 w-3" /> {FEATURE_SLIDES[featureIndex].tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {FEATURE_SLIDES[featureIndex].title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-200 max-w-md">
                        {FEATURE_SLIDES[featureIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {FEATURE_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFeatureIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === featureIndex ? "w-8 bg-primary" : "w-3 bg-slate-300"
                        }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-semibold">
                  {featureIndex + 1} / {FEATURE_SLIDES.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section id="map" className="py-16 bg-slate-50/60 text-slate-900 border-t border-slate-200">
          <div className="shell max-w-7xl mx-auto px-4 sm:px-8">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Find Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Step In. Let's Find Your <span className="text-primary">Next Address.</span>
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-3 items-stretch">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-4 border border-primary/20">
                    <Building2 className="w-3.5 h-3.5" /> Visit Our Office
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/characters/agent_consult.png"
                      alt="Office Advisor"
                      width={64}
                      height={64}
                      className="rounded-2xl object-cover border-2 border-primary/30 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg leading-snug">
                        Walk-In for Consultation
                      </h4>
                      <p className="text-xs text-slate-500">Meet our plot advisors in person</p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600">
                    Prefer face-to-face discussion? Visit us at Gurgaon for site walkthroughs, layout plans, and legal title checks over hot coffee.
                  </p>

                  <div className="mt-6 space-y-3 text-xs border-t border-slate-100 pt-4">
                    <div className="flex items-start gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>R2 LG 34, M3M Corner Walk, Sector-74, Gurgaon - 122004</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>Mon - Sun: 9:30 AM - 7:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                  <a
                    href="tel:+919818581518"
                    className="flex-1 py-2.5 rounded-xl bg-primary text-xs font-bold text-center text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                  >
                    Call Office
                  </a>
                  <a
                    href="https://wa.me/919818581518"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-xs font-bold text-center text-white hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white flex flex-col h-[400px] lg:h-auto relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8!2d77.0689!3d28.4261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b5a6b4b41%3A0x8c8b74a1a8f0c1c0!2sM3M%20Corner%20Walk%2C%20Sector%2074%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="flex-1 w-full"
                />
                <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900">Investor Space Main Office</h4>
                    <p className="text-xs text-slate-500">R2 LG 34, M3M Corner Walk, Sector-74, Gurgaon - 122004</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="tel:+919818581518"
                      className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                    >
                      <PhoneCall className="h-3.5 w-3.5 text-primary" /> Call Now
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=R2+LG+34+M3M+Corner+Walk+Sector+74+Gurgaon+122004&travelmode=driving"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-primary text-xs font-bold text-white hover:bg-primary/90 transition-colors flex items-center gap-1.5 shadow-md shadow-primary/20"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer Banner */}
        <section className="py-14 bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
          <div className="shell max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Your Next Move
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 max-w-xl text-slate-900 leading-tight">
                Own land that is approved, clear and{" "}
                <span className="text-primary font-extrabold">
                  built to appreciate.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md">
                Talk to our advisors, review the title documents yourself, and walk the plot before you invest a rupee.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#callback"
                className="px-6 py-3.5 rounded-full bg-primary text-xs font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+919818581518"
                className="px-6 py-3.5 rounded-full border border-slate-300 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Call Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

