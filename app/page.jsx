import Approach from "@/components/Approach";
import Commitment from "@/components/Commitment";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import ServiceFooter from "@/components/ServiceFooter";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <ServiceFooter/>
    <Approach/>
    <Journey/>
    <WhyChooseUs/>
    <Commitment/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
