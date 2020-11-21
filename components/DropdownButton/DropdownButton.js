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
                        <div key={values.indexOf(value)} className={styles.dropdown__item}>
                            <label for={"input"  + values.indexOf(value).toString()} className={styles.d__p}>{value}</label>
                            <input id={"input"  + values.indexOf(value).toString()} className={styles.checkbox__input} type="checkbox" name="" />
                        </div>
                    );
                })}
               
            </div>
        </div>
    );
}