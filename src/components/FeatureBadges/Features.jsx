import { Gift, RefreshCw, Repeat, UserX } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: Gift,
    title: "Gratuito",
    description: "Acesso total à plataforma sem qualquer custo.",
  },
  {
    icon: RefreshCw,
    title: "Sempre actualizado",
    description: "Taxas actualizadas de hora em hora, todos os dias.",
  },
  {
    icon: Repeat,
    title: "Mercado formal e informal",
    description: "BNA, bancos comerciais e mercado paralelo, num só lugar.",
    highlighted: true,
  },
  {
    icon: UserX,
    title: "Sem registo",
    description: "Vê as taxas sem criar conta nem preencher formulários.",
  },
];

function Features() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Informação de carácter indicativo. Não constitui <br />
        aconselhamento financeiro.
      </h2>

      <div className={styles.grid}>
        {features.map(({ icon: Icon, title, description, highlighted }) => (
          <div
            key={title}
            className={
              highlighted
                ? `${styles.card} ${styles.cardHighlighted}`
                : styles.card
            }
          >
            <div className={styles.iconCircle}>
              <Icon size={22} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
