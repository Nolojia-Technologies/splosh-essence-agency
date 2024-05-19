import Cart from "@/app/components/Cart";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import styles from "@/app/style/pageLayout.module.css";

export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <NavBar />
      <Cart/>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
