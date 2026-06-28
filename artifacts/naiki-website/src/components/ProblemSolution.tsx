import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section
      className="h-full flex flex-col justify-center px-8 md:px-16 py-12"
      style={{ backgroundColor: "#1B4332", color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h2 className="text-xs uppercase tracking-widest opacity-60 mb-4">The Reality</h2>
              <div className="text-[80px] md:text-[100px] font-black leading-none mb-3" style={{ color: "#E85D04" }}>2.4M</div>
              <p className="text-lg opacity-80 max-w-sm leading-relaxed">
                Youth in our target regions lack access to formal leadership and skill-building programs outside the standard curriculum.
              </p>
            </div>

            <div className="h-px w-full opacity-20" style={{ backgroundColor: "#fff" }} />

            <div>
              <div className="text-[64px] md:text-[80px] font-black leading-none mb-3" style={{ color: "#E85D04" }}>68%</div>
              <p className="text-lg opacity-80 max-w-sm leading-relaxed">
                Of community initiatives fail due to a lack of youth integration in the planning phases.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              The solution requires radical participation.
            </h2>
            <div className="space-y-5 text-lg opacity-85 leading-relaxed">
              <p>
                We can't solve systemic issues with temporary patches. The solution demands equipping the next generation with the exact tools they need to dismantle the barriers they face.
              </p>
              <p>
                Naiki bypasses traditional top-down intervention. We insert resources directly into youth networks. We train facilitators, fund youth-led projects, and create platforms where young voices command the room.
              </p>
              <p className="font-semibold opacity-100">
                When a young person realizes their voice has structural weight, everything changes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
