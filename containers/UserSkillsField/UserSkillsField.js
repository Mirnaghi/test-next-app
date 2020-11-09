import styles from './UserSkillsField.module.css'

function UserSkillsField() {
    return (
        <div className={styles.container}>
            <section className={styles.lang__skill}>
                <h2>Dil bilikləri</h2>
                <div></div>
            </section>
            <section className={styles.education}>
                <h2>Təhsil</h2>
                <div></div>
            </section>
        </div>
    );
}