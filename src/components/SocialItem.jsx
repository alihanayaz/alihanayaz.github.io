import "@/styles/socialitem.scss";
import { useTheme } from "@/context/ThemeContext";

export function SocialItem({ item }) {
  const { isDarkMode } = useTheme();
  const { name, url } = item;
  return (
    <a
      className={`social-item ${isDarkMode ? "dark" : "light"}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}
