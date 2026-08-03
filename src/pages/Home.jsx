import Hero from "../components/Hero/Hero";
import Features from "../components/FeatureBadges/Features";
import RatesSection from "../components/RatesSection/RatesSection";
import LogosMarquee from "../components/LogosMarquee/LogosMarquee";
import WhySection from "../components/WhySection/WhySection";
import HighlightsSection from "../components/HighlightsSection/HighlightsSection";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <RatesSection />
      <LogosMarquee />
      <WhySection />
      <HighlightsSection />
    </>
  );
}

export default Home;