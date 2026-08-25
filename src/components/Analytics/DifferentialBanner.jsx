import styles from './Analytics.module.css';

function DifferentialBanner({ label, title, subtitle, value, note }) {
  return (
    <div className={styles.banner}>
      <div>
        <span className={styles.bannerLabel}>{label}</span>
        <h3 className={styles.bannerTitle}>{title}</h3>
        <p className={styles.bannerSubtitle}>{subtitle}</p>
      </div>

      <div className={styles.bannerValueBlock}>
        <p className={styles.bannerValue}>{value}</p>
        <p className={styles.bannerNote}>{note}</p>
      </div>
    </div>
  );
}

export default DifferentialBanner;