import CurrencyDropdown from './CurrencyDropdown';
import styles from './Simulator.module.css';

function CurrencyCard({ label, amount, currency, onAmountChange, onCurrencyChange, editable }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardLabel}>{label}</span>
        <CurrencyDropdown value={currency} onChange={onCurrencyChange} />
      </div>

      {editable ? (
        <input
          type="text"
          inputMode="decimal"
          className={styles.amountInput}
          value={amount}
          onChange={(event) => onAmountChange(event.target.value)}
        />
      ) : (
        <p className={styles.amount}>{amount}</p>
      )}
    </div>
  );
}

export default CurrencyCard;