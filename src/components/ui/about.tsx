import { about } from "@/assets/images";
import { CtaButton } from "../shared/CtaButton";

export const About = () => {
  return (
    <section
      id="about"
      className="container my-[150px] flex items-center gap-20 relative"
    >
      <div className="absolute -z-[2] w-[40%] h-[40%] -top-[150px] left-[50%] translate-x-[-50%] translate-y-[-50%] blue__gradient"></div>
      <div className="flex-[50%]">
        <img
          className="w-[460px] h-auto mx-auto"
          src={about}
          alt="caradno illustration"
        />
      </div>
      <div className="flex-[50%]">
        <h2 className="text-[3rem] font-bold">Why choose us</h2>
        <p className="mt-8 mb-12 text-textColor">
          Experience the difference in job hunting. Inside our Discord
          community, you can share your CV directly with recruiters, engage in
          industry discussions, access invaluable resources, and receive
          personalized career advice. Experience the difference in job hunting.
          Inside our Discord community, you can share your CV directly with
          recruiters, engage in industry discussions, access invaluable
          resources, and receive personalized career advice.
        </p>
        <CtaButton
          className="bg-[length:200%_100%] bg-[linear-gradient(110deg,#044fc8,45%,#477dd5,55%,#044fc8)] animate-shimmer"
          children="Join our discord community"
        />
      </div>
    </section>
  );
};
