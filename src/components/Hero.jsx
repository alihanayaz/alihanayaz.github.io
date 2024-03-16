import "@/styles/hero.scss";
import { useTheme } from "@/context/ThemeContext";

export function Hero() {
  const { isDarkMode } = useTheme();
  return (
    <main>
      <div className={`about card ${isDarkMode ? "dark" : "light"}`}>
        <img src="/alihanayaz.png" alt="alihan ayaz"></img>
        <h1>
          frontend developer <br />
          <span>based in Istanbul.</span>
        </h1>
      </div>
      <div className={`contact card ${isDarkMode ? "dark" : "light"}`}>
        <h2>Lorem ipsum dolor</h2>
        <a href="#">Resume</a>
      </div>
    </main>
  );
}
