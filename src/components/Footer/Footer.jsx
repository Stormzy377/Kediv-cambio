import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import styles from './Footer.module.css';
import useOnScreen from "../../hooks/useOnScreen";


const columns = [
  { title: 'Análises', links: ['Gráfico', 'Simulador'] },
  { title: 'Recursos', links: ['Sobre nós', 'Notícias'] },
  { title: 'Legal', links: ['Política de Privacidade', 'Termos de uso'] },
  { title: 'Ajuda', links: ['FAQ', 'Whatsapp'] },
];

const socials = [
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaXTwitter, label: 'X' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaInstagram, label: 'Instagram' },
];

function Footer() {
    const [ref, isVisible] = useOnScreen();

  return (
    <footer ref={ref} className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <p className={styles.logo}>Kediv Câmbio</p>
            <p className={styles.tagline}>Informação de câmbio para Angola</p>
          </div>

          <div className={styles.columns}>
            {columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.linkList}>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.link}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.socials}>
          {socials.map(({ icon: Icon, label }) => (
            <a key={label} href="#" aria-label={label} className={styles.socialLink}>
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Kediv Câmbio · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;