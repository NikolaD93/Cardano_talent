import { team } from "@/constants";
import { CtaButton } from "../shared/CtaButton";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const Team = () => {
  return (
    <section id="team" className="container my-[120px] lg:my-[150px] relative">
      <h2 className="text-[2.5rem] text-center lg:text-[3rem] font-bold">
        This is our team
      </h2>
      <p className="text-center text-textColor mt-8 mb-[100px] lg:mb-[140px] max-w-[600px] mx-auto">
        Let’s check your hash rate to see how much you will earn today.
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div className="flex flex-col gap-[100px] lg:flex-row lg:gap-6">
        {team.map((item) => (
          <div
            key={item.id}
            className="bg-[#252540c2] rounded-md flex flex-col items-center flex-[33%] pb-6"
          >
            <img
              className="w-[90px] lg:w-[100px] h-auto rounded-full ring ring-4 ring-white -mt-[40px] lg:-mt-[50px]"
              src={item.img}
              alt={item.name}
            />
            <h3 className="font-bold text-[1.5rem] mt-6 mb-2">{item.name}</h3>
            <p className="text-[#aaaaaa]">{item.role}</p>
            <CtaButton className="mt-6">
              Contact me
              <IoIosArrowDroprightCircle className="w-6 h-6 ml-2" />
            </CtaButton>
          </div>
        ))}
      </div>
      <div className="absolute -z-[2] w-[40%] h-[40%] -bottom-[250px] lg:-bottom-[150px] left-[50%] translate-x-[-50%] translate-y-[-50%] blue__gradient"></div>
    </section>
  );
};
