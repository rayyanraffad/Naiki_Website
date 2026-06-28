import { motion } from "framer-motion";

const programs = [
  {
    title: "Education",
    desc: "Immersive workshops on critical thinking, media literacy, and practical skills. Transforming learning from passive reception to active creation.",
    img: "/src/assets/images/education.png",
    alt: "Students engaged in hands-on learning",
  },
  {
    title: "Leadership",
    desc: "Intensive training for emerging voices. Public speaking, project management, and community organizing to ensure confidence at every level.",
    img: "/src/assets/images/leadership.png",
    alt: "Youth speaking at event",
  },
  {
    title: "Community Outreach",
    desc: "Bridging youth and the wider community. Direct neighborhood engagement, turning empathy into tangible local action.",
    img: "/src/assets/images/community.png",
    alt: "Outdoor community gathering",
  },
  {
    title: "Volunteerism",
    desc: "Building a culture of service. High-impact volunteer opportunities that show young people the immediate power of their contribution.",
    img: "/src/assets/images/volunteer.png",
    alt: "Volunteers working together",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="h-full flex flex-col px-8 md:px-14 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">Our Work</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Four pillars of action.</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
        {programs.map((program, i) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-[24px] overflow-hidden cursor-pointer"
            style={{ backgroundColor: "#111827" }}
          >
            <img
              src={program.img}
              alt={program.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
                Program {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{program.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {program.desc}
              </p>
              <button
                className="mt-4 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white flex items-center gap-2 transition-colors bg-transparent border-none p-0 cursor-pointer"
                data-testid={`program-link-${program.title.toLowerCase()}`}
              >
                Learn More <span>&rarr;</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
