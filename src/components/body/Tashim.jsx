import React from "react";
import pg from "../../images/payout.svg";
import arrow from "../../images/arrow.svg";
import styles from "./tashim.module.css";
function Tashim() {
  return (
    <div className={styles.onlinePayment}>
      
      <div className={styles.sectionText}>
        <h2>تسهیم</h2>
        <h3>درگاه پرداخت اشتراکی</h3>
        <p>
          تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به
          واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا
          متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص
          واریز می‌‌شود.
        </p>
        <div className={styles.sectionLinks}>
          <a href="#" className={styles.firstBtn}>
            درخواست فعال سازی تسهیم
          </a>
          <a href="#" className={styles.secondBtn}>
            بیشتر بدانید
            <img src={arrow} />
          </a>
        </div>
      </div>
      <div>
        <img src={pg} className={styles.sectionImg} />
      </div>
    </div>
  );
}

export default Tashim;
