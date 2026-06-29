import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ to, duration = 2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let t0: number, raf: number;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / (duration * 1000), 1);
      setN(Math.floor(to * (p === 1 ? 1 : 1 - Math.pow(2, -10 * p))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

const stats = [
  { value: 2400, suffix: "+", label: "Youth Reached", desc: "Engaged in core programs since inception." },
  { value: 85,   suffix: "%", label: "Completion",    desc: "Finish the full 6-month intensive." },
  { value: 120,  suffix: "+", label: "Volunteers",    desc: "Mentors dedicating their time weekly." },
  { value: 15,   suffix: "",  label: "Communities",   desc: "Hosting active Naiki chapters." },
];

export default function Impact() {
  return (
    <section id="impact" className="lg:h-full flex flex-col px-6 sm:px-10 md:px-14 py-8 md:py-10 relative overflow-hidden" style={{ backgroundColor: "#FBF4EA" }}>
      {/* Ghost text */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 font-black leading-none"
        style={{ fontSize: "clamp(8rem,24vw,22rem)", color: "rgba(58,26,8,0.04)", lineHeight: 1 }}
      >
        DATA
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between mb-4 sm:mb-6">
        <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#8B5040" }}>Measurable Impact</span>
        <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block">05 / 09</span>
      </div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative font-black tracking-tighter leading-tight mb-6 sm:mb-8"
        style={{ fontSize: "clamp(1.75rem, 4.5vw, 4rem)", color: "#1C0E04", maxWidth: "600px" }}
      >
        Numbers that represent shifted trajectories.
      </motion.h2>

      {/* Stat cards */}
      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:flex-1">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.09 }}
            className="flex flex-col justify-between rounded-[18px] sm:rounded-[22px] p-5 sm:p-6 md:p-8"
            style={{
              backgroundColor: i === 0 ? "#3A1A08" : "rgba(58,26,8,0.06)",
              border: i === 0 ? "none" : "1px solid rgba(58,26,8,0.08)",
            }}
          >
            <div
              className="font-black tracking-tighter leading-none mb-2 sm:mb-3 flex items-baseline gap-0.5"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)", color: i === 0 ? "#C8956C" : "#3A1A08" }}
            >
              <Counter to={s.value} />
              <span>{s.suffix}</span>
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base mb-1" style={{ color: i === 0 ? "#fff" : "#1C0E04" }}>{s.label}</div>
              <div className="text-xs sm:text-sm leading-relaxed" style={{ color: i === 0 ? "rgba(200,149,108,0.6)" : "#9CA3AF" }}>{s.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
