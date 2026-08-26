import { useState } from 'react';
import RateEvolutionChart from './RateEvolutionChart';
import styles from './Analytics.module.css';

const ranges = ['7D', '14D', '30D', '3M'];

function RateEvolutionSection() {
  const [range, setRange] = useState('30D');

  return (
    <div className={styles.card}>
      <div className={styles.chartHeader}>
        <div>
          <h3 className={styles.chartTitle}>Evolução da taxa de câmbio</h3>
          <p className={styles.chartSubtitle}>Mercado Informal vs. BNA Oficial</p>
        </div>

        <div className={styles.rangeTabs}>
          {ranges.map((r) => (
            <button
              key={r}
              className={r === range ? `${styles.rangeTab} ${styles.rangeTabActive}` : styles.rangeTab}
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendDotInformal} /> Mercado Informal
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendDotBna} /> BNA Oficial
        </span>
      </div>

      <RateEvolutionChart range={range} />

      <p className={styles.chartFootnote}>
        Dados indicativos. Actualização diária. Não constitui aconselhamento financeiro.
      </p>
    </div>
  );
}

export default RateEvolutionSection;