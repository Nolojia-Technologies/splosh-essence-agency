import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import FoodImg from "@/public/assets/food.jpg";
import FunitureImg from "@/public/assets/funiture.jpg";
import KitchenImg from "@/public/assets/kitchen.jpg";
import StationaryImg from "@/public/assets/stationary.jpg";
import styles from "@/app/style/GameDropdownLink.module.css";
import {
  ChevronDownIcon as DropdownIcon,
  ChevronUpIcon as DropupIcon,
} from "@heroicons/react/24/outline";

const dropdownLinks = [
  {
    name: "Spin Wheel",
    href: "/page/games/spin",
  },
  {
    name: "Trading",
    href: "/page/games/trade",
  }
];

export default function Dropdown({ dropPlaceHolder }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownInput} onClick={() => setIsOpen(!isOpen)}>
        <h1>{selectedOption || dropPlaceHolder}</h1>
        {isOpen ? (
          <DropdownIcon className={styles.dropdownIcon} alt="Dropdown icon" height={16} />
        ) : (
          <DropupIcon className={styles.dropdownIcon} alt="Dropdown icon" height={16} />
        )}
      </div>
      {isOpen && (
        <div className={styles.dropdownArea}>
          <div className={styles.dropdownNavMiddle}>
            {dropdownLinks.map((link) => (
              <div key={link.href} className={styles.dropdownLinkContainer}>
                <Link
                  href={link.href}
                  className={`${styles.LinkContain} ${pathname === link.href ? styles.activeLink : ""}`}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}