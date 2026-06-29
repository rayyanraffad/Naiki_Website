import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ProblemSolution from "@/components/ProblemSolution";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Stories from "@/components/Stories";
import Gallery from "@/components/Gallery";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";
import StickyCard from "@/components/StickyCard";
import Ticker from "@/components/Ticker";
import DonateModal from "@/components/DonateModal";
import { DonateProvider } from "@/contexts/DonateContext";

export default function Home() {
  return (
    <DonateProvider>
      <Nav />
      <main className="pt-6 pb-24">
        <StickyCard index={0}><Hero /></StickyCard>
        <Ticker />
        <StickyCard index={1}><Mission /></StickyCard>
        <StickyCard index={2}><ProblemSolution /></StickyCard>
        <StickyCard index={3}><Programs /></StickyCard>
        <StickyCard index={4}><Impact /></StickyCard>
        <StickyCard index={5}><Stories /></StickyCard>
        <StickyCard index={6}><Gallery /></StickyCard>
        <StickyCard index={7}><GetInvolved /></StickyCard>
        <StickyCard index={8}><Footer /></StickyCard>
      </main>
      <DonateModal />
    </DonateProvider>
  );
}
