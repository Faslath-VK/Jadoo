import BookTrip from "@/components/booktrip/BookTrip";
import Destinations from "@/components/Destinations/Destinations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/logos/Logos";
import ServicesPage from "@/components/services/Services";
import SubscriptionPage from "@/components/Subscribe";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <ServicesPage />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <LogoStrip />
      <SubscriptionPage/>
      <Footer />
    </>
  );
}
