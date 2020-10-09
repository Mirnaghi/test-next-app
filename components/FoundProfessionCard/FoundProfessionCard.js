import React from 'react';
import styles from './FoundProfessionCard.module.css';
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton'
import { availableIcon, unavailableIcon } from '../../constants';


const FoundProfessionCard = ({profession, foreignResource, freeContent}) => {
    return  (
        <div class={styles.card}>
            <section class={styles.card__head}>
                <h2>Front-end developer</h2>
                <p>5387 istifadəçi</p>
            </section>
            <section class={styles.detail__section}>
                <div class={styles.available__content}>
                    <p>
                        {freeContent ? availableIcon: unavailableIcon} 
                        &nbsp; &nbsp; Ödənişsiz mənbələr
                    </p>
                    <p>
                        {foreignResource ? availableIcon: unavailableIcon} 
                        &nbsp; &nbsp; Xüsusi kontent
                    </p>
                </div>
                <div class={styles.list__head}>Xarici mənbələr:</div>
                <ul class={styles.foreign__resources}>
                    <li class={styles.foreign__resource}>Azərbaycan dili</li>
                    <li class={styles.foreign__resource}>English </li>
                    <li class={styles.foreign__resource}>Türk dili</li>
                </ul>
            </section>

            <section class={styles.card__footer}>
                <a className={styles.requirements}>Tələblər</a>
                <WhiteButton border={true} name="Başla"/>
            </section>
        </div>
    );
}

export default FoundProfessionCard;