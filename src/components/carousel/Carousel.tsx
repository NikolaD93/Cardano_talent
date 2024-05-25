import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { team } from "@/constants";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";

type PropType = {
  options?: EmblaOptionsType;
};

export const Carousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {team.map((item) => (
            <div className="embla__slide" key={item.id}>
              <CardContainer>
                <CardBody className="border border-white/20 rounded-md p-6 relative transition duration-300 hover:shadow-[0px_26px_46px_-35px_rgba(4,79,200,0.67)] hover:shadow-[0px 22px 37px -11px rgba(4,79,200,0.91)]">
                  <CardItem translateZ="60" className="w-full">
                    <img
                      className="rounded-sm h-[300px] lg:h-[260px] w-full object-cover object-top"
                      src={item.img}
                      alt={item.name}
                    />
                  </CardItem>
                  <CardItem translateZ="60">
                    <h3 className="font-bold text-[1.5rem] mt-6 mb-2">
                      {item.name}
                    </h3>
                  </CardItem>
                  <CardItem translateZ="60">
                    {" "}
                    <p className="text-textColor border-b border-white/20 pb-6">
                      {item.about}
                    </p>
                  </CardItem>
                  <div className="flex items-center justify-between pt-6">
                    <CardItem translateZ={20}>
                      <p className="font-bold">{item.role}</p>
                    </CardItem>
                    <CardItem translateZ={20}>
                      <ul className="flex gap-4">
                        {item.socials.map((social, id) => {
                          return (
                            <li key={id}>
                              <Link to={social.link} target="_blank">
                                <social.logo className="text-xl text-textColor transition duration-300 hover:text-white focus:text-white" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
