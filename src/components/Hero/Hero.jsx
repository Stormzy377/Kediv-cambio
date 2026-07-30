import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>

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
