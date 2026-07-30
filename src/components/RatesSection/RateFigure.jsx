import useCountUp from "../../hooks/useCountUp";
import styles from "./RatesSection.module.css";

function RateFigure({ value, label, change, market, isVisible, delay }) {
  const animatedValue = useCountUp(value, isVisible);
  const [integerPart, decimalPart] = animatedValue.toFixed(2).split(".");

  return (
    <div
      className={`${styles.rateFigure} ${isVisible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className={styles.rateValue}>
        <span className={styles.currency}>AOA</span>
        <span className={styles.integer}>{integerPart}</span>
        <span className={styles.decimal}>.{decimalPart}</span>
      </p>
      <p className={styles.rateLabel}>{label}</p>
      <p className={styles.rateChange}>↑ {change}</p>
      <p className={styles.rateMarket}>({market})</p>
    </div>
  );
}

export default RateFigure;
