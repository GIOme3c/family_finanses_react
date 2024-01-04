import Header from "../components/Header";
import styles from "../static/css/Layout.module.scss";

const Layout = ({ children = null }) => {
  return (
    <section className={styles.Layout}>
      <Header />
      <div className={styles.Title}>Ttle</div>
      {children}
    </section>
  );
};

export default Layout;
