"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HeaderActionTrigger from "@/components/HeaderActionTrigger";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (SmoothScroll handles scroll-to-top)
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
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
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileOpen(false);

    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(0, { immediate: false });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      // For cross-page navigation to "/", let Next.js Link handle it naturally (scrolls to top)
      return;
    }

    if (pathname === href) {
      // Same page — scroll to top
      e.preventDefault();
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // Cross-page navigation: Next.js Link with scroll prop handles it
  };

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-500 ${scrolled && !mobileOpen ? "px-3 pt-3 sm:px-5" : "px-0"
          }`}
      >
        <nav
          aria-label="Main"
          className={`pointer-events-auto flex w-full items-center justify-between border transition-all duration-500 ${scrolled && !mobileOpen
            ? "rounded-2xl border-border/60 bg-white px-4 py-2.5 shadow-lg shadow-black/5 sm:px-5 backdrop-blur-md"
            : "rounded-none border-x-transparent border-t-transparent border-b-border/40 bg-white px-4 py-3 sm:px-6 lg:px-10 backdrop-blur-sm"
            } ${mobileOpen ? "bg-white" : ""}`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Image
              src="/images/logo.png"
              alt="Investor Space"
              width={130}
              height={44}
              className={`w-auto object-contain origin-left scale-[2.05] transition-all duration-500 ${scrolled ? "h-16" : "h-18"
                }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-0.5 p-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href))
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                    : "text-muted-foreground hover:bg-primary hover:text-white dark:text-slate-300 dark:hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Header Actions (Interactive Home Trigger + Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Interactive Trigger Button (YouTube-style Home Icon with 360 Rotation & Slide-Out Badges) */}
            <HeaderActionTrigger />

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative grid size-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="size-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="size-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            data-lenis-prevent
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto backdrop-blur-xl pt-28 pb-10 px-5 shadow-2xl lg:hidden flex flex-col bg-white dark:bg-[#090D16]"
          >
            <ul className="flex flex-col gap-1.5 max-w-sm mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href))
                      ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04, duration: 0.2 }}
                className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10"
              >
                <Link
                  href="/contact#callback"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95"
                >
                  Book a Site Visit
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}