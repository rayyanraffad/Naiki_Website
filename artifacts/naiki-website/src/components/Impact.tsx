import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(from + (to - from) * eased));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 2400, suffix: "+", label: "Youth Reached", desc: "Engaged in core leadership and education programs since inception." },
  { value: 85, suffix: "%", label: "Completion Rate", desc: "Of participants finish the full 6-month intensive training." },
  { value: 120, suffix: "+", label: "Active Volunteers", desc: "Mentors and community leaders dedicating their time weekly." },
  { value: 15, suffix: "", label: "Communities", desc: "Distinct neighborhoods currently hosting active Naiki chapters." },
];

export default function Impact() {
  return (
    <section id="impact" className="h-full flex flex-col justify-center px-8 md:px-16 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">Measurable Impact</span>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mt-3">
            Numbers that represent shifted trajectories and changed lives.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              className="flex flex-col"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 flex items-baseline" style={{ color: "#1B4332" }}>
                <Counter to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
