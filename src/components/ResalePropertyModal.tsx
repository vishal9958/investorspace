"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Building2,
    MapPin,
    IndianRupee,
    Phone,
    Mail,
    User,
    UploadCloud,
    FileText,
    CheckCircle2,
    Clock,
    Sparkles,
    ArrowRight,
    ArrowLeft,
    Check,
    Image as ImageIcon,
    ShieldCheck,
    MessageSquare,
} from "lucide-react";

interface ResalePropertyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResalePropertyModal({ isOpen, onClose }: ResalePropertyModalProps) {
    const [mounted, setMounted] = useState(false);
    const [step, setStep] = useState<1 | 2>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll and Lenis when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const lenis = (window as any).lenis;
            if (lenis && typeof lenis.stop === "function") lenis.stop();
        } else {
            document.body.style.overflow = "";
            const lenis = (window as any).lenis;
            if (lenis && typeof lenis.start === "function") lenis.start();
        }
        return () => {
            document.body.style.overflow = "";
            const lenis = (window as any).lenis;
            if (lenis && typeof lenis.start === "function") lenis.start();
        };
    }, [isOpen]);

    // Form State
    const [formData, setFormData] = useState({
        ownerName: "",
        phone: "",
        email: "",
        propertyType: "Residential Plot",
        plotArea: "",
        location: "",
        expectedPrice: "",
        sellingUrgency: "Within 1 Month",
        sellingReason: "Portfolio Exit / Reinvestment",
        notes: "",
    });

    const [photos, setPhotos] = useState<File[]>([]);
    const [docFiles, setDocFiles] = useState<File[]>([]);
    const photoInputRef = useRef<HTMLInputElement>(null);
    const docInputRef = useRef<HTMLInputElement>(null);

    const propertyTypes = [
        "Residential Plot",
        "Commercial Land",
        "Industrial Plot",
        "Agricultural Land",
    ];

    const urgencyOptions = [
        "Immediately (< 15 Days)",
        "Within 1 Month",
        "Within 3 Months",
        "Flexible / Best Offer",
    ];

    const reasonOptions = [
        "Portfolio Exit / Reinvestment",
        "Urgent Liquidity Need",
        "Relocation / Realization",
        "Profit Booking",
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setPhotos((prev) => [...prev, ...filesArray]);
        }
    };

    const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setDocFiles((prev) => [...prev, ...filesArray]);
        }
    };

    const removePhoto = (index: number) => {
        setPhotos((prev) => prev.filter((_, i) => i !== index));
    };

    const removeDoc = (index: number) => {
        setDocFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 900);
    };

    const handleReset = () => {
        setStep(1);
        setIsSubmitted(false);
        setFormData({
            ownerName: "",
            phone: "",
            email: "",
            propertyType: "Residential Plot",
            plotArea: "",
            location: "",
            expectedPrice: "",
            sellingUrgency: "Within 1 Month",
            sellingReason: "Portfolio Exit / Reinvestment",
            notes: "",
        });
        setPhotos([]);
        setDocFiles([]);
        onClose();
    };

    const openWhatsAppDirect = () => {
        const text = encodeURIComponent(
            `*RESALE PROPERTY ENQUIRY*\n` +
            `• Owner: ${formData.ownerName}\n` +
            `• Phone: ${formData.phone}\n` +
            `• Type: ${formData.propertyType}\n` +
            `• Size: ${formData.plotArea}\n` +
            `• Location: ${formData.location}\n` +
            `• Expected Price: ₹${formData.expectedPrice}\n` +
            `• Urgency: ${formData.sellingUrgency}\n` +
            `• Reason: ${formData.sellingReason}`
        );
        window.open(`https://wa.me/919818581518?text=${text}`, "_blank");
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    data-lenis-prevent
                    className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto pointer-events-auto"
                >
                    {/* Soft Glassmorphic Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* 3D Spring-Bounce Modal Container (Clean Light Theme) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88, y: 25, rotateX: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, rotateX: -6 }}
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        className="relative z-10 w-full max-w-2xl bg-white rounded-3xl sm:rounded-[32px] shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col my-auto max-h-[90vh]"
                    >
                        {/* Clean Light Header Banner */}
                        <div className="relative bg-gradient-to-b from-rose-50/60 via-white to-white text-slate-900 p-5 sm:p-7 border-b border-slate-100">
                            <div className="flex items-start justify-between relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#8D0102] mb-2">
                                        <Sparkles className="size-3 text-[#8D0102]" /> DIRECT RESALE & LAND VALUATION
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                                        List Your Property For Resale
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                                        Connect with verified plot investors and get transparent market price in Dholera SIR.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Close modal"
                                    className="size-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-300 hover:rotate-90 shrink-0 cursor-pointer border border-slate-200/60"
                                >
                                    <X className="size-4 sm:size-5" />
                                </button>
                            </div>

                            {/* 2-Step Wizard Indicator (Light Style) */}
                            {!isSubmitted && (
                                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className={`flex items-center gap-2 font-bold transition-colors ${
                                            step === 1 ? "text-[#8D0102]" : "text-slate-400 hover:text-slate-700"
                                        }`}
                                    >
                                        <span className={`size-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                                            step === 1 ? "bg-red-600 text-white shadow-xs" : "bg-slate-100 text-slate-500"
                                        }`}>
                                            1
                                        </span>
                                        <span className={step === 1 ? "text-slate-950 font-black" : "text-slate-400 font-medium"}>
                                            Land & Owner Details
                                        </span>
                                    </button>

                                    <div className="h-0.5 flex-1 mx-3 bg-slate-100 relative rounded-full overflow-hidden">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-red-600"
                                            animate={{ width: step === 2 ? "100%" : "0%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (formData.ownerName && formData.phone) setStep(2);
                                        }}
                                        className={`flex items-center gap-2 font-bold transition-colors ${
                                            step === 2 ? "text-[#8D0102]" : "text-slate-400 hover:text-slate-700"
                                        }`}
                                    >
                                        <span className={`size-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                                            step === 2 ? "bg-red-600 text-white shadow-xs" : "bg-slate-100 text-slate-500"
                                        }`}>
                                            2
                                        </span>
                                        <span className={step === 2 ? "text-slate-950 font-black" : "text-slate-400 font-medium"}>
                                            Pricing & Verification
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Modal Body / Scrollable Form with Lenis scroll prevention */}
                        <div data-lenis-prevent className="p-5 sm:p-7 overflow-y-auto flex-1 bg-white">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit}>
                                    <AnimatePresence mode="wait">
                                        {step === 1 ? (
                                            /* ─── STEP 1: OWNER & LAND DETAILS ─── */
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.25 }}
                                                className="space-y-4"
                                            >
                                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                                                    Section 1 • Owner Information
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                            Owner / Contact Name <span className="text-red-600">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                                                            <input
                                                                type="text"
                                                                name="ownerName"
                                                                required
                                                                value={formData.ownerName}
                                                                onChange={handleInputChange}
                                                                placeholder="e.g. Ramesh Patel"
                                                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                            WhatsApp Phone Number <span className="text-red-600">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                required
                                                                value={formData.phone}
                                                                onChange={handleInputChange}
                                                                placeholder="+91 98765 43210"
                                                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                        Email Address (Optional)
                                                    </label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            placeholder="investor@example.com"
                                                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="pt-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                                                    Section 2 • Property Specifications
                                                </div>

                                                {/* Property Type Choice Pills */}
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                        Property Type
                                                    </label>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                        {propertyTypes.map((type) => (
                                                            <button
                                                                key={type}
                                                                type="button"
                                                                onClick={() => setFormData((prev) => ({ ...prev, propertyType: type }))}
                                                                className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                                                                    formData.propertyType === type
                                                                        ? "bg-red-600 text-white border-red-600 shadow-sm"
                                                                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                                                                }`}
                                                            >
                                                                {type}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                            Plot Area & Size <span className="text-red-600">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                                                            <input
                                                                type="text"
                                                                name="plotArea"
                                                                required
                                                                value={formData.plotArea}
                                                                onChange={handleInputChange}
                                                                placeholder="e.g. 150 Sq. Yds / 300 Sq. Yds"
                                                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                            Location / Landmark / Plot # <span className="text-red-600">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                                                            <input
                                                                type="text"
                                                                name="location"
                                                                required
                                                                value={formData.location}
                                                                onChange={handleInputChange}
                                                                placeholder="e.g. Dholera SIR TP 2A, Near Expressway"
                                                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pt-4 flex justify-end">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (!formData.ownerName || !formData.phone || !formData.plotArea || !formData.location) {
                                                                alert("Please fill in Owner Name, Phone, Plot Area and Location to proceed.");
                                                                return;
                                                            }
                                                            setStep(2);
                                                        }}
                                                        className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                                                    >
                                                        <span>Next: Price & Verification</span>
                                                        <ArrowRight className="size-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* ─── STEP 2: PRICING, URGENCY & PHOTOS ─── */
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.25 }}
                                                className="space-y-4"
                                            >
                                                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                                                    Section 3 • Expected Price & Timelines
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                            Expected Demand / Total Price <span className="text-red-600">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <IndianRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                                                            <input
                                                                type="text"
                                                                name="expectedPrice"
                                                                required
                                                                value={formData.expectedPrice}
                                                                onChange={handleInputChange}
                                                                placeholder="e.g. ₹18 Lakhs / ₹7,500 per sq yd"
                                                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                            Selling Urgency / Timeframe
                                                        </label>
                                                        <select
                                                            name="sellingUrgency"
                                                            value={formData.sellingUrgency}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition bg-white"
                                                        >
                                                            {urgencyOptions.map((opt) => (
                                                                <option key={opt} value={opt}>{opt}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                                        Reason For Selling
                                                    </label>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                        {reasonOptions.map((r) => (
                                                            <button
                                                                key={r}
                                                                type="button"
                                                                onClick={() => setFormData((prev) => ({ ...prev, sellingReason: r }))}
                                                                className={`py-2 px-2.5 rounded-xl text-[11px] font-bold border text-center transition-all cursor-pointer ${
                                                                    formData.sellingReason === r
                                                                        ? "bg-red-600 text-white border-red-600 shadow-sm"
                                                                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                                                                }`}
                                                            >
                                                                {r}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                                                    Section 4 • Proof & Photos (Optional)
                                                </div>

                                                {/* File Uploads: Photos */}
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-800 mb-1">
                                                        Land / Plot Photos
                                                    </label>
                                                    <div
                                                        onClick={() => photoInputRef.current?.click()}
                                                        className="border-2 border-dashed border-slate-200 hover:border-red-400 bg-slate-50/70 hover:bg-red-50/20 rounded-2xl p-4 text-center cursor-pointer transition-colors"
                                                    >
                                                        <UploadCloud className="size-6 text-slate-400 mx-auto mb-1" />
                                                        <span className="text-xs font-bold text-slate-700 block">
                                                            Click or Drag & Drop Land Photos
                                                        </span>
                                                        <span className="text-[10px] text-slate-500">
                                                            PNG, JPG up to 10MB each
                                                        </span>
                                                        <input
                                                            ref={photoInputRef}
                                                            type="file"
                                                            multiple
                                                            accept="image/*"
                                                            onChange={handlePhotoUpload}
                                                            className="hidden"
                                                        />
                                                    </div>

                                                    {photos.length > 0 && (
                                                        <div className="mt-2 flex flex-wrap gap-2">
                                                            {photos.map((f, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-800"
                                                                >
                                                                    <ImageIcon className="size-3 text-red-600" />
                                                                    <span className="max-w-[120px] truncate">{f.name}</span>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removePhoto(i)}
                                                                        className="size-3.5 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Verification Documents */}
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-800 mb-1">
                                                        Verification Documents (Registry / 7-12 / Allotment Copy)
                                                    </label>
                                                    <div
                                                        onClick={() => docInputRef.current?.click()}
                                                        className="border border-slate-200 hover:border-red-400 bg-slate-50/70 hover:bg-red-50/20 rounded-2xl p-3 flex items-center justify-between cursor-pointer transition-colors"
                                                    >
                                                        <div className="flex items-center gap-2.5">
                                                            <FileText className="size-4 text-red-600" />
                                                            <span className="text-xs font-bold text-slate-700">
                                                                Attach Registry or NA Order (Optional for instant buyer trust)
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-red-600 font-bold underline">
                                                            Browse
                                                        </span>
                                                        <input
                                                            ref={docInputRef}
                                                            type="file"
                                                            multiple
                                                            accept=".pdf,image/*"
                                                            onChange={handleDocUpload}
                                                            className="hidden"
                                                        />
                                                    </div>

                                                    {docFiles.length > 0 && (
                                                        <div className="mt-2 flex flex-wrap gap-2">
                                                            {docFiles.map((f, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-800"
                                                                >
                                                                    <ShieldCheck className="size-3 text-emerald-600" />
                                                                    <span className="max-w-[120px] truncate">{f.name}</span>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeDoc(i)}
                                                                        className="size-3.5 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="pt-4 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                                                    >
                                                        <ArrowLeft className="size-3.5" />
                                                        <span>Back to Land Details</span>
                                                    </button>

                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-red-600/30 transition-all cursor-pointer disabled:opacity-60"
                                                    >
                                                        {isSubmitting ? (
                                                            <span>Submitting Listing...</span>
                                                        ) : (
                                                            <>
                                                                <Check className="size-4" />
                                                                <span>Submit Resale Listing</span>
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            ) : (
                                /* ─── STEP 3: SUCCESS ANIMATION & CONFIRMATION ─── */
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    className="py-6 sm:py-8 text-center flex flex-col items-center"
                                >
                                    {/* Animated Success Checkmark */}
                                    <div className="size-20 rounded-full bg-emerald-50 border-4 border-emerald-500/20 flex items-center justify-center mb-5 relative">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [0, 1.2, 1] }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="size-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40"
                                        >
                                            <Check className="size-8 stroke-[3]" />
                                        </motion.div>
                                    </div>

                                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                                        Resale Property Listing Received!
                                    </h4>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                                        Thank you, <strong className="text-slate-900">{formData.ownerName}</strong>. Our Dholera Land Valuation Desk has logged your <strong className="text-slate-900">{formData.propertyType}</strong> ({formData.plotArea}) at {formData.location}.
                                    </p>

                                    <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs max-w-md w-full space-y-1.5">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Expected Demand:</span>
                                            <span className="font-bold text-slate-900">₹{formData.expectedPrice}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Urgency:</span>
                                            <span className="font-bold text-red-600">{formData.sellingUrgency}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Contact:</span>
                                            <span className="font-bold text-slate-900">{formData.phone}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                        <button
                                            type="button"
                                            onClick={openWhatsAppDirect}
                                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all cursor-pointer"
                                        >
                                            <MessageSquare className="size-4" />
                                            <span>Chat with Advisor on WhatsApp</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-100 active:scale-95 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 transition-all cursor-pointer"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
