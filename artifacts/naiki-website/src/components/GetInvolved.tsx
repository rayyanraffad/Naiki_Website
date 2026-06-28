import { motion } from "framer-motion";

export default function GetInvolved() {
  return (
    <section className="h-full flex flex-col px-10 md:px-14 py-10" style={{ backgroundColor: "#FAFAF8" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#1B4332" }}>Take Action</span>
        <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block">08 / 09</span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-black tracking-tighter leading-tight mb-8"
        style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", color: "#111827" }}
      >
        Find your role<br />in tomorrow.
      </motion.h2>

      {/* Cards */}
      <div className="flex-1 grid lg:grid-cols-3 gap-5 min-h-0">
        {/* Donate */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between rounded-[26px] p-8 md:p-10"
          style={{ backgroundColor: "#1B4332" }}
        >
          <div>
            <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#E85D04" }}>
              <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Fund the Future</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.58)" }}>
              Directly support youth-led projects, facilitator stipends, and community workshops. Every dollar drives systemic change.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-xl font-bold text-sm text-white h-12 w-full"
            style={{ backgroundColor: "#E85D04" }}
            data-testid="involved-donate-btn"
          >
            Donate Now
          </a>
        </motion.div>

        {/* Mentor */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-between rounded-[26px] p-8 md:p-10 border"
          style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "#fff" }}
        >
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-6"
              style={{ backgroundColor: "#F0EBE3", color: "#1B4332" }}
            >
              Hands On
            </span>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#111827" }}>Become a Mentor</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Share your expertise through a 6-week mentorship cycle. We need professionals, creatives, and community leaders.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-xl font-bold text-sm h-12 w-full border-2"
            style={{ borderColor: "#1B4332", color: "#1B4332" }}
            data-testid="involved-volunteer-btn"
          >
            Apply to Volunteer
          </a>
        </motion.div>

        {/* Partner */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center items-center text-center rounded-[26px] p-8 md:p-10 border-2 border-dashed"
          style={{ borderColor: "rgba(27,67,50,0.18)" }}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#F0EBE3" }}>
            <svg width="20" height="20" fill="none" stroke="#1B4332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>Institutional Partners</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-8">
            Schools, businesses, and local governments can co-design and host programs with us.
          </p>
          <button
            className="font-bold text-sm underline underline-offset-4 decoration-2 hover:opacity-65 transition-opacity bg-transparent border-0 cursor-pointer p-0"
            style={{ color: "#1B4332" }}
            data-testid="involved-partner-link"
          >
            Contact partnerships team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
