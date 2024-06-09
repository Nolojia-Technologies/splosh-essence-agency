"use client";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/style/verify.module.css";

import {
  CheckBadgeIcon as ApprovedIcon,
  XCircleIcon as NotApprovedIcon,
} from "@heroicons/react/24/outline";

export default function Verify({ params }) {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const { token } = params;

  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  const login = () => {
    router.push("/authentication/login", { scroll: false });
  };

  useEffect(() => {
    const verifyToken = async (token) => {
      try {
        const response = await fetch(`${SERVER_API}/user/verify/${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Verification failed!");
        }

        setIsVerified(true);
        toast.success("Verification successful!");
        login();
      } catch (error) {
        setIsVerified(false);
        toast.error(error.message || "Verification failed!");
      }
    };

    if (token) {
      verifyToken(token);
    }
  }, [token, SERVER_API, router]);

  return (
    <div className={styles.verifyComponent}>
      {isVerified ? (
        <>
          <ApprovedIcon className={styles.authIcon} width={80} height={80} />
          <h1>You are verified</h1>
        </>
      ) : (
        <>
          <NotApprovedIcon className={styles.authIcon} width={80} height={80} />
          <h1>You are not verified</h1>
        </>
      )}
    </div>
  );
}
