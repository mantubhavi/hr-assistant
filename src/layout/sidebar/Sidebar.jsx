import {
  FiBarChart2,
  FiCalendar,
  FiCpu,
  FiDollarSign,
  FiHome,
  FiSettings,
  FiShield,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

const mainMenu = [
  {
    title: "Dashboard",
    icon: FiHome,
  },
  {
    title: "Employees",
    icon: FiUsers,
  },
  {
    title: "Leave Management",
    icon: FiCalendar,
  },
  {
    title: "Payroll",
    icon: FiDollarSign,
  },
  {
    title: "Reports",
    icon: FiBarChart2,
  },
];

const settings = [
  { title: "Departments", icon: FiHome },
  {
    title: "Roles & Permissions",
    icon: FiShield,
  },
  { title: "Users", icon: FiUserCheck },
  { title: "Settings", icon: FiSettings },
];

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <header className={styles.logo}>
        <span className={styles.logoIcon}>
          <FiUsers />
        </span>

        <article
          className={`${styles.logoText} ${isCollapsed ? styles.hidden : ""}`}
        >
          <h2>HR Assistant</h2>
          <p>Employee AI Agent</p>
        </article>
      </header>

      <nav>
        <p className={!isCollapsed ? styles.heading : styles.hidden}>MAIN</p>
        <ul className={styles.menu}>
          {mainMenu.map(({ title, icon: Icon }) => (
            <li key={title}>
              <a href="/" className={styles.menuItem} title={title}>
                <Icon />
                <span className={isCollapsed ? styles.hidden : ""}>
                  {title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className={!isCollapsed ? styles.heading : styles.hidden}>
          AI ASSISTANT
        </p>
        <ul className={styles.menu}>
          <li>
            <a
              href="/"
              className={`${styles.menuItem} ${styles.active}`}
              title="AI Assistant"
            >
              <FiCpu />
              <span className={isCollapsed ? styles.hidden : ""}>
                AI Assistant
              </span>
            </a>
          </li>
        </ul>

        <p className={!isCollapsed ? styles.heading : styles.hidden}>
          SETTINGS
        </p>
        <ul className={styles.menu}>
          {settings.map((item) => (
            <li key={item.title}>
              <a href="/" className={styles.menuItem} title={item.title}>
                {<item.icon />}
                <span className={isCollapsed ? styles.hidden : ""}>
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
