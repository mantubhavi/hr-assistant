import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import styles from "./topNavbar.module.css";

const TopNavbar = () => {
  return (
    <header className={styles.topbar}>
      <button className={styles.menuButton}>
        <FiMenu />
      </button>

      <section className={styles.right}>
        <button className={styles.notification}>
          <FiBell />
          <span>10</span>
        </button>

        <article className={styles.profile}>
          <img src="https://i.pravatar.cc/100?img=12" alt="profile" />

          <section>
            <h4>John Doe</h4>
            <p>HR Manager</p>
          </section>

          <FiChevronDown />
        </article>
      </section>
    </header>
  );
};

export default TopNavbar;
