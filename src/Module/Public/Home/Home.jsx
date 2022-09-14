import AboutSection from "./AboutSection/AboutSection";
import BookAableSection from "./BookAableSection/BookAableSection";
import ChefsSection from "./ChefsSection/ChefsSection";
import ContactSection from "./ContactSection/ContactSection";
import EventsSection from "./EventsSection/EventsSection";
import GallerySection from "./GallerySection/GallerySection";
import HeroSection from "./HeroSection/HeroSection";
import MenuSection from "./MenuSection/MenuSection";
import SpecialsSection from "./SpecialsSection/SpecialsSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import WhyUsSection from "./WhyUsSection/WhyUsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <main id="main">
        <AboutSection />
        <WhyUsSection />
        <MenuSection />
        <SpecialsSection />
        <EventsSection />
        <BookAableSection />
        <TestimonialsSection />
        <GallerySection />
        <ChefsSection />
        <ContactSection />
      </main>
    </>
  );
};
export default Home;
