import { motion } from "framer-motion";

interface StickyCardProps {
  children: React.ReactNode;
  index: number;
}

export default function StickyCard({ children }: StickyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-[92vw] max-w-[1600px] mx-auto mb-4 border border-black/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.09)] rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden flex flex-col lg:h-[calc(100vh-100px)]"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {children}
    </motion.div>
  );
}
