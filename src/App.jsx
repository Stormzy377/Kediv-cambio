import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/FeatureBadges/Features";
import RatesSection from "./components/RatesSection/RatesSection";
import RatesTable from "./components/RatesSection/RatesTable"
import LogosMarquee from "./components/LogosMarquee/LogosMarquee";
import WhySection from "./components/WhySection/WhySection";
import HighlightsSection from "./components/HighlightsSection/HighlightsSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features />
      <RatesSection />
      <RatesTable />
      <LogosMarquee />
      <WhySection />
      <HighlightsSection />
      <Footer />
    </div>
  );
}

export default App;