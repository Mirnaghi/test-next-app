import React from 'react';
import './MenuBar.css';
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search-icon.png';
import SignInButton from '../UI/Buttons/SignInButton/SignInButton';
import WhiteButton from '../UI/Buttons/WhiteButton/WhiteButton';
import { Link , NavLink} from 'react-router-dom';

const MenuBar = (props) => {
    return (
        <header class="menuBar">
            <NavLink class="logo" to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
            <nav>
                <ul className="nav_links">
                    <li className="nav_link"><Link to='/about'>Haqqımızda</Link></li>
                    <li className="nav_link"><Link to='/how-works'>Necə işləyirik</Link></li>
                    <li className="nav_link"><Link to='/specialties'>İxtisaslar</Link></li>
                    <li className="nav_link"><Link to='/wishes'>istəklər</Link></li>
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