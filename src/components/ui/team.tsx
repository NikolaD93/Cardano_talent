import { MotionWrapper } from "../shared/MotionWrapper";
import { Carousel } from "../carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "../carousel/carousel.css";

const OPTIONS: EmblaOptionsType = { align: "start" };

export const Team = () => {
  return (
    <MotionWrapper className="">
      <section
        id="team"
        className="container my-[120px] lg:my-[150px] relative"
      >
        <h2 className="text-[2.5rem] text-center lg:text-[3rem] font-bold">
          This is our team
        </h2>
        <p className="text-center text-textColor mt-8 mb-[64px] lg:mb-[84px] max-w-[600px] mx-auto">
          Meet the awesome team members who bring creativity and expertise to
          the table, playing a key role in shaping our platform's success.
        </p>
        <div className="relative">
          <Carousel options={OPTIONS} />
        </div>
      </section>
    </MotionWrapper>
  );
};
