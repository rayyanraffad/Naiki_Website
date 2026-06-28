import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const words = ["Breaking", "barriers", "with"];

export default function Hero() {
  return (
    <section className="h-full flex flex-col md:flex-row overflow-hidden">
      {/* Left — forest green editorial panel */}
      <div
        className="flex-[55] flex flex-col justify-between px-10 md:px-14 py-12 relative overflow-hidden"
        style={{ backgroundColor: "#1B4332" }}
      >
        {/* Decorative large ghost text */}
        <div
          className="absolute -bottom-8 -left-4 text-[240px] md:text-[320px] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.03)" }}
        >
          NK
        </div>

        {/* Top label row */}
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-black tracking-[0.25em] uppercase"
            style={{ color: "#E85D04" }}
          >
            Naiki — Est. 2018
          </motion.span>
          <span className="text-xs font-medium tracking-widest opacity-30 text-white hidden md:block">
            01 / 09
          </span>
        </div>

        {/* Main headline */}
        <div className="flex-1 flex flex-col justify-center py-8">
          <div className="overflow-hidden mb-2">
            {words.map((word, i) => (
              <motion.div
                key={word}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-black leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
              >
                {word}
              </motion.div>
            ))}
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)", color: "#E85D04" }}
            >
              education.
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg max-w-sm mt-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Empowering youth with voice, leadership, and skills. Building tomorrow's leaders through community action.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-3"
        >
          <Button
            size="lg"
            className="rounded-full h-13 px-9 font-bold text-sm"
            style={{ backgroundColor: "#E85D04", color: "#fff", border: "none" }}
            data-testid="hero-donate-btn"
          >
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full h-13 px-9 font-bold text-sm border"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}
            data-testid="hero-involved-btn"
          >
            Get Involved
          </Button>
        </motion.div>
      </div>

      {/* Right — full-bleed image */}
      <motion.div
        className="flex-[45] relative overflow-hidden min-h-[50vh] md:min-h-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <img
          src="/src/assets/images/hero.png"
          alt="Diverse youth students in community classroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle vignette on left edge to blend into green panel */}
        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(27,67,50,0.5), transparent)" }}
        />
        {/* Floating stat badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-10 left-8 bg-white rounded-2xl px-6 py-4 shadow-2xl"
        >
          <div className="text-3xl font-black" style={{ color: "#1B4332" }}>2,400+</div>
          <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mt-0.5">Youth Reached</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
