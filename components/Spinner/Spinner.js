import styles from "./Spinner.module.css"

function Spinner() {
    return (
        <div className={styles.spinner__container}>
           <div className={styles.first__cycle}></div> 
           <div className={styles.second__cycle}></div>
        </div>
    );
}

export default Spinner;