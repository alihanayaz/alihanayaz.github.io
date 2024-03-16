import "@/styles/timeline.scss";
import timeline from "@/data/timeline.json";
import { Card, TimelineItem } from "@/components";

export function Timeline() {
  return (
    <Card>
      <div className="timeline-container">
        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </Card>
  );
}
