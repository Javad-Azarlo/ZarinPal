import React from "react";
import pg from "../../images/pg.svg";
import arrow from "../../images/arrow.svg";
import styles from "./payment.module.css";
function Payment() {
  return (
    <div className={styles.onlinePayment}>
      <div>
        <img src={pg} className={styles.sectionImg} />
      </div>
      <div className={styles.sectionText}>
        <h2>زرین‌لینک</h2>
        <h3>پرداخت در شبکه‌های اجتماعی</h3>
        <p>
          زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش
          فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود.
        </p>
        <div className={styles.sectionLinks}>
          <a href="#" className={styles.firstBtn}>
            ساخت زرین لینک{" "}
          </a>
          <a href="#" className={styles.secondBtn}>
            بیشتر بدانید
            <img src={arrow} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Payment;
