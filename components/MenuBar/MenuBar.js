import Link from 'next/link'
import React from 'react'
import {useState} from 'react'
import styles from './MenuBar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {openMenuBar} from '../../redux/menuBarReducer'
import {openLoginModal, openSignUpModal} from '../../redux/authModalReducer'
import {logoutUser} from '../../redux/userAuthReducer'
import SignInButton from '../UI/Buttons/SignInButton/SignInButton'
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton'
import SignUpField from '../../containers/SignUpField/SignUpField'
import LoginField from '../../containers/LoginField/LoginField'
import AccountButton from '../UI/Buttons/AccountButton/AccountButton'

import { hamburgerIcon, closeMenuIcon} from '../../constants'


const MenuBar = (props) => {

    const clicked = useSelector(state => state.menuBarIsOpen)
    const dispatch = useDispatch()

    const user = useSelector(state => state.userAuth)

    // open login Modal and close responsive MenuBar
    const handleLoginButtonClick = () => {
        dispatch(openMenuBar(false))
        dispatch(openLoginModal(true))
    }

    // open SignIn Modal and close responsive MenuBar
    const handleSignInButtonClick = () => {
        dispatch(openMenuBar(false))
        dispatch(openSignUpModal(true))
    }

    return (
        <>
        <div className={styles.menuBar}>
        
            <Link className={styles.logo} href="/"><img className={styles.logo} src="/logo.png" alt="logo"/></Link>
            <div className={styles.icons__for__mobile} onClick={() => dispatch(openMenuBar(!clicked))}>
                {clicked ? closeMenuIcon : hamburgerIcon}
            </div>
            
            <nav>
                <ul className={clicked ? styles.nav__links_active : styles.nav__links}>
                    <li className={styles.nav__link}><Link href='/about'>Haqqımızda</Link></li>
                    <li className={styles.nav__link}><Link href='/how-works'>Necə işləyirik</Link></li>
                    <li className={styles.nav__link}><Link href='/specialties'>İxtisaslar</Link></li>
                    <li className={styles.nav__link}><Link href='/wishes'>istəklər</Link></li>

                    {user.status === 0 ?
                        <div className={styles.accountButtons__container}>
                            <Link href="/account"><a className={styles.button}>
                                <AccountButton 
                                    userName={user.user.fullName} 
                                    userImg="/user_photo.jpg"/>
                            </a></Link>
                            <a className={styles.hidden__button}>
                                <WhiteButton
                                    name="LOG OUT"
                                    handleClick={() => dispatch(logoutUser())}/>
                            </a>
                        </div> 
                    :
                        <div className={styles.buttons__container}>
                            <a className={styles.button}>
                                <WhiteButton 
                                    name="DAXIL OL" 
                                    handleClick={handleLoginButtonClick} />
                            </a>
                            <a className={styles.button}>
                                <SignInButton 
                                    name="QEYDIYYAT" 
                                    handleClick={handleSignInButtonClick}/>
                            </a>
                        </div> }
                </ul>
            </nav>
            
            
            <img className={styles.search__icon} src="/search-icon.png" alt="s"/>
        </div>
        <SignUpField />
        <LoginField />
        </>
    )
}

export default MenuBar;