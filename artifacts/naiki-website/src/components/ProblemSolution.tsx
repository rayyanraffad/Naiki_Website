import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section
      className="h-full flex flex-col justify-between px-10 md:px-14 py-12 relative overflow-hidden"
      style={{ backgroundColor: "#1B4332" }}
    >
      {/* Decorative large ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        style={{ color: "rgba(255,255,255,0.025)" }}
      >
        <span className="text-[40vw] font-black leading-none">68</span>
      </div>

      <div className="flex items-center justify-between relative">
        <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: "#E85D04" }}>
          The Reality
        </span>
        <span className="text-xs font-medium tracking-widest hidden md:block" style={{ color: "rgba(255,255,255,0.3)" }}>
          03 / 09
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center py-8 relative"
      >
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(5rem, 18vw, 16rem)", color: "#E85D04" }}
            >
              2.4M
            </div>
            <p className="text-xl mt-4 max-w-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Youth in our target regions lack access to formal leadership programs outside the standard curriculum.
            </p>
          </div>
          <div>
            <div
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(5rem, 18vw, 16rem)", color: "rgba(255,255,255,0.15)" }}
            >
              68%
            </div>
            <p className="text-xl mt-4 max-w-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Of community initiatives fail due to a lack of youth integration in the planning phases.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="h-px w-full mb-8" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
        <h2
          className="font-bold leading-tight max-w-3xl"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", color: "rgba(255,255,255,0.9)" }}
        >
          The solution requires radical participation — equipping the next generation with the tools to dismantle the barriers they face.
        </h2>
      </motion.div>
    </section>
  );
}
