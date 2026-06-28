import { motion } from "framer-motion";

interface StickyCardProps {
  children: React.ReactNode;
  index: number;
}

export default function StickyCard({ children }: StickyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[90vw] max-w-[1600px] mx-auto mb-4 min-h-screen border border-black/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.09)] rounded-[32px] overflow-hidden bg-[#FAFAF8] flex flex-col"
    >
      {children}
    </motion.div>
  );
}
