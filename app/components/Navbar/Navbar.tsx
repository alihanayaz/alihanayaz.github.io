import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Journey", href: "/journey" },
    { label: "Bookmark", href: "/bookmarks" },
    { label: "Notebook", href: "/notebook" },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.list}>
        {links.map((link) => {
          return (
            <Link href={link.href} className={styles.listItem}>
              <div className={styles.icon}>
                <Image
                  src={`/${link.label}.svg`}
                  width={24}
                  height={24}
                  alt={link.label}
                ></Image>
              </div>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
