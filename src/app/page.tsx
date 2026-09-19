import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { Projects } from "@/components/site/projects";
import { Africa } from "@/components/site/africa";
import { Lab } from "@/components/site/lab";
import { Process } from "@/components/site/process";
import { About } from "@/components/site/about";
import { Team } from "@/components/site/team";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Africa />
        <Lab />
        <Process />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
