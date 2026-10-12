// ─── Shared animation variants ────────────────────────────────────
// Import in any component: import { fadeUp, scaleUp, slideLeft, slideRight, staggerContainer, cardReveal } from "@/lib/animations"

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Cards: rises + very slight scale — feels "lifted off the page"
export const cardReveal = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// From left (odd service tracks)
export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// From right (even service tracks)
export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Parent: auto-staggers children
export const staggerContainer = (stagger = 0.1, delayChildren = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

// Label/badge pop in
export const badgePop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
};

// Section heading blur-up (already used in hero)
export const blurUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
