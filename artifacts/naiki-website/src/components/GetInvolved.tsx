import { motion } from "framer-motion";
import { useDonate } from "@/contexts/DonateContext";

export default function GetInvolved() {
  const { openDonate } = useDonate();
  return (
    <section className="lg:h-full flex flex-col px-6 sm:px-10 md:px-14 py-8 md:py-10" style={{ backgroundColor: "#FBF4EA" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "#8B5040" }}>Take Action</span>
        <span className="text-[11px] font-medium tracking-widest text-muted-foreground hidden md:block">08 / 09</span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-black tracking-tighter leading-tight mb-5 sm:mb-8"
        style={{ fontSize: "clamp(1.9rem, 5vw, 4.5rem)", color: "#1C0E04" }}
      >
        Find your role<br />in tomorrow.
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:flex-1 lg:min-h-0">
        {/* Donate */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 md:p-10"
          style={{ backgroundColor: "#3A1A08" }}
        >
          <div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center mb-5 sm:mb-6" style={{ backgroundColor: "#C8956C" }}>
              <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Fund the Future</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(200,149,108,0.65)" }}>
              Directly support youth-led projects, facilitator stipends, and community workshops. Every dollar drives systemic change.
            </p>
          </div>
          <button
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-xl font-bold text-sm text-white h-12 w-full border-0 cursor-pointer transition-colors"
            style={{ backgroundColor: "#C8956C" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#B07D54")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C8956C")}
            onClick={openDonate}
            data-testid="involved-donate-btn"
          >
            Donate Now
          </button>
        </motion.div>

        {/* Mentor */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-between rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 md:p-10 border"
          style={{ borderColor: "rgba(58,26,8,0.1)", backgroundColor: "#fff" }}
        >
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-5 sm:mb-6"
              style={{ backgroundColor: "#E8D4BC", color: "#8B5040" }}
            >
              Hands On
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1C0E04" }}>Become a Mentor</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#7A6252" }}>
              Share your expertise through a 6-week mentorship cycle. We need professionals, creatives, and community leaders.
            </p>
          </div>
          <button
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-xl font-bold text-sm h-12 w-full border-2 bg-transparent cursor-pointer hover:bg-black/[0.03] transition-colors"
            style={{ borderColor: "#8B5040", color: "#8B5040" }}
            data-testid="involved-volunteer-btn"
          >
            Apply to Volunteer
          </button>
        </motion.div>

        {/* Partner */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center items-center text-center rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 md:p-10 border-2 border-dashed sm:col-span-2 lg:col-span-1"
          style={{ borderColor: "rgba(58,26,8,0.15)" }}
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-5" style={{ backgroundColor: "#E8D4BC" }}>
            <svg width="20" height="20" fill="none" stroke="#8B5040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#1C0E04" }}>Institutional Partners</h3>
          <p className="text-sm leading-relaxed mb-6 sm:mb-8" style={{ color: "#7A6252" }}>
            Schools, businesses, and local governments can co-design and host programs with us.
          </p>
          <button
            className="font-bold text-sm underline underline-offset-4 decoration-2 hover:opacity-65 transition-opacity bg-transparent border-0 cursor-pointer p-0"
            style={{ color: "#8B5040" }}
            data-testid="involved-partner-link"
          >
            Contact partnerships team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
