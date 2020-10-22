import styles from './DropdownButton.module.css'

import { dropdownIcon } from '../../constants';

export default function DropdownButton({ name, values }){
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdown__btn}>
                {name}
                 <span className={styles.btn__icon}>
                    {dropdownIcon}
                 </span>
            </button>

            <div className={styles.dropdown__content}>
                { values.map(value => {
                    return (
                        <div hey={values.indexOf(value)} className={styles.dropdown__item}>
                            <span className={styles.d__p}>{value}</span>
                            <input className={styles.checkbox__input} type="checkbox" name="" />
                        </div>
                    );
                })}
                {/* <div className={styles.dropdown__item}>
                    <span className={styles.d__p}>Mutleq</span>
                    <input className={styles.checkbox__input} type="checkbox" name="" />
                </div>
                <div className={styles.dropdown__item}>
                    <span className={styles.d__p}>orta</span>
                    <input className={styles.checkbox__input} type="checkbox" name="" />
                </div>
                <div className={styles.dropdown__item}>
                    <span className={styles.d__p}>vacib</span>
                    <input className={styles.checkbox__input} type="checkbox" name="" />
                </div> */}
            </div>
        </div>
    );
}