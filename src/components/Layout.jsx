import "@/styles/layout.scss";
import { ThemeProvider } from "@/context/ThemeContext";

export function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="container">{children}</div>
    </ThemeProvider>
  );
}
