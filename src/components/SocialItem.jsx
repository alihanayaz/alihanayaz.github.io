import "@/styles/socialitem.scss";

export function SocialItem({ item }) {
  const { name, url } = item;
  return (
    <a className="social-item" href={url}>
      {name}
    </a>
  );
}
