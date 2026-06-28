import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiInstagram, SiX, SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-card px-8 md:px-16 py-20 mt-auto border-t border-border rounded-b-[32px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build<br />tomorrow.
            </h2>
            <Button size="lg" variant="secondary" className="rounded-full h-16 px-10 text-lg font-bold shadow-lg" data-testid="footer-donate-btn">
              Donate to Naiki
            </Button>
          </motion.div>

          <div className="flex flex-col justify-end space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Join our newsletter</h3>
              <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  className="rounded-full bg-muted border-none h-14 px-6 text-base focus-visible:ring-primary"
                  data-testid="newsletter-input"
                />
                <Button type="submit" className="rounded-full h-14 px-8 font-bold" data-testid="newsletter-submit">
                  Subscribe
                </Button>
              </form>
            </div>
            
            <div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-bold text-foreground mb-4">Contact</p>
                <p>123 Community Ave</p>
                <p>San Francisco, CA 94110</p>
                <p className="pt-2">hello@naiki.org</p>
                <p>(415) 555-0198</p>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-foreground mb-2">Social</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-muted" aria-label="Instagram"><SiInstagram size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-muted" aria-label="X (Twitter)"><SiX size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-muted" aria-label="Facebook"><SiFacebook size={20} /></a>
                  <a href="#" className="hover:text-primary transition-colors p-2 rounded-full hover:bg-muted" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Naiki NGO. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}