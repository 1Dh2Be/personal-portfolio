import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "./Modal";

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
  const location = useLocation();
  const isCurrentPage = url === location.pathname;
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isCurrentPage || (download && url)) {
      e.preventDefault();
      if (download && url) {
        // Create a temporary link element to trigger download
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split("/").pop() || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else if (url) {
      if (url === "/about") {
        e.preventDefault();
        setIsAboutModalOpen(true);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        className={cn("group relative w-fit h-5 overflow-hidden", className)}
      >
        <h3
          className={cn(
            "relative",
            !isCurrentPage && "transform group-hover:translate-y-[-100%]",
            isCurrentPage && "opacity-80",
            className
          )}
        >
          <a
            href={url}
            onClick={handleClick}
            className={cn(isCurrentPage ? "cursor-default" : "cursor-pointer")}
          >
            {text}
          </a>
        </h3>
        <h3
          className={cn(
            "relative",
            !isCurrentPage && "transform group-hover:translate-y-[-95%]",
            isCurrentPage && "opacity-80",
            className
          )}
        >
          <a
            href={url}
            onClick={handleClick}
            className={cn(isCurrentPage ? "cursor-default" : "cursor-pointer")}
          >
            {text}
          </a>
        </h3>
      </div>
      {isAboutModalOpen && (
        <Modal
          title="About Me"
          description="About me content isn't available yet, but it's coming soon! Thank you for your patience."
          onClose={() => setIsAboutModalOpen(false)}
        />
      )}
    </>
  );
};
