import styles from "./TimelineItem.module.scss";

interface TimelineItemProps {
  title?: string;
  year?: string;
  duration?: string;
  detail?: string;
}

export default function TimelineItem({ item }: { item: TimelineItemProps }) {
  const { title, year, duration, detail } = item;
  return (
    <ol className={styles.timelineItem}>
      <li className={styles.timelineItemContent}>
        <div className={styles.bulletPoint}></div>
        <div className={styles.heading}>
          {year && <span className={styles.year}>{year}</span>}
          {title && <span className={styles.title}>{title}</span>}
          {duration && <span className={styles.duration}>{duration}</span>}
        </div>
        {detail && <p className={styles.detail}>{detail}</p>}
      </li>
    </ol>
  );
}
