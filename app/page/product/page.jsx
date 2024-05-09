"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "@/app/style/product.module.css";

const productData = [
 
  {
    image: "/assets/hero6.png",
    title: "Hp Elite Revolve 810 G3",
    Price: 24000,
    offer: 10,
  },
  {
    image: "/assets/hero6.png",
    title: "Hp Elite Revolve 810 G3",
    Price: 24000,
    offer: 10,
  },
  {
    image: "/assets/hero7.png",
    title: "Hp probook x360 11 G5",
    Price: 21999,
    offer: 12,
  },
  {
    image: "/assets/hero8.png",
    title: "Iphone 15 pro max",
    Price: 210000,
    offer: 5,
  },
];

export default function ProductPage() {
  const router = useRouter();

  const addToCart = async () => {
    toast.success(`Item added to cart successfully`);
  };

  const buyNow = () => {
    router.push({ pathname: "/payment" });
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.productCardHeader}>
        <h4>Your number one affordable site</h4>
        <h1>Products Available</h1>
      </div>
      <div  className={styles.productContainerInner}>
      {productData.map((item, index) => (
        <div className={styles.productCard} key={index}>
          <div className={styles.productCardImgSection}>
            <div className={styles.productCardOffer}>{item.offer}%</div>
            <Image
              src={item.image}
              alt={item.title}
              className={styles.productCardImage}
              width={500}
              height={500}
            />
            <div className={styles.productCardHidden}>
              <button
                className={styles.productCardHiddenBtn}
                onClick={addToCart}
              >
                add to cart
              </button>
              <button
                className={`${styles.productCardHiddenBtn} ${styles.hiddenBtnActive}`}
                onClick={buyNow}
              >
                buy now
              </button>
            </div>
          </div>
          <div className={styles.productCardInfo}>
              <h1>{item.title}</h1>
              <h3>{item.Price} Ksh</h3>
          </div>
        </div>
      ))}
      </div>
    
    </div>
  );
}