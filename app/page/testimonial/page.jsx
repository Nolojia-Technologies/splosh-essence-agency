"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/style/testimonial.module.css";
import { ArrowLeftIcon,  ArrowRightIcon } from "@heroicons/react/24/solid";

const testimonialData = [
  {
    id: 1,
    role: "Customer",
    name: "Shadow Monarch",
    description:
      "I order food, shopping, house item delivery and rent cars or houses when on vacations or travelling, honestly, a life saving apps",
    imageSrc:
      "https://static.wikia.nocookie.net/p__/images/b/bf/Sung_Jin-Woo_manhwa_render_cool.webp/revision/latest/scale-to-width-down/250?cb=20230918011835&path-prefix=protagonist",
  },
  {
    id: 2,
    role: "Driver",
    name: "Shadow ",
    description:
      "Doing delivery services for the company has made my life easier",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBnMzgDXTNQ87hCeXhPZhSyZdOW8kQ6ra5HFjUTXEjxoI_7n6uuzOMQQfu009ICahZU0&usqp=CAU",
  },
];

export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const PreviousTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const NextTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { role, name, description, imageSrc } = testimonialData[currentIndex];

  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialHeader}>
        <h4>What Our Client Say?</h4>
        <h1>Client Testimonial</h1>
      </div>
      <div className={styles.testimonialContent}>
        <Image
          className={styles.testimonialImg}
          width={500}
          height={500}
          src={imageSrc}
          alt="service Image"
          priority
        />
        <div className={styles.testimonialInfo}>
          <div className={styles.testimonialBar}>
            <div className={styles.ArrowContainer} onClick={PreviousTestimony}>
              <ArrowLeftIcon
                className={styles.leftIcon}
                alt="Exit icon"
                width={20}
                height={20}
              />
            </div>
            <div className={styles.ArrowContainer} onClick={NextTestimony}>
              <ArrowRightIcon
                className={styles.rightIcon}
                alt="Exit icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={styles.testimonialInn}>
            <div className={styles.testimonialInnHead}>
              <h1>{name}</h1>
              <h4>{role}</h4>
            </div>
            <p>&quot;{description}&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
