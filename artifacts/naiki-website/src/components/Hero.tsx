import { motion } from "framer-motion";

const words = ["Breaking", "barriers", "with"];

export default function Hero() {
  return (
    <section className="lg:h-full flex flex-col lg:flex-row overflow-hidden min-h-[80vh]">
      {/* ── Left: dark panel ── */}
      <div
        className="flex-[52] flex flex-col justify-between px-6 sm:px-10 md:px-14 py-8 md:py-10 relative overflow-hidden"
        style={{ backgroundColor: "#3A1A08" }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-0 right-0 font-black leading-none"
          style={{ fontSize: "clamp(10rem,28vw,24rem)", color: "rgba(200,149,108,0.07)", lineHeight: 1 }}
        >
          NK
        </div>

        {/* Top bar */}
        <div className="relative flex items-center justify-between">
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#C8956C" }}>
            Naiki — Est. 2018
          </span>
          <span className="text-[11px] font-medium tracking-widest hidden md:block" style={{ color: "rgba(200,149,108,0.45)" }}>
            01 / 09
          </span>
        </div>

        {/* Headline */}
        <div className="relative flex-1 flex flex-col justify-center py-6">
          <div className="overflow-hidden">
            {words.map((word, i) => (
              <motion.div
                key={word}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-black tracking-tighter leading-[0.87] text-white"
                style={{ fontSize: "clamp(2.6rem, 8vw, 7rem)" }}
              >
                {word}
              </motion.div>
            ))}
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-tighter leading-[0.87]"
              style={{ fontSize: "clamp(2.6rem, 8vw, 7rem)", color: "#C8956C" }}
            >
              education.
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Empowering youth with voice, leadership &amp; skills to build tomorrow's communities.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="relative flex flex-wrap gap-3"
        >
          <button
            className="inline-flex items-center justify-center rounded-full font-bold text-sm text-white px-7 h-11 sm:h-12 border-0 cursor-pointer transition-colors"
            style={{ backgroundColor: "#C8956C" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#B07D54")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C8956C")}
            data-testid="hero-donate-btn"
          >
            Donate Now
          </button>
          <button
            className="inline-flex items-center justify-center rounded-full font-bold text-sm px-7 h-11 sm:h-12 border cursor-pointer bg-transparent"
            style={{ color: "rgba(255,255,255,0.78)", borderColor: "rgba(255,255,255,0.22)" }}
            data-testid="hero-involved-btn"
          >
            Get Involved
          </button>
        </motion.div>
      </div>

      {/* ── Right: full-bleed image ── */}
      <div className="flex-[48] relative overflow-hidden min-h-[40vw] lg:min-h-0">
        <motion.img
          src="/src/assets/images/hero.png"
          alt="Youth students in community classroom"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(58,26,8,0.55), transparent)" }}
        />
        {/* Floating stat chip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl"
          style={{ backgroundColor: "rgba(251,244,234,0.95)", backdropFilter: "blur(8px)" }}
        >
          <div className="text-xl sm:text-2xl font-black" style={{ color: "#3A1A08" }}>2,400+</div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mt-0.5" style={{ color: "#8B5040" }}>
            Youth Reached
          </div>
        </motion.div>
      </div>
    </section>
  );
}
