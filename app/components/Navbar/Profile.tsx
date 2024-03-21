import styles from "./Profile.module.scss";
import Image from "next/image";

export function Profile() {
  return (
    <div className={styles.profile}>
      <Image
        src="/alihan.png"
        alt="A photo of Alihan"
        className={styles.profilePhoto}
        width={64}
        height={64}
      />
      <div className={styles.profileInfo}>
        <h1>Alihan Ayaz</h1>
        <h2>
          Frontend Developer at <span>Cimri</span>
        </h2>
      </div>
    </div>
  );
}
