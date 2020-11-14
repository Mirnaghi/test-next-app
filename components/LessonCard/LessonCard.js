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

       

