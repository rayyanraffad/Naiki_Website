import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-16 py-20 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-[96px] lg:text-[120px] font-black leading-[0.9] tracking-tighter text-foreground mb-8"
          >
            Breaking<br />barriers with<br />education.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            Empowering youth with voice, leadership, and skills. Building tomorrow's leaders through community action and radical empathy.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button size="lg" variant="secondary" className="rounded-full h-16 px-10 text-lg font-bold" data-testid="hero-donate-btn">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-2" data-testid="hero-involved-btn">
              Get Involved
            </Button>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full mt-12 lg:mt-0">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 rounded-[32px] overflow-hidden"
          >
            <img 
              src="/src/assets/images/hero.png" 
              alt="Diverse youth students in community classroom"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}