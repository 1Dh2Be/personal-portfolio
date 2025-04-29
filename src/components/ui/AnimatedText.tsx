import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: ReactNode;
  className?: string;
  url?: string;
}

// relative transform group-hover:translate-y-[-30px]

export const AnimatedText = ({
  text,
  className = "",
  url,
}: AnimatedTextProps) => {
  return (
    <div className="group relative w-fit h-5 overflow-hidden cursor-pointer">
      {/* No transition class here because it's already being added on all h3's */}
      <h3
        className={cn(
          "relative transform group-hover:translate-y-[-100%]",
          className
        )}
      >
        <a href={url}>{text}</a>
      </h3>
      <h3
        className={cn(
          "relative transform group-hover:translate-y-[-95%]",
          className
        )}
      >
        <a href={url}>{text}</a>
      </h3>
    </div>
  );
};
