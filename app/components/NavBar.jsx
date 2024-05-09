"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/logo.png";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/app/store/Auth";
import { useCartStore } from "@/app/store/Cart";
import styles from "@/app/style/navbar.module.css";
import DropdownLink from "@/app/components/DropdownLink";
import GameDropdownLink from "@/app/components/GameDropdownLink";

import {
  UsersIcon,
  ShoppingBagIcon,
  XMarkIcon as CloseIcon,
  UserCircleIcon as UserIcon,
  ChevronRightIcon as RightIcon,
  Bars3BottomRightIcon as MenuIcon,
  ArrowLeftStartOnRectangleIcon as LogOutIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const router = useRouter();
  const { toggleCart } = useCartStore();
  const [show, setShow] = useState(false);
  const { isAuth, role, toggleAuth } = useAuthStore();
  const [profileImg, setProfileImg] = useState(
    "https://static.wikia.nocookie.net/p__/images/b/bf/Sung_Jin-Woo_manhwa_render_cool.webp/revision/latest/scale-to-width-down/250?cb=20230918011835&path-prefix=protagonist"
  );
  const [selected, setSelected] = useState([]);

  const [username, setUsername] = useState("Shadow Monarch");
  const pathname = usePathname();

  const toggleShow = () => {
    setShow(!show);
  };

  const Login = () => {
    router.push("/authentication/login", { scroll: false });
  };

  const logOut = () => {
    toast.success("Your logged out");
  };

  const BeAnAgent = (param) => {
    router.push(`/authentication/signup/${param}`, { scroll: true });
  };  

  return (
    <div className={styles.containerNav}>
      <div className={styles.containerNavTop}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="logo icon"
          height={50}
          priority
        />
        <div className={styles.containerNavTopWrapper}>
          <div className={styles.containerTopInn}  onClick={() => BeAnAgent("agent")}>
            <UsersIcon
              className={styles.topIcon}
              alt="agent icon"
              width={30}
              height={30}
            />
            <h1>Become an agent</h1>
          </div>
          <div className={styles.containerTopInnActive} onClick={() => Login()}>
            <UserIcon
              className={styles.topIcon}
              alt="login icon"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.containerTopInn} onClick={() => toggleCart}>
            <ShoppingBagIcon
              className={styles.topIcon}
              alt="shoping icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className={styles.NavContainer}>
        <div className={styles.NavMiddle}>
          <Link
            href="/"
            className={`${styles.LinkContainer} ${
              pathname === "/" ? styles.activeLink : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/page/about"
            className={`${styles.LinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            About us
          </Link>
          <DropdownLink
            dropPlaceHolder="Products"
          />
          <Link
            href="/page/service"
            className={`${styles.LinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/page/promotions"
            className={`${styles.LinkContainer} ${
              pathname === "/page/promotions" ? styles.activeLink : ""
            }`}
          >
            promotions
          </Link>
          <GameDropdownLink
            dropPlaceHolder="games"
          />
          <Link
            href="/page/contact"
            className={`${styles.LinkContainer} ${
              pathname === "/page/contact" ? styles.activeLink : ""
            }`}
          >
            Contact
          </Link>
        </div>
        <MenuIcon
          onClick={() => toggleShow()}
          className={styles.menuIcon}
          alt="Menu icon"
          width={50}
        />
        {/* side nav  */}
      </div>
      <div
        className={`${styles.sideNav} ${show === true ? styles.sideSlide : ""}`}
      >
        <div className={styles.topsideNav}>
          <CloseIcon
            onClick={() => toggleShow()}
            className={styles.exitIcon}
            alt="Exit icon"
            width={30}
            height={30}
          />
        </div>
        {isAuth ? (
          <div className={styles.profileContainer}>
            <Image
              className={styles.profileImg}
              src={profileImg}
              alt="logo icon"
              height={100}
              width={100}
              priority
            />
            <div className={styles.profileBar}>
              <LogOutIcon
                onClick={() => logOut()}
                className={styles.logOutIcon}
                alt="Exit icon"
                width={34}
                height={34}
              />
              <h1>{username}</h1>
            </div>
          </div>
        ) : (
          <div className={styles.profileContainer}>
            <Image
              className={styles.profileGuestImg}
              src={Logo}
              alt="logo icon"
              height={100}
              width={100}
              priority
            />
            <div className={styles.profileBar}>
              <div onClick={() => Login()} className={styles.profileLogin}>
                <UserIcon
                  className={styles.logInIcon}
                  alt="Exit icon"
                  width={34}
                  height={34}
                />
                <h1>Login now</h1>
              </div>

              <h1>Guest Account</h1>
            </div>
          </div>
        )}
        <div className={styles.sideMidNav}>
          <Link
            href="/page/home"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/home" ? styles.activeLink : ""
            }`}
          >
            Home
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/about"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            About us
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>

              
          <Link
            href="/page/collections"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/collections" ? styles.activeLink : ""
            }`}
          >
            Collections
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/promotions"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/promotions" ? styles.activeLink : ""
            }`}
          >
            Promotions
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/service"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Service
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
  
          <Link
            href="/page/contact"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Contact
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/policy"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/policy" ? styles.activeLink : ""
            }`}
          >
            Privacy Policy
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/terms"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/terms" ? styles.activeLink : ""
            }`}
          >
            Terms and Condition
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      {/* side nav  */}
    </div>
  );
}
