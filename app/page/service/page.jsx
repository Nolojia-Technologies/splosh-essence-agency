"use client";
import Image from "next/image";
import styles from "@/app/style/service.module.css";
import serviceImage from "@/public/assets/service.png";
import { useState, useEffect } from "react";

const serviceInfo = [
  {
    id: 1,
    title: 1330,
    service: "Car available",
  },
  {
    id: 2,
    title: 3210,
    service: "House available",
  },
  {
    id: 3,
    title: 6217,
    service: "Deliveries done ",
  },
];

export default function ServicePage() {
  const [animatedTitles, setAnimatedTitles] = useState(
    serviceInfo.map(() => 0)
  );

  useEffect(() => {
    const intervals = serviceInfo.map((info, index) => {
      const interval = setInterval(() => {
        setAnimatedTitles((prevAnimatedTitles) => {
          const newAnimatedTitles = [...prevAnimatedTitles];
          newAnimatedTitles[index] += 10;
          if (newAnimatedTitles[index] > info.title) {
            newAnimatedTitles[index] = info.title;
            clearInterval(interval);
          }
          return newAnimatedTitles;
        });
      }, 10);
      return interval;
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceInfo}>
        <div className={styles.serviceInfoTop}>
          <h4>Get what you need</h4>
          <h1>Choose the service you need easily</h1>
          <p>
            We have several services that you can choose from <br /> depending
            on your needs
          </p>
          <div className={styles.serviceInfoContainer}>
          {serviceInfo.map((info, index) => (
            <div className={styles.infoserviceWrapper} key={index}>
              <h1
                style={{
                  fontSize: `${
                    0.8 + (animatedTitles[index] / info.title) * 0.8
                  }rem`,
                }}
              >
                {animatedTitles[index]} +
              </h1>
              <p>{info.service}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className={styles.serviceWrapper}>
        <Image
          className={styles.serviceImg}
          src={serviceImage}
          alt="service Image"
          priority
        />
      </div>
    </div>
  );
}
