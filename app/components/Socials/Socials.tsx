import styles from "./Socials.module.scss";
import socialsData from "@/data/socials.json";
import Card from "@/components/Card";
import Link from "next/link";

export function Socials() {
  return (
    <Card>
      <div className={styles.socials}>
        {socialsData.map((social, i) => {
          return (
            <Link
              href={social.url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
