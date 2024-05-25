import { About } from "@/components/ui/about";
import { Hero } from "@/components/ui/hero";
import { Team } from "@/components/ui/team";
import { Faq } from "@/components/ui/faq";
import { Newsletter } from "@/components/ui/newsletter";
import { supabase } from "@/config/supabaseClient";

export const Home = () => {
  console.log(supabase);
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
