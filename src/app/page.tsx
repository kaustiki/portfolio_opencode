import { Navigation, Footer } from "@/components";
import { Hero, About, Work, Skills, Contact } from "@/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
