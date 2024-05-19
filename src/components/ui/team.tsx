import { MotionWrapper } from "../shared/MotionWrapper";
import { Carousel } from "../carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "../carousel/carousel.css";

const OPTIONS: EmblaOptionsType = { align: "start" };

export const Team = () => {
  return (
    <MotionWrapper>
      <section
        id="team"
        className="container my-[120px] lg:my-[150px] relative"
      >
        <h2 className="text-[2.5rem] text-center lg:text-[3rem] font-bold">
          This is our team
        </h2>
        <p className="text-center text-textColor mt-8 mb-[64px] lg:mb-[84px] max-w-[600px] mx-auto">
          Let’s check your hash rate to see how much you will earn today.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className="relative">
          <Carousel options={OPTIONS} />
        </div>
      </section>
    </MotionWrapper>
  );
};
