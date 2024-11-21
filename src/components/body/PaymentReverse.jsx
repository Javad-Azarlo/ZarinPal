import pg from "../../images/pg.svg";
import arrow from "../../images/arrow.svg";
import styles from "./tashim.module.css";
function PaymentReverse() {
  return (
    <div className={styles.onlinePayment}>
      <div className={styles.sectionText}>
        <h2>درگاه پرداخت اینترنتی</h2>
        <h3>مهندسی شده برای رشد و فروش بیشتر</h3>
        <p>
          درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر
          بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل
          می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های
          موفق می‌شود.
        </p>
        <div className={styles.sectionLinks}>
          <a href="#" className={styles.firstBtn}>
            ساخت درگاه پرداخت
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

export default PaymentReverse;
