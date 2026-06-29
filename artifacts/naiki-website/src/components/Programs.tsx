import { motion } from "framer-motion";
import { useState } from "react";

const programs = [
  {
    num: "01", title: "Education", tag: "Flagship",
    desc: "Immersive workshops on critical thinking, media literacy, and practical skills schools miss. Transforming learning from passive reception to active creation.",
    img: "/src/assets/images/education.png", alt: "Students in hands-on learning",
  },
  {
    num: "02", title: "Leadership", tag: "Intensive",
    desc: "Public speaking, project management, and community organising — ensuring the next generation leads with confidence at every level.",
    img: "/src/assets/images/leadership.png", alt: "Youth public speaking",
  },
  {
    num: "03", title: "Community Outreach", tag: "Ongoing",
    desc: "Direct neighbourhood engagement turning empathy into tangible local action, bridging youth and the wider community.",
    img: "/src/assets/images/community.png", alt: "Community gathering",
  },
  {
    num: "04", title: "Volunteerism", tag: "Monthly",
    desc: "High-impact volunteer opportunities showing young people the immediate power of their contribution and building a culture of service.",
    img: "/src/assets/images/volunteer.png", alt: "Volunteers collaborating",
  },
];

export default function Programs() {
  const [active, setActive] = useState(0);

  return (
    <section id="programs" className="lg:h-full flex flex-col lg:flex-row overflow-hidden">
      {/* ── Image panel — top on mobile, right on desktop ── */}
      <div className="order-1 lg:order-2 flex-[60] relative overflow-hidden" style={{ minHeight: "clamp(200px, 45vw, 500px)" }}>
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <img src={p.img} alt={p.alt} className="w-full h-full object-cover" />
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(58,26,8,0.75), transparent)" }}
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-white">
              <div className="text-[11px] font-black tracking-widest uppercase opacity-55 mb-1">{p.tag}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black">{p.title}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Tab list — below image on mobile, left on desktop ── */}
      <div
        className="order-2 lg:order-1 flex-[40] flex flex-col px-6 sm:px-10 md:px-12 py-6 sm:py-8 md:py-10 border-t lg:border-t-0 lg:border-r"
        style={{ borderColor: "rgba(58,26,8,0.08)", backgroundColor: "#FBF4EA" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#8B5040" }}>Our Work</span>
          <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block">04 / 09</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black tracking-tighter leading-[0.9] mb-5 sm:mb-8"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 4rem)", color: "#1C0E04" }}
        >
          Four pillars<br />of action.
        </motion.h2>

        {/* Tabs */}
        <div className="lg:flex-1 flex flex-col justify-center space-y-1">
          {programs.map((p, i) => (
            <motion.button
              key={p.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setActive(i)}
              className="w-full text-left flex items-center gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl transition-all duration-250 cursor-pointer border-0"
              style={{ backgroundColor: active === i ? "#3A1A08" : "transparent" }}
              data-testid={`program-tab-${p.title.toLowerCase().replace(/ /g, "-")}`}
            >
              <span
                className="text-xs font-black tabular-nums shrink-0 w-6"
                style={{ color: active === i ? "#C8956C" : "rgba(58,26,8,0.25)" }}
              >
                {p.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm sm:text-base font-bold" style={{ color: active === i ? "#fff" : "#1C0E04" }}>
                  {p.title}
                </div>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs sm:text-sm mt-1 leading-relaxed"
                    style={{ color: "rgba(200,149,108,0.75)" }}
                  >
                    {p.desc}
                  </motion.div>
                )}
              </div>
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full shrink-0"
                style={{
                  backgroundColor: active === i ? "rgba(200,149,108,0.18)" : "rgba(58,26,8,0.06)",
                  color: active === i ? "#C8956C" : "rgba(58,26,8,0.35)",
                }}
              >
                {p.tag}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Footer link */}
        <div className="pt-4 sm:pt-5 border-t mt-4" style={{ borderColor: "rgba(58,26,8,0.08)" }}>
          <button
            className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all bg-transparent border-none p-0 cursor-pointer"
            style={{ color: "#8B5040" }}
            data-testid="programs-view-all"
          >
            View all programs <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
