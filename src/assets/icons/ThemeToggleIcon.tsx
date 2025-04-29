import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export const ThemeToggleIcon = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="relative w-8 h-8">
      <Sun
        onClick={toggleTheme}
        size={32}
        className={cn(
          "text-text-primary absolute cursor-pointer transition-all opacity-0 duration-300 ease-in-out hover:scale-110",
          {
            "opacity-100": theme === "light",
          }
        )}
      />
      <Moon
        onClick={toggleTheme}
        size={32}
        className={cn(
          "text-text-primary absolute cursor-pointer transition-all opacity-0 duration-300 ease-in-out hover:scale-110",
          {
            "opacity-100": theme === "dark",
          }
        )}
      />
    </div>
  );
};
