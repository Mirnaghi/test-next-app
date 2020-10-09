import Link from 'next/link'
import React from 'react';
import styles from './MenuBar.module.css';
// import logo from '../../public/logo.png'
// import searchIcon from '../../public/search-icon.png';
import SignInButton from '../UI/Buttons/SignInButton/SignInButton';
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton';

const MenuBar = (props) => {
    return (
        <header className={styles.menuBar}>
            <Link className={styles.logo} href="/"><img className={styles.logo} src="/logo.png" alt="logo"/></Link>
            <nav>
                <ul className={styles.nav__links}>
                    <li className={styles.nav__link}><Link href='/about'>Haqqımızda</Link></li>
                    <li className={styles.nav__link}><Link href='/how-works'>Necə işləyirik</Link></li>
                    <li className={styles.nav__link}><Link href='/specialties'>İxtisaslar</Link></li>
                    <li className={styles.nav__link}><Link href='/wishes'>istəklər</Link></li>
                </ul>
            </nav>
            <div>
                <a className="button"><WhiteButton name="DAXIL OL"/></a>
                <a className="button"><SignInButton /></a>
            </div>
            <img className={styles.search_icon} src="/search-icon.png" alt="s"/>
        </header>
    )
}

export default MenuBar;