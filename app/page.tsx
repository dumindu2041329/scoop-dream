import { Hero } from "@/components/sections/Hero";
import { FeaturedFlavors } from "@/components/sections/FeaturedFlavors";
import { HowItsMade } from "@/components/sections/HowItsMade";
import { Testimonials } from "@/components/sections/Testimonials";
import { SeasonalMenu } from "@/components/sections/SeasonalMenu";
import { FindAScoop } from "@/components/sections/FindAScoop";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <FeaturedFlavors />
      <div className="section-divider" />
      <HowItsMade />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <SeasonalMenu />
      <div className="section-divider" />
      <FindAScoop />
      <div className="section-divider" />
      <NewsletterCTA />
    </>
  );
}
