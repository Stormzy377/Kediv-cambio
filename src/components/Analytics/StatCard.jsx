import styles from "./Analytics.module.css";

function StatCard({ label, value, unit, change, note, variant = "light" }) {
  return (
    <div className={`${styles.statCard} ${styles[variant]}`}>
      <span className={styles.statLabel}>{label}</span>
      <p className={styles.statValue}>
        {value} <span className={styles.statUnit}>{unit}</span>
      </p>
      {change && <p className={styles.statChange}>{change}</p>}
      {note && <p className={styles.statNote}>{note}</p>}
    </div>
  );
}

export default StatCard;