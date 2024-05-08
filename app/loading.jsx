import styles from "@/app/style/loading.module.css";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
export default function Loading() {
  return (
    <div className={styles.loadingComponent}>
      <div className={styles.loaderHome}>
        <Image
          className={styles.logoHome}
          src={Logo}
          alt="logo icon"
          width={80}
          height={80}
          priority
        />
        <span className={styles.loader}>Splosh</span>
      </div>
    </div>
  );
}
