import React from "react";
import insta from "./../images/instagram.svg";
import twitter from "./../images/twitter.svg";
import telegram from "./../images/telegram.svg";
import linkedin from "./../images/linkedin.svg";
import aparat from "./../images/aparat.svg";

import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerLinks}>
        <div>
          <p>محصولات</p>
          <ul>
            <li>
              <a href="#">زرین لینک</a>
            </li>
            <li>
              <a href="#">درگاه پرداخت اینترنتی</a>
            </li>
            <li>
              <a href="#">زرین کارت</a>
            </li>
            <li>
              <a href="#">تسهیم</a>
            </li>
          </ul>
        </div>
        <div>
          <p>آشنایی با زرین پال</p>
          <ul>
            <li>
              <a href="#">تعرفه ها</a>
            </li>
            <li>
              <a href="#">درباره ما </a>
            </li>
            <li>
              <a href="#">سوالات متداول</a>
            </li>
            <li>
              <a href="#">همکاری در فروش</a>
            </li>
          </ul>
        </div>
        <div>
          <p>ارتباط بیشتر</p>
          <ul>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">قوانین و مقررات</a>
            </li>
            <li>
              <a href="#">حریم خصوصی</a>
            </li>
          </ul>
        </div>
        <div>
          <p>منابع</p>
          <ul>
            <li>
              <a href="#">دریافت شماره شبا</a>
            </li>
            <li>
              <a href="#">زرین بین</a>
            </li>
            <li>
              <a href="#">توسعه دهندگان</a>
            </li>
            <li>
              <a href="#">وبلاگ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <p>زرین پال در شبکه های اجتماعی</p>
        <div>
          <a href="#">
            <img src={insta} />
          </a>
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={telegram} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
          <a href="#">
            <img src={aparat} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
