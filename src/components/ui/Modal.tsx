import { createPortal } from "react-dom";
import { Button } from "./Button";
import React, { useEffect, ReactNode } from "react";

type ModalType = {
  title: string;
  description?: string;
  children?: ReactNode;
  onClose?: () => void;
  showContactButton?: boolean;
};

export const Modal = ({
  title,
  description,
  children,
  onClose,
  showContactButton,
}: ModalType) => {
  const portalDiv = document.getElementById("overlay") || document.body;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose) {
      console.log("Close button clicked");
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      if (onClose) {
        console.log("Backdrop clicked");
        onClose();
      }
    }
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    // Save the current overflow value
    const originalOverflow = document.body.style.overflow;

    // Disable scrolling on body
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
      onClick={handleBackdropClick}
    >
      <div className="flex flex-col gap-3 p-6 bg-bg-secondary rounded-lg max-w-md">
        <h3 className="text-xl font-bold text-bg-primary">{title}</h3>
        {description && (
          <div className="mb-2 text-bg-primary">{description}</div>
        )}
        {children && <div className="mb-4 text-bg-primary">{children}</div>}
        <div className="flex gap-2">
          <Button className="flex-1" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {showContactButton && (
            <Button
              className="flex-1"
              variant="secondary"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact Me
            </Button>
          )}
        </div>
      </div>
    </div>,
    portalDiv
  );
};
