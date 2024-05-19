import { useRouter } from "next/navigation";
import styles from "@/app/style/backbtn.module.css";
import { ArrowLeftIcon as BackIcon } from "@heroicons/react/24/outline";

export default function BackBtn() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <button className={styles.backBtn} onClick={goBack}>
      <BackIcon height={18} /> 
    </button>
  );
}