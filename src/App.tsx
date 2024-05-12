import { About } from "./components/ui/about";
import { Hero } from "./components/ui/hero";
import { Navbar } from "@/components/shared/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};
