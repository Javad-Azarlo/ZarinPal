import React from "react";
import arrow from "../../images/arrow.svg";
import styles from "./support.module.css";
function Support() {
  return (
    <article className={styles.support}>
      <div className={styles.supportNumber}>
        <p>
          پشتیبانی 24 ساعته ، هفت روز هفته <span id={styles.line}>|</span> شماره تماس :
          <span id={styles.phoneNumber}>41239-021</span>
        </p>
      </div>
      <div className={styles.supportRequest}>
        <p>درخواست پشتیبانی</p>
        <img src={arrow} />
      </div>
    </article>
  );
}

export default Support;
