import styles from './Supervisor.module.css'

export default function Supervisor({name, work}){
    return(
        <div className={styles.supervisor}>
            <img className={styles.supervisor__img} src="/supervisor.jpg"></img>
            <div className={styles.supervisor__detail}>
                <p className={styles.supervisor__name}>{name}</p>
                <p className={styles.work}>{work}-də Müəllimə</p>
            </div>
        </div>
    );
}