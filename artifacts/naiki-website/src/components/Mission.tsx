import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="h-full flex flex-col justify-center px-8 md:px-16 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[28px] overflow-hidden relative">
              <img
                src="/src/assets/images/mission.png"
                alt="Young mentor volunteering with youth students"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1B4332] text-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-sm font-medium leading-relaxed opacity-90">
                "When we invest in youth, we invest in the architecture of tomorrow."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70 mb-6">Our Mission</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Why Naiki<br />exists.
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe that potential is universally distributed, but opportunity is not. Naiki was born from a radical idea: what happens when we give young people the tools, the space, and the platform to lead their own narratives?
              </p>
              <p>
                Too often, youth are treated as subjects of community development rather than its architects. Through immersive education, direct mentorship, and community-led action, we're building a generation who aren't just waiting for the future — they're actively designing it.
              </p>
              <p className="font-semibold text-foreground">
                This isn't charity. It's an investment in collective potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
