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

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Mission />
        <ProblemSolution />
        <Programs />
        <Impact />
        <Stories />
        <Gallery />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}