import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Loading from "@/components/Loading";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Loading />
      <NavBar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
