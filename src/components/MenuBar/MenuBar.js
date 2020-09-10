import React from 'react';
import './MenuBar.css';
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search-icon.png';
import SignInButton from '../UI/Buttons/SignInButton/SignInButton';
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton';

const MenuBar = (props) => {
    return (
        <header class="menuBar">
            <img class="logo" src={logo} alt="logo"/>
            <nav>
                <ul class="nav_links">
                    <li><a>Haqqımızda</a></li>
                    <li><a>Necə işləyirik</a></li>
                    <li><a>İxtisaslar</a></li>
                    <li><a>istəklər</a></li>
                </ul>
            </nav>
            <div>
                <a className="button"><WhiteButton name="DAXIL OL"/></a>
                <a className="button"><SignInButton /></a>
            </div>
            <img class="search_icon" src={searchIcon} alt="s"/>
        </header>
    )
}

export default MenuBar;