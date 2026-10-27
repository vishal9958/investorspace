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

export default function BuilderServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whyChooseUs = [
    {
      title: "Expertise",
      desc: "Specialized architectural layout planning, TP scheme compliance, and Dholera Special Investment Region master plan knowledge.",
      icon: Award,
    },
    {
      title: "Collaboration",
      desc: "We work hand in hand with your engineering and project teams — integrating marketing insights to design high-demand plot sizes and amenity layouts.",
      icon: ThumbsUp,
    },
    {
      title: "Creativity",
      desc: "Innovative plotting layouts with optimal road networks, green spaces, and entrance gateways that elevate the perceived value of your development.",
      icon: Sparkles,
    },
    {
      title: "Client-Centric Focus",
      desc: "Complete transparency in sanctions, land surveys, registry assistance, and buyer relationship management.",
      icon: MessageSquareQuote,
    },
  ];

  const servicesOffered = [
    {
      title: "Branding",
      desc: "We help you establish a distinct brand identity for your projects — from logo design and digital presence to storytelling that connects emotionally with your audience.",
    },
    {
      title: "Promotion",
      desc: "Our promotional campaigns span both digital and offline platforms, ensuring maximum visibility through strategic ad placements, social media campaigns, and event marketing.",
    },
    {
      title: "Marketing Strategy Support",
      desc: "We develop customized marketing strategies that reflect your brand's strengths and market opportunities — ensuring each project reaches its full sales potential.",
    },
    {
      title: "Sales Enablement",
      desc: "Our sales experts provide end-to-end support — from lead generation and buyer engagement to negotiation and deal closure — helping you achieve faster, more profitable outcomes.",
    },
  ];

  const faqs = [
    {
      q: "What builder services does InvestorSpace provide?",
      a: "We provide comprehensive branding, promotional campaigns, sales enablement, and layout planning support for builders.",
    },
    {
      q: "Can you assist with layout approvals and sanctions?",
      a: "Yes, we guide you through Town Planning (TP) scheme compliances, NA/NOC processes, and local development authority approvals.",
    },
    {
      q: "How do you help accelerate plot sales for builders?",
      a: "Through targeted investor networks, high-conversion digital ad funnels, and ground-level site visit coordination.",
    },
    {
      q: "Do you assist with joint development (JD) agreements?",
      a: "Yes, we structure secure and legally compliant joint development agreements between landowners and builders.",
    },
  ];

  return (
    <>
      <PageTitle title="Builder Services" />

      <main className="pt-28 sm:pt-32 pb-24 bg-white font-sans text-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-14">
              {/* 1. Main Feature Image */}
              <div className="rounded-3xl overflow-hidden shadow-xs border border-slate-100 bg-slate-100">
                <img
                  src="/images/builder.jpeg"
                  alt="About Builder Service"
                  className="w-full h-[320px] sm:h-[460px] object-cover"
                />
              </div>

              {/* 2. About the Builder service */}
              <section>
                <h1 className="font-bold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
                  About the Builder service
                </h1>

                <div className="mt-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    At <strong className="font-bold text-slate-900">InvestorSpace</strong>, we partner with builders to transform raw land into thriving residential and plotted developments. Our dedicated team supports every stage — from layout planning to marketing execution — ensuring that your developments meet market demands and achieve faster sales velocity.
                  </p>
                  <p>
                    We bridge the gap between regulatory sanctions and market absorption through strategic layout optimization, promotional campaigns, and direct investor connections.
                  </p>
                  <p>
                    Our builder-focused solutions are built to simplify Town Planning (TP) approvals, improve project branding, and provide an end-to-end sales enablement engine.
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
                    Our partnerships with builders are built on transparency, technical precision, and proven market delivery. With extensive experience in Dholera SIR and Gujarat development corridors, <strong className="font-bold text-slate-900">InvestorSpace</strong> provides builders with a comprehensive growth ecosystem.
                  </p>
                  <p>
                    We align architectural planning with buyer demand patterns to ensure maximum profitability and sustainable long-term value.
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
              <ServiceSidebar currentService="builder" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}