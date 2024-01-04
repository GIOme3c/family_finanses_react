import styles from "../static/css/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Menu}>
      <ul className={styles.MenuItems}>
        <li className={styles.MenuItem}>Пункт меню 1</li>
        <li className={styles.MenuItem}>Пункт меню 2</li>
        <li className={styles.MenuItem}>Пункт меню 3</li>
        {/* <Link to="/" className={styles.MenuItem}>
          Главная
        </Link>
        <Link to="auth" className={styles.MenuItem}>
          Авторизация
        </Link>
        <Link to="*" className={styles.MenuItem}>
          Нет страницы
        </Link> */}
      </ul>
    </div>
  );
};

export default Header;
