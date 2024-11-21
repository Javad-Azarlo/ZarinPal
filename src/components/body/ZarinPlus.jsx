import React from "react";
import pg from "../../images/zarinplus.svg";
import arrow from "../../images/arrow.svg";
import styles from "./payment.module.css";
function ZarinPlus() {
  return (
    <div className={styles.onlinePayment}>
      <div>
        <img src={pg} className={styles.sectionImg} />
      </div>
      <div className={styles.sectionText}>
        <h2>زرین‌پلاس</h2>
        <h3> ابزار هوشمند سوددهی</h3>
        <p>
          زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در
          هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای
          وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را
          به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به
          خود اختصاص دهند.
        </p>
        <div className={styles.sectionLinks}>
          <a href="#" className={styles.firstBtn}>
            پیوستن به زرین پلاس
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

export default ZarinPlus;
