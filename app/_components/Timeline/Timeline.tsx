import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import timelineData from "@/_data/timeline.json";

export function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      <h3>My Journey So Far</h3>
      {timelineData.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  );
}
