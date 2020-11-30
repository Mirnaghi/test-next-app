import React from 'react';
import { 
    faCheckCircle, 
    faTimesCircle, 
    faUser, 
    faBars, 
    faTimes, 
    faChevronDown,
    faExclamationTriangle,
    faPlus } from "@fortawesome/free-solid-svg-icons";
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

// icons for MenuBar component
export const hamburgerIcon = <FontAwesomeIcon 
                                    icon={faBars}
                                    style={{color: '#FFFFFF', width: 32, height: 32}}/>

export const closeMenuIcon = <FontAwesomeIcon 
                                    icon={faTimes}
                                    style={{color: '#FFFFFF', width: 32, height: 32}}/>                                    

// icons for FoundProfessionCard component
export const availableIcon = <FontAwesomeIcon 
                                    icon={faCheckCircle} 
                                    style={{color: '#2BC44D', width: 18, height: 18}}/>;
export const unavailableIcon = <FontAwesomeIcon 
                                    icon={faTimesCircle} 
                                    style={{color: '#E7574F', width: 18, height: 18}}/>;


// icon for ModuleCard component                                    
export const userIconModule = <FontAwesomeIcon 
                                    icon={faUser}
                                    style={{color: '#C4C4C4'}}/>

export const createContentIcon = <FontAwesomeIcon 
                                    icon={faPlus}
                                    style={{color: '#60A0FF', width: 96, height: 96}}/>


// icons for LessonCard  
export const greenIcon = <FontAwesomeIcon 
                                    icon={faCheckCircle}
                                    style={{color: '#2BC44D', width: 15, height: 15}}/> 
                                    
export const yellowIcon = <FontAwesomeIcon 
                                    icon={faCheckCircle}
                                    style={{color: '#FFE071', width: 15, height: 15}}/>                                       


// dropdown icon                                    
export const dropdownIcon = <FontAwesomeIcon 
                                    icon={faChevronDown}
                                    style={{color: '#000000', width: 17, height: 15}}/>    
                                    
export const errorIcon = <FontAwesomeIcon 
                            icon={faExclamationTriangle}
                            style={{color: '#E7574F', width: 12, height: 12}}/> 
      
// used in LanguageSkillField                            
export const addIcon = <FontAwesomeIcon 
                            icon={faPlus}
                            style={{color: '#60A0FF', width: 16, height: 16}}/>  

export const removeIcon =  <FontAwesomeIcon 
                                icon={faTimes} 
                                style={{color: '#E7574F', width: 16, height: 16}}/>  


                            