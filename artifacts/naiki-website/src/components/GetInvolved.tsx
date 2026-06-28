import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GetInvolved() {
  return (
    <section className="h-full flex flex-col justify-center px-8 md:px-14 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70">Take Action</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
            Find your role<br />in tomorrow.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Donate — dark accent panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] p-10 relative overflow-hidden flex flex-col justify-between"
            style={{ backgroundColor: "#1B4332", color: "#fff", minHeight: "340px" }}
          >
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#E85D04" }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Fund the Future</h3>
              <p className="opacity-75 leading-relaxed">
                Directly support youth-led projects, facilitator stipends, and community workshops. Every dollar goes toward systemic change.
              </p>
            </div>
            <Button
              className="mt-8 rounded-xl h-13 font-bold w-full"
              style={{ backgroundColor: "#E85D04", color: "#fff", border: "none" }}
              data-testid="involved-donate-btn"
            >
              Donate Now
            </Button>
          </motion.div>

          {/* Volunteer — light card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-[28px] p-10 border border-border bg-white flex flex-col justify-between"
            style={{ minHeight: "340px" }}
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ backgroundColor: "#F0EBE3", color: "#1B4332" }}>
                Hands On
              </span>
              <h3 className="text-3xl font-bold mb-4">Become a Mentor</h3>
              <p className="text-muted-foreground leading-relaxed">
                We need professionals, creatives, and leaders to share their expertise. Commit to a 6-week mentorship cycle.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-8 rounded-xl h-13 border-2 font-bold w-full"
              data-testid="involved-volunteer-btn"
            >
              Apply to Volunteer
            </Button>
          </motion.div>

          {/* Partner — editorial framed card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="rounded-[28px] p-10 border-2 border-dashed border-border flex flex-col justify-center items-center text-center"
            style={{ minHeight: "340px" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#F0EBE3" }}>
              <svg width="22" height="22" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Institutional Partners</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Schools, businesses, and local governments can partner with us to host and co-design programs.
            </p>
            <button
              className="font-bold underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
              style={{ color: "#1B4332" }}
              data-testid="involved-partner-link"
            >
              Contact our partnerships team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
