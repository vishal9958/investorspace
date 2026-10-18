"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}