import { NavLink } from 'react-router-dom';
import { Home, LineChart, BarChart2, BookOpen, Search, Globe2 } from 'lucide-react';
import styles from './Navbar.module.css';
import useOnScreen from '../../hooks/useOnScreen';

function Navbar() {
  const [ref, isVisible] = useOnScreen();

  return (
    <nav
      ref={ref}
      className={`${styles.navbar} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.logo}>
        <span className={styles.logoIcon}>
        </span>
        Kediv Câmbio
      </div>

      <ul className={styles.links}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            <Home size={16} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/simulador" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            <LineChart size={16} /> Simulador
          </NavLink>
        </li>
        <li>
          <NavLink to="/analises" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            <BarChart2 size={16} /> Análises
          </NavLink>
        </li>
        <li>
          <NavLink to="/recursos" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            <BookOpen size={16} /> Recursos
          </NavLink>
        </li>
      </ul>

      <div className={styles.searchGroup}>
        <input
          type="text"
          placeholder="Pesquisar..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton} aria-label="Pesquisar">
          <Search size={16} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;