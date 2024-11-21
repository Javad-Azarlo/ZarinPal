import React from "react";
import verifiedIcon from "../../images/verifiedIcon.svg";
import splite from "../../images/splite.svg";
import support from "../../images/support.svg";
import styles from "./options.module.css";
function Options() {
  return (
    <article className={styles.attributes}>
      <div className={styles.definition}>
        <h3>ویژگی‌های درگاه پرداخت زرین‌پال</h3>
        <p>
          درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر
          وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای
          هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.
        </p>
      </div>
      <div className={styles.items}>
        <div className={`${styles.item} ${styles.firstItems}`}>
          <div>
            <img src={verifiedIcon} />
            <h4>ضمانت پرداخت</h4>
          </div>
          <p>
            درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را
            به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.
          </p>
        </div>
        <div className={`${styles.item} ${styles.secondItems}`}>
          <div>
            <img src={splite} />
            <h4>مسیردهی هوشمند</h4>
          </div>
          <p>
            استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود
            کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق
            هدایت شوند.
          </p>
        </div>
        <div className={`${styles.item} ${styles.thirdItems}`}>
          <div>
            <img src={support} />
            <h4>پشتیبانی ۲۴/۷</h4>
          </div>
          <p>
            هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و
            راهنمایی به کاربران هستیم.
          </p>
        </div>
        <div className={`${styles.item} ${styles.fourthItems}`}>
          <div>
            <img src={support} />
            <h4>امنیتِ پرداخت</h4>
          </div>
          <p>
            درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام
            پرداخت‌‌های اینترنتی آن‌هاست.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Options;
