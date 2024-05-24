import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const { hash } = location;

    const removeHashCharacter = (str: any) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }
    }
  }, [location]);

  return null;
};
