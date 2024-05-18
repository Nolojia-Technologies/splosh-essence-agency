"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";

import {
  PhoneIcon,
  KeyIcon as PasswordIcon,
  UserIcon as UserNameIcon,
  EyeIcon as ShowPasswordIcon,
  EyeSlashIcon as HidePasswordIcon,
} from "@heroicons/react/24/outline";

export default function SignUp() {
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toggleAuth } = useAuthStore();
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  const router = useRouter();

  const toggleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${SERVER_API}/user/register`, {
        method: "POST",
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
          isAgent: pathname.includes("/agent"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const token = data.token;
      const role = data.role;
      localStorage.setItem("token", token);
      toggleAuth(role, role);
      toast.success("Account created successfully!");
      router.push("/page/home", { scroll: false });
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      });
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.authComponent}>
      <div className={styles.authComponentBgImage}>
        <Image
          src={logo}
          alt="signup Image"
          quality="100"
          objectFit="contain"
        />
      </div>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Signup </h1>
            <p>Enter account details</p>
          </div>
          {/* Username */}
          <div className={styles.authInput}>
            <UserNameIcon
              className={styles.authIcon}
              alt="Username icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className={styles.authInput}>
            <UserNameIcon
              className={styles.authIcon}
              alt="Email icon"
              width={20}
              height={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/*  Password */}
          <div className={styles.authInput}>
            <PasswordIcon
              className={styles.authIcon}
              alt="password icon"
              width={20}
              height={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className={styles.showBtn}
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HidePasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          {/* Confirm Password */}
          <div className={styles.authInput}>
            <PasswordIcon
              className={styles.authIcon}
              alt="confirm password"
              width={20}
              height={20}
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              className={styles.showBtn}
              onClick={toggleConfirmPassword}
            >
              {showConfirmPassword ? (
                <HidePasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          {/* Phone Number */}
          <div className={styles.authInput}>
            <PhoneIcon
              className={styles.authIcon}
              alt="Phone Number icon"
              width={20}
              height={20}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className={styles.authBottomBtn}>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.formAuthButton}
            >
              {isLoading ? <Loader /> : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}