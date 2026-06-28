import { motion } from "framer-motion";
import { SiInstagram, SiX, SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-full flex flex-col px-10 md:px-14 py-10" style={{ backgroundColor: "#111827", color: "#fff" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[11px] font-black tracking-[0.26em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Naiki NGO</span>
        <span className="text-[11px] font-medium tracking-widest" style={{ color: "rgba(255,255,255,0.22)" }}>09 / 09</span>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Left */}
        <div className="flex flex-col justify-between">
          <h2
            className="font-black tracking-tighter leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Let's build<br />tomorrow.
          </h2>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full font-bold text-sm text-white h-13 px-10"
              style={{ backgroundColor: "#E85D04" }}
              data-testid="footer-donate-btn"
            >
              Donate to Naiki
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-[11px] font-black tracking-[0.26em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Newsletter
            </h3>
            <form className="flex gap-3" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full px-5 h-12 text-sm bg-white/10 border border-white/10 text-white placeholder:text-white/35 outline-none focus:border-white/30 transition-colors min-w-0"
                data-testid="newsletter-input"
              />
              <button
                type="submit"
                className="rounded-full h-12 px-6 font-bold text-sm bg-white text-[#111827] border-0 cursor-pointer shrink-0 hover:bg-white/90 transition-colors"
                data-testid="newsletter-submit"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact + Social */}
          <div className="grid grid-cols-2 gap-8 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            <div className="space-y-1.5">
              <p className="font-bold text-white mb-3">Contact</p>
              <p>123 Community Ave</p>
              <p>San Francisco, CA 94110</p>
              <p className="pt-2">hello@naiki.org</p>
              <p>(415) 555-0198</p>
            </div>
            <div>
              <p className="font-bold text-white mb-3">Follow</p>
              <div className="flex gap-3">
                {[
                  { icon: <SiInstagram size={17} />, label: "Instagram", testid: "footer-instagram" },
                  { icon: <SiX size={17} />, label: "Twitter", testid: "footer-twitter" },
                  { icon: <SiFacebook size={17} />, label: "Facebook", testid: "footer-facebook" },
                  { icon: <FaLinkedinIn size={17} />, label: "LinkedIn", testid: "footer-linkedin" },
                ].map(({ icon, label, testid }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    data-testid={testid}
                    className="hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom row */}
      <div
        className="flex flex-col md:flex-row justify-between items-center pt-6 mt-4 border-t text-xs"
        style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.28)" }}
      >
        <p>© {new Date().getFullYear()} Naiki NGO. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
