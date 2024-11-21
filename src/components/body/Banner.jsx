import home from "../../images/home.svg";
import downArrow from "../../images/down-arrow-svgrepo-com.svg";
import styles from "../body/banner.module.css";
function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h3>بیش از 11 سال </h3>
          <h3>انتخاب مطمئن کسب و کارهای آنلاین</h3>
          <p>
            زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و
            استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های
            متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده
            است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص
            ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.
          </p>
          <div className={styles.bannerBtn}>
            <a href="#" className={styles.register}>
              ثبت نام
            </a>
            <a href="#" className={styles.login}>
              ورود
            </a>
          </div>
        </div>
        <div className={styles.bannerImg}>
          <img src={home} />
        </div>
      </div>
      <div className={styles.goDown}>
        <div></div>
        <img src={downArrow} />
      </div>
    </>
  );
}

export default Banner;
