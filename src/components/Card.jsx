import "@/styles/card.scss";
import { useTheme } from "@/context/ThemeContext";

export function Card({ children }) {
  const { isDarkMode } = useTheme();
  return (
    <div className={`card ${isDarkMode ? "dark" : "light"}`}>{children}</div>
  );
}
