import "@/styles/timelineitem.scss";

export function TimelineItem({ item }) {
  const { year, title, duration, detail } = item;
  return (
    <ol>
      <li>
        <div className="bullet-point"></div>
        <div className="heading">
          {year && <span className="year">{year}</span>}
          {title && <span className="title">{title}</span>}
          {duration && <span className="duration">{duration}</span>}
        </div>
        {detail && <p className="detail">{detail}</p>}
      </li>
    </ol>
  );
}
