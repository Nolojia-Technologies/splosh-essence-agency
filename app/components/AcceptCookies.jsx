import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import styles from "@/app/style/cookie.module.css";

export default function Cookies(props) {
 const [showConsent, setShowConsent] = React.useState(!hasCookie("localConsent"));

 React.useEffect(() => {
   setShowConsent(!hasCookie("localConsent"));
 }, []);

 const acceptCookie = () => {
   setShowConsent(false);
   setCookie("localConsent", "true", {});
 };

 if (!showConsent) {
   return null;
 }

 return (
   <div className={styles.cookieContainer}>
     <h1>
       This website uses cookies to improve user experience. By using our
       website you consent to all cookies in accordance with our Cookie Policy.
     </h1>
     <button className={styles.cookieBtn} onClick={acceptCookie}>
       Accept
     </button>
   </div>
 );
}