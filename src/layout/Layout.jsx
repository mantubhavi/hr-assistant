import TopNavbar from "./topbar/TopNavbar";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <main className={styles.layout}>
      <section className={styles.content}>
        <TopNavbar />
        <main className={styles.body}>Dashboard</main>
      </section>
    </main>
  );
};

export default Layout;
