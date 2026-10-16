"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileOpen(false);

    if (href === "/") {
      e.preventDefault();

      if (pathname === "/") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        router.push("/");
      }

      return;
    }

    if (pathname === href) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-500 ${scrolled ? "px-3 pt-3 sm:px-5" : "px-0"
          }`}
      >
        <nav
          aria-label="Main"
          className={`pointer-events-auto flex w-full items-center justify-between border transition-all duration-500 ${scrolled
            ? "rounded-2xl border-border/60 bg-white/96 px-4 py-2.5 shadow-lg shadow-black/5 sm:px-5 backdrop-blur-md"
            : "rounded-none border-x-transparent border-t-transparent border-b-border/40 bg-white/96 px-4 py-3 sm:px-6 lg:px-10 backdrop-blur-sm"
            }`}
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
              className={`w-auto object-contain origin-left scale-[1.7] transition-all duration-500 ${scrolled ? "h-16" : "h-18"
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
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact#callback"
              className="inline-flex min-h-10 items-center rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-red active:scale-95"
            >
              Book a Site Visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative grid size-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-black/5 active:bg-black/10 lg:hidden"
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
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-0 z-40 overflow-y-auto bg-white/98 backdrop-blur-lg pt-20 pb-8 px-5 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href))
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-black/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="mt-4 pt-4 border-t border-border"
              >
                <Link
                  href="/contact#callback"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95"
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