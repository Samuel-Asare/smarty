import Footer from "./Components/HomePage_Sections/Footer";
import HeroSection from "./Components/HomePage_Sections/HeroSection";
import Personalization from "./Components/HomePage_Sections/Personalization";
import PricingSection from "./Components/HomePage_Sections/PricingSection";
import Services from "./Components/HomePage_Sections/Services";
import Testimonial from "./Components/HomePage_Sections/Testimonial";
import Navigation from "./Components/Navigation";

const App = () => (
  <div className="w-screen ">
    <Navigation />
    <HeroSection />
    <Services />
    <Personalization />
    <PricingSection />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
