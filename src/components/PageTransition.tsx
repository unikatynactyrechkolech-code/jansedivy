"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CameraShutter({ phase }: { phase: "closing" | "opening" | "idle" }) {
  const bladeCount = 6;
  const size = 300;
  const center = size / 2;

  // Generate iris blades that form a hexagonal aperture
  const blades = Array.from({ length: bladeCount }).map((_, i) => {
    const angle = (i * 360) / bladeCount - 90;
    return { angle, index: i };
  });

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-warm-900/90 backdrop-blur-sm">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-32 h-32 md:w-40 md:h-40"
      >
        {blades.map(({ angle, index }) => {
          const rad = (angle * Math.PI) / 180;
          const nextRad = ((angle + 360 / bladeCount) * Math.PI) / 180;
          const outerR = 160;
          const closedR = 8;
          const openR = 140;

          const targetR = phase === "closing" ? closedR : openR;

          // Blade vertices
          const ox1 = center + outerR * Math.cos(rad);
          const oy1 = center + outerR * Math.sin(rad);
          const ox2 = center + outerR * Math.cos(nextRad);
          const oy2 = center + outerR * Math.sin(nextRad);

          return (
            <motion.path
              key={index}
              fill="#2D2620"
              stroke="#4A3F35"
              strokeWidth="0.5"
              initial={
                phase === "closing"
                  ? {
                      d: `M ${center + openR * Math.cos(rad + 0.15)} ${center + openR * Math.sin(rad + 0.15)} L ${ox1} ${oy1} L ${ox2} ${oy2} L ${center + openR * Math.cos(nextRad - 0.15)} ${center + openR * Math.sin(nextRad - 0.15)} Z`,
                    }
                  : {
                      d: `M ${center + closedR * Math.cos(rad + 0.15)} ${center + closedR * Math.sin(rad + 0.15)} L ${ox1} ${oy1} L ${ox2} ${oy2} L ${center + closedR * Math.cos(nextRad - 0.15)} ${center + closedR * Math.sin(nextRad - 0.15)} Z`,
                    }
              }
              animate={{
                d: `M ${center + targetR * Math.cos(rad + 0.15)} ${center + targetR * Math.sin(rad + 0.15)} L ${ox1} ${oy1} L ${ox2} ${oy2} L ${center + targetR * Math.cos(nextRad - 0.15)} ${center + targetR * Math.sin(nextRad - 0.15)} Z`,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: index * 0.02,
              }}
            />
          );
        })}

        {/* Center ring */}
        <motion.circle
          cx={center}
          cy={center}
          r={phase === "closing" ? 6 : 0}
          fill="none"
          stroke="#8B7355"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "closing" ? 0.8 : 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        />
      </svg>
    </div>
  );
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("idle");
  const [displayChildren, setDisplayChildren] = useState(children);
  const previousPathname = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setDisplayChildren(children);
      return;
    }

    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;

      // Close shutter
      setPhase("closing");

      // Swap content + open shutter
      const swapTimer = setTimeout(() => {
        setDisplayChildren(children);
        setPhase("opening");
      }, 500);

      // Reset
      const resetTimer = setTimeout(() => {
        setPhase("idle");
      }, 950);

      return () => {
        clearTimeout(swapTimer);
        clearTimeout(resetTimer);
      };
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <>
      {/* Shutter transition */}
      <AnimatePresence>
        {phase !== "idle" && <CameraShutter phase={phase} />}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
      >
        {displayChildren}
      </motion.div>
    </>
  );
}
