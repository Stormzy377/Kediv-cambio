import { ArrowRight } from 'lucide-react';
import useOnScreen from '../../hooks/useOnScreen';
import styles from './HighlightsSection.module.css';
import marginalImage from '../../assets/highlights/marginal.jpg';

const articles = [
  {
    image: marginalImage,
    tag: 'GUIA',
    date: '31/07/2026',
    title: 'Como enviar dinheiro para Angola em 2026: guia prático para a diáspora',
    description:
      'Enviar dinheiro para Angola ficou mais barato — mas a diferença entre prestadores pode custar-lhe muito. Guia actualizado para 2026.',
  },
];

function ArticleCard({ image, tag, date, title, description }) {
  return (
    <article className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.overlay} />

      <span className={styles.tag}>{tag}</span>

      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <button className={styles.readMore}>
          Ver mais <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

function HighlightsSection() {
  const [ref, isVisible] = useOnScreen();

  return (
    <section ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Destaques da Semana</h2>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;