import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/src/assets/images/gallery1.png", alt: "Classroom learning scene", tall: false },
  { src: "/src/assets/images/gallery2.png", alt: "Outdoor community gathering", tall: true },
  { src: "/src/assets/images/hero.png", alt: "Youth workshop participant", tall: true },
  { src: "/src/assets/images/mission.png", alt: "Volunteer mentoring session", tall: false },
  { src: "/src/assets/images/education.png", alt: "Students in workshop", tall: false },
  { src: "/src/assets/images/leadership.png", alt: "Leadership training", tall: true },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="h-full flex flex-col px-8 md:px-14 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 flex items-end justify-between"
      >
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">The community<br />in action.</h2>
        </div>
        <p className="text-muted-foreground text-sm hidden md:block max-w-xs text-right">
          Click any image to expand. Documentary-style moments from our programs.
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className={`group relative cursor-pointer rounded-[20px] overflow-hidden ${img.tall ? "row-span-2" : "row-span-1"}`}
            onClick={() => setSelectedImg(img.src)}
            data-testid={`gallery-img-${i}`}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              data-testid="gallery-lightbox-close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              src={selectedImg}
              alt="Gallery expanded"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
