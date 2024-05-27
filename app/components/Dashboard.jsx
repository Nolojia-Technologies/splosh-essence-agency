"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { useShowStore } from "@/app/store/Show";
import DashboardImage from "@/public/assets/ads.png";
import styles from "@/app/style/dashboard.module.css";
import { usePathname, useRouter } from "next/navigation";

import {
  HomeIcon,
  UserIcon,
  XCircleIcon as ExitIcon,
  IdentificationIcon as DriverIcon,
  BuildingStorefrontIcon as StoreIcon,
  RectangleGroupIcon as DashboardIcon,
} from "@heroicons/react/24/outline";

export default function DashboardComponent() {
  const { show, toggleShow } = useShowStore();
  const pathname = usePathname();



  return (
    <div className={`${styles.appSideNav} ${show ? styles.show : ""}`}>
      <div className={styles.dashboardExit} onClick={() => toggleShow()}>
        <ExitIcon
          className={styles.exitIcon}
          alt="Exit icon"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.dashContainer}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="logo icon"
          height={30}
          priority
        />
        <Link
          href="/page/dashboard"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/dashboard" || pathname == "/"
                ? styles.activeDash
                : ""
            }`}
          >
            <DashboardIcon className={styles.dashIcon} alt="dashboard icon" />
            <h1>Dashboard</h1>
          </div>
        </Link>
        <Link
          href="/page/customer"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/customer" ? styles.activeDash : ""
            }`}
          >
            <UserIcon className={styles.dashIcon} alt="customer icon" />
            <h1>Customers</h1>
          </div>
        </Link>
        <Link
          href="/page/driver"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/driver" ||
              pathname.startsWith("/page/driver/rental/") ||
              pathname.startsWith("/page/driver/view/")
                ? styles.activeDash
                : ""
            }`}
          >
            <DriverIcon className={styles.dashIcon} alt="rental icon" />
            <h1>Drivers</h1>
          </div>
        </Link>
        <Link
          href="/page/stores"
          className={styles.dashLinkContainer}
          onClick={() => toggleShow()}
        >
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/stores" ||
              pathname.startsWith("/page/stores/sale/") ||
              pathname.startsWith("/page/stores/sale/payment/") ||
              pathname.startsWith("/page/stores/land/") ||
              pathname.startsWith("/page/stores/land/payment/")
                ? styles.activeDash
                : ""
            }`}
          >
            <StoreIcon className={styles.dashIcon} alt="Stores icon" />
            <h1>Stores</h1>
          </div>
        </Link>
      </div>
      <div
        className={styles.dashAdsContainer}
        onClick={() => {
          goToSettings();
          toggleShow();
        }}
      >
        <Image
          className={styles.advertImage}
          src={DashboardImage}
          alt="dashboard image"
          layout="fill"
          quality={100}
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}
