import styles from "./Socials.module.scss";
import socialsData from "@/_data/socials.json";
import Card from "@/_components/Card";

export function Socials() {
  return (
    <Card>
      <div className={styles.socials}>
        {socialsData.map((social, i) => {
          return (
            <a
              href={social.url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          );
        })}
      </div>
    </Card>
  );
}
