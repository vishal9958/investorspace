"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Plus,
  Minus,
  Crosshair,
  Building2,
  ChevronDown,
  X,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";

// Project database - Single project in Ahmedabad
const projectsData = [
  {
    id: "kesar-green-flora",
    title: "Kesar Green Flora",
    location: "Dholera SIR, Ahmedabad District, Gujarat",
    type: "Ongoing",
    statusCategory: "Ongoing",
    price: "On request",
    image: "/images/FloraMaster.png",
    description:
      "Residential plots in Dholera, Gujarat's planned greenfield smart city, close to the upcoming international airport and the Ahmedabad-Dholera expressway.",
    city: "Ahmedabad",
    tags: ["Flexi Plan", "Sanctioned Layout"],
  },
];

// Calibrated Coordinates specifically for Ahmedabad, Gujarat
const initialCities = [
  { name: "All", count: 1, coords: { x: 50, y: 50 }, zoom: 1 },
  { name: "Ahmedabad", count: 1, coords: { x: 24, y: 51 }, zoom: 2.2 },
];

export default function ProjectsPage() {
  const [heroTab, setHeroTab] = useState<"all" | "ready">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Ahmedabad");
  const [statusFilter, setStatusFilter] = useState<"Upcoming" | "Ongoing" | "Completed" | "All">("All");
  const [zoomLevel, setZoomLevel] = useState(2.2);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const currentCityData = useMemo(() => {
    return initialCities.find((c) => c.name === selectedCity) || initialCities[1];
  }, [selectedCity]);

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    const target = initialCities.find((c) => c.name === cityName);
    if (target) {
      setZoomLevel(target.zoom);
    }
  };

  const resetAllFilters = () => {
    setSelectedCity("Ahmedabad");
    setStatusFilter("All");
    setSearchQuery("");
    setZoomLevel(2.2);
  };

  const currentCount = currentCityData.count;

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCity = selectedCity === "All" || proj.city === selectedCity;
      const matchesStatus = statusFilter === "All" || proj.statusCategory === statusFilter;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesStatus && matchesSearch;
    });
  }, [selectedCity, statusFilter, searchQuery]);

  return (
    <>
      <PageTitle title="Projects" />
      <main className="pt-20 bg-background text-foreground font-sans">
        {/* HERO SECTION */}
        <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-black text-white">
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img
              src="/images/FloraMaster.png"
              alt="Land background"
              className="h-full w-full object-cover brightness-75"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/75 to-black/40"></div>

          <div className="w-full px-5 py-12 sm:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                VERIFIED OPPORTUNITIES
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Find land built <br />
                for <span className="text-primary">lasting value.</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                Search documented plot developments by stage and location. Every listing puts approvals, pricing and progress within reach.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold uppercase text-white/90">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" /> Titles Checked
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" /> Sanctioned Layouts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" /> Growth-Led Locations
                </span>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 rounded-2xl bg-black/60 border border-white/15 p-3 sm:p-4 backdrop-blur-md max-w-4xl shadow-2xl"
            >
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setHeroTab("all")}
                  className={`rounded-lg px-4 py-1.5 text-xs font-bold transition ${heroTab === "all" ? "bg-white text-black shadow" : "text-white/70 hover:text-white"
                    }`}
                >
                  All projects
                </button>
                <button
                  type="button"
                  onClick={() => setHeroTab("ready")}
                  className={`rounded-lg px-4 py-1.5 text-xs font-bold transition ${heroTab === "ready" ? "bg-white text-black shadow" : "text-white/70 hover:text-white"
                    }`}
                >
                  Ready to move
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <div className="sm:col-span-5 relative flex items-center">
                  <Search className="absolute left-3.5 size-4 text-white/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Project, city or growth corridor"
                    className="w-full rounded-xl bg-white/10 border border-white/10 py-2.5 pl-10 pr-3 text-xs text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="absolute right-3 text-white/50">
                      <X className="size-4" />
                    </button>
                  )}
                </div>

                <div className="sm:col-span-3 relative flex items-center">
                  <MapPin className="absolute left-3.5 size-4 text-white/50" />
                  <select
                    value={selectedCity}
                    onChange={(e) => handleCitySelect(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 py-2.5 pl-10 pr-8 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                  >
                    {initialCities.map((c) => (
                      <option key={c.name} value={c.name} className="bg-neutral-900">
                        {c.name} ({c.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 size-4 text-white/50 pointer-events-none" />
                </div>

                <div className="sm:col-span-4 flex gap-2">
                  <div className="relative flex-1 flex items-center">
                    <select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 py-2.5 px-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
                      <option className="bg-neutral-900">Recommended</option>
                      <option className="bg-neutral-900">Newest First</option>
                    </select>
                    <ChevronDown className="absolute right-3 size-4 text-white/50 pointer-events-none" />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("all-projects");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-primary/90 transition"
                  >
                    <span>Search</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HIGH RETURN PROJECTS MARQUEE */}
        <section className="bg-black text-white py-10 border-b border-neutral-800 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <div className="relative flex flex-col lg:flex-row items-center gap-6">
              <div className="z-20 w-full lg:w-[280px] shrink-0">
                <div className="rounded-2xl bg-primary p-6 text-white shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                    <Building2 className="size-4" /> Featured
                  </div>
                  <h3 className="mt-2 text-2xl font-black leading-tight">
                    High return projects
                  </h3>
                  <p className="mt-2 text-xs text-white/80">
                    Handpicked plots with 2x growth potential.
                  </p>
                  <a
                    href="#all-projects"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline"
                  >
                    See all projects <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative w-full overflow-hidden py-2 flex-1">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                  {Array.from({ length: 12 }).map((_, idx) => {
                    const proj = projectsData[0];
                    return (
                      <div
                        key={`marquee-${idx}`}
                        className="w-[280px] sm:w-[320px] rounded-2xl bg-neutral-900 border border-neutral-800 p-4 flex gap-4 items-center shrink-0 shadow-lg hover:border-neutral-700 transition"
                      >
                        <div className="relative size-20 rounded-xl overflow-hidden shrink-0 bg-neutral-800">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="size-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-primary uppercase tracking-wider">
                            {proj.type}
                          </span>
                          <h4 className="font-bold text-sm text-white line-clamp-1">{proj.title}</h4>
                          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                            {proj.location}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION EXPLORER */}
        <section className="py-14 bg-[#F8F6F4] text-foreground">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <div className="mb-8">
              <div className="inline-block rounded-full border border-neutral-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-700 mb-2 shadow-sm">
                LOCATION EXPLORER
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                Search projects by location
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Pick a location to view details on the interactive map.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="bg-black text-white p-5 rounded-3xl shadow-xl">
                  <div className="relative mb-5">
                    <Search className="absolute left-3.5 top-3 size-4 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Search project or area"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-2 pl-10 pr-3 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="flex justify-end mb-3">
                    <button
                      type="button"
                      onClick={resetAllFilters}
                      className="flex items-center gap-1 text-[11px] font-semibold text-neutral-400 hover:text-white"
                    >
                      <RotateCcw className="size-3" /> Reset
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5 max-h-[310px] overflow-y-auto pr-1">
                    {initialCities.map((city) => {
                      const isSelected = selectedCity === city.name;
                      return (
                        <button
                          key={city.name}
                          type="button"
                          onClick={() => handleCitySelect(city.name)}
                          className={`flex items-center justify-between rounded-full px-4 py-2.5 text-xs font-medium transition ${isSelected
                            ? "bg-neutral-800 border border-neutral-700 text-white font-bold"
                            : "text-neutral-300 hover:bg-neutral-900"
                            }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <MapPin className={`size-4 ${isSelected ? "text-white" : "text-neutral-500"}`} />
                            {city.name}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">{city.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-black text-white p-4 sm:p-6 rounded-3xl shadow-2xl flex items-center gap-3 sm:gap-5 relative overflow-hidden w-full">
                  {/* Left Character Image Container */}
                  <div className="w-24 sm:w-32 shrink-0 flex items-center justify-center">
                    <img
                      src="/characters/agent_key.png"
                      alt="Search Assistant"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Right Text & Buttons Container */}
                  <div className="flex-1 min-w-0 flex flex-col gap-2.5 sm:gap-3">
                    <h3 className="text-xs sm:text-base font-bold text-white leading-snug">
                      Please search projects according to the location.
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {/* Browse All Button */}
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById("all-projects");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="rounded-full bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap shadow"
                      >
                        <span>Browse all</span>
                        <ArrowRight className="size-3 sm:size-3.5" />
                      </button>

                      {/* Enquire Now Button */}
                      <button
                        type="button"
                        onClick={() => {
                          // Contact action
                        }}
                        className="rounded-full bg-white hover:bg-neutral-200 text-black px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold transition whitespace-nowrap shadow"
                      >
                        Enquire now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Map Container */}
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="bg-[#EFECE8] rounded-3xl border border-neutral-300 min-h-[480px] relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
                  {/* Zoom Controls */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col rounded-xl bg-white shadow-md border border-neutral-200 overflow-hidden text-neutral-700">
                    <button
                      type="button"
                      onClick={() => setZoomLevel((prev) => Math.min(prev + 0.4, 3))}
                      className="p-2 hover:bg-neutral-100 border-b border-neutral-200"
                    >
                      <Plus className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomLevel((prev) => Math.max(prev - 0.4, 1))}
                      className="p-2 hover:bg-neutral-100 border-b border-neutral-200"
                    >
                      <Minus className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setZoomLevel(2.2);
                        setSelectedCity("Ahmedabad");
                      }}
                      className="p-2 hover:bg-neutral-100"
                    >
                      <Crosshair className="size-4 text-black" />
                    </button>
                  </div>

                  {/* India Vector Map Container */}
                  <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
                    <motion.div
                      className="relative w-full h-full flex items-center justify-center"
                      animate={{
                        scale: zoomLevel,
                        x: selectedCity === "All" ? 0 : (50 - currentCityData.coords.x) * 2.5,
                        y: selectedCity === "All" ? 0 : (50 - currentCityData.coords.y) * 2.5,
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                      <img
                        src="/images/india.svg"
                        alt="India Map"
                        className="w-full h-full object-contain drop-shadow-xl pointer-events-none select-none"
                      />

                      {/* Map Pin (Simple Clean Icon) */}
                      {initialCities.slice(1).map((city) => {
                        const isSelected = selectedCity === city.name;
                        return (
                          <button
                            key={city.name}
                            type="button"
                            onClick={() => handleCitySelect(city.name)}
                            onMouseEnter={() => setHoveredCity(city.name)}
                            onMouseLeave={() => setHoveredCity(null)}
                            style={{ left: `${city.coords.x}%`, top: `${city.coords.y}%` }}
                            className={`absolute -translate-x-1/2 -translate-y-full transition-all duration-300 ${isSelected ? "scale-125 z-30" : "scale-100 hover:scale-125 z-10"
                              }`}
                          >
                            <div className="relative flex flex-col items-center group">
                              {/* Simple Clean Black Map Pin Drop */}
                              <MapPin className="size-8 text-black fill-black drop-shadow-md" />

                              {(isSelected || hoveredCity === city.name) && (
                                <div className="absolute bottom-full mb-1 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap shadow-md pointer-events-none border border-neutral-700 z-40">
                                  {city.name} ({city.count})
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Info Banner */}
                <div className="bg-primary text-white p-6 rounded-3xl shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold">Projects in {selectedCity}</h3>
                    <p className="text-xs text-neutral-400">
                      {currentCount === 0
                        ? "Is city me filhal koi active project nahi hai."
                        : `${currentCount} verified project available.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL PORTFOLIO SECTION */}
        <section id="all-projects" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  FULL PORTFOLIO
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-1">
                  Explore all projects
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Compare every active, upcoming and delivered opportunity.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {(["All", "Upcoming", "Ongoing", "Completed"] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStatusFilter(st)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition ${statusFilter === st
                      ? "bg-primary text-white shadow"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                        <MapPin className="size-3.5 text-primary" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-muted text-muted-foreground text-[10px] font-medium px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                          Price
                        </span>
                        <p className="text-sm font-black text-foreground">{project.price}</p>
                      </div>
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        View Details <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
