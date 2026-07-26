import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { Projects } from "@/components/site/projects";
import { Industries } from "@/components/site/industries";
import { Training } from "@/components/site/training";
import { Blog } from "@/components/site/blog";
import { FAQ } from "@/components/site/faq";
import { CTA } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Industries />
        <Training />
        <Blog />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
