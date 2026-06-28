import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyCardProps {
  children: React.ReactNode;
  index: number;
}

const NAV_HEIGHT = 76;
const STACK_OFFSET = 12;

export default function StickyCard({ children, index }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // As this card gets buried, scale it down subtly
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.92]);

  const top = NAV_HEIGHT + index * STACK_OFFSET;
  const cardHeight = `calc(100vh - ${top}px)`;

  return (
    // wrapper is tall enough to give dwell time before next card covers this one
    <div
      ref={containerRef}
      style={{ minHeight: `calc(100vh + ${top}px)` }}
      className="relative"
    >
      <motion.div
        style={{
          position: "sticky",
          top,
          scale,
          transformOrigin: "top center",
          zIndex: index + 1,
          height: cardHeight,
        }}
        className="w-[90vw] max-w-[1600px] mx-auto border border-black/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.10)] rounded-[32px]"
      >
        <div className="w-full h-full rounded-[32px] overflow-hidden bg-[#FAFAF8] flex flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
