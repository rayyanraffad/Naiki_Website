import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section
      className="lg:h-full flex flex-col px-6 sm:px-10 md:px-14 py-8 md:py-10 relative overflow-hidden"
      style={{ backgroundColor: "#3A1A08" }}
    >
      {/* Ghost background number */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-end pr-8 font-black leading-none"
        style={{ fontSize: "clamp(10rem,38vw,32rem)", color: "rgba(200,149,108,0.06)", lineHeight: 1 }}
      >
        68
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between mb-4">
        <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#C8956C" }}>
          The Reality
        </span>
        <span className="text-[11px] font-medium tracking-widest hidden md:block" style={{ color: "rgba(200,149,108,0.4)" }}>
          03 / 09
        </span>
      </div>

      {/* Two big stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex-1 flex flex-col sm:flex-row gap-8 sm:gap-0 items-start justify-center py-6"
      >
        {/* Stat 1 */}
        <div className="flex-1 flex flex-col justify-center sm:border-r sm:pr-10 md:pr-12" style={{ borderColor: "rgba(200,149,108,0.15)" }}>
          <div
            className="font-black tracking-tighter leading-none mb-3 sm:mb-4"
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)", color: "#C8956C" }}
          >
            2.4M
          </div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Youth in our target regions lack access to formal leadership and skill-building programs outside the standard curriculum.
          </p>
        </div>

        {/* Divider on mobile */}
        <div className="sm:hidden w-full border-t" style={{ borderColor: "rgba(200,149,108,0.15)" }} />

        {/* Stat 2 */}
        <div className="flex-1 flex flex-col justify-center sm:pl-10 md:pl-12">
          <div
            className="font-black tracking-tighter leading-none mb-3 sm:mb-4"
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)", color: "rgba(255,255,255,0.12)" }}
          >
            68%
          </div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
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
        style={{ borderColor: "rgba(200,149,108,0.15)" }}
      >
        <p
          className="font-semibold leading-snug max-w-3xl"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.75rem)", color: "rgba(255,255,255,0.78)" }}
        >
          The solution requires radical participation — equipping the next generation with the exact tools to dismantle the barriers they face.
        </p>
      </motion.div>
    </section>
  );
}
