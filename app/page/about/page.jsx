"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/app/style/about.module.css";
import AboutImage from "@/public/assets/about.png";
import {
  UserGroupIcon as ReliableIcon,
  BanknotesIcon as AffordableIcon,
  GlobeAsiaAustraliaIcon as AccessibleIcon,
  ShieldCheckIcon as SecureIcon,
} from "@heroicons/react/24/outline";

const aboutInfo = [
  {
    id: 1,
    icon: AffordableIcon,
    title: "Affordable",
    about: "Get your products advertised easily with us at affordable cost",
  },
  {
    id: 2,
    icon: AccessibleIcon,
    title: "Accessible",
    about: "We are easily accessible and so is your products ",
  },
  {
    id: 3,
    icon: ReliableIcon,
    title: "Reliable",
    about: "Your need is our priority always and we always deliver",
  },
  {
    id: 4,
    icon: SecureIcon,
    title: "Secure",
    about: "Your  information is protected and secure with us",
  },
];

export default function AboutPage() {
  const router = useRouter();

  const BeAnAgent = (param) => {
    router.push(`/authentication/signup/${param}`, { scroll: true });
  };

  return (
    <div className={styles.aboutMain}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <Image
            className={styles.aboutImg}
            src={AboutImage}
            alt="About Image"
            priority
          />
        </div>
        <div className={styles.aboutInfo}>
          <div className={styles.aboutInfoTop}>
            <h4>Who we are?</h4>
            <h1>
              We are an Advertising agency that also hire 
              agents who gets a commission of upto <span> ksh 3000 </span>a day
            </h1>
          </div>
          <button
            className={styles.aboutButton}
            onClick={() => BeAnAgent("agent")}
          >
            Become an agent
          </button>
        </div>
      </div>
      <h4>Why choose us?</h4>
      <div className={styles.aboutInfoContainer}>
        {aboutInfo.map((info, index) => (
          <div className={styles.infoAboutContainer} key={index}>
            <div className={styles.infoAboutIcon}>
              <info.icon className={styles.aboutIcon} width={50} height={50} />
            </div>
            <div className={styles.infoAboutWrapper}>
              <h1>{info.title}</h1>
              <p>{info.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
