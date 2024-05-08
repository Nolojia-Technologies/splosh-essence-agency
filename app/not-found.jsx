"use client";

import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import NotFoundImage from "@/public/assets/404.png";
import styles from "@/app/style/notfound.module.css";

export default function NotFound() {

  return (
    <div className={styles.notFound}>
      <NavBar />
      <div className={styles.notFoundInner}>
        <Image
          className={styles.notFoundImg}
          src={NotFoundImage}
          height={200}
          alt="Not found image"
          priority
        />
      </div>
    </div>
  );
}
