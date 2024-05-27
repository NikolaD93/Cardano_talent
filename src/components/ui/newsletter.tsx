import { adaLogo } from "@/assets/images";
import { MotionWrapper } from "../shared/MotionWrapper";
import { NewsletterForm } from "../forms/NewsletterForm";

export const Newsletter = () => {
  return (
    <MotionWrapper className="">
      <section className="lg:container mb-[40px] lg:mb-[60px] relative">
        <div className="bg-accent lg:rounded-md flex flex-col items-center justify-around py-8 px-6 lg:flex-row lg:py-4 lg:px-0">
          <div className="text-center lg:text-left">
            <h4 className="text-[2rem] leading-[2.3rem] font-bold mb-4">
              Kickstart your career today!
            </h4>
            <p className="mb-8 lg:mb-0">
              Enter your email to receive a weekly job digest from the Web3
              space.
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
