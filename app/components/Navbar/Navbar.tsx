import styles from "./Navbar.module.scss";
import Card from "../Card/Card";

export default function Navbar() {
  return (
    <Card>
      <nav className={styles.navbar}>
        <h1>alihan ayaz</h1>
      </nav>
    </Card>
  );
}
