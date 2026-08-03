import styles from './Simulator.module.css';

function CurrencyCard({ label, amount, currency }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardLabel}>{label}</span>
        <button className={styles.currencySelect}>
          {currency} <span className={styles.chevron}>⌄</span>
        </button>
      </div>
      <p className={styles.amount}>{amount}</p>
    </div>
  );
}

export default CurrencyCard;