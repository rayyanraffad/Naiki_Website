import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    quote: "Naiki didn't just teach me how to speak in public. They showed me that my voice was something the community actually needed to hear.",
    author: "Sarah M.", role: "Leadership Program Alum",
    img: "/src/assets/images/story1.png",
  },
  {
    quote: "I thought volunteering meant just showing up to pack boxes. Here it meant sitting down with a young person and helping them map out their entire future.",
    author: "David T.", role: "Volunteer Mentor",
    img: "/src/assets/images/story2.png",
  },
];

export default function Stories() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % stories.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="stories" className="lg:h-full relative overflow-hidden min-h-[60vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <img src={stories[idx].img} alt={stories[idx].author} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,10,2,0.88) 55%, rgba(22,10,2,0.3) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-14 text-white z-10">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "rgba(200,149,108,0.6)" }}>
            Their Story
          </span>
          <span className="text-[11px] font-medium tracking-widest" style={{ color: "rgba(200,149,108,0.35)" }}>06 / 09</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p
              className="font-bold leading-tight mb-5 sm:mb-6"
              style={{ fontSize: "clamp(1.2rem, 3.5vw, 3.25rem)" }}
            >
              "{stories[idx].quote}"
            </p>
            <div>
              <p className="font-bold text-sm sm:text-base">{stories[idx].author}</p>
              <p className="text-sm" style={{ color: "rgba(200,149,108,0.65)" }}>{stories[idx].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center gap-2 self-end">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="h-1 rounded-full transition-all duration-300 border-0 cursor-pointer p-0"
              style={{
                width: i === idx ? "2.5rem" : "1rem",
                backgroundColor: i === idx ? "#C8956C" : "rgba(200,149,108,0.3)",
              }}
              aria-label={`Story ${i + 1}`}
              data-testid={`story-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
