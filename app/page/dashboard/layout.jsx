import styles from "@/app/style/dashLayout.module.css";
import Dashboard from "@/app/components/Dashboard";

export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <Dashboard />
      <div>{children}</div>
    </div>
  );
}
