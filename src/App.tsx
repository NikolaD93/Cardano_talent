import { About } from "./components/ui/about";
import { Hero } from "./components/ui/hero";
import { Navbar } from "@/components/shared/Navbar";
import { Team } from "./components/ui/team";
import { Faq } from "./components/ui/faq";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Faq />
    </div>
  );
};
