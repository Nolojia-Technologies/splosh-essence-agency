"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "@/app/style/promotion.module.css";

const promotionData = [
  {
    image: "/assets/hero1.png",
    title: "Unleash Your Earning Potential",
    link: "href://",
  },
  {
    image: "/assets/hero2.png",
    title: "Boost Your Brand's Visibility",
    link: "href://",

  },
  {
    image: "/assets/hero3.jpg",
    title: "Empowering Creators and Entrepreneurs",
    link: "href://",

  },
  {
    image: "/assets/hero4.jpg",
    title: "Unlock Your Path to Success",
    link: "href://",

  },
];

export default function PromotionPage() {
  const router = useRouter();

  const openLink = async (link) => {
    window.open(link, "_blank")
  };


  return (
    <div className={styles.promotionContainer}>
      <div className={styles.promotionCardHeader}>
        <h4>Advertise your promotion easily with us today</h4>
        <h1>Promotions</h1>
      </div>
      <div  className={styles.promotionContainerInner}>
      {promotionData.map((item, index) => (
        <div className={styles.promotionCard} key={index} onClick={() => openLink(item.link)}>
          <div className={styles.promotionCardImgSection}>
            <Image
              src={item.image}
              alt={item.title}
              className={styles.promotionCardImage}
              width={500}
              height={500}
            />
          </div>
          <div className={styles.promotionCardInfo}>
              <h1>{item.title}</h1>
          </div>
        </div>
      ))}
      </div>
    
    </div>
  );
}