import { ReactNode } from "react";
import { Button } from "../ui/button";

type CtaButtonProps = {
  className: string;
  children: ReactNode;
};

export const CtaButton = ({ className, children }: CtaButtonProps) => {
  return (
    <div>
      <Button
        variant="ghost"
        size="lg"
        asChild
        className={`${className} bg-accent font-semibold border border-[rgba(255,255,255,0.2)] ring ring-2 ring-[#133367] hover:ring-blue-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 hover:text-white`}
      >
        <a href="https://discord.gg/5U4Z3r2NJb" target="_blank">
          {children}
        </a>
      </Button>
    </div>
  );
};
