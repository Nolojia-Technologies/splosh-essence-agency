"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BarImg from "@/public/assets/bar.png";
import FoodImg from "@/public/assets/food.jpg";
import HeroImg from "@/public/assets/banner.png";
import styles from "@/app/style/manage.module.css";

import {
  UserIcon,
  ChartBarIcon as BarIcon,
  EyeIcon as ShowBalanceIcon,
  ArchiveBoxIcon as PackageIcon,
  BanknotesIcon as WidthrawIcon,
  EyeSlashIcon as HideBalanceIcon,
  ArrowUpRightIcon as IncreaseIcon,
  ArrowDownLeftIcon as DecreaseIcon,
} from "@heroicons/react/24/outline";

import TableComponent from "@/app/components/TableComponent";

const tableData = [
  {
    id: 1,
    profile: HeroImg,
    username: "Penguin Eats",
    phoneNumber: "+1(484)744-0421",
    location: "los anngelez",
    manager: "Penguin suite",
  },
];

export default function ManagePage() {
  const [Balance, setBalance] = useState(50000);
  const [Percentage, setPercentage] = useState(100);
  const [showBalance, setBalanceState] = useState(false);

  const toggleBalance = () => {
    setBalanceState(!showBalance);
  };

  const BalanceIconStatus = showBalance ? ShowBalanceIcon : HideBalanceIcon;

  return (
    <div className={styles.manageWrapper}>
      <div className={styles.manageContainer}>
        <div className={styles.manageAccount}>
          <div className={styles.accountDetails}>
            <div className={styles.accountHalf}>
              <div className={styles.halfAcc}>
                <span>Your balance</span>
                  {showBalance ? (
                    <h1> $ {Balance}</h1>
                  ) : (
                    <div className={styles.hideBalance}></div>
                  )}
              </div>
              <button className={styles.accountBtn}>
                <WidthrawIcon
                  className={styles.widthdrawIcon}
                  width={20}
                  height={20}
                />
                Withdraw
              </button>
            </div>
            <div className={styles.accountHalfD}>
              <BalanceIconStatus
                className={styles.balanceIcon}
                onClick={toggleBalance}
                alt="balance icon"
                width={30}
                height={30}
              />
              <div className={styles.accountStats}>
                <div className={styles.accountIconW}>
                  {Percentage === 100 ? (
                    <IncreaseIcon
                      className={styles.increaseIcon}
                      width={30}
                      height={30}
                    />
                  ) : (
                    <DecreaseIcon
                      className={styles.decreaseIcon}
                      width={30}
                      height={30}
                    />
                  )}

                  <BarIcon
                    className={styles.percentageIcon}
                    onClick={toggleBalance}
                    width={30}
                    height={30}
                  />
                </div>
                <h1>78.9% increase</h1>
              </div>
              <Image
                className={styles.barChart}
                src={BarImg}
                alt="charts "
                height={140}
                priority
              />
            </div>
          </div>
          <div className={styles.accountCardContain}>
            <div className={styles.accountIconB}>
              <div className={styles.accountIcon}>
                <UserIcon width={30} height={30} />
              </div>

              <h4>Customers</h4>
              <h1>230,000</h1>
            </div>
            <div className={styles.accountIconB}>
              <div className={styles.accountIcon}>
                <PackageIcon width={30} height={30} />
              </div>

              <h4>Deliveries</h4>
              <h1>130,000</h1>
            </div>
          </div>
        </div>
        <div className={styles.manageEnterprise}>
          <div className={styles.componentFood}>
            <div className={styles.componentFoodTop}>
              <h1>Uber Eat Enterprise</h1>
            </div>
            <Image
              className={styles.foodImg}
              src={FoodImg}
              alt="Food icon"
              height={100}
              priority
            />
            <div className={styles.componentFoodBottom}>
              <h4>Restaurant</h4>
            </div>
          </div>
          <div className={styles.componentFoodA}>
            <h3>Name:</h3>
            <h2>Penguin Eats</h2>
          </div>
          <div className={styles.componentFoodA}>
            <h3>Location:</h3>
            <h2>Los angles arts</h2>
          </div>
          <div className={styles.componentFoodA}>
            <h3>Contact:</h3>
            <h2>+1(484)744-0421</h2>
          </div>
          <div className={styles.componentFoodA}>
            <h3>Email:</h3>
            <h2>Penguinenterprise@gmail.com</h2>
          </div>
        </div>
      </div>
      <TableComponent Title={" Your Businesses "} TableData={tableData} />
    </div>
  );
}
