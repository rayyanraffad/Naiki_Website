import { motion } from "framer-motion";

const programs = [
  {
    title: "Education",
    desc: "Immersive workshops focused on critical thinking, media literacy, and practical skills that schools often miss. We transform learning from passive reception to active creation.",
    img: "/src/assets/images/education.png",
    alt: "Students engaged in hands-on learning",
  },
  {
    title: "Leadership",
    desc: "Intensive training for emerging voices. We teach public speaking, project management, and community organizing to ensure the next generation can lead with confidence.",
    img: "/src/assets/images/leadership.png",
    alt: "Youth speaking at event",
  },
  {
    title: "Community Outreach",
    desc: "Bridging the gap between youth and the wider community. Our programs facilitate direct neighborhood engagement, turning empathy into tangible local action.",
    img: "/src/assets/images/community.png",
    alt: "Outdoor community gathering",
  },
  {
    title: "Volunteerism",
    desc: "Building a culture of service. We organize continuous, high-impact volunteer opportunities that show young people the immediate power of their contribution.",
    img: "/src/assets/images/volunteer.png",
    alt: "Volunteers working together",
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Four pillars of action designed to create self-sustaining cycles of empowerment and community transformation.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, i) => (
            <motion.div 
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group bg-white rounded-[32px] p-8 md:p-12 border border-border shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`flex flex-col gap-12 lg:items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={program.img} 
                      alt={program.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Program {i + 1}</span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">{program.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {program.desc}
                  </p>
                  <div>
                    <button className="text-primary font-bold uppercase tracking-wide text-sm flex items-center gap-2 hover:gap-4 transition-all">
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}