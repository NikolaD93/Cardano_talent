import { Badge } from "@/components/ui/badge";
import { FaArrowRightLong } from "react-icons/fa6";
import { CtaButton } from "../shared/CtaButton";
import { members } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Lottie from "lottie-react";
import scroll from "@/assets/images/scroll.json";

export const Hero = () => {
  const style = {
    height: 50,
    color: "white",
  };
  return (
    <div className="hero-wrapper relative container">
      <div className="text-center pt-[86px]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(circle_at_center,transparent_50%,black)]"></div>
        <div className="bg-[rgba(255,255,255,0.1)] rounded-full p-1 max-w-[300px] mx-auto flex gap-3 items-center group border border-[rgba(255,255,255,.1)] duration-200 ease-in-out hover:bg-[rgba(255,255,255,0.2)]">
          <Badge className="bg-white text-primary font-bold">NEW</Badge>
          <p className="text-sm">Read the latest from our blog</p>
          <FaArrowRightLong className="-translate-x-1 transition-all duration-200 ease-in-out group-hover:translate-x-0" />
        </div>
        <h1 className="text-[5rem] leading-[5rem] font-bold my-6">
          Unleash your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500 bg-opacity-50">
            potential
          </span>{" "}
          with <br /> our matching platform
        </h1>
        <p className="text-textColor text-lg max-w-[600px] mx-auto">
          At Cardano Talent, we understand that in the rapidly evolving field of
          blockchain and web3, finding the right talent is paramount.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <CtaButton
          className="mt-[100px] mb-[140px] bg-[length:200%_100%] bg-[linear-gradient(110deg,#044fc8,45%,#477dd5,55%,#044fc8)] animate-shimmer"
          children=" Join our discord community"
        />
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex -space-x-2">
            {members.map((member) => {
              return (
                <Avatar key={member.id} className="outline outline-[3px]">
                  <AvatarImage className="object-cover" src={member.img} />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
              );
            })}
          </div>
          <p className="text-sm ml-2 z-10">500+ discord members</p>
        </div>
        <Lottie
          className="justify-self-center"
          animationData={scroll}
          loop={true}
          style={style}
        />
      </div>
    </div>
  );
};
