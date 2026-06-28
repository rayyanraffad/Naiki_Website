import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/">
          <span className="text-2xl font-bold tracking-tight text-primary cursor-pointer" data-testid="nav-logo">
            Naiki
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#mission" className="hover:text-primary transition-colors" data-testid="nav-mission">Mission</Link>
          <Link href="#programs" className="hover:text-primary transition-colors" data-testid="nav-programs">Programs</Link>
          <Link href="#impact" className="hover:text-primary transition-colors" data-testid="nav-impact">Impact</Link>
          <Link href="#stories" className="hover:text-primary transition-colors" data-testid="nav-stories">Stories</Link>
        </nav>
        <Button variant="secondary" className="rounded-full px-8 font-semibold" data-testid="nav-donate-btn">
          Donate
        </Button>
      </div>
    </header>
  );
}