import styles from './LessonCard.module.css'
import { greenIcon, yellowIcon } from '../../constants';

export default function LessonCard({ lesson }){
    return (
        <tr className={styles.lesson__row}>
        <td className={styles.lesson__name}>
          <i className={styles.head__icon}>{greenIcon }</i>
            What is html
        </td>
        <td className={styles.lesson + " " + styles.lesson__lang}>Aze</td>
        <td className={styles.lesson + " " + styles.lesson__imp}>Mutleq</td>
        <td className={styles.lesson + " " + styles.lesson__type}>Video</td>
        <td className={styles.lesson + " " + styles.lesson__rate}>4.5 / 5</td>
        <td className={styles.lesson + " " + styles.lesson__price}>Odenissiz</td>
        <td className={styles.lesson}><a href="#" className={styles.start__button}>Basla</a></td>
      </tr>
    );
}

       


{/* <div className={styles.lesson__card}>
            <secton className={styles.head__section}>
                <i className={styles.head__icon}>{greenIcon }</i>
                <p className={styles.lesson__name}> What is HTML</p>
            </secton>
            <section className={styles.main__section}>
                <p className={styles.lesson__lang}>Aze</p>
                <p className={styles.lesson__importance}>Mutleq</p>
                <p className={styles.lesson__type}>Video</p>
                <p className={styles.lesson__rate}>4.5 / 5</p>
                <p className={styles.lesson__price}>odenissiz</p>
                <a className={styles.start__button}>Basla</a>
            </section>
        </div> */}