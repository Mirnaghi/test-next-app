import styles from './ModuleCard.module.css';
import WhiteButton from '../../components/UI/Buttons/WhiteButton/WhiteButton';
import { userIconModule } from '../../constants';

export default function ModuleCard({module}) {
    return (
        <div class={styles.module__card}>
            <section class={styles.enrollment}>
                <div className={`${styles.icon}`}>{userIconModule}</div>
                <div className={styles.enrollment__p}>{module.enrollment} nəfər</div>
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
                    <div className={styles.detail__p}> 
                        <span> {module.lessons} dərs |</span> 
                        <span> Video materiallar |</span> 
                        <span> Xüsusi kontent</span>
                    </div>
                    <div className={styles.detail__button}><WhiteButton border={true} name="DAVAM ET"/></div>
                </div>
            </section>
        </div>
    );
}