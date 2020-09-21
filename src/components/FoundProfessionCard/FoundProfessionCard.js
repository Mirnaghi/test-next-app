import React from 'react';
import './FoundProfessionCard.css';
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton';
import { availableIcon, unavailableIcon } from '../../constants';


const FoundProfessionCard = ({profession, foreignResource, freeContent}) => {
    return  (
        <div class="card">
            <section class="card__head">
                <h2>Front-end developer</h2>
                <p>5387 istifadəçi</p>
            </section>
            <section class="detail__section">
                <div class="available__content">
                    <p>
                        {freeContent ? availableIcon: unavailableIcon} 
                        &nbsp; &nbsp; Ödənişsiz mənbələr
                    </p>
                    <p>
                        {foreignResource ? availableIcon: unavailableIcon} 
                        &nbsp; &nbsp; Xüsusi kontent
                    </p>
                </div>
                <div class="list__head">Xarici mənbələr:</div>
                <ul class="foreign__resources">
                    <li>Azərbaycan dili</li>
                    <li>English </li>
                    <li>Türk dili</li>
                </ul>
            </section>

            <section class="card__footer">
                <a>Tələblər</a>
                <WhiteButton border={true} name="Başla"/>
            </section>
        </div>
    );
}

export default FoundProfessionCard;