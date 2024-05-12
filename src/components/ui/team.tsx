import { team } from "@/constants";
import { CtaButton } from "../shared/CtaButton";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const Team = () => {
  return (
    <section id="team" className="container my-[100px]">
      <h2 className="text-[3rem] font-bold text-center">This is our team</h2>
      <p className="text-center mt-8 mb-[140px] max-w-[600px] mx-auto">
        Let’s check your hash rate to see how much you will earn today.
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div className="flex gap-6">
        {team.map((item) => (
          <div
            key={item.id}
            className="bg-[#252540c2] rounded-md flex flex-col items-center flex-[33%] pb-6"
          >
            <img
              className="w-[100px] h-auto rounded-full ring ring-4 ring-white -mt-[50px]"
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
    </section>
  );
};
