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

export default function DeveloperServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyChooseUs = [
    {
      title: "Expertise",
      desc: "Our experienced team in real estate sales, branding, and planning offers targeted support to developers, optimizing pricing, reaching buyers faster, and speeding up sales closures.",
      icon: Award,
    },
    {
      title: "Collaboration",
      desc: "We work hand in hand with your team — integrating our marketing, sales, and development insights to create strong brand positioning and maximum return on investment.",
      icon: ThumbsUp,
    },
    {
      title: "Creativity",
      desc: "By blending innovative campaigns with analytical insights, we ensure every project stands out in the competitive real estate landscape.",
      icon: Sparkles,
    },
    {
      title: "Client-Centric Focus",
      desc: "Transparency, accountability, and professionalism are at the heart of everything we do. Our goal is to make your project's journey seamless and result-oriented.",
      icon: MessageSquareQuote,
    },
  ];

  const servicesOffered = [
    {
      title: "Sales Support",
      desc: "We manage the entire sales cycle — from lead generation to closing deals — ensuring your project achieves consistent conversions and long-term success.",
    },
    {
      title: "Marketing Solutions",
      desc: "Our marketing experts design customized campaigns that enhance visibility, attract qualified buyers, and build a strong project identity across both digital and offline channels.",
    },
    {
      title: "Development Planning",
      desc: "We assist in development planning through detailed project analysis, feasibility studies, and roadmap creation, helping you make informed decisions and ensure project viability from the ground up.",
    },
  ];

  const faqs = [
    {
      q: "What is included in InvestorSpace's developer services?",
      a: "We offer complete sales, marketing, and development planning support, ensuring your project reaches the right audience and achieves strong returns.",
    },
    {
      q: "Can you handle both new and ongoing projects?",
      a: "Yes, we work with both new greenfield project launches as well as ongoing developments to accelerate sales velocity and optimize pricing.",
    },
    {
      q: "Do you provide marketing and branding materials?",
      a: "Yes, we handle complete digital campaigns, print collaterals, site experience branding, and 3D architectural showcases.",
    },
    {
      q: "Do you help with market research and pricing strategy?",
      a: "Absolutely. Our data intelligence team provides micro-market supply-demand analysis, competitor pricing matrices, and absorption rate forecasts.",
    },
  ];

  return (
    <>
      <PageTitle title="Developer Services" />

      <main className="pt-28 sm:pt-32 pb-24 bg-white font-sans text-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-14">
              {/* 1. Main Feature Image */}
              <div className="rounded-3xl overflow-hidden shadow-xs border border-slate-100 bg-slate-100">
                <img
                  src="/images/developer.jpeg"
                  alt="About Developers Service"
                  className="w-full h-[320px] sm:h-[460px] object-cover"
                />
              </div>

              {/* 2. About the Developers service */}
              <section>
                <h1 className="font-bold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
                  About the Developers service
                </h1>

                <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    At <strong className="font-bold text-slate-900">InvestorSpace</strong>, we empower developers to turn their vision into thriving real estate projects. Our dedicated team supports every stage — from concept to completion — ensuring that your developments not only meet market demands but also deliver measurable growth and value.
                  </p>
                  <p>
                    We bridge the gap between innovation and market readiness through strategic planning, marketing expertise, and performance-driven sales execution.
                  </p>
                  <p>
                    Our developer-focused solutions are built to simplify complex processes, improve visibility, and ensure a smooth path from land acquisition to project launch and sales.
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
                    Our partnerships are based on trust, transparency, and tangible results. With a deep understanding of the real estate market, <strong className="font-bold text-slate-900">InvestorSpace</strong> provides developers with a complete ecosystem — combining sales intelligence, data-driven marketing, and project development support.
                  </p>
                  <p>
                    We don&apos;t just promote projects; we position them for success by aligning strategies with market trends and investor expectations.
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
              <ServiceSidebar currentService="developer" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}