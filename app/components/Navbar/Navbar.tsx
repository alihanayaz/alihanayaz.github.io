"use client";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Journey", href: "/journey" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.list}>
        {links.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              className={cn(styles.listItem, {
                [styles.active]: isActive,
              })}
              key={i}
            >
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
