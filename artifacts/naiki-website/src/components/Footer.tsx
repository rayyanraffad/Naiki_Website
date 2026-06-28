import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiInstagram, SiX, SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="h-full flex flex-col justify-between px-8 md:px-16 py-12" style={{ backgroundColor: "#111827", color: "#fff" }}>
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-12"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-6 block">Naiki NGO</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Let's build<br />tomorrow.
            </h2>
            <Button
              size="lg"
              className="rounded-full h-14 px-10 font-bold text-base"
              style={{ backgroundColor: "#E85D04", color: "#fff", border: "none" }}
              data-testid="footer-donate-btn"
            >
              Donate to Naiki
            </Button>
          </div>

          <div className="flex flex-col justify-end space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Newsletter</h3>
              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Email address"
                  className="rounded-full h-12 px-5 text-sm bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-white/30"
                  data-testid="newsletter-input"
                />
                <Button
                  type="submit"
                  className="rounded-full h-12 px-7 font-bold bg-white text-[#111827] hover:bg-white/90 border-none shrink-0"
                  data-testid="newsletter-submit"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm opacity-60">
              <div className="space-y-1.5">
                <p className="font-bold opacity-100 text-white mb-3">Contact</p>
                <p>123 Community Ave</p>
                <p>San Francisco, CA 94110</p>
                <p className="pt-2">hello@naiki.org</p>
                <p>(415) 555-0198</p>
              </div>
              <div>
                <p className="font-bold opacity-100 text-white mb-3">Follow</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:opacity-100 transition-opacity p-1.5 -ml-1.5" aria-label="Instagram" data-testid="footer-instagram"><SiInstagram size={18} /></a>
                  <a href="#" className="hover:opacity-100 transition-opacity p-1.5" aria-label="Twitter" data-testid="footer-twitter"><SiX size={18} /></a>
                  <a href="#" className="hover:opacity-100 transition-opacity p-1.5" aria-label="Facebook" data-testid="footer-facebook"><SiFacebook size={18} /></a>
                  <a href="#" className="hover:opacity-100 transition-opacity p-1.5" aria-label="LinkedIn" data-testid="footer-linkedin"><FaLinkedinIn size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs opacity-40">
          <p>© {new Date().getFullYear()} Naiki NGO. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
