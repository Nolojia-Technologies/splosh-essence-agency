"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/public/assets/logo.png";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";
import BackBtn from "@/app/components/BackButton";

import {
  PhoneIcon,
  KeyIcon as PasswordIcon,
  UserIcon as UserNameIcon,
  EyeIcon as ShowPasswordIcon,
  EyeSlashIcon as HidePasswordIcon,
} from "@heroicons/react/24/outline";

export default function SignUp() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const policy = () => {
    router.push("/page/policy", { scroll: false });
  };

  const readTerms = () => {
    router.push("/page/terms", { scroll: false });
  };

  const Login = () => {
    router.push("/authentication/login", { scroll: false });
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
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
          isAgent: pathname.includes("agent"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.message) {
        toast.success(data.message);
        return;
      }

      const token = data.token;
      localStorage.setItem("email", formData.email);
      localStorage.setItem("username", formData.username);
      localStorage.setItem("phoneNumber", formData.phoneNumber);
      toggleAuth(token, pathname.includes("agent"));
      toast.success("Account created successfully! Check email to verify account");
    router.push("/authentication/login", { scroll: false });
  } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      });
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.authComponent}>
      <BackBtn />
      <div className={styles.authComponentBgImage}>
        <Image src={logo} alt="Signup Image" quality="100" priority />
      </div>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Signup</h1>
            <p>Enter account details</p>
          </div>
          <div className={styles.authInput}>
            <UserNameIcon className={styles.authIcon} width={20} height={20} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className={styles.authInput}>
            <UserNameIcon className={styles.authIcon} width={20} height={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.authInput}>
            <PhoneIcon className={styles.authIcon} width={20} height={20} />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className={styles.authInput}>
            <PasswordIcon className={styles.authIcon} width={20} height={20} />
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
                <HidePasswordIcon className={styles.authIcon} width={20} height={20} />
              ) : (
                <ShowPasswordIcon className={styles.authIcon} width={20} height={20} />
              )}
            </button>
          </div>
          <div className={styles.authInput}>
            <PasswordIcon className={styles.authIcon} width={20} height={20} />
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
                <HidePasswordIcon className={styles.authIcon} width={20} height={20} />
              ) : (
                <ShowPasswordIcon className={styles.authIcon} width={20} height={20} />
              )}
            </button>
          </div>
          <div className={styles.authBottomBtn}>
            <button type="submit" disabled={isLoading} className={styles.formAuthButton}>
              {isLoading ? <Loader /> : "Sign up"}
            </button>
            <p>
              <span onClick={readTerms}>Terms and Conditions</span> &{" "}
              <span onClick={policy}>Privacy Policy</span>
            </p>
          </div>
          <h3>
            Already have an account?{" "}
            <div className={styles.btnLogin} onClick={Login}>
              Login
            </div>
          </h3>
        </form>
      </div>
    </div>
  );
}
