import { About } from "./components/ui/about";
import { Hero } from "./components/ui/hero";
import { Navbar } from "@/components/shared/Navbar";
import { Team } from "./components/ui/team";
import { Faq } from "./components/ui/faq";
import { Newsletter } from "./components/ui/newsletter";
import { Footer } from "./components/shared/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
};
