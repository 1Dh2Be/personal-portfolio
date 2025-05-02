import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverImage, setIsOverImage] = useState(false);
  const [isOverModal, setIsOverModal] = useState(false);
  const [hasPointerDevice, setHasPointerDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a pointing device (mouse/trackpad)
    const checkPointerDevice = () => {
      const hasPointer = window.matchMedia("(pointer: fine)").matches;
      setHasPointerDevice(hasPointer);
    };

    // Initial check
    checkPointerDevice();

    // Listen for changes in media query (e.g., if user connects a mouse)
    const mediaQueryList = window.matchMedia("(pointer: fine)");
    const listener = (event: MediaQueryListEvent) => {
      setHasPointerDevice(event.matches);
    };

    return () => {
      // Clean up with compatibility for older browsers
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        // For older browsers
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  useEffect(() => {
    // Only set up cursor if pointer device is detected
    if (!hasPointerDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 1.5);
      cursorY.set(e.clientY - 1.5);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isTriggerElement = target.closest("[data-cursor-trigger]");

      // Fix the selector to use proper CSS escape for / in class names
      const isModalElement = target.closest(
        ".fixed.inset-0[class*='bg-black']"
      );

      setIsOverImage(target.tagName === "IMG" && !!isTriggerElement);
      setIsHovering(!!isTriggerElement);
      setIsOverModal(!!isModalElement);
    };

    const style = document.createElement("style");
    style.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY, hasPointerDevice]);

  // If no pointer device, don't render the custom cursor
  if (!hasPointerDevice) return null;

  return (
    <>
      {/* Default cursor */}
      <motion.div
        className={cn(
          "fixed z-[99999] rounded-full pointer-events-none",
          isOverModal
            ? "h-6 w-6 bg-text-primary"
            : "h-3 w-3 bg-white mix-blend-difference"
        )}
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 0 : 1,
        }}
      />

      {/* Project/Blog cursor with circle and arrow */}
      {isHovering && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed z-[99999] pointer-events-none"
          style={{
            x: cursorX,
            y: cursorY,
            transform: `translate(${
              isOverImage
                ? "-50%, -50%"
                : "calc(-50% + 23.5px), calc(-50% + 23.5px)"
            })`,
          }}
        >
          {/* Outer circle */}
          <div
            className={cn(
              "relative w-[50px] h-[50px] rounded-full border flex items-center justify-center",
              isOverImage
                ? "border-white dark:border-black"
                : "border-black dark:border-white mix-blend-difference"
            )}
          >
            {/* Arrow */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={cn(
                isOverImage
                  ? "text-white dark:text-black"
                  : "text-black dark:text-white mix-blend-difference"
              )}
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </>
  );
};
