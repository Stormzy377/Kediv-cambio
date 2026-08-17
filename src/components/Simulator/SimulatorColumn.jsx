import { useState, useEffect } from 'react';
import { RefreshCw, ArrowDown } from 'lucide-react';
import CurrencyCard from './CurrencyCard';
import MiniChart from './MiniChart';
import RangeSelector from './RangeSelector';
import styles from './Simulator.module.css';

const ratesToAOA = {
  AOA: 1,
  USD: 1250,
  EUR: 1310.4,
  GBP: 1580,
  ZAR: 68.5,
};

const historyByRange = {
  '1H': [{ value: 1249 }, { value: 1250 }, { value: 1250 }, { value: 1251 }],
  '1D': [{ value: 1000 }, { value: 1115 }, { value: 1240 }, { value: 1250 }, { value: 1253 }, { value: 1251 }, { value: 1249 }, { value: 1250 }],
  '1S': [{ value: 1230 }, { value: 1235 }, { value: 1242 }, { value: 1250 }],
  '1M': [{ value: 1180 }, { value: 1210 }, { value: 1235 }, { value: 1250 }],
  '1A': [{ value: 950 }, { value: 1080 }, { value: 1150 }, { value: 1250 }],
};

function convert(amount, from, to) {
  if (amount === '' || isNaN(amount)) return '';
  const amountInAOA = amount * ratesToAOA[from];
  const result = amountInAOA / ratesToAOA[to];
  return result.toFixed(2);
}

function SimulatorColumn({ title, payLabel, receiveLabel, initialFrom, initialTo }) {
  const [fromCurrency, setFromCurrency] = useState(initialFrom);
  const [toCurrency, setToCurrency] = useState(initialTo);
  const [payAmount, setPayAmount] = useState('1000');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [selectedRange, setSelectedRange] = useState('1D');

  useEffect(() => {
    const result = convert(payAmount, fromCurrency, toCurrency);
    setReceiveAmount(result);
  }, [payAmount, fromCurrency, toCurrency]);

  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h3 className={styles.columnTitle}>{title}</h3>
        <button className={styles.refreshButton} aria-label="Actualizar">
          <RefreshCw size={16} />
        </button>
      </div>

      <CurrencyCard
        label={payLabel}
        amount={payAmount}
        currency={fromCurrency}
        onAmountChange={setPayAmount}
        onCurrencyChange={setFromCurrency}
        editable
      />

      <div className={styles.arrowDivider}>
        <ArrowDown size={16} />
      </div>

      <CurrencyCard
        label={receiveLabel}
        amount={receiveAmount}
        currency={toCurrency}
        onCurrencyChange={setToCurrency}
      />

      <div className={styles.historyHeader}>
        <span className={styles.historyLabel}>Histórico</span>
        <RangeSelector selected={selectedRange} onSelect={setSelectedRange} />
      </div>

      <MiniChart data={historyByRange[selectedRange]} />
    </div>
  );
}

export default SimulatorColumn;