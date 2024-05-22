"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "@/app/style/about.module.css";
import AboutImage from "@/public/assets/about.png";
import {
  UserGroupIcon as ReliableIcon,
  BanknotesIcon as AffordableIcon,
  GlobeEuropeAfricaIcon as WordwideIcon,
  CreditCardIcon as WithdrawIcon,
  GlobeAsiaAustraliaIcon as AccessibleIcon,
  ShieldCheckIcon as SecureIcon,
} from "@heroicons/react/24/outline";

const aboutInfo = [
  {
    id: 1,
    icon: WithdrawIcon,
    title: "Automatic withdrawal",
    about: "Easily withdraw your earnings directly to your account",
  },
  {
    id: 2,
    icon: WordwideIcon,
    title: "Available Worldwide",
    about: "We are a global company",
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
              We are an Advertising agency that also hire agents who gets a
              commission of upto <span> ksh 3000 </span>a day. With,
            </h1>
              <button
            className={styles.aboutButton}
            onClick={() => BeAnAgent("agent")}
          >
            Become an agent
          </button>
            <ul>
              <li>
                <h3>Automatic withdrawal system</h3>
                <p>
                  Easily withdraw your earnings faster directly to your account
                </p>
              </li>
              <li>
                <h3>Affordable Package</h3>
                <p>buy once for life with no renewal or upgrades</p>
              </li>
              <li>
                <h3>Full mentor support</h3>
                <p>Get mentor support on how to start</p>
              </li>
              <h3>Legalized by the government of Kenya </h3>
              <p>Approved by the government as legal company</p>
              <li>
                <h3>Transparent Policies</h3>
                <p>
                  We believe in clarity and honesty, ensuring you understand
                  every aspect of your earnings and investments.
                </p>
              </li>
              <li>
                <h3>Proven Track Record</h3>
                <p>
                  With a history of success and satisfied users, Splosh Essence
                  is a trusted platform for financial growth.
                </p>
              </li>
              <li>
                <h3>Innovative Technology:</h3>
                <p>
                  We constantly evolve and adapt, utilizing cutting-edge
                  technology to optimize your earning potential and user
                  experience.
                </p>
              </li>
              <li>
                <h3>Global Reach</h3>
                <p>
                  Whether you are in Nairobi, New York, or New Delhi, our
                  platform caters to individuals worldwide, providing equal
                  opportunities for everyone.
                </p>
              </li>
              <li>
                <h3>Community Engagement</h3>
                <p>
                  Join a thriving community of users who share knowledge,
                  support each other, and celebrate success together.
                </p>
              </li>
            </ul>
          </div>
        
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