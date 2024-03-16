import "@/styles/hero.scss";
import { useTheme } from "@/context/ThemeContext";

export function Hero() {
  const { isDarkMode } = useTheme();
  return (
    <main>
      <div className={`about card ${isDarkMode ? "dark" : "light"}`}>
        <img src="/alihanayaz.png" alt="alihan ayaz"></img>
        <h2>
          frontend developer <br />
          <span>based in Istanbul.</span>
        </h2>
      </div>
      <div className={`contact card ${isDarkMode ? "dark" : "light"}`}>
        <span>have questions? get in touch.</span>
        <a href="mailto:hello@alihanayaz.tech">send an email</a>
      </div>
    </main>
  );
}
