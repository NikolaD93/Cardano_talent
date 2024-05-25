import { adaLogo } from "@/assets/images";
import { MotionWrapper } from "../shared/MotionWrapper";
import { NewsletterForm } from "../forms/NewsletterForm";

export const Newsletter = () => {
  return (
    <MotionWrapper className="">
      <section className="lg:container mb-[40px] lg:mb-[60px] relative">
        <div className="bg-accent lg:rounded-md flex flex-col items-center justify-around py-8 px-6 lg:flex-row lg:py-4 lg:px-0">
          <div className="text-center lg:text-left">
            <h4 className="text-[2rem] font-bold mb-4">Start working now</h4>
            <p className="lg:max-w-[300px] mb-8 lg:mb-0">
              Join now with Cardano Talent to get the latest news and start
              working now
            </p>
          </div>
          <NewsletterForm />
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
