import useOnScreen from '../../hooks/useOnScreen';
import useCountUp from '../../hooks/useCountUp';
import styles from './WhySection.module.css';

const stats = [
  { value: 8, suffix: '+', label: 'Bancos e fontes acompanhadas' },
  { value: 100, suffix: '%', label: 'Totalmente gratuito' },
  { value: 24, suffix: 'h', label: 'Actualização contínua' },
  { value: 0, suffix: '', label: 'Registos ou contas necessárias' },
];

function StatItem({ value, suffix, label, isVisible, delay }) {
  const animatedValue = useCountUp(value, isVisible, 2000);

  return (
    <div className={styles.stat} style={{ transitionDelay: `${delay}ms` }}>
      <p className={styles.statNumber}>
        {Math.round(animatedValue)}
        {suffix}
      </p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

function WhySection({ onOpenModal }) {
  const [ref, isVisible] = useOnScreen();

  return (
    <section ref={ref} className={styles.section}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>Porquê a Kediv Câmbio</h2>

        <p className={styles.paragraph}>
          A "Kediv Câmbio" é uma plataforma independente de informação
          financeira, sem afiliação a qualquer instituição bancária ou
          entidade reguladora angolana. As taxas de câmbio apresentadas têm
          carácter meramente indicativo e são recolhidas de fontes públicas,
          incluindo o Banco Nacional de Angola e instituições bancárias
          comerciais.
        </p>

        <button className={styles.ctaButton} onClick={onOpenModal}>
          Saber mais
        </button>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;