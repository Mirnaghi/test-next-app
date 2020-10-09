import styles from './ModuleCard.module.css'


export default function ModuleCard({module}) {
    return (
        <div class={styles.module__card}>
            <section class={styles.enrollment}>
                <i className={`${styles.icon} fas fa-user`}></i>
                <p className={styles.enrollment__p}>{module.enrollment} nəfər</p>
                <div class={styles.done}>
                    <p className={styles.done__p}>Tamamlanmış</p>
                </div>
            </section>
            <section class={styles.main}>
                <h2 className={styles.module__title}>{module.title}</h2>
                <p className={styles.main__p}>
                    {module.info}
                    </p>
                <div class={styles.detail}>
                    <p className={styles.detail__p}>{module.lessons} dərs  |  Video materiallar  |  Xüsusi kontent</p>
                    <button className={styles.detail__button}>DAVAM ET</button>
                </div>
            </section>
        </div>
    );
}