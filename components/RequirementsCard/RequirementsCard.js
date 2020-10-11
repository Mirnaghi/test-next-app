import styles from './RequirementsCard.module.css'

export default function RequirementsCard({requirements}){
    return (
        <div className={styles.requirements__card}>
        <p className={styles.requirements__head}>Lazım olanlar</p>
        <ul className={styles.requirements__list}>
            <li className={styles.r__list_item}>*4GB RAM</li>
            <li className={styles.r__list_item}>*İntel İ3</li>
            <li className={styles.r__list_item}>*1366-768 screen res</li>
        </ul>
    </div>
    );
}