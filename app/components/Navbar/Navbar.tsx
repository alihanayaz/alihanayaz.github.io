import styles from "./Navbar.module.scss";
import { Card } from "../Card";

export function Navbar() {
  return (
    <Card>
      <nav className={styles.navbar}>
        <h1>alihan ayaz</h1>
      </nav>
    </Card>
  );
}
