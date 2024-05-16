import { adaLogo } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionWrapper } from "../shared/MotionWrapper";

export const Newsletter = () => {
  return (
    <MotionWrapper>
      <section className="lg:container mb-[40px] lg:mb-[60px] relative">
        <div className="bg-accent lg:rounded-md flex flex-col items-center justify-around py-8 px-6 lg:flex-row lg:py-4 lg:px-0">
          <div className="text-center lg:text-left">
            <h4 className="text-[2rem] font-bold mb-4">Start working now</h4>
            <p className="lg:max-w-[300px] mb-8 lg:mb-0">
              Join now with Cardano Talent to get the latest news and start
              working now
            </p>
          </div>
          <div className="flex relative z-10">
            <Input type="email" placeholder="Enter your email" required />
            <Button
              className="bg-white rounded-full text-primary font-bold lg:w-[130px] h-[46px] lg:h-[56px] absolute right-[5px] top-[5px] transition duration-300 hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
              variant="ghost"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
          <img
            className="absolute opacity-20 lg:static lg:opacity-100"
            src={adaLogo}
            alt="cardano logo"
          />
        </div>
      </section>
    </MotionWrapper>
  );
};
