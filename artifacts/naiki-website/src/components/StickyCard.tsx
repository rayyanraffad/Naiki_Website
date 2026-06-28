import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyCardProps {
  children: React.ReactNode;
  index: number;
}

const NAV_HEIGHT = 76;
const STACK_OFFSET = 14;

export default function StickyCard({ children, index }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0.92]);
  const borderRadius = useTransform(scrollYProgress, [0.4, 1], [32, 40]);

  const top = NAV_HEIGHT + index * STACK_OFFSET;

  return (
    <div
      ref={containerRef}
      style={{ minHeight: "100vh" }}
      className="relative"
    >
      <motion.div
        style={{
          position: "sticky",
          top,
          scale,
          borderRadius,
          transformOrigin: "top center",
          zIndex: index + 1,
        }}
        className="w-[90vw] max-w-[1600px] mx-auto border border-black/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.09)]"
      >
        <div
          style={{ borderRadius: "inherit" }}
          className="bg-[#FAFAF8] overflow-hidden"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
