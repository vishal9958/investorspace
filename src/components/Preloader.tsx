"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 700);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <>
          <motion.div
            className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ ease: "linear", duration: 0.1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          />

          <motion.div
            className="fixed inset-0 z-[100] flex flex-col px-6"
            style={{
              background:
                "radial-gradient(ellipse at center, #ffffff 0%, #f3f2f1 65%, #e9e8e6 100%)",
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/logo.png"
                  alt=""
                  aria-hidden
                  width={300}
                  height={80}
                  className="h-56 w-auto opacity-[0.15] grayscale sm:h-64 lg:h-72"
                  priority
                />

                <div
                  className="absolute inset-0"
                  style={{
                    WebkitMaskImage: `linear-gradient(to right, black ${progress}%, transparent ${progress}%)`,
                    maskImage: `linear-gradient(to right, black ${progress}%, transparent ${progress}%)`,
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Investor Space — Real Estate Promoters"
                    width={300}
                    height={80}
                    className="h-56 w-auto sm:h-64 lg:h-72"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <motion.p
              className="pb-5 text-center text-[11px] font-semibold tracking-[0.25em] text-black/45 uppercase"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              YOUR INVESTMENT OUR RESPONSIBILITY
            </motion.p>

            <div className="relative -mx-6 h-[3px] w-[calc(100%+3rem)] overflow-hidden bg-black/10">
              <div
                className="h-full transition-[width] duration-150 ease-linear bg-black/70"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}