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
    <MotionWrapper>
      <section id="faq" className="container my-[120px] lg:my-[150px]">
        <h2 className="text-[2.5rem] leading-[3rem] text-center lg:text-[3rem] font-bold mb-[80px] lg:mt-[100px]">
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
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem itaque error dolor magnam assumenda ad saepe sint
                  pariatur maiores fuga!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent className="text-textColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore velit, soluta dolor facere praesentium et quisquam
                  quaerat sed necessitatibus excepturi, illum veritatis! Illum
                  nam harum fugit error vitae corrupti quaerat voluptates ipsam
                  odio autem eveniet sint, blanditiis laborum quo fuga commodi,
                  accusantium doloribus aperiam! Corporis recusandae ducimus
                  rerum cupiditate ipsa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent className="text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime, vel similique sunt vitae minus eaque ipsum totam, quod
                  ipsa odio iste voluptatem libero eius nulla neque obcaecati
                  tenetur exercitationem autem, tempore expedita? Dolore dolor
                  ipsam harum.
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
