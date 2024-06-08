import { CtaButton } from "../shared/CtaButton";
import { MotionWrapper } from "../shared/MotionWrapper";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { about } from "@/constants";

export const About = () => {
  return (
    <section id="about" className="container my-[120px] lg:my-[150px] relative">
      <div className="absolute -z-[2] w-[30%] h-[20%] lg:w-[40%] lg:h-[25%] -top-[150px] lg:-top-[250px] left-[50%] translate-x-[-50%] translate-y-[-50%] blue__gradient"></div>
      <MotionWrapper className="">
        <h2 className="text-[2.5rem] leading-[3rem] text-center lg:text-[3rem] lg:leading-[3.5rem] font-bold">
          Why Choose Caradno Talent?
        </h2>
        <p className="mt-8 mb-[60px] lg:mb-[100px] text-textColor text-center mx-auto max-w-[800px]">
          At Caradno Talent, we understand the unique challenges and
          opportunities within the crypto space. Just like finding the perfect
          stationery shop in a bustling city, choosing the right hiring partner
          can make all the difference. Here’s why CaradnoTalent is the best
          choice for your crypto hiring needs:
        </p>
        <BentoGrid className="mx-auto">
          {about.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              number={item.number}
              img={item.img}
              className={i === 1 || i === 5 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
        <div className="mt-[60px] lg:mt-[100px] flex flex-col items-center">
          <p className="text-textColor text-center mx-auto max-w-[820px]">
            At Caradno Talent, we don’t just want to earn your business; we want
            to earn your trust. We invite you to let us prove why we are the
            best choice for your crypto hiring needs. Let us help you build a
            team that will take your company to new heights in the crypto world.
            Choose Caradno Talent — because your success is our mission.
          </p>
          <CtaButton
            className="mt-[40px] lg:mt-[60px] bg-[length:200%_100%] bg-[linear-gradient(110deg,#044fc8,45%,#477dd5,55%,#044fc8)] animate-shimmer"
            children=" Join our discord community"
            link="https://discord.com/invite/5U4Z3r2NJb"
          />
        </div>
      </MotionWrapper>
    </section>
  );
};
