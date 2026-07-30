import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/FeatureBadges/Features";
import RatesSection from "./components/RatesSection/RatesSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features />
      <RatesSection />
    </div>
  );
}

export default App;