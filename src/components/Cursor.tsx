"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 40 });

  // Dot follows faster
  const dotX = useSpring(0, { stiffness: 900, damping: 45 });
  const dotY = useSpring(0, { stiffness: 900, damping: 45 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 18);
      mouseY.set(e.clientY - 18);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      if (!visible) setVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, label");
      setHovered(!!isInteractive);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [visible, mouseX, mouseY, dotX, dotY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[99998] rounded-full border-2 border-[#8D0102]"
        style={{
          x: mouseX,
          y: mouseY,
          width: 36,
          height: 36,
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.6 : clicking ? 0.85 : 1,
          backgroundColor: hovered ? "rgba(141,1,2,0.08)" : "transparent",
          transition: "opacity 0.2s, scale 0.15s, background-color 0.15s",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[99999] rounded-full bg-[#8D0102]"
        style={{
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.5 : 1,
          transition: "opacity 0.2s, scale 0.1s",
        }}
      />
    </>
  );
}
