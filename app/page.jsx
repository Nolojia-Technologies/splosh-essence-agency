'use client';
import Image from "next/image";
import toast from "react-hot-toast";
import NavBar from "@/app/components/NavBar";
import { useEffect, useState } from "react";
import AboutPage from "@/app/page/about/page";
import FooterPage from "@/app/components/Footer";
import styles from "@/app/style/home.module.css";
import ServicePage from "@/app/page/service/page";
import SpinWheel from "@/app/components/SpinWheel";
import ProductPage from "@/app/page/product/[slug]/page";
import TestimonialPage from "@/app/page/testimonial/page";
import { ChevronRightIcon as RightIcon, ChevronLeftIcon as LeftIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  const data = [
    {
      image: "/assets/hero2.png",
      title: "Unleash Your Earning Potential",
      description: "Discover a world of opportunities to monetize your skills and passion with our platform.",
    },
    {
      image: "/assets/hero6.png",
      title: "Boost Your Brand's Visibility",
      description: "Elevate your brand's presence and reach a wider audience through our effective promotion strategies.",
    },
    {
      image: "/assets/hero7.png",
      title: "Empowering Creators and Entrepreneurs",
      description: "Join our thriving community of creators and entrepreneurs, where your ideas can flourish.",
    },
    {
      image: "/assets/hero8.png",
      title: "Unlock Your Path to Success",
      description: "Embark on a journey to achieve your goals with our comprehensive suite of tools and resources.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => {
      clearInterval(interval);
    };
  },);

  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <div className={styles.homeWrapper}>
        <Image
          className={styles.advertImage}
          src={data[currentImageIndex].image}
          alt="Hero Image"
          layout="fill"
          quality={100}
          objectFit="cover"
          priority
        />
        <div className={styles.heroController}>
          <div onClick={prevImage} className={styles.heroCircle}>
            <LeftIcon className={styles.controllerIcon} height={20} />
          </div>
          <div onClick={nextImage} className={styles.heroCircle}>
            <RightIcon className={styles.controllerIcon} height={20} />
          </div>
        </div>
        <div className={styles.heroInfo}>
          <div className={styles.heroSpan}>
            <h2>Welcome</h2>
          </div>
          <h1>{data[currentImageIndex].title}</h1>
          <p>{data[currentImageIndex].description}</p>
        </div>
        <div className={styles.imageSlider}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`${styles.circleAdv} ${currentImageIndex === index ? styles.activeCircle : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <SpinWheel/>
      <AboutPage/>
      <ServicePage/>
      <ProductPage/>
      <TestimonialPage/>
      <FooterPage/>
      </div>
   
    </div>
  );
}