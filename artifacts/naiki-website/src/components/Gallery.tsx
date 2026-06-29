import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/src/assets/images/gallery1.png",   alt: "Classroom learning" },
  { src: "/src/assets/images/gallery2.png",   alt: "Community gathering" },
  { src: "/src/assets/images/hero.png",       alt: "Youth workshop" },
  { src: "/src/assets/images/mission.png",    alt: "Mentoring session" },
  { src: "/src/assets/images/education.png",  alt: "Workshop" },
  { src: "/src/assets/images/leadership.png", alt: "Leadership training" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="lg:h-full flex flex-col px-6 sm:px-10 md:px-12 py-8 md:py-10 overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
      {/* Header */}
      <div className="flex items-end justify-between mb-5 sm:mb-6 shrink-0">
        <div>
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#1B4332" }}>Gallery</span>
          <h2 className="font-black tracking-tighter leading-tight mt-1" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)", color: "#111827" }}>
            The community<br />in action.
          </h2>
        </div>
        <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block pb-1">07 / 09</span>
      </div>

      {/* Grid — 2 cols on mobile, 3 cols on sm+, with uniform aspect-ratio cells */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:flex-1 lg:min-h-0 min-h-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="group relative cursor-pointer rounded-[14px] sm:rounded-[18px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-0"
            style={{ minHeight: "clamp(100px, 20vw, 200px)" }}
            onClick={() => setSelected(img.src)}
            data-testid={`gallery-img-${i}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
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
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/92 p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors border-0 cursor-pointer bg-transparent"
              onClick={e => { e.stopPropagation(); setSelected(null); }}
              data-testid="gallery-close"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              src={selected}
              alt="Gallery expanded"
              className="max-w-full max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
