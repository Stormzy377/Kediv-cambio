import useOnScreen from "../../hooks/useOnScreen";
import styles from "./RatesSection.module.css";

const currencies = [
  {
    code: "GBP",
    name: "Libra Esterlina",
    buy: "1102.40 Kz",
    sell: "1104.00 Kz",
    informal: "1228.50 Kz",
    change: -0.3,
  },
  {
    code: "ZAR",
    name: "Rand Sul-Africano",
    buy: "49.80 Kz",
    sell: "50.20 Kz",
    informal: "55.60 Kz",
    change: 0.5,
  },
  {
    code: "AED",
    name: "Dirham",
    buy: "249.80 Kz",
    sell: "251.00 Kz",
    informal: "278.50 Kz",
    change: 0.3,
  },
  {
    code: "CNY",
    name: "Yuan",
    buy: "125.60 Kz",
    sell: "126.40 Kz",
    informal: "140.20 Kz",
    change: 0.2,
  },
];


function RatesTable() {
    const [ref, isVisible] = useOnScreen();

    return (
        <div
      ref={ref}
      className={`${styles.tableWrapper} ${isVisible ? styles.visible : ''}`}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Moeda</th>
            <th>Compra ↕</th>
            <th>Venda ↕</th>
            <th>Mercado Informal ↕</th>
            <th>Variação ↕</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((c) => (
            <tr key={c.code}>
              <td>{c.code} · {c.name}</td>
              <td>{c.buy}</td>
              <td>{c.sell}</td>
              <td>{c.informal}</td>
              <td className={c.change >= 0 ? styles.positive : styles.negative}>
                {c.change >= 0 ? '↑' : '↓'} {Math.abs(c.change)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.ctaWrapper}>
        <button className={styles.ctaButton}>Ver Análises</button>
      </div>
    </div>
    );
}

export default RatesTable;