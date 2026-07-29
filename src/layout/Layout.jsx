import { useState } from "react";
import TopNavbar from "./topbar/TopNavbar";
import styles from "./layout.module.css";
import Sidebar from "./sidebar/Sidebar";
import EmployeeList from "../pages/employee/EmployeeList";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <main className={styles.layout}>
      <Sidebar isCollapsed={isCollapsed} />
      <section className={styles.content}>
        <TopNavbar toggleSidebar={toggleSidebar} />

        <main className={styles.body}>
          <EmployeeList />
        </main>
      </section>
    </main>
  );
};

export default Layout;
