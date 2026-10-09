"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Check, ShieldCheck } from "lucide-react";

// Cleaned project object with crisp high-value highlights for Preview
const project = {
  id: "kesar-green-flora",
  name: "Kesar Green Flora",
  status: "Ongoing",
  description:
    "100% Govt. Approved, All NA & NOC certified residential plots directly on the Main 6-Lane Highway in Dholera SIR. Excellent plot sizes starting from 100 sq. yards.",
  features: [
    "100% Govt. Approved & All NA, NOC Title Clear",
    "Located directly on Main 6-Lane Highway",
    "Only 10 Mins from Dholera International Airport",
  ],
  location: "Dholera SIR, Ahmedabad District, Gujarat",
  connectivity: "Main 6-Lane Highway Touch (~10 Min to Airport & Expressway)",
  image: "/images/Dholera SIR.png",
};

const sv = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPreview() {
  return (
    <section
      className="relative overflow-hidden bg-white text-foreground py-10 lg:py-14"
      aria-label="Dholera SIR plot projects"
    >
      <div className="shell relative grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

        {/* Left Section */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sv}
            transition={{ duration: 0.55 }}
          >
            <div>
              <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-rose-50 text-[#8D0102]">
                DHOLERA SIR • 1 PROJECT
              </span>
              <h2 className="mt-4 text-balance break-words font-bold sm:mt-5 text-3xl sm:text-4xl lg:text-5xl text-[#8D0102]">
                Dholera SIR Projects
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Plots in Dholera Smart City near the Expressway, airport circle, and Tata semiconductor fab. 100% legal, clear-title plots designed for lasting growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sv}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-4"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8D0102] px-3 py-1 text-xs font-semibold text-white">
              <span className="size-1.5 rounded-full bg-white" /> 1 Ongoing Project
            </span>
            <p className="mt-4 max-w-md text-xs text-muted-foreground sm:text-sm">
              Not sure which plot size fits your vision? Tell us your preference and our team will guide you through the layouts.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sv}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800 sm:text-sm"
            >
              View all projects <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-black/15 bg-white px-6 py-2.5 text-xs font-semibold text-foreground transition hover:border-black sm:text-sm"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Single Featured Project Card */}
        <div className="lg:col-span-7">
          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group grid overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm sm:grid-cols-12"
          >
            {/* Project Image */}
            <div className="relative h-64 sm:h-auto sm:col-span-5 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full bg-[#8D0102] px-2.5 py-0.5 text-[11px] font-medium text-white shadow">
                {project.status}
              </span>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-between p-5 sm:col-span-7 sm:p-6">
              <div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 mb-1">
                  <ShieldCheck className="size-3.5" /> 100% Govt. Approved & Clear Title
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Features Checklist */}
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[#8D0102]">
                        <Check className="size-2.5 stroke-[3]" />
                      </span>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Details Grid */}
                <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-neutral-50/80 p-3 text-xs border border-neutral-100">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-rose-500" />
                    <div>
                      <span className="block font-semibold uppercase text-[10px] tracking-wider text-muted-foreground">
                        LOCATION
                      </span>
                      <p className="font-medium text-foreground leading-tight mt-0.5">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-3.5 shrink-0 text-rose-500" />
                    <div>
                      <span className="block font-semibold uppercase text-[10px] tracking-wider text-muted-foreground">
                        CONNECTIVITY
                      </span>
                      <p className="font-medium text-foreground leading-tight mt-0.5">
                        {project.connectivity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 text-center rounded-full bg-black py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
                >
                  View Project
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 text-center rounded-full border border-black/15 bg-white py-2.5 text-xs font-semibold text-foreground transition hover:border-black"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.article>
        </div>

      </div>
    </section>
  );
}