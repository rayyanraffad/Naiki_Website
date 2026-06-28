import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-40 px-8 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative">
              <img 
                src="/src/assets/images/mission.png" 
                alt="Young mentor volunteering with youth students"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-xl max-w-xs border border-border hidden md:block">
              <p className="text-sm font-medium text-foreground">"When we invest in youth, we invest in the architecture of tomorrow."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Why Naiki exists.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                We believe that potential is universally distributed, but opportunity is not. Naiki was born from a simple but radical idea: what happens when we give young people the tools, the space, and the platform to lead their own narratives?
              </p>
              <p>
                Too often, youth are treated as the subjects of community development rather than its architects. We're flipping the model. Through immersive education, direct mentorship, and community-led action, we're building a generation of leaders who aren't just waiting for the future — they're actively designing it.
              </p>
              <p className="font-medium text-foreground pt-4">
                This isn't charity. It's an investment in collective potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}