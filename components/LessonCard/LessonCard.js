import styles from './LessonCard.module.css'
import { greenIcon, yellowIcon } from '../../constants';

export default function LessonCard({ lesson }){
    return (
        <div className={styles.lesson__card}>
            <secton className={styles.head__section}>
                <p className={styles.lesson__name}> What is HTML</p>
                <i><greenIcon /></i>
            </secton>
            <section className={styles.main__section}>
                <h4 className={styles.lesson__lang}>Aze</h4>
                <p className={styles.lesson__importance}>Mutleq</p>
                <p className={styles.lesson__type}>Video</p>
                <p className={styles.lesson__rate}>4.5 / 5</p>
                <p className={styles.lesson__price}>odenissiz</p>
                <a className={styles.start__button}>Basla</a>
            </section>
        </div>
    );
}