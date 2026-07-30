import { NavLink } from "react-router-dom";
import { Home, LineChart, BarChart2, BookOpen, Bell } from "lucide-react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Kediv Câmbio</div>

      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Home size={18} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/simulador"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <LineChart size={18} /> Simulador
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analises"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <BarChart2 size={18} /> Análises
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recursos"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <BookOpen size={18} /> Recursos
          </NavLink>
        </li>
      </ul>

      <button className={styles.alertButton}><Bell size={18} />Alertas</button>
    </nav>
  );
}

export default Navbar;