import { useState, useEffect } from "react";

export const isMobile = (): boolean => {
  return window.matchMedia("(max-width: 768px)").matches;
};

export const useIsMobile = (): boolean => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return mobile;
};
