import React from 'react';
import styles from './SignInButton.module.css';

const SignInButton = ({handleClick, name}) => {
    return(
    <button className={styles.sign__in} onClick={handleClick}>{name}</button>
    );
}

export default SignInButton;