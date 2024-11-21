import React, { useRef, useState } from "react";
import logo_white from "../images/logo-white.svg";
import down_arrow from "../images/down-arrow-svgrepo-com.svg";
import hamburgMenu from "../images/hamburger.svg";
import cross from "../images/cross.svg";
import arrow from "../images/arrow.svg";
import styles from "./header.module.css";
function Header() {
  const [show, setShow] = useState(false);
  const refClass = useRef(null);
  const hamburgIcon = () => {
    setShow(true);
  };
  const removeHamburg = () => {
    setShow(false);
  };
  const itemMenu = () => {
    console.log(refClass.current)
    // refClass.current.style.display  = "flex"
  };
  return (
    <>
      <div>
        <img className={styles.logo} src={logo_white} alt="zarinPal logo" />
      </div>
      <nav>
        <ul className={styles.headerUl}>
          <li
            onMouseOver={itemMenu}
            className={styles.moreMenu}
            id={styles.show_product_menu}
          >
            <a href="#">محصولات</a>
            <img src={down_arrow} />
            <div ref={refClass} className={styles.productsMenu}>
              <div>
                <a href="#">
                  <p>درگاه پرداخت</p>
                  <p>مهندسی شده برای فروش بیشتر</p>
                </a>
                <a href="#">
                  <p>درگاه پرداخت</p>
                  <p>مهندسی شده برای فروش بیشتر</p>
                </a>
                <a href="#">
                  <p>درگاه پرداخت</p>
                  <p>مهندسی شده برای فروش بیشتر</p>
                </a>
              </div>
              <div>
                <a href="#">
                  <p>زرین کارت</p>
                  <p>طلایی ترین گارت بانکی </p>
                </a>
                <a href="#">
                  <p>زرین کارت</p>
                  <p>طلایی ترین گارت بانکی </p>
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="#">تعرفه ها</a>
          </li>
          <li>
            <a href="#">توسعه دهندگان</a>
          </li>
          <li>
            <a href="#">تماس با ما </a>
          </li>
          <li className={styles.moreMenu} id={styles.show_more_menu}>
            <a href="#">بیشتر</a>
            <img src={down_arrow} />
            <ul>
              <li>
                <a href="#">سوالات متداول</a>
              </li>
              <li>
                <a href="#">سوالات متداول</a>
              </li>
              <li>
                <a href="#">سوالات متداول</a>
              </li>
              <li>
                <a href="#">سوالات متداول</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">زرین پال من</a>
          </li>
        </ul>
      </nav>
      <img
        onClick={hamburgIcon}
        src={hamburgMenu}
        className={styles.hamburgIcon}
        alt="menu"
      />
      <div
        className={`${styles.hamburgMenu} ${show && styles.showHamburgMenu}`}
      >
        <div className={styles.crossIcon}>
          <img onClick={removeHamburg} src={cross} />
        </div>
        <div className={styles.hamburgItems}>
          <ul>
            <li>
              <a href="#">تعرفه ها</a>
            </li>
            <li>
              <a href="#">اپلیکیشن</a>
            </li>
            <div></div>
            <li>
              <a href="#">سوالات متداول</a>
            </li>
            <li>
              <a href="#">محصولات</a>
              <img src={down_arrow} />
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className={styles.moreItems}>
          <a href="#"> زرین پال من </a>
          <img src={arrow} />
        </div>
      </div>
    </>
  );
}

export default Header;
