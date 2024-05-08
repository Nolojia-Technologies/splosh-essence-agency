import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import StallImg from "@/public/assets/stall.jpg";
import StationaryImg from "@/public/assets/stationary.jpg";
import styles from "@/app/style/dropdownLink.module.css";
import {
  ChevronDownIcon as DropdownIcon,
  ChevronUpIcon as DropupIcon,
} from "@heroicons/react/24/outline";

export default function Dropdown({ dropPlaceHolder }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const linksData = [
    {
      linkName: "Kitchen ware",
      linkUrl: "Funiture",
    },
    {
      linkName: "",
      linkUrl: "",
    },
  ];

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownInput} onClick={() => setIsOpen(!isOpen)}>
        <h1>{selectedOption || dropPlaceHolder}</h1>
        {isOpen ? (
          <DropdownIcon
            className={styles.dropdownIcon}
            alt="Dropdown icon"
            height={16}
          />
        ) : (
          <DropupIcon
            className={styles.dropdownIcon}
            alt="Dropdown icon"
            height={18}
          />
        )}
      </div>
      {isOpen && (
        <div className={styles.dropdownArea}>
          <div className={styles.dropdownNavMiddle}>
            <Link
              href="/page/home"
              className={`${styles.dropdownLinkContainer} ${
                pathname === "/page/home" ? styles.activeLink : ""
              }`}
            >
              Kitchen ware
            </Link>
            <Link
              href="/page/about"
              className={`${styles.dropdownLinkContainer} ${
                pathname === "/page/about" ? styles.activeLink : ""
              }`}
            >
              Funiture
            </Link>

            <Link
              href="/page/service"
              className={`${styles.dropdownLinkContainer} ${
                pathname === "/page/service" ? styles.activeLink : ""
              }`}
            >
              Food Products
            </Link>
            <Link
              href="/page/service"
              className={`${styles.dropdownLinkContainer} ${
                pathname === "/page/service" ? styles.activeLink : ""
              }`}
            >
              Stationaries
            </Link>
          </div>
          <div className={styles.advertArea}>
            <Image
              className={styles.advertImg}
              src={StallImg}
              alt="Stall img"
              height={50}
              priority
            />
            <Image
              className={styles.advertImg}
              src={StationaryImg}
              alt="Stationary img"
              height={50}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
