"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Phone,
    Mail,
    X,
    Send,
    CheckCircle2,
    Sparkles,
    MessageCircle,
    Moon,
    Sun,
} from "lucide-react";

// Stylish AI Robot Icon (Modern Futuristic Agent)
const ModernRobotIcon = ({ className = "size-6" }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 2v2" />
        <circle cx="12" cy="2" r="1" fill="currentColor" />
        <path d="M4 11a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5z" />
        <circle cx="9" cy="11" r="1.5" fill="currentColor" />
        <circle cx="15" cy="11" r="1.5" fill="currentColor" />
        <path d="M9 15h6" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
    </svg>
);

interface ChatMessage {
    id: number;
    sender: "bot" | "user";
    text: string;
    options?: string[];
}

type Step = "GREETING" | "NAME" | "PHONE" | "EMAIL" | "SERVICE" | "DONE";

export default function FloatingContactWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBotModalOpen, setIsBotModalOpen] = useState(false);
    const [activeIconIndex, setActiveIconIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains("dark")) {
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    };

    const [step, setStep] = useState<Step>("GREETING");
    const [userInput, setUserInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);

    const [leadData, setLeadData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
    });

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 1,
            sender: "bot",
            text: "Namaste! 🙏 Welcome to InvestorSpace AI Support.",
        },
        {
            id: 2,
            sender: "bot",
            text: "May I please know your Name?",
        },
    ]);

    // Rotating main trigger icon
    const rotatingItems = [
        { id: "logo", type: "logo" },
        { id: "whatsapp", type: "icon", icon: MessageCircle },
        { id: "phone", type: "icon", icon: Phone },
        { id: "email", type: "icon", icon: Mail },
    ];

    // All buttons in Red theme (#8D0102)
    const actionButtons = [
        {
            id: "whatsapp",
            icon: MessageCircle,
            href: "https://wa.me/919876543210",
            isBot: false,
            label: "WhatsApp",
        },
        {
            id: "phone",
            icon: Phone,
            href: "tel:+919876543210",
            isBot: false,
            label: "Call Us",
        },
        {
            id: "email",
            icon: Mail,
            href: "mailto:info@investorspace.com?subject=Client%20Inquiry",
            isBot: false,
            label: "Send Email",
        },
        {
            id: "bot",
            icon: ModernRobotIcon,
            href: "#bot",
            isBot: true,
            label: "AI Agent",
        },
        {
            id: "theme",
            icon: isDarkMode ? Sun : Moon,
            href: "#theme",
            isBot: false,
            label: isDarkMode ? "Light Mode" : "Dark Mode",
            onClick: toggleTheme,
        },
    ];

    const radius = 170;

    useEffect(() => {
        if (isOpen || isBotModalOpen) return;
        const interval = setInterval(() => {
            setActiveIconIndex((prev) => (prev + 1) % rotatingItems.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [isOpen, isBotModalOpen, rotatingItems.length]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const currentItem = rotatingItems[activeIconIndex];

    // Process Bot Responses
    const processInput = (text: string) => {
        if (!text.trim()) return;

        const userMsgId = Date.now();
        const newMessages: ChatMessage[] = [
            ...messages,
            { id: userMsgId, sender: "user", text: text },
        ];

        setUserInput("");

        if (step === "GREETING" || step === "NAME") {
            setLeadData((prev) => ({ ...prev, name: text }));
            setStep("PHONE");
            setMessages([
                ...newMessages,
                {
                    id: userMsgId + 1,
                    sender: "bot",
                    text: `Pleasure to connect with you, ${text}! 😊 Please share your 10-digit Mobile Number so our advisor can call you.`,
                },
            ]);
        } else if (step === "PHONE") {
            setLeadData((prev) => ({ ...prev, phone: text }));
            setStep("EMAIL");
            setMessages([
                ...newMessages,
                {
                    id: userMsgId + 1,
                    sender: "bot",
                    text: "Thanks! Could you also provide your Email Address? (Or type 'skip')",
                },
            ]);
        } else if (step === "EMAIL") {
            const emailValue = text.toLowerCase() === "skip" ? "Not Provided" : text;
            setLeadData((prev) => ({ ...prev, email: emailValue }));
            setStep("SERVICE");
            setMessages([
                ...newMessages,
                {
                    id: userMsgId + 1,
                    sender: "bot",
                    text: "Which service category best describes your requirement?",
                    options: ["Developer", "Builder", "Investor", "Service for All"],
                },
            ]);
        } else if (step === "SERVICE") {
            const finalData = { ...leadData, service: text };
            setLeadData(finalData);
            setStep("DONE");

            // Direct WhatsApp Lead Notification
            const ownerNumber = "919876543210";
            const waText = `*New Lead Captured via AI Bot*%0A%0A*Name:* ${finalData.name}%0A*Phone:* ${finalData.phone}%0A*Email:* ${finalData.email}%0A*Service:* ${text}`;
            window.open(`https://wa.me/${ownerNumber}?text=${waText}`, "_blank");

            setMessages([
                ...newMessages,
                {
                    id: userMsgId + 1,
                    sender: "bot",
                    text: `Thank you, ${finalData.name}! 🎉 Your requirement as [${text}] has been received. Our team will contact you shortly on ${finalData.phone}.`,
                },
            ]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Sleek Modern AI Agent Box */}
            <AnimatePresence>
                {isBotModalOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="absolute bottom-20 right-0 w-[330px] sm:w-[380px] h-[490px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 text-white rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-800/80 bg-slate-950/80">
                            <div className="flex items-center gap-3">
                                <div className="relative size-10 rounded-2xl bg-[#8D0102] flex items-center justify-center text-white shadow-lg border border-red-500/30">
                                    <ModernRobotIcon className="size-6" />
                                    <span className="absolute -top-0.5 -right-0.5 size-3 rounded-full bg-emerald-500 border-2 border-slate-900 animate-pulse" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <h3 className="text-xs font-bold text-white tracking-wide">AI Assistant</h3>
                                        <Sparkles className="size-3 text-amber-400" />
                                    </div>
                                    <p className="text-[10px] text-slate-400">InvestorSpace Intelligent Support</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsBotModalOpen(false)}
                                className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 text-xs scrollbar-thin scrollbar-thumb-slate-700">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl leading-relaxed shadow-md ${msg.sender === "user"
                                                ? "bg-[#8D0102] text-white rounded-br-none"
                                                : "bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {/* Options */}
                                    {msg.options && step === "SERVICE" && (
                                        <div className="grid grid-cols-2 gap-2 mt-3 w-full">
                                            {msg.options.map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => processInput(opt)}
                                                    className="bg-slate-800 hover:bg-[#8D0102] border border-slate-700/80 hover:border-red-500 text-slate-200 hover:text-white text-[11px] font-medium py-2 px-3 rounded-xl transition-all shadow-sm active:scale-95 text-center"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Box */}
                        {step !== "DONE" ? (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    processInput(userInput);
                                }}
                                className="p-3 border-t border-slate-800/80 bg-slate-950/90 flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    placeholder="Type your response..."
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    className="flex-1 bg-slate-800/90 text-xs text-white px-3.5 py-2.5 rounded-xl border border-slate-700/80 outline-none focus:border-red-500 transition-colors placeholder:text-slate-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#8D0102] hover:bg-red-700 text-white p-2.5 rounded-xl transition-transform active:scale-95 shadow-md"
                                >
                                    <Send className="size-4" />
                                </button>
                            </form>
                        ) : (
                            <div className="p-3 border-t border-slate-800 bg-slate-950/90 text-center text-xs text-emerald-400 font-medium flex items-center justify-center gap-2">
                                <CheckCircle2 className="size-4 text-emerald-400" />
                                <span>Request Submitted! Our team will call you soon.</span>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Red Floating Icons Arc */}
            <AnimatePresence>
                {isOpen && (
                    <div className="absolute bottom-0 right-0">
                        {actionButtons.map((btn, index) => {
                            const IconComp = btn.icon;
                            const angleDeg = 90 - (index * 90) / (actionButtons.length - 1);
                            const angleRad = (angleDeg * Math.PI) / 180;

                            const x = -Math.cos(angleRad) * radius;
                            const y = -Math.sin(angleRad) * radius;

                            return (
                                <motion.div
                                    key={btn.id}
                                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                    animate={{ opacity: 1, scale: 1, x, y }}
                                    exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                    transition={{
                                        delay: index * 0.04,
                                        type: "spring",
                                        stiffness: 320,
                                        damping: 22,
                                    }}
                                    className="absolute bottom-0 right-0 flex items-center justify-center"
                                >
                                    {btn.isBot || btn.onClick ? (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (btn.onClick) {
                                                    btn.onClick();
                                                } else {
                                                    setIsBotModalOpen(true);
                                                    setIsOpen(false);
                                                }
                                            }}
                                            className="size-12 rounded-full bg-[#8D0102] hover:bg-[#a80102] text-white flex items-center justify-center shadow-xl border-2 border-white/30 transition-all hover:scale-110 active:scale-95 cursor-pointer"
                                            title={btn.label}
                                        >
                                            <IconComp className="size-5" />
                                        </button>
                                    ) : (
                                        <a
                                            href={btn.href}
                                            target={btn.href.startsWith("http") ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="size-12 rounded-full bg-[#8D0102] hover:bg-[#a80102] text-white flex items-center justify-center shadow-xl border-2 border-white/30 transition-all hover:scale-110 active:scale-95"
                                            title={btn.label}
                                        >
                                            <IconComp className="size-5" />
                                        </a>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </AnimatePresence>

            {/* Main Trigger Button */}
            <motion.button
                onClick={() => {
                    if (isBotModalOpen) setIsBotModalOpen(false);
                    setIsOpen(!isOpen);
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: isOpen ? 1.05 : 1 }}
                className="relative size-16 flex items-center justify-center rounded-full focus:outline-none cursor-pointer"
                aria-label="Toggle contact menu"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="logo-open"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ rotate: 360, scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                                scale: { duration: 0.2 },
                            }}
                            className="size-full flex items-center justify-center"
                        >
                            <Image
                                src="/images/logo1.png"
                                alt="Company Logo"
                                width={56}
                                height={56}
                                className="object-contain drop-shadow-md"
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={currentItem.id}
                            initial={{ y: 15, opacity: 0, scale: 0.7 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -15, opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.4 }}
                            className="size-full flex items-center justify-center"
                        >
                            {currentItem.type === "logo" ? (
                                <div className="size-full flex items-center justify-center">
                                    <Image
                                        src="/images/logo1.png"
                                        alt="Company Logo"
                                        width={56}
                                        height={56}
                                        className="object-contain drop-shadow-md"
                                    />
                                </div>
                            ) : (
                                <div className="size-14 rounded-full bg-[#8D0102] text-white flex items-center justify-center shadow-xl border-2 border-white/30">
                                    {currentItem.icon && <currentItem.icon className="size-7" />}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}