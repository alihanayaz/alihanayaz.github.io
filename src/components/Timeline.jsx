import "@/styles/timeline.scss";
import timeline from "@/data/timeline.json";
import { TimelineItem } from "@/components";

export function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {timeline.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
