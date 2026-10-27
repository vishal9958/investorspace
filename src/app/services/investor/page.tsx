"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import {
  Award,
  ThumbsUp,
  Sparkles,
  MessageSquareQuote,
  Check,
  ChevronDown,
} from "lucide-react";

export default function InvestorServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyChooseUs = [
    {
      title: "Expertise",
      desc: "Our deep understanding of market trends and investment behavior allows us to offer accurate insights and profitable opportunities that drive sustainable growth.",
      icon: Award,
    },
    {
      title: "Partnership Approach",
      desc: "We believe every investor deserves personalized attention. Our team works closely with you to analyze options, forecast potential returns, and ensure smart decision-making.",
      icon: ThumbsUp,
    },
    {
      title: "Transparency & Trust",
      desc: "All our investment recommendations are backed by verified documents and full legal compliance, guaranteeing peace of mind at every step.",
      icon: Sparkles,
    },
    {
      title: "Growth-Oriented Vision",
      desc: "We focus on long-term value creation — helping investors diversify portfolios and achieve measurable, consistent growth.",
      icon: MessageSquareQuote,
    },
  ];

  const servicesOffered = [
    {
      title: "Right Investment Options",
      desc: "We handpick projects that offer maximum safety, appreciation potential, and government approvals — ensuring you invest in assets that truly build wealth.",
    },
    {
      title: "Customized Sales / Resale Returns",
      desc: "Our expert advisors assist in optimizing your investment journey — from selecting profitable units to managing resale for better returns with strategic flexibility and liquidity.",
    },
    {
      title: "Legal Support",
      desc: "InvestorSpace provides complete legal assistance — from document verification and compliance checks to ownership transfer — ensuring your investment remains protected from start to finish.",
    },
  ];

  const faqs = [
    {
      q: "How do you select investment opportunities for clients?",
      a: "We filter through strict criteria: DSIRDA master-plan integration, proximity to expressways/airports, 100% legal title clearance, and high projected ROI.",
    },
    {
      q: "What is the typical holding period and expected returns?",
      a: "Strategic plotted land investments typically target 3 to 7-year horizons for exponential infrastructure-driven capital appreciation.",
    },
    {
      q: "Can NRI investors purchase through InvestorSpace?",
      a: "Yes, we provide end-to-end assistance for NRI investors including digital KYC, remote document registration, and power of attorney guidance.",
    },
    {
      q: "Do you assist in exiting or reselling the property?",
      a: "Yes, we provide dedicated resale desk services to connect you with verified buyers and maximize your exit profits.",
    },
  ];

  return (
    <>
      <PageTitle title="Investor Services" />

      <main className="pt-28 sm:pt-32 pb-24 bg-white font-sans text-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-14">
              {/* 1. Main Feature Image */}
              <div className="rounded-3xl overflow-hidden shadow-xs border border-slate-100 bg-slate-100">
                <img
                  src="/images/invester.jpeg"
                  alt="About Investor Service"
                  className="w-full h-[320px] sm:h-[460px] object-cover"
                />
              </div>

              {/* 2. About the Investor service */}
              <section>
                <h1 className="font-bold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
                  About the Investor service
                </h1>

                <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    At <strong className="font-bold text-slate-900">InvestorSpace</strong>, we help individual and institutional investors build high-yielding real estate wealth through strategic land investments in Dholera SIR and emerging economic hubs.
                  </p>
                  <p>
                    We eliminate speculation by focusing exclusively on government-approved, title-clear, and master-planned growth corridors.
                  </p>
                  <p>
                    Our investor-first advisory provides transparent data, projected growth timelines, and exit flexibility so you can invest with total confidence.
                  </p>
                </div>
              </section>

              {/* 3. Why choose us */}
              <section>
                <h2 className="font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                  Why choose us
                </h2>

                <div className="mt-5 space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    Our investment recommendations are built on empirical market data, verified legal documentation, and deep understanding of infrastructure milestones.
                  </p>
                  <p>
                    We don&apos;t offer generic land deals; we curate high-growth strategic land parcels that align with your risk profile and wealth horizons.
                  </p>
                </div>

                {/* 4 Feature Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                  {whyChooseUs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="size-12 rounded-full bg-[#8D0102] text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-950/20">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 4. Services offered */}
              <section>
                <h2 className="font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                  Services offered
                </h2>

                <ul className="mt-6 space-y-4">
                  {servicesOffered.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="size-4 text-slate-950 shrink-0 mt-1 stroke-[2.5]" />
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        <strong className="text-slate-950 font-bold">{item.title} : </strong>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5. Popular questions */}
              <section>
                <h2 className="font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                  Popular questions
                </h2>

                <div className="mt-6 divide-y divide-slate-100 border-t border-slate-100">
                  {faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div key={i} className="py-4">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="w-full flex items-center justify-between gap-4 text-left group"
                        >
                          <div className="flex items-center gap-3.5 flex-1">
                            <span className="size-7 sm:size-8 rounded-full bg-[#8D0102] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                              ?
                            </span>
                            <span className="font-bold text-slate-950 text-sm sm:text-base group-hover:text-[#8D0102] transition-colors">
                              {faq.q}
                            </span>
                          </div>
                          <ChevronDown
                            className={`size-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#8D0102]" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="pl-11 sm:pl-12 pt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <ServiceSidebar currentService="investor" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}