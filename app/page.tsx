import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Onboard } from "@/components/onboard";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Services />
        <Process />
        <Onboard />
      </main>
      <Footer />
    </>
  );
}
