import styles from "./Hero.module.css";
import useOnScreen from "../../hooks/useOnScreen";

function Hero() {
  const [ref, isVisible] = useOnScreen();

  return (
    <section ref={ref} className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>

      <h1 className={styles.title}>
        A informação do câmbio <br />
        informal que faltava.
      </h1>

      <p className={styles.subtitle}>
        Taxas do BNA, bancos comerciais e mercado paralelo, num só lugar.
      </p>
    </section>
  );
}

export default Hero;
