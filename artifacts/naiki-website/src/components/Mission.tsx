import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="h-full flex flex-col md:flex-row overflow-hidden relative">
      {/* Left — image with editorial overlay */}
      <div className="flex-[45] relative overflow-hidden min-h-[40vh] md:min-h-0">
        <img
          src="/src/assets/images/mission.png"
          alt="Young mentor volunteering with youth students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(27,67,50,0.85), transparent)" }}
        />
        {/* Pull quote overlaid on image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 left-0 right-0 p-10 md:p-12 text-white"
        >
          <div className="text-4xl md:text-5xl font-black" style={{ color: "#E85D04" }}>"</div>
          <p className="text-xl md:text-2xl font-bold leading-tight mt-1">
            When we invest in youth, we invest in the architecture of tomorrow.
          </p>
        </motion.div>
      </div>

      {/* Right — editorial copy */}
      <div
        className="flex-[55] flex flex-col justify-between px-10 md:px-14 py-12 relative overflow-hidden"
        style={{ backgroundColor: "#FAFAF8" }}
      >
        {/* Ghost section number */}
        <div
          className="absolute right-6 top-4 text-[180px] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(27,67,50,0.04)" }}
        >
          01
        </div>

        <div className="flex items-center justify-between relative">
          <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: "#1B4332" }}>
            Our Mission
          </span>
          <span className="text-xs font-medium tracking-widest text-muted-foreground hidden md:block">02 / 09</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center py-8 relative"
        >
          <h2
            className="font-black tracking-tighter leading-[0.88] mb-10"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", color: "#111827" }}
          >
            Why Naiki<br />exists.
          </h2>

          <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "#6B7280" }}>
            <p>
              We believe that potential is universally distributed, but opportunity is not. Naiki was born from a radical idea: what happens when we give young people the tools, the space, and the platform to lead their own narratives?
            </p>
            <p>
              Too often, youth are treated as subjects of community development rather than its architects. Through immersive education, direct mentorship, and community-led action, we're building a generation who aren't just waiting for the future — they're actively designing it.
            </p>
          </div>
        </motion.div>

        {/* Bottom stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-10 pt-6 border-t relative"
          style={{ borderColor: "rgba(0,0,0,0.07)" }}
        >
          {[["Founded", "2018"], ["Programs", "4 Core"], ["Reach", "Global"]].map(([label, value]) => (
            <div key={label}>
              <div className="text-xl font-black" style={{ color: "#1B4332" }}>{value}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
