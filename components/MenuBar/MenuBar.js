import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import styles from './MenuBar.module.css'

import SignInButton from '../UI/Buttons/SignInButton/SignInButton'
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton'

import { hamburgerIcon, closeMenuIcon} from '../../constants'

const MenuBar = (props) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <header className={styles.menuBar}>
            <Link className={styles.logo} href="/"><img className={styles.logo} src="/logo.png" alt="logo"/></Link>
            <div className={styles.icons__for__mobile} onClick={handleClick}>
                {clicked ? closeMenuIcon : hamburgerIcon}
            </div>
            
            <nav>
                <ul className={clicked ? styles.nav__links_active : styles.nav__links}>
                    <li className={styles.nav__link}><Link href='/about'>Haqqımızda</Link></li>
                    <li className={styles.nav__link}><Link href='/how-works'>Necə işləyirik</Link></li>
                    <li className={styles.nav__link}><Link href='/specialties'>İxtisaslar</Link></li>
                    <li className={styles.nav__link}><Link href='/wishes'>istəklər</Link></li>

                    <div className={styles.buttons__container}>
                        <a className={styles.button}><WhiteButton name="DAXIL OL"/></a>
                        <a className={styles.button}><SignInButton /></a>
                    </div>
                </ul>
            </nav>
            
            
            <img className={styles.search__icon} src="/search-icon.png" alt="s"/>
        </header>
    )
}

export default MenuBar;