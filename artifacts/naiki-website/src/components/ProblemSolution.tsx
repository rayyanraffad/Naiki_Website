import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section
      className="h-full flex flex-col px-10 md:px-14 py-10 relative overflow-hidden"
      style={{ backgroundColor: "#1B4332" }}
    >
      {/* Ghost background number */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-end pr-8 font-black leading-none"
        style={{ fontSize: "clamp(14rem,38vw,32rem)", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
      >
        68
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between mb-4">
        <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#E85D04" }}>
          The Reality
        </span>
        <span className="text-[11px] font-medium tracking-widest hidden md:block" style={{ color: "rgba(255,255,255,0.28)" }}>
          03 / 09
        </span>
      </div>

      {/* Two big stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex-1 flex flex-col md:flex-row gap-10 md:gap-0 items-start justify-center"
      >
        {/* Stat 1 */}
        <div className="flex-1 flex flex-col justify-center md:border-r md:pr-12" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div
            className="font-black tracking-tighter leading-none mb-4"
            style={{ fontSize: "clamp(5rem, 14vw, 13rem)", color: "#E85D04" }}
          >
            2.4M
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Youth in our target regions lack access to formal leadership and skill-building programs outside the standard curriculum.
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex-1 flex flex-col justify-center md:pl-12">
          <div
            className="font-black tracking-tighter leading-none mb-4"
            style={{ fontSize: "clamp(5rem, 14vw, 13rem)", color: "rgba(255,255,255,0.18)" }}
          >
            68%
          </div>
          <p className="text-base md:text-lg leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Of community initiatives fail due to a lack of youth integration and perspective in the planning phases.
          </p>
        </div>
      </motion.div>

      {/* Bottom thesis */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative pt-6 border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <p
          className="font-semibold leading-snug max-w-3xl"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)", color: "rgba(255,255,255,0.82)" }}
        >
          The solution requires radical participation — equipping the next generation with the exact tools to dismantle the barriers they face.
        </p>
      </motion.div>
    </section>
  );
}
