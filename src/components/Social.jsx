import "@/styles/social.scss";
import socials from "@/data/socials.json";
import { SocialItem } from "@/components";

export function Social() {
  return (
    <div className="social">
      {socials.map((item, i) => {
        return <SocialItem key={i} item={item} />;
      })}
    </div>
  );
}
