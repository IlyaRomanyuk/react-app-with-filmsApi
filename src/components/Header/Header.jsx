import React from 'react'
import style from './Header.module.css';
import { Navigation } from '../Navigation/Navigation';

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.headerImg}>
                <img className={style.headerImage} src="https://cdn.dribbble.com/users/2130717/screenshots/4222891/film.png"/>
            </div>
            <Navigation />
        </div>
    )
}

export default Header;