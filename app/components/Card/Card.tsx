import styles from "./Card.module.scss";
import classnames from "classnames";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  hasContent?: boolean;
  icon?: string;
  iconSize?: number;
}

export function Card({ children, hasContent, icon, iconSize }: CardProps) {
  const cardClass = classnames(styles.card, {
    [styles.hasContent]: hasContent,
  });
  return (
    <div className={cardClass}>
      {hasContent && (
        <>
          <div className={styles.icon}>
            <Image
              src={`/${icon}.svg`}
              width={iconSize}
              height={iconSize}
              alt={icon || ""}
            ></Image>
          </div>
        </>
      )}
      {children}
    </div>
  );
}
