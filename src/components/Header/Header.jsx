import React from "react";
import { Link, Outlet } from 'react-router-dom';
import css from './Header.module.css';



function Header  ()  {
    return (
        <header>
            <nav>
                <ul className={css.item}>
                    <li className={css.list}>
                        <Link className={css.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={css.link} to="/movies">Movies</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
};
export default Header