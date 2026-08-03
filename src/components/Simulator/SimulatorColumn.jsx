import { RefreshCw, ArrowDown } from 'lucide-react';
import CurrencyCard from './CurrencyCard';
import styles from './Simulator.module.css';

function SimulatorColumn({ title, payLabel, payAmount, payCurrency, receiveLabel, receiveAmount, receiveCurrency }) {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h3 className={styles.columnTitle}>{title}</h3>
        <button className={styles.refreshButton} aria-label="Actualizar">
          <RefreshCw size={16} />
        </button>
      </div>

      <CurrencyCard label={payLabel} amount={payAmount} currency={payCurrency} />

      <div className={styles.arrowDivider}>
        <ArrowDown size={16} />
      </div>

      <CurrencyCard label={receiveLabel} amount={receiveAmount} currency={receiveCurrency} />

      <div className={styles.chartPlaceholder}>Gráfico aqui</div>
    </div>
  );
}

export default SimulatorColumn;