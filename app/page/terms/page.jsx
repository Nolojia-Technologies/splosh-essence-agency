"use client";

import styles from "@/app/style/info.module.css";

export default function TermsPage() {
  return (
    <div className={styles.infoWrapper}>
      <h1>Terms and Condition </h1>
      <div className={styles.infoContain}>
        <div className={styles.contain}>
          <h2>1.Definitions</h2>
          <p>
            Clearly define key terms such as Swift Dash, Customer, Delivery, and
            Courier.
          </p>
          <h2>2. General Provisions </h2>
          <p>
            Agreement to adhere to the outlined terms upon engaging Swift Dashs
            services.
          </p>
          <h2> 3. Delivery Services </h2>
          <p>
            We may automatically collect certain information about your device,
            including your IP address, browser type, and operating system.
          </p>
          <h2>4. Customer Responsibilities </h2>
          <p>
            Expectations for the Customer regarding packaging, labeling, and
            providing accurate pickup and delivery details.
          </p>
          <h2> 5. Payment and Fee </h2>
          <p>
            Guidelines for payment, including when it should be made and
            potential additional charges.
          </p>
          <h2>6. Payment and Fee </h2>
          <p>
            Guidelines for payment, including when it should be made and
            potential additional charges.
          </p>
          <h2>7. Liability </h2>
          <p>
            Statement of Swift Dashs limited liability for loss, damage, or
            delay during delivery, and disclaimer of responsibility for indirect
            damage
          </p>
          <h2>8. Termination of Service </h2>
          <p>
            Stipulation of Swift Dashs right to refuse or terminate service to
            any Customer without providing a reason
          </p>
          <h2>9. Governing Law</h2>
          <p>
            Specification that these terms are governed by the laws of the
            relevant jurisdiction
          </p>
        </div>
      </div>
    </div>
  );
}
