import { adaLogo } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="container mb-[60px]">
      <div className="bg-accent rounded-md flex items-center justify-around py-4">
        <div>
          <h4 className="text-[2rem] font-bold mb-4">Start working now</h4>
          <p className="max-w-[300px]">
            Join now with Cardano Talent to get the latest news and start
            working now
          </p>
        </div>
        <div className="flex relative">
          <Input type="email" placeholder="Enter your email" required />
          <Button
            className="bg-white rounded-full text-primary font-bold w-[130px] h-[56px] absolute right-[5px] top-[5px] transition duration-300 hover:bg-primary hover:text-white"
            variant="ghost"
            type="submit"
          >
            Subscribe
          </Button>
        </div>
        <img src={adaLogo} alt="cardano logo" />
      </div>
    </section>
  );
};
