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
    const [selectedCity, setSelectedCity] = useState("All");
    const [statusFilter, setStatusFilter] = useState<"Upcoming" | "Ongoing" | "Completed" | "All">("All");
    const [zoomLevel, setZoomLevel] = useState(1);
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);

    const currentCityData = useMemo(() => {
        return initialCities.find((c) => c.name === selectedCity) || initialCities[0];
    }, [selectedCity]);

    const handleCitySelect = (cityName: string) => {
        setSelectedCity(cityName);
        const target = initialCities.find((c) => c.name === cityName);
        if (target) {
            setZoomLevel(target.zoom);
        }
    };

    const resetAllFilters = () => {
        setSelectedCity("All");
        setStatusFilter("All");
        setSearchQuery("");
        setZoomLevel(1);
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
            <main className="bg-white text-slate-900 font-sans">
                {/* HERO SECTION */}
                <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-slate-950 text-white pt-20">
                    <div className="absolute inset-0 -z-20 overflow-hidden">
                        <img
                            src="/images/FloraMaster.png"
                            alt="Land background"
                            className="h-full w-full object-cover filter blur-[2px] brightness-[0.65] contrast-[1.05]"
                        />
                    </div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"></div>

                    <div className="w-full px-6 sm:px-10 lg:px-16 py-16 max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-3xl"
                        >
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-extrabold text-white backdrop-blur-md shadow-md">
                                <span className="h-2 w-2 rounded-full bg-[#8D0102]"></span>
                                <span className="tracking-wider">VERIFIED OPPORTUNITIES</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                                Find land built <br />
                                for <span className="text-rose-400">lasting value.</span>
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal">
                                Search documented plot developments by stage and location. Every listing puts approvals, pricing and progress within reach.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-5 text-xs font-bold uppercase text-slate-200">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-rose-400" /> Titles Checked
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-rose-400" /> Sanctioned Layouts
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-rose-400" /> Growth-Led Locations
                                </span>
                            </div>
                        </motion.div>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-10 rounded-3xl bg-white/10 border border-white/20 p-4 sm:p-5 backdrop-blur-xl max-w-4xl shadow-2xl"
                        >
                            <div className="flex gap-2 mb-3">
                                <button
                                    type="button"
                                    onClick={() => setHeroTab("all")}
                                    className={`rounded-xl px-5 py-2 text-xs font-bold transition-all ${
                                        heroTab === "all" ? "bg-white text-slate-950 shadow-lg scale-105" : "text-white/80 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    All projects
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setHeroTab("ready")}
                                    className={`rounded-xl px-5 py-2 text-xs font-bold transition-all ${
                                        heroTab === "ready" ? "bg-white text-slate-950 shadow-lg scale-105" : "text-white/80 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    Ready to move
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                                <div className="sm:col-span-5 relative flex items-center">
                                    <Search className="absolute left-4 size-4 text-slate-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Project, city or growth corridor"
                                        className="w-full rounded-2xl bg-white/15 border border-white/20 py-3 pl-11 pr-4 text-xs text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white/20"
                                    />
                                    {searchQuery && (
                                        <button onClick={() => setSearchQuery("")} className="absolute right-4 text-slate-300 hover:text-white">
                                            <X className="size-4" />
                                        </button>
                                    )}
                                </div>

                                <div className="sm:col-span-3 relative flex items-center">
                                    <MapPin className="absolute left-4 size-4 text-slate-400" />
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => handleCitySelect(e.target.value)}
                                        className="w-full appearance-none rounded-2xl bg-white/15 border border-white/20 py-3 pl-11 pr-9 text-xs text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-slate-900 cursor-pointer"
                                    >
                                        {initialCities.map((c) => (
                                            <option key={c.name} value={c.name} className="bg-slate-900 text-white">
                                                {c.name} ({c.count})
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 size-4 text-slate-400 pointer-events-none" />
                                </div>

                                <div className="sm:col-span-4 flex gap-3">
                                    <div className="relative flex-1 flex items-center">
                                        <select className="w-full appearance-none rounded-2xl bg-white/15 border border-white/20 py-3 px-4 text-xs text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-slate-900 cursor-pointer">
                                            <option className="bg-slate-900 text-white">Recommended</option>
                                            <option className="bg-slate-900 text-white">Newest First</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 size-4 text-slate-400 pointer-events-none" />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const el = document.getElementById("all-projects");
                                            el?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="flex items-center justify-center gap-2 rounded-2xl bg-[#8D0102] px-6 py-3 text-xs font-extrabold text-white shadow-xl hover:bg-rose-800 transition-all active:scale-95 whitespace-nowrap"
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
                <section className="bg-white text-slate-900 py-12 border-b border-slate-100 overflow-hidden relative">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                        <div className="relative flex flex-col lg:flex-row items-center gap-8">
                            <div className="z-20 w-full lg:w-[300px] shrink-0">
                                <div className="rounded-3xl bg-[#8D0102] p-7 text-white shadow-xl relative overflow-hidden">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-200">
                                        <Building2 className="size-4" /> Featured
                                    </div>
                                    <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                                        High return projects
                                    </h3>
                                    <p className="mt-2 text-xs text-rose-100 leading-relaxed">
                                        Handpicked plots with verified growth potential.
                                    </p>
                                    <a
                                        href="#all-projects"
                                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold text-white hover:underline"
                                    >
                                        See all projects <ArrowRight className="size-3.5" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative w-full overflow-hidden py-2 flex-1">
                                <motion.div
                                    className="flex gap-5 w-max"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                                >
                                    {Array.from({ length: 12 }).map((_, idx) => {
                                        const proj = projectsData[0];
                                        return (
                                            <div
                                                key={`marquee-${idx}`}
                                                className="w-[300px] sm:w-[340px] rounded-3xl bg-slate-50 border border-slate-200/90 p-5 flex gap-4 items-center shrink-0 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                                            >
                                                <div className="relative size-20 rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                                                    <img
                                                        src={proj.image}
                                                        alt={proj.title}
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="text-[10px] font-extrabold text-[#8D0102] uppercase tracking-wider">
                                                        {proj.type}
                                                    </span>
                                                    <h4 className="font-bold text-sm text-slate-900 truncate mt-0.5">{proj.title}</h4>
                                                    <p className="text-xs text-slate-500 truncate mt-1">
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
                <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                        <div className="mb-10">
                            <span className="inline-block rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#8D0102] mb-3 shadow-2xs">
                                LOCATION EXPLORER
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                                Search projects by location
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                                Pick a location to view details on the interactive map.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Left Sidebar */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="bg-white text-slate-900 p-6 rounded-3xl border border-slate-200 shadow-xl">
                                    <div className="relative mb-5">
                                        <Search className="absolute left-4 top-3.5 size-4 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search project or area"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8D0102]"
                                        />
                                    </div>

                                    <div className="flex justify-end mb-4">
                                        <button
                                            type="button"
                                            onClick={resetAllFilters}
                                            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#8D0102] transition-colors"
                                        >
                                            <RotateCcw className="size-3.5" /> Reset Filters
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 max-h-[310px] overflow-y-auto pr-1">
                                        {initialCities.map((city) => {
                                            const isSelected = selectedCity === city.name;
                                            return (
                                                <button
                                                    key={city.name}
                                                    type="button"
                                                    onClick={() => handleCitySelect(city.name)}
                                                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-xs font-semibold transition-all ${
                                                        isSelected
                                                            ? "bg-[#8D0102] text-white shadow-md font-bold scale-[1.01]"
                                                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                                                    }`}
                                                >
                                                    <span className="flex items-center gap-2.5 truncate">
                                                        <MapPin className={`size-4 ${isSelected ? "text-rose-200" : "text-slate-400"}`} />
                                                        {city.name}
                                                    </span>
                                                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                                                        {city.count}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="bg-white text-slate-900 p-6 rounded-3xl border border-slate-200 shadow-xl flex items-center gap-5 relative overflow-hidden w-full">
                                    <div className="w-28 sm:w-32 shrink-0 flex items-center justify-center">
                                        <img
                                            src="/characters/agent_key.png"
                                            alt="Search Assistant"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col gap-3">
                                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                            Please search projects according to the location.
                                        </h3>

                                        <div className="flex flex-wrap items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const el = document.getElementById("all-projects");
                                                    el?.scrollIntoView({ behavior: "smooth" });
                                                }}
                                                className="rounded-full bg-[#8D0102] hover:bg-rose-800 text-white px-4 py-2 text-xs font-bold flex items-center gap-1.5 transition shadow-md"
                                            >
                                                <span>Browse all</span>
                                                <ArrowRight className="size-3.5" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => {}}
                                                className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 text-xs font-bold transition border border-slate-200 shadow-2xs"
                                            >
                                                Enquire now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side Map Container */}
                            <div className="lg:col-span-8 flex flex-col gap-6">
                                <div className="bg-white rounded-3xl border border-slate-200 min-h-[500px] relative overflow-hidden flex items-center justify-center p-8 shadow-xl">
                                    {/* Zoom Controls */}
                                    <div className="absolute top-5 right-5 z-20 flex flex-col rounded-2xl bg-white shadow-lg border border-slate-200 overflow-hidden text-slate-700">
                                        <button
                                            type="button"
                                            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.4, 3))}
                                            className="p-3 hover:bg-slate-50 border-b border-slate-200 transition-colors"
                                        >
                                            <Plus className="size-4" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.4, 1))}
                                            className="p-3 hover:bg-slate-50 border-b border-slate-200 transition-colors"
                                        >
                                            <Minus className="size-4" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setZoomLevel(1);
                                                setSelectedCity("All");
                                            }}
                                            className="p-3 hover:bg-slate-50 transition-colors"
                                        >
                                            <Crosshair className="size-4 text-slate-900" />
                                        </button>
                                    </div>

                                    {/* India Vector Map Container */}
                                    <div className="relative w-full max-w-lg h-[420px] flex items-center justify-center">
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
                                                className="w-full h-full object-contain filter drop-shadow-md pointer-events-none select-none opacity-85"
                                            />

                                            {/* Map Pin */}
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
                                                        className={`absolute -translate-x-1/2 -translate-y-full transition-all duration-300 ${
                                                            isSelected ? "scale-100 sm:scale-125 z-30" : "scale-90 sm:scale-100 hover:scale-125 z-10"
                                                        }`}
                                                    >
                                                        <div className="relative flex flex-col items-center group">
                                                            <MapPin className="size-7 sm:size-9 text-[#8D0102] fill-[#8D0102] drop-shadow-xl" />

                                                            {(isSelected || hoveredCity === city.name) && (
                                                                <div className="absolute bottom-full mb-1 sm:mb-2 bg-slate-900 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl whitespace-nowrap shadow-xl pointer-events-none border border-slate-800 z-40 scale-[0.55] sm:scale-100 origin-bottom">
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
                                <div className="bg-[#8D0102] text-white p-4 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <h3 className="text-rose-100 uppercase tracking-wider text-[10px] sm:text-[11px] font-bold">Selected Location</h3>
                                        <p className="text-base sm:text-lg font-black text-white mt-0.5 truncate">Projects in {selectedCity}</p>
                                    </div>
                                    <div className="shrink-0 whitespace-nowrap bg-white/10 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border border-white/20 text-xs font-bold">
                                        {currentCount} {currentCount === 1 ? "Verified Project" : "Verified Projects"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FULL PORTFOLIO SECTION */}
                <section id="all-projects" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
                            <div>
                                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8D0102]">
                                    FULL PORTFOLIO
                                </span>
                                <h2 className="text-3xl sm:text-5xl font-black text-slate-950 mt-1 tracking-tight">
                                    Explore all projects
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                                    Compare every active, upcoming and delivered opportunity.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                {(["All", "Upcoming", "Ongoing", "Completed"] as const).map((st) => (
                                    <button
                                        key={st}
                                        type="button"
                                        onClick={() => setStatusFilter(st)}
                                        className={`rounded-2xl px-5 py-2.5 text-xs font-bold transition-all ${
                                            statusFilter === st
                                                ? "bg-[#8D0102] text-white shadow-md scale-105"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                    >
                                        {st}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
                                >
                                    <div className="relative h-60 overflow-hidden bg-slate-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-[#8D0102] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                                                {project.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-7 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                                                <MapPin className="size-4 text-[#8D0102]" />
                                                <span>{project.location}</span>
                                            </div>
                                            <h3 className="text-2xl font-extrabold text-slate-950 group-hover:text-[#8D0102] transition-colors tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-5">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200/60"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                                            <div>
                                                <span className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
                                                    Price
                                                </span>
                                                <p className="text-sm font-black text-slate-900">{project.price}</p>
                                            </div>
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8D0102] hover:underline bg-rose-50 px-4 py-2 rounded-xl transition-colors hover:bg-rose-100"
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