import { useTheme } from "@/context/ThemeContext";
import { Sun } from "lucide-react";

export const SunIcon = () => {
  const { toggleTheme } = useTheme();
  return (
    <Sun
      onClick={toggleTheme}
      size={32}
      className="text-app-accent cursor-pointer"
    />
  );
};
