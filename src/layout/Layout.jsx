import Footer from "../components/Footer";
import Header from "../components/Header";
import bell from "../images/bell.svg"
import styles from "./layout.module.css";
function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
      <div className={styles.bell}>
        <img src={bell}/>
      </div>
    </div>
  );
}

export default Layout;
