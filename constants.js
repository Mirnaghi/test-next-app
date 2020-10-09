import React from 'react';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './fontawesome';

export const buttonFontStyle = {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": 500,
    "font-size": 14,
    "line-height": 16,
    "letter-spacing": "0.05em"
};


// fontawesome icons 
export const availableIcon = <FontAwesomeIcon 
                                    icon={faCheckCircle} 
                                    style={{color: '#2BC44D', width: 18, height: 18}}/>;
export const unavailableIcon = <FontAwesomeIcon 
                                    icon={faTimesCircle} 
                                    style={{color: '#E7574F', width: 18, height: 18}}/>;