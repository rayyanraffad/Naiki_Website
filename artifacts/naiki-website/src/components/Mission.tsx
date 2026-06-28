import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="h-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left – image with gradient + pull quote */}
      <div className="flex-[42] relative overflow-hidden min-h-[220px]">
        <img
          src="/src/assets/images/mission.png"
          alt="Mentor working with youth"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(27,67,50,0.88) 40%, rgba(0,0,0,0.15) 100%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 p-10 text-white"
        >
          <div className="text-3xl font-black mb-1" style={{ color: "#E85D04" }}>"</div>
          <p className="text-lg md:text-xl font-semibold leading-snug">
            When we invest in youth, we invest in the architecture of tomorrow.
          </p>
        </motion.div>
      </div>

      {/* Right – copy */}
      <div className="flex-[58] flex flex-col px-10 md:px-14 py-10 relative overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
        {/* Ghost number */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 top-2 font-black leading-none"
          style={{ fontSize: "clamp(10rem,22vw,18rem)", color: "rgba(27,67,50,0.04)", lineHeight: 1 }}
        >
          01
        </div>

        {/* Top bar */}
        <div className="relative flex items-center justify-between mb-6">
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#1B4332" }}>
            Our Mission
          </span>
          <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block">02 / 09</span>
        </div>

        {/* Headline + copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex-1 flex flex-col justify-center"
        >
          <h2
            className="font-black tracking-tighter leading-[0.88] mb-8"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)", color: "#111827" }}
          >
            Why Naiki<br />exists.
          </h2>
          <div className="space-y-4 text-base md:text-[17px] leading-relaxed" style={{ color: "#6B7280", maxWidth: "520px" }}>
            <p>
              We believe that potential is universally distributed — but opportunity is not. Naiki was born from a radical idea: what happens when we give young people the tools, the space, and the platform to lead their own narratives?
            </p>
            <p>
              Through immersive education, direct mentorship, and community-led action, we're building a generation who aren't just waiting for the future — they're actively designing it.
            </p>
          </div>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex gap-10 pt-6 border-t"
          style={{ borderColor: "rgba(0,0,0,0.07)" }}
        >
          {[["Founded", "2018"], ["Core Programs", "4"], ["Global Reach", "Yes"]].map(([label, val]) => (
            <div key={label}>
              <div className="text-xl font-black" style={{ color: "#1B4332" }}>{val}</div>
              <div className="text-[11px] font-bold tracking-widest uppercase mt-0.5" style={{ color: "#9CA3AF" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
