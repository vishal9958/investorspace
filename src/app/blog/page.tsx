"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  X,
  Share2,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";

const blogPosts = [
  {
    id: 1,
    title: "Why Dholera SIR is India's First Smart City Investment Jackpot",
    excerpt:
      "An inside look into how DSIRDA planning, 4-tier infrastructure, and plug-and-play land models are creating massive ROI opportunities.",
    author: "Aditya Tiwari",
    date: "Oct 12, 2026",
    readTime: "8 min read",
    category: "Investment",
    image: "/images/invesment.png",
    stats: [
      { label: "Total Smart City Area", value: "920 Sq Km" },
      { label: "Target ROI Window", value: "3 - 5 Years" },
      { label: "Infrastructure Model", value: "Plug & Play" },
    ],
    sections: [
      {
        title: "1. The Greenfield Smart City Advantage",
        content:
          "Dholera Special Investment Region (SIR) isn't just another land development—it is India's largest greenfield smart city, spanning 920 sq km (larger than Singapore). Managed under statutory governance by DSIRDA (Dholera Special Investment Region Development Authority), Dholera features plug-and-play infrastructure, underground utility ducts, and ICT-enabled central governance.",
      },
      {
        title: "2. Strategic Entry for Maximum Liquidity",
        content:
          "Unlike brownfield metropolitan expansions in Delhi or Mumbai, Dholera is constructed from ground zero. Purchasing title-clear land in High-Access Zones (such as Activation Zone TP1 & TP2) offers investors high liquidity and compounding capital growth. As arterial roads, power grids, and water treatment plants become operational, early-stage plot buyers lock in ground-level entry prices ahead of mass commercial migration.",
      },
      {
        title: "3. The 4-Tier Infrastructure Architecture",
        points: [
          "Trunk Infrastructure: 100% underground utility ducts carrying potable water, recycled water, power cables, gas pipelines, and high-speed fiber-optic lines right to the plot boundary.",
          "Social Infrastructure: Planned residential sectors, hospitals, educational zones, and public parks preventing unplanned urban density.",
          "Smart Governance: Central Command and Control Center (ABCD Building) managing traffic, waste management, and automated utility metering.",
          "Mass Rapid Transit System (MRTS): Seamless connectivity linking Dholera directly to the Dedicated Freight Corridor (DFC) and regional industrial nodes.",
        ],
      },
      {
        title: "4. Projected Capital Appreciation & Yields",
        content:
          "Early-stage investors in sanctioned Town Planning (TP) schemes positioned near Kesar Green Flora benefit from early entrant valuation advantages. As major industrial anchors begin operations, land parcels in TP1 and TP2 are projected to outperform traditional metropolitan real estate yields over the next 3 to 5 years.",
      },
    ],
  },
  {
    id: 2,
    title: "The ₹91,000 Cr Tata Semiconductor Plant: What It Means for Land Prices",
    excerpt:
      "How massive industrial investments in Dholera SIR are driving exponential housing and commercial plot demand.",
    author: "Kunal Varma",
    date: "Oct 05, 2026",
    readTime: "9 min read",
    category: "Economy & Jobs",
    image: "/images/economy&job.png",
    stats: [
      { label: "Tata Fab Outlay", value: "₹91,000 Cr" },
      { label: "Jobs Projected", value: "100,000+" },
      { label: "Primary Demand", value: "Housing & Commercial" },
    ],
    sections: [
      {
        title: "1. A Landmark Industrial Shift for India",
        content:
          "The Union Cabinet's approval of Tata Electronics' mega semiconductor fabrication plant in Dholera SIR (with an investment exceeding ₹91,000 Crores) marks a historic turning point in India's industrial evolution. Partnered with Taiwan's PSMC, this semiconductor fab unit anchors Dholera as India's premier tech manufacturing corridor.",
      },
      {
        title: "2. High-Tech Employment & Multiplier Demand",
        content:
          "The semiconductor fab unit alone is projected to create over 100,000 direct and indirect high-skilled jobs. This massive influx of chip designers, chemical engineers, corporate executives, and ancillary supply-chain workers creates an immediate, sustained demand for plotted residential layouts, commercial centers, and serviced rental accommodations.",
      },
      {
        title: "3. Micro-Market Impact on Nearby Land Parcels",
        points: [
          "High-Income Workforce Housing: Demand shift toward gated plotted townships with modern amenities near the Activation Area.",
          "Supply Chain Ecosystem: Global semiconductor component suppliers, gas suppliers, and chemical logistics firms acquiring surrounding industrial land.",
          "Accelerated Civic Infrastructure: Priority completion of local 24m, 30m, and 45m sector trunk roads connecting industrial hubs to residential zones.",
          "Robust Rental Yields: Early plot developers positioning properties for long-term corporate leases and executive housing.",
        ],
      },
      {
        title: "4. Strategic Investor Positioning",
        content:
          "Global tech hubs (such as Hsinchu Science Park in Taiwan or Shenzhen in China) experienced rapid real estate value multiplication during their initial semiconductor fab setup phases. Land assets in Dholera SIR are currently tracking an identical growth trajectory.",
      },
    ],
  },
  {
    id: 3,
    title: "Dholera International Airport & Expressways: Connectivity Masterclass",
    excerpt:
      "Key transport corridors connecting Ahmedabad to Dholera and how proximity to major transit routes multiplies plot value.",
    author: "Satyam Singh",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    category: "Infrastructure",
    image: "/images/infrastructure.png",
    stats: [
      { label: "Expressway Commute", value: "< 60 Mins" },
      { label: "Airport Status", value: "Greenfield Cargo & Pax" },
      { label: "Rail Connectivity", value: "DFC & MRTS" },
    ],
    sections: [
      {
        title: "1. The Triple Connectivity Engine",
        content:
          "Seamless logistics and transit infrastructure form the core of real estate value. Dholera SIR is anchored by three major transit corridors: the Dholera Greenfield International Airport, the Ahmedabad-Dholera Expressway, and the Dedicated Freight Corridor (DFC).",
      },
      {
        title: "2. Ahmedabad-Dholera 4-Lane Access-Controlled Expressway",
        content:
          "This dedicated expressway corridor reduces transit times between Ahmedabad and Dholera to under 45–60 minutes. With multiple exit interchanges leading directly into TP1 and TP2 town planning zones, commercial and residential plots near these interchanges enjoy maximum footfall and accessibility.",
      },
      {
        title: "3. Dholera Greenfield International Airport (Navagam)",
        points: [
          "Dual-Runway Architecture: Engineered to handle large passenger airliners and heavy international cargo freighters.",
          "Global Logistics Hub: Positions Dholera as an export gateway for electronics, pharmaceuticals, and heavy engineering exports.",
          "Real Estate Impact: Land parcels situated along airport feeder roads experience faster commercial zoning approvals and higher resale liquidity.",
          "Multi-Modal Rail Integration: Mass Rapid Transit System (MRTS) connecting the airport directly to Ahmedabad Metro networks.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "5 Documents You Must Verify Before Buying Any Plot in Dholera",
    excerpt:
      "Protect your capital with this non-negotiable legal checklist for title-clear and DSIRDA-compliant land purchases.",
    author: "Kunal Varma",
    date: "Sep 15, 2026",
    readTime: "10 min read",
    category: "Legal & Compliance",
    image: "/images/leagal.png",
    stats: [
      { label: "Audit Requirement", value: "30-Year Search Report" },
      { label: "Land Conversion", value: "NA Residential / Commercial" },
      { label: "Statutory Clearance", value: "DSIRDA & Collector Approval" },
    ],
    sections: [
      {
        title: "1. Non-Negotiable Due Diligence Framework",
        content:
          "Land investment offers maximum security when accompanied by exhaustive legal verification. Before executing any sale agreement or paying token amounts, buyers must perform a thorough statutory audit of the property documents.",
      },
      {
        title: "2. The 5 Essential Legal Documents",
        points: [
          "1. Title Deed & 7/12 Extract (Pahani Patrak): Confirms undisputed legal ownership, historical mutation entries, and guarantees zero third-party revenue claims.",
          "2. Change of Land Use (CLU) & NA Certificate: Validates that agricultural land has been officially converted to Non-Agricultural (NA) Residential or Commercial use by the District Collector.",
          "3. 30-Year Title Search & Clearance Report: A formal legal certificate issued by a senior advocate confirming the property is free from bank mortgages, litigation, or family disputes.",
          "4. Sanctioned Layout Plan: Verifies that the plot layout is officially approved by DSIRDA / local planning authority with demarcated 24m/30m internal roads and green belts.",
          "5. Encumbrance Certificate & Clear Registry: Ensures clear property registration capability with environmental, electricity board, and local panchayat NOCs intact.",
        ],
      },
      {
        title: "3. Protecting Yourself Against Unauthorized Plotting",
        content:
          "Avoid purchasing unapproved agricultural land outside sanctioned DSIRDA Town Planning schemes. Partnering with verified entities like Investor Space ensures every plot in projects like Kesar Green Flora undergoes strict legal audits prior to listing.",
      },
    ],
  },
  {
    id: 5,
    title: "Town Planning (TP) Schemes Demystified: Zone Differences Explained",
    excerpt:
      "Understanding TP1, TP2, FSI limits, and zoning laws so you invest in the right land category.",
    author: "Aditya Tiwari",
    date: "Sep 02, 2026",
    readTime: "8 min read",
    category: "Town Planning",
    image: "/images/town planing.png",
    stats: [
      { label: "Priority Activation", value: "TP1 & TP2" },
      { label: "Zoning System", value: "DSIRDA Master Plan" },
      { label: "Development Density", value: "FSI / FAR Regulated" },
    ],
    sections: [
      {
        title: "1. What is a Town Planning (TP) Scheme?",
        content:
          "To eliminate haphazard urban sprawl, DSIRDA utilizes a Land Pooling Scheme where large land areas are divided into structured Town Planning (TP) schemes (TP1 to TP6). This guarantees systematic road alignment, utility reservation, and civic infrastructure delivery.",
      },
      {
        title: "2. Zoning Classifications & Permissible FSI",
        points: [
          "Residential Zones: Designed for plotted housing townships, villas, and low-density residential communities with dedicated public green spaces.",
          "Commercial & High-Density Zones: Located along major 30m, 45m, and 55m arterial roads allowing elevated FSI (Floor Space Index) for retail malls, office towers, and hotels.",
          "Industrial & Logistics Hubs: Allocated specifically for light manufacturing, assembly units, and cold-storage logistics facilities.",
          "Knowledge & IT Zones: Reserved for technical universities, research facilities, and software technology parks.",
        ],
      },
      {
        title: "3. Why TP1 and TP2 are Prime Zones",
        content:
          "TP1 and TP2 constitute the Activation Area of Dholera SIR, receiving primary government budget allocations for early road network completion, water supply lines, and power substation installation.",
      },
    ],
  },
  {
    id: 6,
    title: "Why Commercial Plots Deliver Higher Yields for Developers & Builders",
    excerpt:
      "How commercial and multi-use land layouts in Dholera cater to developers building retail spaces and workforce accommodation.",
    author: "Khushi Sharma",
    date: "Aug 20, 2026",
    readTime: "7 min read",
    category: "B2B Investment",
    image: "/images/b2b.png",
    stats: [
      { label: "Target Audience", value: "Builders & Institutions" },
      { label: "Revenue Potential", value: "Lease Yield & Capital Gains" },
      { label: "Access Corridors", value: "24m, 30m & 45m Sector Roads" },
    ],
    sections: [
      {
        title: "1. The Rising Commercial Demand Surge",
        content:
          "As industrial titans establish facilities in Dholera SIR, the demand for retail, workspace, hospitality, and healthcare infrastructure is expanding rapidly. Commercial plots positioned on primary sector roads offer developers high-margin development opportunities.",
      },
      {
        title: "2. Key B2B Commercial Segments",
        points: [
          "Retail Centers & Supermarkets: Serving incoming engineers, plant personnel, and residential township communities.",
          "Corporate Guest Houses & Serviced Apartments: Catering to visiting executive consultants, auditors, and tech specialists.",
          "Logistics & Warehousing Hubs: Capitalizing on close proximity to the Dedicated Freight Corridor and Expressway interchanges.",
          "Mixed-Use High-Density Complexes: Combining ground-floor retail with upper-floor office suites.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "The NRI Guide to Buying Land in Dholera SIR: FEMA & Taxation Made Simple",
    excerpt:
      "A complete step-by-step guide for Non-Resident Indians purchasing residential and commercial plots in India.",
    author: "Aditya Tiwari",
    date: "Aug 10, 2026",
    readTime: "10 min read",
    category: "NRI Advice",
    image: "/images/nri advice.png",
    stats: [
      { label: "Legal Compliance", value: "FEMA & RBI Compliant" },
      { label: "Financial Channel", value: "NRE / NRO Banking" },
      { label: "Execution Method", value: "Remote Power of Attorney" },
    ],
    sections: [
      {
        title: "1. Clear Regulatory Pathways for NRIs",
        content:
          "Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely acquire residential and commercial real estate in India under general permissions granted by the Reserve Bank of India (RBI) and FEMA (Foreign Exchange Management Act).",
      },
      {
        title: "2. Essential NRI Investment Guidelines",
        points: [
          "Permitted Property Types: NRIs can freely purchase residential plots, commercial land, and built-up structures (agricultural land is restricted).",
          "Official Payment Routing: All purchase transactions must be executed through official NRE/NRO banking channels or direct inward foreign remittances.",
          "Remote Power of Attorney (PoA): Overseas buyers can execute property registrations without traveling to India by granting a notarized PoA to a trusted relative or representative.",
          "Capital Gains & Repatriation: Proceeds from land sales can be seamlessly repatriated back to the country of residence subject to standard Indian TDS and applicable DTAA double taxation treaties.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Residential vs Commercial Plots: How to Pick the Right Segment for 5-Year Holding",
    excerpt:
      "Comparing capital appreciation, liquidity, and holding costs to align land purchases with your financial goals.",
    author: "Kunal Varma",
    date: "Jul 28, 2026",
    readTime: "8 min read",
    category: "Strategy",
    image: "/images/startegy.png",
    stats: [
      { label: "Residential Term", value: "3 - 5 Years" },
      { label: "Commercial Term", value: "5 - 7 Years" },
      { label: "Entry Focus", value: "TP1 Activation Zone" },
    ],
    sections: [
      {
        title: "1. Aligning Land Purchases with Your Investment Horizon",
        content:
          "Selecting between residential and commercial plot segments requires evaluating your available capital, risk appetite, expected exit timeframe, and desired holding model.",
      },
      {
        title: "2. Direct Segment Comparison Matrix",
        points: [
          "Residential Plots (e.g., Kesar Green Flora): Accessible entry capital, steady compounding appreciation driven by housing demand, best holding period of 3–5 years, target exit to end-user homebuilders.",
          "Commercial Plots: Higher entry ticket size, elevated rental yields and business lease potential, best holding period of 5–7 years, target exit to corporate entities and commercial builders.",
          "Liquidity & Resale: Residential plots in TP1 activation zones currently enjoy faster resale liquidity due to individual end-user housing demand.",
        ],
      },
    ],
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // Lock body scroll cleanly and pause Lenis when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
      // Pause Lenis smooth scrolling so page doesn't scroll behind modal
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.stop === "function") {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    };
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden">
      <PageTitle title="Blog" />

      <main className="pb-16 pt-28 sm:pt-28 md:pt-32">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#8D0102] font-bold uppercase tracking-wider text-xs sm:text-sm bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 shadow-sm inline-flex items-center gap-1.5 mb-4">
              <Sparkles className="size-3.5 text-[#8D0102]" /> Insights & News
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              The Investor Space <span className="text-[#8D0102]">Blog</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Stay updated with market trends, legal checklists, and exclusive insights on Dholera SIR and the broader real estate ecosystem.
            </p>
          </div>
        </motion.section>

        {/* BLOG GRID SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPost(post)}
                className={`bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden relative group cursor-pointer transition-all duration-300 flex flex-col ${
                  selectedPost?.id === post.id
                    ? "opacity-0"
                    : "hover:shadow-2xl hover:border-[#8D0102]/30"
                }`}
                whileHover={{ y: -4 }}
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden shrink-0 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur text-[#8D0102] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-slate-100">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col bg-white">
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-3 text-[#8D0102]" />
                      {post.date}
                    </div>
                    <div className="size-1 rounded-full bg-slate-300"></div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3 text-[#8D0102]" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#8D0102] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#8D0102]">
                    <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Full Article <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* 100% BULLETPROOF SCROLLABLE MODAL */}
        <AnimatePresence>
          {selectedPost && (
            <div
              className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
              data-lenis-prevent
            >
              {/* Backdrop Click */}
              <div
                className="absolute inset-0"
                onClick={() => setSelectedPost(null)}
              />

              {/* Modal Card - Pure HTML div wrapper to isolate scroll from Framer Motion scaling glitches */}
              <div
                className="bg-white w-full max-w-4xl h-[88dvh] rounded-3xl shadow-2xl relative z-10 flex flex-col overflow-hidden border border-slate-100"
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
              >
                {/* 1. Sticky Top Header Bar */}
                <div className="shrink-0 z-40 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-50 text-[#8D0102] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-red-100">
                      {selectedPost.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                      • {selectedPost.readTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const text = encodeURIComponent(
                          `Check out this article on Investor Space: ${selectedPost.title}`
                        );
                        window.open(`https://wa.me/?text=${text}`, "_blank");
                      }}
                      className="p-2 text-slate-500 hover:text-[#8D0102] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                      title="Share on WhatsApp"
                    >
                      <Share2 className="size-4" />
                    </button>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="p-2 bg-slate-100 hover:bg-[#8D0102] hover:text-white text-slate-700 rounded-full transition-colors cursor-pointer"
                      aria-label="Close article"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                </div>

                {/* 2. Scrollable Article Area */}
                <div
                  className="flex-1 min-h-0 overflow-y-auto overscroll-contain bg-white select-text"
                  data-lenis-prevent
                  style={{
                    WebkitOverflowScrolling: "touch",
                    overscrollBehavior: "contain",
                  }}
                >
                  {/* Full Width Image */}
                  <div className="w-full bg-white leading-none shrink-0">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-auto object-cover block"
                    />
                  </div>

                  {/* Article Content Area */}
                  <div className="p-6 sm:p-10 space-y-8 bg-white">
                    {/* Title & Author Meta */}
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5 text-[#8D0102]" /> {selectedPost.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="size-3.5 text-[#8D0102]" /> By {selectedPost.author}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                        {selectedPost.title}
                      </h2>
                    </div>

                    {/* Highlights Metrics Grid */}
                    {selectedPost.stats && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                        {selectedPost.stats.map((stat: any, i: number) => (
                          <div
                            key={i}
                            className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center"
                          >
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                              {stat.label}
                            </span>
                            <span className="text-base font-black text-[#8D0102]">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Excerpt Lead */}
                    <div className="border-l-4 border-[#8D0102] pl-4 sm:pl-6 italic text-base sm:text-lg font-medium text-slate-700 leading-relaxed bg-red-50/40 py-3 rounded-r-xl">
                      "{selectedPost.excerpt}"
                    </div>

                    {/* Detailed Sections */}
                    {selectedPost.sections?.map((sec: any, idx: number) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          <TrendingUp className="size-5 text-[#8D0102]" />
                          {sec.title}
                        </h3>

                        {sec.content && (
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {sec.content}
                          </p>
                        )}

                        {sec.points && (
                          <div className="grid grid-cols-1 gap-2.5 pt-2">
                            {sec.points.map((pt: string, pIdx: number) => (
                              <div
                                key={pIdx}
                                className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100"
                              >
                                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                                  {pt}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Consultation Banner */}
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#8D0102] to-[#600001] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                      <div>
                        <h4 className="font-bold text-lg">Interested in Dholera Plots?</h4>
                        <p className="text-xs text-white/80 mt-1">
                          Talk with our team for title deed audits & site visits.
                        </p>
                      </div>
                      <a
                        href="/contact"
                        className="shrink-0 bg-white text-[#8D0102] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-md"
                      >
                        Book Legal Audit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}