import { ReactNode } from "react";

interface AnimatedTextProps {
  text: ReactNode;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  return (
    <div
      className={`group relative w-fit h-5 overflow-hidden cursor-pointer ${className}`}
    >
      {/* No transition class here because it's already being added on all h3's */}
      <h3 className="relative transform group-hover:translate-y-[-30px]">
        {text}
      </h3>
      <h3 className="relative transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-20px]">
        {text}
      </h3>
    </div>
  );
};
