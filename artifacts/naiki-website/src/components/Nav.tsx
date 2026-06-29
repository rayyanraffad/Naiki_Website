import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Mission", id: "mission" },
  { label: "Programs", id: "programs" },
  { label: "Impact", id: "impact" },
  { label: "Stories", id: "stories" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[200] flex justify-center py-3 sm:py-4 px-4 sm:px-8"
    >
      <div className="w-full max-w-[1600px] relative" style={{ width: "92vw" }}>
        {/* Main bar */}
        <div
          className="flex items-center justify-between px-5 sm:px-6 py-3 rounded-[18px] sm:rounded-[20px] border border-black/[0.07] shadow-sm"
          style={{ backgroundColor: "rgba(251,244,234,0.92)", backdropFilter: "blur(16px)" }}
        >
          <span
            className="text-lg sm:text-xl font-black tracking-tight cursor-pointer"
            style={{ color: "#3A1A08" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="nav-logo"
          >
            Naiki
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
                data-testid={`nav-${id}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="rounded-full px-5 sm:px-7 font-bold text-sm h-9 border-none"
              style={{ backgroundColor: "#8B5040", color: "#fff" }}
              data-testid="nav-donate-btn"
            >
              Donate
            </Button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border-0 cursor-pointer transition-colors"
              style={{ backgroundColor: "rgba(58,26,8,0.07)" }}
              onClick={() => setOpen(p => !p)}
              aria-label="Toggle menu"
              data-testid="nav-hamburger"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-2 rounded-[18px] border border-black/[0.07] shadow-xl p-5 flex flex-col gap-1"
              style={{ backgroundColor: "rgba(251,244,234,0.97)", backdropFilter: "blur(20px)" }}
            >
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-base font-semibold px-4 py-3 rounded-xl transition-colors cursor-pointer bg-transparent border-none w-full"
                  style={{ color: "#3A1A08" }}
                  data-testid={`mobile-nav-${id}`}
                >
                  {label}
                </button>
              ))}
              <div className="pt-3 border-t mt-2" style={{ borderColor: "rgba(58,26,8,0.1)" }}>
                <Button
                  className="w-full rounded-xl font-bold text-sm h-11 border-none"
                  style={{ backgroundColor: "#8B5040", color: "#fff" }}
                >
                  Donate to Naiki
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
