"use client";
import Image from "next/image";
import EmailImage from "@/public/assets/email.png";
import Background from "@/public/assets/pattern.png";
import DomainImage from "@/public/assets/domain.png";
import styles from "@/app/style/service.module.css";
import ProgrammingImage from "@/public/assets/programming.png";
import { useState, useEffect } from "react";

const serviceInfo = [
  {
    id: 1,
    title: 100,
    service: "Ads return",
  },
  {
    id: 2,
    title: 99,
    service: "Rate of Earning",
  },
  {
    id: 3,
    title: 1000,
    service: "Works done ",
  },
];

const serviceOffered = [
  {
    id: 1,
    title: "Domain",
    image: DomainImage,
    description:
      "Get all types of domains from .com to .co.ke with us at affordable cost. if you sell a domain as an agent, you get a 300ksh commission",
  },
  {
    id: 2,
    image: EmailImage,
    title: "Bulk Emails",
    description:
      "Send large amounts emails to recipients easily with us. If you sell bulk emails as an agent, you get a commission of ksh 1000",
  },
  {
    id: 3,
    image: ProgrammingImage,
    title: "Software Development",
    description:
      "From web design, development and maintenance done all in one as a package. Agents get 10% commission per client",
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
        <h4>Get what you need</h4>
        <h1>We offer different services depending on your need </h1>

        <div className={styles.serviceInfoContainer}>
          {serviceInfo.map((info, index) => (
            <div className={styles.infoserviceWrapper} key={index}>
              <h1
                style={{
                  fontSize: `${
                    0.9 + (animatedTitles[index] / info.title) * 0.9
                  }rem`,
                }}
              >
                {animatedTitles[index]} {info.id === 3 ? " +" : "%"}
              </h1>
              <p>{info.service}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.serviceWrapper}>
        {serviceOffered.map((card, index) => (
          <div className={styles.serviceCard} key={index}>
            <div className={styles.serviceCardImage}> 
            <Image
              className={styles.cardImg}
              src={card.image}
              alt="service Image"
              priority
            />
            </div>
       
            <div className={styles.serviceCardInfo}>
              <h1>{card.id}. {card.title}</h1>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.motivationAds}>
      <Image
          src={Background}
          alt="pattern Image"
          quality="100"
          layout="fill"
          className={styles.patternImage}
          objectFit="cover"
        />
        <h1>   &quot;Don&apos;t tell me how good you make it; tell me how good it makes me when I use it.&quot; – Leo Burnett</h1>
   
      </div>
    </div>
  );
}
