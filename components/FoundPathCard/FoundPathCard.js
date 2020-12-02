import React from 'react';
import styles from './FoundPathCard.module.css';
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton'
import { availableIcon, unavailableIcon } from '../../constants';


const FoundPathCard = ({pathData}) => {

    const path = {
        "name": pathData.name,
        "studentCount": pathData.studentCount,
        "free_cont": true,
        "foreign_resources": ["English"]
    }
    return  (
        <div class={styles.card}>
            <section class={styles.card__head}>
                <h2>{path.name}</h2>
                <p>{path.studentCount} istifadəçi</p>
            </section>
            <section class={styles.detail__section}>
                <div class={styles.available__content}>
                    <p>
                        {path.free_cont ? availableIcon: unavailableIcon} 
                        &nbsp; &nbsp; Ödənişsiz mənbələr
                    </p>
                    <p>
                        {path.foreign_resources.length > 0 ? availableIcon: unavailableIcon} 
                        &nbsp; &nbsp; Xüsusi kontent
                    </p>
                </div>
                <div class={styles.list__head}>Xarici mənbələr:</div>
                <ul class={styles.foreign__resources}>
                    {path.foreign_resources.map(resource => {
                        return (
                        <li key={path.foreign_resources.indexOf(resource)} class={styles.foreign__resource}>
                            {resource}
                        </li>);
                    })}
                </ul>
            </section>

            <section class={styles.card__footer}>
                <a className={styles.requirements}>Tələblər</a>
                <WhiteButton border={true} name="Başla"/>
            </section>
        </div>
    );
}

export default FoundPathCard;