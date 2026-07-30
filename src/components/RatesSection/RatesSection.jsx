import useOnScreen from "../../hooks/useOnScreen";
import RateFigure from "./RateFigure";
import styles from "./RatesSection.module.css";

const rates = [
  {
    value: 912.5,
    label: "1.00 USD · $",
    change: "+0.8%",
    market: "Mercado Formal",
  },
  {
    value: 1310.4,
    label: "1.00 EUR · €",
    change: "+1.2%",
    market: "Mercado Informal",
  },
];

function RatesSection() {
  const [ref, isVisible] = useOnScreen();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.header}>
        <h2 className={styles.title}>Taxas do dia</h2>
        <p className={styles.subtitle}>
          As principais moedas estrangeiras em kwanzas, actualizadas de hora em
          hora.
        </p>
      </div>

      <div className={styles.ratesRow}>
        {rates.map((rate, index) => (
          <RateFigure
            key={rate.label}
            {...rate}
            isVisible={isVisible}
            delay={index * 300}
          />
        ))}
      </div>
    </section>
  );
}

export default RatesSection;