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

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-6 pb-32">
        <StickyCard index={0}>
          <div id="hero">
            <Hero />
          </div>
        </StickyCard>

        <StickyCard index={1}>
          <div id="mission">
            <Mission />
          </div>
        </StickyCard>

        <StickyCard index={2}>
          <ProblemSolution />
        </StickyCard>

        <StickyCard index={3}>
          <div id="programs">
            <Programs />
          </div>
        </StickyCard>

        <StickyCard index={4}>
          <div id="impact">
            <Impact />
          </div>
        </StickyCard>

        <StickyCard index={5}>
          <div id="stories">
            <Stories />
          </div>
        </StickyCard>

        <StickyCard index={6}>
          <Gallery />
        </StickyCard>

        <StickyCard index={7}>
          <GetInvolved />
        </StickyCard>

        <StickyCard index={8}>
          <Footer />
        </StickyCard>
      </main>
    </>
  );
}
