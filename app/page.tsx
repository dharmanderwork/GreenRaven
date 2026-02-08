import Capabilities from "@/components/Capabilities";
import FieldPresence from "@/components/FieldPresence";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import ProcessTimeline from "@/components/ProcessTimeline";
import ResidentialCommercialSplit from "@/components/ResidentialCommercialSplit";
import SolutionsOverview from "@/components/SolutionsOverview";
import Testimonials from "@/components/Testimonials";
import ValueMarquee from "@/components/ValueMarquee";
import WhyGreenRaven from "@/components/WhyGreenRaven";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />

<Capabilities />

<ValueMarquee />

<WhyGreenRaven />
<SolutionsOverview />
<ResidentialCommercialSplit />
<ProcessTimeline />
<FieldPresence />
    <Testimonials />
    <FinalCTA/>
    </>
  );
}
