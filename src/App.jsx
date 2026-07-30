import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/FeatureBadges/Features";
import RatesSection from "./components/RatesSection/RatesSection";
import RatesTable from "./components/RatesSection/RatesTable"
import LogosMarquee from "./components/LogosMarquee/LogosMarquee";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features />
      <RatesSection />
      <RatesTable />
      <LogosMarquee />
    </div>
  );
}

export default App;