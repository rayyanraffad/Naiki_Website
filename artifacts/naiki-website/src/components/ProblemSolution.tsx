import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section className="py-40 px-8 md:px-16 bg-primary text-primary-foreground rounded-[32px] mx-4 lg:mx-8 mb-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-sm uppercase tracking-widest opacity-80 mb-4">The Reality</h2>
              <div className="text-[120px] font-black leading-none mb-2">2.4M</div>
              <p className="text-xl opacity-90 max-w-sm">
                Youth in our target regions lack access to formal leadership and skill-building programs outside the standard curriculum.
              </p>
            </div>
            
            <div className="h-px w-full bg-white/20" />
            
            <div>
              <div className="text-[80px] font-black leading-none mb-2">68%</div>
              <p className="text-xl opacity-90 max-w-sm">
                Of community initiatives fail due to a lack of youth integration and perspective in the planning phases.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 lg:pl-16 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              The solution requires radical participation.
            </h2>
            <div className="space-y-6 text-xl opacity-90 leading-relaxed font-serif">
              <p>
                We can't solve systemic issues with temporary patches. The solution demands that we equip the next generation with the exact tools they need to dismantle the barriers they face.
              </p>
              <p>
                Naiki's approach bypasses traditional top-down intervention. Instead, we insert resources directly into youth networks. We train facilitators, we fund youth-led projects, and we create platforms where young voices command the room.
              </p>
              <p>
                When a young person realizes their voice has structural weight, everything changes. The community doesn't just grow; it evolves.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}