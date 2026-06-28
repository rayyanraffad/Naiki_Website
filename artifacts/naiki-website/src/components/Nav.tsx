import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[200] flex justify-center py-4 px-8"
    >
      <div
        className="w-[90vw] max-w-[1600px] flex items-center justify-between px-6 py-3 rounded-[20px] border border-black/[0.07] shadow-sm"
        style={{ backgroundColor: "rgba(250,250,248,0.85)", backdropFilter: "blur(16px)" }}
      >
        <span
          className="text-xl font-black tracking-tight cursor-pointer"
          style={{ color: "#1B4332" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="nav-logo"
        >
          Naiki
        </span>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <button
            onClick={() => scrollTo("mission")}
            className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            data-testid="nav-mission"
          >
            Mission
          </button>
          <button
            onClick={() => scrollTo("programs")}
            className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            data-testid="nav-programs"
          >
            Programs
          </button>
          <button
            onClick={() => scrollTo("impact")}
            className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            data-testid="nav-impact"
          >
            Impact
          </button>
          <button
            onClick={() => scrollTo("stories")}
            className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            data-testid="nav-stories"
          >
            Stories
          </button>
        </nav>

        <Button
          className="rounded-full px-7 font-bold text-sm h-9"
          style={{ backgroundColor: "#E85D04", color: "#fff", border: "none" }}
          data-testid="nav-donate-btn"
        >
          Donate
        </Button>
      </div>
    </motion.header>
  );
}
