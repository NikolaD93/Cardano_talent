import { About } from "@/components/ui/about";
import { Hero } from "@/components/ui/hero";
import { Team } from "@/components/ui/team";
import { Faq } from "@/components/ui/faq";
import { Newsletter } from "@/components/ui/newsletter";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Team />
      <Faq />
      <Newsletter />
    </div>
  );
};
