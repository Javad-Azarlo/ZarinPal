import pg from "../../images/pg.svg";
import zarpl from "../../images/zarincard.svg"
import arrow from "../../images/arrow.svg";
import styles from "./zarinCard.module.css";
function ZarinCard() {
  return (
    <div className={styles.onlinePayment}>
      <div>
        <img src={zarpl} className={styles.sectionImg} />
      </div>
      <div className={styles.sectionText}>
        <h2>زرین‌کارت</h2>
        <h3> طلایی‌ترین کارتِ بانکی </h3>
        <p>
          زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است
          که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است.
          زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی
          کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ
          زرین‌‌پال بهره‌‌مند شوند.{" "}
        </p>
        <div className={styles.sectionLinks}>
          <a href="#" className={styles.firstBtn}>
            درخواست زرین کارت
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

export default ZarinCard;
