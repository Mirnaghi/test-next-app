import styles from './SupervisorsField.module.css'

import Supervisor from '../../components/Supervisor/Supervisor'
import WhiteButton from '../../components/UI/Buttons/WhiteButton/WhiteButton'

export default function SupervisorsField() {
    return (
        <div className={styles.supervisors__field}>
            <header className={styles.supervisors__header}>
                <p className={styles.header__p}>Supervayzerlər</p><span><a className={styles.header__a}>Hamısı</a></span>
            </header>
            <div className={styles.main}>
                <Supervisor name="Vəliyeva Sara" work="CodeAcademy"/>
                <Supervisor name="Vəliyeva Sara" work="CodeAcademy"/>
                <Supervisor name="Vəliyeva Sara" work="CodeAcademy"/>
                <Supervisor name="Vəliyeva Sara" work="CodeAcademy"/>
                <Supervisor name="Vəliyeva Sara" work="CodeAcademy"/>
            </div>
            <footer className={styles.supervisors__footer}>
                <div className={styles.supervisors__button}><WhiteButton border={true} name="Supervizor təklif et" /></div>
            </footer>
        </div>

    );
}


