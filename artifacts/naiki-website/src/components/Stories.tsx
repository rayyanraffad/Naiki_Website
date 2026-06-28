import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    quote: "Naiki didn't just teach me how to speak in public. They showed me that my voice was something the community actually needed to hear.",
    author: "Sarah M.",
    role: "Leadership Program Alum",
    img: "/src/assets/images/story1.png",
  },
  {
    quote: "I thought volunteering meant just showing up to pack boxes. Here, it meant sitting down with a young person and helping them map out their entire future.",
    author: "David T.",
    role: "Volunteer Mentor",
    img: "/src/assets/images/story2.png",
  },
];

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="stories" className="h-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/45 z-10" />
          <img
            src={stories[currentIndex].img}
            alt={stories[currentIndex].author}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 md:p-16 lg:p-24 text-white">
            <div className="max-w-4xl">
              <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-60 mb-6 block">Their Story</span>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                "{stories[currentIndex].quote}"
              </p>
              <div>
                <p className="text-lg font-bold">{stories[currentIndex].author}</p>
                <p className="opacity-70">{stories[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 right-10 z-30 flex gap-3">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 transition-all duration-400 rounded-full ${i === currentIndex ? "bg-white w-10" : "bg-white/30 w-4"}`}
            aria-label={`Go to story ${i + 1}`}
            data-testid={`story-dot-${i}`}
          />
        ))}
      </div>
    </section>
  );
}
