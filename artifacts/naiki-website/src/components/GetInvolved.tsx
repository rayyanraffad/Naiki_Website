import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GetInvolved() {
  return (
    <section className="py-40 px-8 md:px-16 bg-muted rounded-[32px] mx-4 lg:mx-8 mb-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Take Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real change requires collective participation. Find your role in the architecture of tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donate Panel - Unique composition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-primary-foreground rounded-[32px] p-10 lg:p-12 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.25 1.64-1.74 0-2.1-.96-2.17-1.92H8c.07 1.68 1.11 2.81 2.9 3.19V19h2.33v-1.64c1.55-.26 2.82-1.21 2.82-2.91-.01-1.98-1.53-2.79-3.74-3.31z"/></svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">Fund the Future</h3>
            <p className="text-primary-foreground/80 mb-12 relative z-10 leading-relaxed">
              Directly support youth-led projects, facilitator stipends, and community workshops. Every dollar goes toward systemic change.
            </p>
            <Button variant="secondary" size="lg" className="w-full rounded-xl h-14 text-lg font-bold shadow-lg" data-testid="involved-donate-btn">
              Donate Now
            </Button>
          </motion.div>

          {/* Volunteer Panel - Unique composition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-[32px] p-10 lg:p-12 shadow-sm border border-border flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-semibold tracking-wide mb-6">HANDS ON</span>
              <h3 className="text-3xl font-bold mb-4">Become a Mentor</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We need professionals, creatives, and leaders to share their expertise. Commit to a 6-week mentorship cycle.
              </p>
            </div>
            <Button variant="outline" size="lg" className="w-full rounded-xl h-14 border-2 font-bold" data-testid="involved-volunteer-btn">
              Apply to Volunteer
            </Button>
          </motion.div>

          {/* Partner Panel - Unique composition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-transparent rounded-[32px] p-10 lg:p-12 border-2 border-dashed border-border flex flex-col justify-center items-center text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Institutional Partners</h3>
            <p className="text-muted-foreground mb-8">
              Schools, businesses, and local government bodies can partner with us to host programs.
            </p>
            <button className="text-primary font-bold underline underline-offset-4 decoration-2 hover:text-primary/80 transition-colors" data-testid="involved-partner-link">
              Contact our partnerships team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}