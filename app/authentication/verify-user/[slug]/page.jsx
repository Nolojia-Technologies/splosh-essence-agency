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
import BackBtn from "@/app/components/BackButton";

import {
  CheckBadgeIcon as ApprovedIcon,
  XCircleIcon as  NotApprovedIcon,
} from "@heroicons/react/24/outline";

export default function Verify() {
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
          isAgent: pathname.includes('agent'),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if(data.message) {  
      toast.success(data.message);
      return;
      }
      const token = data.token;
      localStorage.setItem('email', formData.email)
      localStorage.setItem('username', formData.username)
      localStorage.setItem('phoneNumber', formData.phoneNumber)
      toggleAuth(token, pathname.includes('agent'));
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
      
    </div>
  );
}
