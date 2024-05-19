import { about } from "@/assets/images";
import { CtaButton } from "../shared/CtaButton";
import { motion } from "framer-motion";
import { MotionWrapper } from "../shared/MotionWrapper";

export const About = () => {
  return (
    <section
      id="about"
      className="container my-[120px] lg:my-[150px]  relative"
    >
      <div className="absolute -z-[2] w-[30%] h-[30%] lg:w-[40%] lg:h-[40%] -top-[100px] lg:-top-[150px] left-[50%] translate-x-[-50%] translate-y-[-50%] blue__gradient"></div>
      <MotionWrapper className="flex flex-col-reverse items-center lg:flex-row gap-10 lg:gap-20">
        <motion.div className="lg:flex-[50%]">
          <img
            className="w-[300px] lg:w-[460px] h-auto mx-auto"
            src={about}
            alt="caradno illustration"
          />
        </motion.div>
        <motion.div className="flex flex-col items-center lg:flex-[50%] lg:items-start">
          <h2 className="text-[2.5rem] text-center lg:text-[3rem] lg:text-left font-bold">
            Why choose us
          </h2>
          <p className="mt-8 mb-12 text-textColor text-center lg:text-left">
            Experience the difference in job hunting. Inside our Discord
            community, you can share your CV directly with recruiters, engage in
            industry discussions, access invaluable resources, and receive
            personalized career advice. Experience the difference in job
            hunting. Inside our Discord community, you can share your CV
            directly with recruiters, engage in industry discussions, access
            invaluable resources, and receive personalized career advice.
          </p>
          <CtaButton
            className="bg-[length:200%_100%] bg-[linear-gradient(110deg,#044fc8,45%,#477dd5,55%,#044fc8)] animate-shimmer"
            children="Join our discord community"
            link="https://discord.com/invite/5U4Z3r2NJb"
          />
        </motion.div>
      </MotionWrapper>
    </section>
  );
};
