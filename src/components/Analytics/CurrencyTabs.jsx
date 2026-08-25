import styles from "./Analytics.module.css";

const currencies = [
  { code: "USD", label: "USD · Dólar" },
  { code: "EUR", label: "EUR · Euro" },
  { code: "GBP", label: "GBP · Libra" },
  { code: "ZAR", label: "ZAR · Rand" },
  { code: "AED", label: "AED · Dirham" },
];

function CurrencyTabs({ selected, onSelect }) {
  return (
    <div className={styles.tabsRow}>
      {currencies.map(({ code, label }) => (
        <button
          key={code}
          className={
            code === selected ? `${styles.tab} ${styles.tabActive}` : styles.tab
          }
          onClick={() => onSelect(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default CurrencyTabs;