import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function Privacy() {
  return (
    <main className="m-auto">
      <Layout>
        <Navbar />
        <PrivacyPolicy />
        <Contact />
        <Footer />
      </Layout>
    </main>
  );
}
