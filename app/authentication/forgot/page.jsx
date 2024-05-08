"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";

import {
  EnvelopeIcon as EmailIcon,
} from "@heroicons/react/24/outline";

export default function Forgot() {
  const [isLoading, setIsLoading] = useState(false);
  const [terms, setTerms] = useState(false);

  const router = useRouter();

  const Login = () => {
    router.push("login", { scroll: false });
  };

  const policy = () => {
    router.push("/page/policy", { scroll: false });
  };

  const readTerms = () => {
    router.push("/page/terms", { scroll: false });
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      // const response = await fetch("/api/submit", {
      //   method: "POST",
      //   body: formData,
      // });

      toast.success("check your email for reset link")
      router.push("reset", { scroll: false });
    } catch (error) {
      console.error(error);
      toast.error("reset failed");
    } finally {
      setIsLoading(false);
    }
  }

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
            <h1>Forgot Password</h1>
            <p>Enter your Email</p>
          </div>
          {/* Email */}

          <div className={styles.authInput}>
            <EmailIcon
              className={styles.authIcon}
              alt="Email icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className={styles.authBottomBtn}>
               <button
            type="submit"
            disabled={isLoading}
            className={styles.formAuthButton}
          >
            {isLoading ? <Loader /> : "Get link"}
          </button>
          <p>
              <span onClick={readTerms}>Terms and Condition</span> &{" "}
              <span onClick={policy}> Privacy Policy</span>{" "}
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
