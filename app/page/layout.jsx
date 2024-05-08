import NavBar from "@/app/components/NavBar";
import Contact from "@/app/components/Footer";
import styles from "@/app/style/pageLayout.module.css";

export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <NavBar />
      {children}
      <Contact />
    </div>
  );
}
