import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TosPolicy from "@/components/TosPolicy";

export default function Privacy() {
  return (
    <main className="m-auto">
      <Layout>
        <Navbar />
        <TosPolicy />
        <Contact />
        <Footer />
      </Layout>
    </main>
  );
}
