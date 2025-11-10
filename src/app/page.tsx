import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Loading from "@/components/Loading";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import VideoBackground from "@/components/VideoBackground";

export default function HomePage() {
  return (
    <>
      <Loading />
      <VideoBackground />
      <ScrollProgress />
      <NavBar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
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
