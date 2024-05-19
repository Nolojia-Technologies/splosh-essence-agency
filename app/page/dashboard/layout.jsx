import SideNav from "@/app/components/SideNav";
import styles from "@/app/style/pageLayout.module.css";

export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
