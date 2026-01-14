import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <FeaturedProjects />
      <CTA />
    </div>
  );
}