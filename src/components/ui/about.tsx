import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { about } from "@/constants";
import AnimatedBeamDemo from "./animated-beam-demo";

export const About = () => {
  return (
    <section id="about" className="container my-[120px] lg:my-[150px] relative">
      <div className="absolute -z-[2] w-[30%] h-[20%] lg:w-[40%] lg:h-[25%] -top-[100px] lg:-top-[150px] left-[50%] translate-x-[-50%] translate-y-[-50%] blue__gradient"></div>
      <h2 className="text-[2.5rem] leading-[3rem] text-center lg:text-[3rem] lg:leading-[3.5rem] font-bold">
        Why Choose Caradno Talent?
      </h2>
      <p className="mt-8 mb-[100px] lg:mb-[120px] text-textColor text-center mx-auto max-w-[800px]">
        At Caradno Talent, we understand the unique challenges and opportunities
        within the crypto space. Just like finding the perfect stationery shop
        in a bustling city, choosing the right hiring partner can make all the
        difference. Here’s why CaradnoTalent is the best choice for your crypto
        hiring needs:
      </p>
      <BentoGrid className="mx-auto">
        {about.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            number={item.number}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
