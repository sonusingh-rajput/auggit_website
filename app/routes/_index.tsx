import HeroSection from "~/components/home/HeroSection5";
import BrandTicker from "~/components/home/BrandTicker1";
import TestimonialSection from "~/components/home/TestimonialSection4";
import LeadershipSection from "~/components/home/LeadershipSection";
import SlaiceProductSection from "~/components/home/SlaiceProductSection";
import AutomationProductSection from "~/components/home/AutomationProductSection";
import VideoSection from "~/components/home/VideoSection3";

export default function Index() {
  return (
    <div >
      <HeroSection />
      <BrandTicker />
      <VideoSection />
      <SlaiceProductSection />
      <AutomationProductSection />
      <LeadershipSection />
      <TestimonialSection />
    </div>
  );
}