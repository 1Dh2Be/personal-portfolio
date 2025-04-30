import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type CloseIconType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const CloseIcon = ({ setOpenMenu }: CloseIconType) => {
  const handleCloseClick = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <span
      onClick={handleCloseClick}
      className="flex items-center justify-center bg-bg-secondary rounded-full h-12 w-12 cursor-pointer text-text-primary hover:opacity-70 transition-opacity duration-300"
    >
      <X className="text-bg-primary" />
    </span>
  );
};
