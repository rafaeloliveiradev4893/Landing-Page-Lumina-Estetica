import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Procedures from "@/components/Procedures/Procedures";
import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import Location from "@/components/Location/Location";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Procedures />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
