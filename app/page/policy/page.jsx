"use client";

import styles from "@/app/style/info.module.css";

export default function PolicyPage() {
  return (
    <div className={styles.infoWrapper}>
      <h1>Privacy Policy </h1>
      <div className={styles.infoContain}>
        <h2>1. Information We Collect</h2>
        <div className={styles.contain}>
          <h3>Personal Information</h3>
          <p>
            We may collect personal information such as your name, contact
            details, delivery addresses, and payment information when you engage
            our services.
          </p>
          <h3> Transaction Information </h3>
          <p>
            We collect information about your transactions with us, including
            details of the deliveries you request and any communications
            exchanged.
          </p>
          <h3> Device Information </h3>
          <p>
            We may automatically collect certain information about your device,
            including your IP address, browser type, and operating system.
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>2. How We Use Your Information</h2>
        <div className={styles.contain}>
          <h3>Providing Services</h3>
          <p>
            We use the information collected to fulfill your delivery requests
            and provide you with the requested services.
          </p>
          <h3> Communication </h3>
          <p>
            We may use your contact information to communicate with you
            regarding your deliveries, provide updates, and respond to
            inquiries.
          </p>
          <h3> Improvement of Services </h3>
          <p>
            Your information helps us improve our services, tailor them to your
            needs, and enhance the overall customer experience.
          </p>
        </div>
      </div>

      <div className={styles.infoContain}>
        <h2>3. Information Sharing</h2>
        <div className={styles.contain}>
          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with third-party service providers who
            assist us in delivering our services, processing payments, or
            performing other functions on our behalf.
          </p>
          <h3> Legal Compliance </h3>
          <p>
            We may disclose your information when required to comply with
            applicable laws, regulations, or legal processes, or to protect our
            rights or the rights of others
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>4. Data Security</h2>
        <div className={styles.contain}>
          <p>
            We implement appropriate technical and organizational measures to
            safeguard your information and protect it from unauthorized access,
            alteration, disclosure, or destruction
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>5. Data Retention</h2>
        <div className={styles.contain}>
          <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>6. Your Choices</h2>
        <div className={styles.contain}>
          <p>
            You may choose not to provide certain personal information, but this
            may limit your ability to use certain features of our services.
          </p>
          <p>
            You may also choose to opt-out of receiving certain communications
            from us.
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>7. Children Privacy</h2>
        <div className={styles.contain}>
          <p>
            Our services are not directed to individuals under the age of 18,
            and we do not knowingly collect personal information from children
            without parental consent.
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>8. Changes to This Privacy Policy</h2>
        <div className={styles.contain}>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised policy on our website.
          </p>
        </div>
      </div>
      <div className={styles.infoContain}>
        <h2>9. Contact Us</h2>
        <div className={styles.contain}>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            our data practices, please contact us at [contact email or phone
            number].
          </p>
          <p>
            By using our delivery services, you consent to the collection, use,
            and disclosure of your information as described in this Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
