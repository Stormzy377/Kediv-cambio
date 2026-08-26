import styles from './Analytics.module.css';

const sources = [
  { name: 'Mercado Informal', buy: 1020, sell: 1025, vsBna: '+11.2%', isInformal: true },
  { name: 'BAI', buy: 942, sell: 945, vsBna: '+2.7%' },
  { name: 'BFA', buy: 938, sell: 941, vsBna: '+2.3%' },
  { name: 'BIC', buy: 935, sell: 939, vsBna: '+2.0%' },
  { name: 'Millennium Atlântico', buy: 932, sell: 936, vsBna: '+1.6%' },
  { name: 'Standard Bank', buy: 930, sell: 934, vsBna: '+1.4%' },
  { name: 'Banco Keve', buy: 928, sell: 932, vsBna: '+1.2%' },
  { name: 'Caixa Angola', buy: 926, sell: 930, vsBna: '+1.0%' },
  { name: 'Western Union', buy: 921, sell: 924, vsBna: '+0.4%' },
  { name: 'BNA (Referência)', buy: 917, sell: 919, vsBna: '—', isReference: true },
];

function SourceComparisonTable() {
  // ordena por taxa de compra, do maior para o menor —
  // exceto o BNA, que fica sempre no fim por ser a referência
  const sorted = [...sources].sort((a, b) => {
    if (a.isReference) return 1;
    if (b.isReference) return -1;
    return b.buy - a.buy;
  });

  return (
    <div className={styles.card}>
      <h3 className={styles.chartTitle}>Comparação por fonte</h3>
      <p className={styles.chartSubtitle}>Taxa de compra · USD → Kz</p>

      <table className={styles.rankTable}>
        <thead>
          <tr>
            <th>Fonte</th>
            <th>Compra</th>
            <th>Venda</th>
            <th>vs. BNA</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((source, index) => (
            <tr
              key={source.name}
              className={index === 0 ? styles.rankRowBest : styles.rankRow}
            >
              <td>
                <span className={styles.rankDot} />
                {source.name}
                {index === 0 && <span className={styles.bestBadge}>MELHOR</span>}
              </td>
              <td>{source.buy} Kz</td>
              <td>{source.sell} Kz</td>
              <td className={source.isReference ? styles.rankDash : styles.rankPositive}>
                {source.vsBna}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SourceComparisonTable;