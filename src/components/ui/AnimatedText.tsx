import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: ReactNode;
  className?: string;
  url?: string;
  download?: boolean;
}

export const AnimatedText = ({
  text,
  className = "",
  url,
  download = false,
}: AnimatedTextProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (download && url) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  };

  return (
    <div className="group relative w-fit h-5 overflow-hidden cursor-pointer">
      {/* No transition class here because it's already being added on all h3's */}
      <h3
        className={cn(
          "relative transform group-hover:translate-y-[-100%]",
          className
        )}
      >
        <a href={url} onClick={handleClick}>
          {text}
        </a>
      </h3>
      <h3
        className={cn(
          "relative transform group-hover:translate-y-[-95%]",
          className
        )}
      >
        <a href={url} onClick={handleClick}>
          {text}
        </a>
      </h3>
    </div>
  );
};
