import { motion } from "framer-motion";

const items = [
  "2,400+ Youth Reached",
  "Breaking Barriers",
  "85% Completion Rate",
  "Empowering Youth",
  "120 Active Volunteers",
  "Voice & Leadership",
  "15 Communities",
  "Since 2018",
];

export default function Ticker() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="w-[90vw] max-w-[1600px] mx-auto my-4 overflow-hidden rounded-[16px] flex items-center"
      style={{ backgroundColor: "#8B5040", height: "52px" }}
    >
      <motion.div
        className="flex items-center gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-white text-xs font-black tracking-[0.18em] uppercase px-8 flex items-center gap-8"
          >
            {item}
            <span className="opacity-40 text-[6px]">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
