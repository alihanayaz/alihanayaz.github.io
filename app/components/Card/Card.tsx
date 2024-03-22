import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
