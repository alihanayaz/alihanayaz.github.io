"use client";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { capitalizeFirstLetter } from "@/_lib/helpers";
import { Profile } from "./Profile";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: "home", href: "/" },
    { label: "journey", href: "/journey" },
  ];

  return (
    <div className={styles.navbar}>
      <Profile />
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
                  priority={true}
                ></Image>
              </div>
              <span>{capitalizeFirstLetter(link.label)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
