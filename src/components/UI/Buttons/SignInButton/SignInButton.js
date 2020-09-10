import React from 'react';
import './SignInButton.css';

const SignInButton = ({handleClick}) => {
    return(
        <button className="sign_in" onClick={handleClick}>QEYDIYYAT</button>
    );
}

export default SignInButton;