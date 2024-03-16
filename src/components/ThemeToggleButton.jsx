import "@/styles/themetogglebutton.scss";
import { useTheme } from "@/context/ThemeContext";
import Sun from "@/assets/sun.svg?react";
import Moon from "@/assets/moon.svg?react";

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
