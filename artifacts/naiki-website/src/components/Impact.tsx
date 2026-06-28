import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let frame: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / (duration * 1000), 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.floor(from + (to - from) * eased));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 2400, suffix: "+", label: "Youth Reached", desc: "Engaged in core programs since inception." },
  { value: 85, suffix: "%", label: "Completion", desc: "Finish the full 6-month training." },
  { value: 120, suffix: "+", label: "Volunteers", desc: "Mentors dedicating time weekly." },
  { value: 15, suffix: "", label: "Communities", desc: "Hosting active Naiki chapters." },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="h-full flex flex-col px-10 md:px-14 py-12 relative overflow-hidden"
    >
      {/* Ghost word decoration */}
      <div
        className="absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(27,67,50,0.04)", fontSize: "30vw" }}
      >
        DATA
      </div>

      <div className="flex items-center justify-between relative">
        <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: "#1B4332" }}>
          Measurable Impact
        </span>
        <span className="text-xs font-medium tracking-widest text-muted-foreground hidden md:block">05 / 09</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 mb-12 relative"
      >
        <h2
          className="font-black leading-tight tracking-tight max-w-2xl"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", color: "#111827" }}
        >
          Numbers that represent shifted trajectories.
        </h2>
      </motion.div>

      <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col justify-between rounded-[24px] p-8 border"
            style={{ borderColor: "rgba(0,0,0,0.07)", backgroundColor: i === 0 ? "#1B4332" : "#fff" }}
          >
            <div
              className="text-5xl md:text-6xl xl:text-7xl font-black leading-none tracking-tighter mb-4 flex items-baseline gap-1"
              style={{ color: i === 0 ? "#E85D04" : "#1B4332" }}
            >
              <Counter to={stat.value} />
              <span>{stat.suffix}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ color: i === 0 ? "#fff" : "#111827" }}>
                {stat.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: i === 0 ? "rgba(255,255,255,0.55)" : "#9CA3AF" }}>
                {stat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
