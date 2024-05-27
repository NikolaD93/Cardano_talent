import { Badge } from "@/components/ui/badge";
import { FaArrowRightLong } from "react-icons/fa6";
import { CtaButton } from "../shared/CtaButton";
import { members } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Lottie from "lottie-react";
import scroll from "@/assets/images/scroll.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero-wrapper relative container">
      <motion.div
        whileInView={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: 0.5 }}
        className="text-center pt-[60px] md:pt-[86px]"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(circle_at_center,transparent_90%,black)] lg:[mask-image:radial-gradient(circle_at_center,transparent_50%,black)]"></div>
        <Link
          to="blog"
          className="bg-[rgba(255,255,255,0.1)] rounded-full p-1 w-[270px] md:w-[300px] mx-auto flex gap-3 items-center group border border-[rgba(255,255,255,.1)] duration-200 ease-in-out hover:bg-[rgba(255,255,255,0.2)]"
        >
          <Badge className="bg-white text-primary font-bold">NEW</Badge>
          <p className="text-xs md:text-sm">Read the latest from our blog</p>
          <FaArrowRightLong className="-translate-x-1 transition-all duration-200 ease-in-out group-hover:translate-x-0" />
        </Link>
        <h1 className="text-[3.4rem] leading-[3.4rem] lg:text-[6rem] lg:leading-[6rem] font-bold my-6">
          The ultimate{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500 bg-opacity-50">
            Next-Gen
          </span>{" "}
          marketplace
        </h1>
        <p className="text-textColor text-sm lg:text-lg max-w-[800px] mx-auto">
          Our innovative platform offers secure, transparent, and efficient
          hiring solutions, revolutionizing how employers connect with top
          talent in the industry. Experience the future of recruitment with a
          decentralized approach that ensures trust and efficiency in every
          hire.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-center"
      >
        <CtaButton
          className="my-[60px] lg:mt-[100px] lg:mb-[140px] bg-[length:200%_100%] bg-[linear-gradient(110deg,#044fc8,45%,#477dd5,55%,#044fc8)] animate-shimmer"
          children=" Join our discord community"
          link="https://discord.com/invite/5U4Z3r2NJb"
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 0.5, 1] }}
        transition={{ duration: 0.5 }}
        className="lg:grid lg:grid-cols-3"
      >
        <div className="flex flex-col gap-3 items-center lg:items-start">
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
          <p className="text-sm ml-2 lg:ml-6 lg:z-10">500+ discord members</p>
        </div>
        <Lottie
          className="justify-self-center mt-10 h-[40px] lg:mt-0 lg:h-[50px]"
          animationData={scroll}
          loop={true}
        />
      </motion.div>
    </div>
  );
};
