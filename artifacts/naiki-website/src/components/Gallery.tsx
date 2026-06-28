import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/src/assets/images/gallery1.png",   alt: "Classroom learning", span: "row-span-2" },
  { src: "/src/assets/images/gallery2.png",   alt: "Community gathering", span: "row-span-1" },
  { src: "/src/assets/images/hero.png",       alt: "Youth workshop", span: "row-span-1" },
  { src: "/src/assets/images/mission.png",    alt: "Mentoring session", span: "row-span-2" },
  { src: "/src/assets/images/education.png",  alt: "Workshop", span: "row-span-1" },
  { src: "/src/assets/images/leadership.png", alt: "Leadership training", span: "row-span-1" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="h-full flex flex-col px-10 md:px-12 py-10 overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
      {/* Header */}
      <div className="flex items-end justify-between mb-6 shrink-0">
        <div>
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#1B4332" }}>Gallery</span>
          <h2 className="font-black tracking-tighter leading-tight mt-1" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", color: "#111827" }}>
            The community<br />in action.
          </h2>
        </div>
        <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block pb-1">07 / 09</span>
      </div>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-3 min-h-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className={`group relative cursor-pointer rounded-[18px] overflow-hidden ${img.span}`}
            onClick={() => setSelected(img.src)}
            data-testid={`gallery-img-${i}`}
          >
            <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/18 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/92 p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors border-0 cursor-pointer bg-transparent"
              onClick={e => { e.stopPropagation(); setSelected(null); }}
              data-testid="gallery-close"
            >
              <X size={26} />
            </button>
            <motion.img
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              src={selected}
              alt="Gallery expanded"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
