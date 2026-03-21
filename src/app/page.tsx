import dynamic from "next/dynamic";
import { Navigation, Footer } from "@/components";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  FineArts,
  Education,
  Certifications,
  Contact,
} from "@/sections";

// Load Three.js canvas client-side only (no SSR)
const BackgroundCanvas = dynamic(() => import("@/components/BackgroundCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Three.js particle background — fixed, behind everything */}
      <BackgroundCanvas />

      {/* All page content sits above the canvas */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navigation />
        <main id="main-content" className="min-h-screen pt-[72px]">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <FineArts />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
