import "@/styles/timelineitem.scss";

export function TimelineItem({ item }) {
  const { year, title, duration, detail } = item;
  return (
    <ol>
      <li>
        <div className="bullet-point"></div>
        <div className="heading">
          <span className="year">{year}</span>
          <span className="title">{title}</span>
          <span className="duration">{duration}</span>
        </div>
        <p className="detail">{detail}</p>
      </li>
    </ol>
  );
}
