import "@/styles/themetogglebutton.scss";
import { useTheme } from "@/context/ThemeContext";
import Sun from "@/assets/sun-solid.svg?react";
import Moon from "@/assets/moon-solid.svg?react";

export function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={toggleTheme}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
}
