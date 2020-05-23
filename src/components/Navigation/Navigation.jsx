import React from 'react'
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = (props) => {
    return (
        <nav className={style.menu}>
            <div>
                <NavLink to='/films' className={style.item} href="#">Films</NavLink>
            </div>

            <div>
                <NavLink to='/favorite' className={style.item} href="#">Favorite</NavLink>
            </div>

            <div>
                <NavLink to='/companies' className={style.item} href="#">Companies</NavLink>
            </div>

            <div>
                <NavLink to='about' className={style.item} href="#">About me</NavLink>
            </div>
        </nav>
    )
}