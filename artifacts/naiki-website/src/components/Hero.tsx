import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      className="h-full flex flex-col justify-center px-8 md:px-16 py-12 overflow-hidden relative"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center h-full">
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70 mb-6"
          >
            Breaking Barriers · Empowering Youth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-6xl md:text-[86px] lg:text-[108px] font-black leading-[0.88] tracking-tighter text-foreground mb-8"
          >
            Breaking<br />barriers<br />with<br />education.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Empowering youth with voice, leadership, and skills. Building tomorrow's leaders through community action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-base font-bold"
              style={{ backgroundColor: "#E85D04", color: "#fff", border: "none" }}
              data-testid="hero-donate-btn"
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-10 text-base font-bold border-2"
              data-testid="hero-involved-btn"
            >
              Get Involved
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 h-full min-h-[420px] relative">
          <motion.div style={{ y }} className="absolute inset-0 rounded-[24px] overflow-hidden">
            <img
              src="/src/assets/images/hero.png"
              alt="Diverse youth students in community classroom"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
