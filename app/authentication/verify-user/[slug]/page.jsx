"use client";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/verify.module.css";

import {
  CheckBadgeIcon as ApprovedIcon,
  XCircleIcon as NotApprovedIcon,
} from "@heroicons/react/24/outline";

export default function Verify({ token }) {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const Login = () => {
    router.push("/authentication/login", { scroll: false });
  };

  useEffect(() => {
    if (token && token.length > 1) {
      setIsVerified(true);
      toast.success("Verification successful!");
    } else {
      setIsVerified(false);
      toast.error("Verification failed!");
    }
  }, [token]);

  return (
    <div className={styles.verifyComponent}>
      {isVerified ? (
        <ApprovedIcon
          className={styles.authIcon}
          alt="approved icon"
          width={20}
          height={20}
        />
      ) : (
        <NotApprovedIcon
          className={styles.authIcon}
          alt="not approved icon"
          width={20}
          height={20}
        />
      )}
    </div>
  );
}
