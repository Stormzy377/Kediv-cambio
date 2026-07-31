import bai from "../../assets/banks/bai.png";
import bfa from "../../assets/banks/bfa.png";
import standardBank from "../../assets/banks/standard-bank.png";
import bna from "../../assets/banks/bna.png";
import bancoKeve from "../../assets/banks/keve.png";
import bancoBic from "../../assets/banks/bic.png";
import atlantico from "../../assets/banks/atlantico.png";
import caixaAngola from "../../assets/banks/bca.png";
import styles from "./LogosMarquee.module.css";

const topRow = [bai, bfa, standardBank, bna];
const bottomRow = [bancoKeve, bancoBic, atlantico, caixaAngola];

function LogoRow({ logos, direction }) {
  const baseSet = [...logos, ...logos, ...logos];
  const duplicated = [...baseSet, ...baseSet];

  return (
    <div className={styles.rowWrapper}>
      <div
        className={`${styles.row} ${direction === "right" ? styles.reverse : ""}`}
      >
        {duplicated.map((logo, index) => (
          <img key={index} src={logo} alt="" className={styles.logo} />
        ))}
      </div>
    </div>
  );
}

function LogosMarquee() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>As nossas fontes</h2>
      <LogoRow logos={topRow} direction="left" />
      <LogoRow logos={bottomRow} direction="right" />
    </section>
  );
}

export default LogosMarquee;