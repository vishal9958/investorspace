"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
  const [scrollPct, setScrollPct] = useState(0);
  const smoothPct = useSpring(scrollPct, { stiffness: 180, damping: 28 });
  const scaleX = useTransform(smoothPct, [0, 100], [0, 1]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #8D0102 0%, #E52B20 55%, #F3C649 100%)",
        transformOrigin: "left",
      }}
    />
  );
}
