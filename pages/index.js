import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="m-auto">
      <Layout>
        <Navbar />
        <Hero />
        <Projects />
        <Cta />
        <Skills />
        <Contact />
        <Footer />
      </Layout>
    </main>
  );
}
