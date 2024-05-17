"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WhiteLogo from "@/public/assets/whiteLogo.png"
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import TelegramIcon from "@/public/icons/telegram.svg";
import TwitterIcon from "@/public/icons/twitter.svg";
import WhatsappIcon from "@/public/icons/whatsapp.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import styles from "@/app/style/footer.module.css";

import {
  PhoneIcon,
  MapPinIcon as LocationIcon,
  EnvelopeIcon as MailIcon,
} from "@heroicons/react/24/outline";

export default function FooterPage() {
  const pathname = usePathname();

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/+254764703719?text=Hi welcome to Splosh Essence Agency",
      "_blank"
    );
  };

 
  const openFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=123", "_blank");
  };

  const openTwitter = () => {
    window.open(
      "https://twitter.com/SploshEssenceAgency_?s=21&t=ordgrMn8HjrBLUy3PdpsBA",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open(
      "https://instagram.com/SploshEssenceAgency_?igshid=MTIzZWMxMTBkOA==",
      "_blank"
    );
  };

  const openYoutube = () => {
    window.open("https://www.youtube.com/@SploshEssenceAgency", "_blank");
  };

  return (
    <div className={styles.contactContainer} id="footer">
      <div className={styles.contactWrapper}>
        <div className={styles.contactPart}>
          <Image
            className={styles.contactLogo}
            src={WhiteLogo}
            alt="logo icon"
            height={100}
            priority
          />
          <p>We are here for you</p>
          <div className={styles.contactIcons}>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openFacebook()}
                className={styles.socialIcons}
                src={FacebookIcon}
                alt="social icon"
                height={30}
                priority
              />
            </div>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openInstagram()}
                className={styles.socialIcons}
                src={InstagramIcon}
                alt="social icon"
                height={30}
                priority
              />
            </div>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openTelegram()}
                className={styles.socialIcons}
                src={TelegramIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openTwitter()}
                className={styles.socialIcons}
                src={TwitterIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>

            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openWhatsapp()}
                className={styles.socialIcons}
                src={WhatsappIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>

            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openYoutube()}
                className={styles.socialIcons}
                src={YoutubeIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.contactPart}>
          <h1>Links</h1>
          <Link
            href="/page/about"
            className={`${styles.LinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/page/service"
            className={`${styles.LinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Service
          </Link>

          <Link
            href="/page/policy"
            className={`${styles.LinkContainer} ${
              pathname === "/page/policy" ? styles.activeLink : ""
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/page/terms"
            className={`${styles.LinkContainer} ${
              pathname === "/page/terms" ? styles.activeLink : ""
            }`}
          >
            Terms and Condition
          </Link>
        </div>
        <div className={styles.contactPart}>
          <h1>contact</h1>
          <div className={styles.contactInfoWrapper}>
          <div className={styles.contactInfo}>
              <PhoneIcon
                className={styles.arrowIcon}
                alt="phone icon"
                width={24}
                height={24}
              />
              <h4>+254764703719</h4>
            </div>
            <div className={styles.contactInfo}>
              <LocationIcon
                className={styles.arrowIcon}
                alt="location icon"
                width={24}
                height={24}
              />
              <h4>Lavington Nairobi</h4>
            </div>
            <div className={styles.contactInfo}>
              <MailIcon
                className={styles.arrowIcon}
                alt="email icon"
                width={24}
                height={24}
              />
              <h4>contact@SploshEssenceAgency.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h4>Splosh Essence Agency ©2024 all right reserved</h4>
      </div>
    </div>
  );
}
