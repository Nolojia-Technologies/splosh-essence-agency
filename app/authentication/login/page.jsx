"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";
import BackBtn from "@/app/components/BackButton";

import {
  KeyIcon as PasswordIcon,
  UserIcon as emailIcon,
  EyeIcon as ShowPasswordIcon,
  EyeSlashIcon as HidePasswordIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toggleAuth } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const SignUp = () => {
    router.push("/authentication/signup/user", { scroll: false });
  };

  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_API}/user/login`, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const token = data.token;
      toggleAuth(token);
      toast.success("Login successful!");
      router.push("/page/home", { scroll: false });
      localStorage.setItem("username", data.name);
      toggleAuth(token, pathname.includes("agent"));
      toast.success("Account created successfully!");
      router.push("/", { scroll: false });
    } catch (error) {
      if (error instanceof Object) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setIsLoading(false);
      setFormData({
        email: "",
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



const getUserDetails(token) => {
  try {
    const response = await fetch(`${SERVER_API}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Bearer": token
      },
    });
    const data = await response.json();
    const token = data.token;
    toggleAuth(token);
    toast.success("Login successful!");
    router.push("/page/home", { scroll: false });
    localStorage.setItem("username", data.name);
    toggleAuth(token, pathname.includes("agent"));
    toast.success("Account created successfully!");
    router.push("/", { scroll: false });
  } catch (error) {
    if (error instanceof Object) {
      toast.error(error.message);
    } else {
      toast.error("An error occurred");
    }
  } finally {
    setIsLoading(false);
    setFormData({
      email: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    });
  }
}

  return (
    <div className={styles.authComponent}>
      <BackBtn />
      <div className={styles.authComponentBgImage}>
        <Image src={logo} alt="signup Image" quality="100" />
      </div>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Login</h1>
            <p>Enter your account details</p>
          </div>
          {/* email */}
          <div className={styles.authInput}>
            <emailIcon
              className={styles.authIcon}
              alt="email icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/*  password */}
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
          <div className={styles.authBottomBtn}>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.formAuthButton}
            >
              {isLoading ? <Loader /> : "Login"}
            </button>
          </div>
          <h3>
            Don`t have an account?{" "}
            <div className={styles.btnLogin} onClick={SignUp}>
              Sign up
            </div>
          </h3>
        </form>
      </div>
    </div>
  );
}
