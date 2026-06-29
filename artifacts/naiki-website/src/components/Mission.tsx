import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="lg:h-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left – image with gradient + pull quote */}
      <div className="flex-[42] relative overflow-hidden" style={{ minHeight: "clamp(200px, 40vw, 480px)" }}>
        <img
          src="/src/assets/images/mission.png"
          alt="Mentor working with youth"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(58,26,8,0.90) 40%, rgba(0,0,0,0.15) 100%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white"
        >
          <div className="text-3xl font-black mb-1" style={{ color: "#C8956C" }}>"</div>
          <p className="text-base sm:text-lg md:text-xl font-semibold leading-snug">
            When we invest in youth, we invest in the architecture of tomorrow.
          </p>
        </motion.div>
      </div>

      {/* Right – copy */}
      <div className="flex-[58] flex flex-col px-6 sm:px-10 md:px-14 py-8 md:py-10 relative overflow-hidden" style={{ backgroundColor: "#FBF4EA" }}>
        {/* Ghost number */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 top-2 font-black leading-none"
          style={{ fontSize: "clamp(8rem,22vw,18rem)", color: "rgba(58,26,8,0.05)", lineHeight: 1 }}
        >
          01
        </div>

        {/* Top bar */}
        <div className="relative flex items-center justify-between mb-6">
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#8B5040" }}>
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
            className="font-black tracking-tighter leading-[0.88] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)", color: "#1C0E04" }}
          >
            Why Naiki<br />exists.
          </h2>
          <div className="space-y-4 text-sm sm:text-base md:text-[17px] leading-relaxed" style={{ color: "#7A6252", maxWidth: "520px" }}>
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
          className="relative flex flex-wrap gap-6 sm:gap-10 pt-6 border-t mt-6"
          style={{ borderColor: "rgba(58,26,8,0.1)" }}
        >
          {[["Founded", "2018"], ["Core Programs", "4"], ["Global Reach", "Yes"]].map(([label, val]) => (
            <div key={label}>
              <div className="text-xl font-black" style={{ color: "#3A1A08" }}>{val}</div>
              <div className="text-[11px] font-bold tracking-widest uppercase mt-0.5" style={{ color: "#9CA3AF" }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
