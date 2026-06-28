import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // easeOutExpo
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(from + (to - from) * easePercentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Impact() {
  const stats = [
    { value: 2400, suffix: "+", label: "Youth Reached", desc: "Engaged in our core leadership and education programs since inception." },
    { value: 85, suffix: "%", label: "Completion Rate", desc: "Of participants finish the full 6-month intensive training." },
    { value: 120, suffix: "+", label: "Active Volunteers", desc: "Mentors and community leaders dedicating their time weekly." },
    { value: 15, suffix: "", label: "Communities", desc: "Distinct neighborhoods currently hosting active Naiki chapters." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="impact" className="py-40 px-8 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Measurable Impact</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Numbers that represent shifted trajectories and changed lives.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={item} className="flex flex-col">
              <div className="text-6xl md:text-7xl font-black text-primary mb-4 flex items-baseline">
                <Counter to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}