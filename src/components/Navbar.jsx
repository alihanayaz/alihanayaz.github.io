import "@/styles/navbar.scss";
import { Card, ThemeToggleButton } from "@/components";

export function Navbar() {
  return (
    <Card>
      <nav>
        <span>alihan ayaz</span>
        <ThemeToggleButton />
      </nav>
    </Card>
  );
}
