import { motion } from "framer-motion";
import { useState } from "react";

const programs = [
  {
    num: "01",
    title: "Education",
    desc: "Immersive workshops on critical thinking, media literacy, and practical skills schools miss. Transforming learning from passive reception to active creation.",
    img: "/src/assets/images/education.png",
    alt: "Students engaged in hands-on learning",
    tag: "Flagship",
  },
  {
    num: "02",
    title: "Leadership",
    desc: "Intensive training for emerging voices. Public speaking, project management, and community organizing so the next generation leads with confidence.",
    img: "/src/assets/images/leadership.png",
    alt: "Youth speaking at event",
    tag: "Intensive",
  },
  {
    num: "03",
    title: "Community Outreach",
    desc: "Bridging youth and the wider community. Direct neighborhood engagement turning empathy into tangible local action.",
    img: "/src/assets/images/community.png",
    alt: "Outdoor community gathering",
    tag: "Ongoing",
  },
  {
    num: "04",
    title: "Volunteerism",
    desc: "Building a culture of service. High-impact volunteer opportunities that show young people the immediate power of their contribution.",
    img: "/src/assets/images/volunteer.png",
    alt: "Volunteers working together",
    tag: "Monthly",
  },
];

export default function Programs() {
  const [active, setActive] = useState(0);

  return (
    <section id="programs" className="h-full flex flex-col md:flex-row overflow-hidden">
      {/* Left — program list */}
      <div
        className="flex-[42] flex flex-col px-10 md:px-12 py-12 border-r"
        style={{ borderColor: "rgba(0,0,0,0.07)" }}
      >
        <div className="flex items-center justify-between mb-10">
          <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: "#1B4332" }}>
            Our Work
          </span>
          <span className="text-xs font-medium tracking-widest text-muted-foreground hidden md:block">04 / 09</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black tracking-tighter leading-tight mb-10"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#111827" }}
        >
          Four pillars<br />of action.
        </motion.h2>

        <div className="flex-1 flex flex-col justify-center space-y-1">
          {programs.map((p, i) => (
            <motion.button
              key={p.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className="group w-full text-left flex items-center gap-5 px-5 py-5 rounded-2xl transition-all duration-300 cursor-pointer border-0 bg-transparent"
              style={{
                backgroundColor: active === i ? "#1B4332" : "transparent",
              }}
              data-testid={`program-tab-${p.title.toLowerCase()}`}
            >
              <span
                className="text-xs font-black tabular-nums shrink-0"
                style={{ color: active === i ? "#E85D04" : "rgba(0,0,0,0.25)" }}
              >
                {p.num}
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className="text-lg font-bold leading-tight"
                  style={{ color: active === i ? "#fff" : "#111827" }}
                >
                  {p.title}
                </div>
                <div
                  className="text-sm mt-1 leading-relaxed overflow-hidden transition-all duration-300"
                  style={{
                    color: active === i ? "rgba(255,255,255,0.6)" : "transparent",
                    maxHeight: active === i ? "60px" : "0",
                  }}
                >
                  {p.desc}
                </div>
              </div>
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shrink-0"
                style={{
                  backgroundColor: active === i ? "rgba(232,93,4,0.2)" : "rgba(0,0,0,0.05)",
                  color: active === i ? "#E85D04" : "rgba(0,0,0,0.35)",
                }}
              >
                {p.tag}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <button
            className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all bg-transparent border-none p-0 cursor-pointer"
            style={{ color: "#1B4332" }}
            data-testid="programs-view-all"
          >
            View all programs <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Right — active program image */}
      <div className="flex-[58] relative overflow-hidden min-h-[50vh] md:min-h-0">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={p.img}
              alt={p.alt}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
            />
            <div className="absolute bottom-10 left-10 text-white">
              <div className="text-xs font-black tracking-[0.2em] uppercase opacity-60 mb-2">{p.tag}</div>
              <div className="text-4xl font-black">{p.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
