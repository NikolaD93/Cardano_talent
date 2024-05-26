import { faq } from "@/assets/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "../shared/MotionWrapper";

export const Faq = () => {
  return (
    <MotionWrapper className="">
      <section id="faq" className="container my-[120px] lg:my-[150px]">
        <h2 className="text-[2.5rem] leading-[3rem] text-center lg:text-[3rem] font-bold mb-[80px] lg:mb-[100px]">
          Frequently asked questions
        </h2>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-0">
          <div className="lg:flex-[50%]">
            <h4 className="mb-10 text-lg hidden lg:block">
              Have a question that is not answered? <br /> You can contact us on
              <span className="font-bold"> cardanotalent@gmail.com</span>
            </h4>
            <h4 className="mb-10 text-base text-center lg:hidden">
              Have a question that is not answered? You can contact us on
              <span className="font-bold"> cardanotalent@gmail.com</span>
            </h4>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What services do you offer related to blockchain and
                  cryptocurrency?
                </AccordionTrigger>
                <AccordionContent className="text-textColor">
                  We specialize in connecting companies with top-tier talent in
                  the blockchain and cryptocurrency space, facilitating
                  collaborations that drive innovation and success.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How can Cardano's technology benefit my business or project?
                </AccordionTrigger>
                <AccordionContent className="text-textColor">
                  Cardano's technology offers heightened security, scalability,
                  and sustainability, enabling efficient and innovative
                  solutions tailored to your business needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do you connect companies with blockchain and crypto
                  talent?
                </AccordionTrigger>
                <AccordionContent className="text-textColor">
                  We bridge the gap by matching companies with highly skilled
                  blockchain and crypto professionals, ensuring the right fit
                  for your project requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="lg:flex-[50%]">
            <img
              className="w-[300px] lg:w-[460px] h-auto mx-auto"
              src={faq}
              alt=""
            />
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};
