import StatCard from './StatCard';
import styles from './Analytics.module.css';

function StatCardsRow() {
  return (
    <div className={styles.statsGrid}>
      <StatCard
        variant="muted"
        label="Mercado Informal"
        value="1020"
        unit="Kz"
        change="↑ +1.8% hoje"
      />
      <StatCard
        variant="dark"
        label="BNA Oficial"
        value="917"
        unit="Kz"
        change="↑ +0.4% hoje"
      />
      <StatCard
        variant="light"
        label="Melhor Banco"
        value="942"
        unit="Kz"
        change="↑ +0.6% hoje"
        note="BAI"
      />
      <StatCard
        variant="light"
        label="Diferencial"
        value="+11.2"
        unit="%"
        note="Informal vs. BNA · +103 Kz/unidade"
      />
    </div>
  );
}

export default StatCardsRow;