import SimulatorColumn from "../components/Simulator/SimulatorColumn";
import styles from "./Simulador.module.css";
import simulatorStyles from "../components/Simulator/Simulator.module.css";

function Simulador() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Simulador</h1>
        <div>
          <p className={styles.subtitle}>
            Converta qualquer valor nas três fontes: BNA, bancos comerciais e
            mercado informal.
          </p>
          <p className={styles.disclaimer}>
            Informação de carácter indicativo. Não constitui aconselhamento
            financeiro.
          </p>
        </div>
      </div>

      <div className={simulatorStyles.grid}>
        <SimulatorColumn
          title="Mercado Formal"
          payLabel="Você paga"
          receiveLabel="Você recebe"
          initialFrom="AOA"
          initialTo="USD"
        />
        <SimulatorColumn
          title="Mercado Informal"
          payLabel="Tenho"
          receiveLabel="Recebo"
          initialFrom="USD"
          initialTo="AOA"
        />
      </div>
    </main>
  );
}

export default Simulador;
