"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SpinImage from "@/public/assets/spin.png";
import styles from "@/app/style/spin.module.css";


export default function Navbar() {
  const router = useRouter();


  const goToSpin = () => {
    router.push("page/game/spin", { scroll: false });
  };


  return (
      <div className={styles.containerSpin} onClick={() => goToSpin()}>
        <h1>Free spin Wheel</h1>
        <Image
          className={styles.spinImage}
          src={SpinImage}
          alt="spin icon"
          height={50}
          priority
        />
        <p>Spin to win up to 500</p>
    </div>
  );
}
