import React from 'react';
import styles from './SignInButton.module.css';

const SignInButton = ({handleClick}) => {
    return(
        <button className={styles.sign__in} onClick={handleClick}>QEYDIYYAT</button>
    );
}

export default SignInButton;